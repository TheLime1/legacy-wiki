import { access, readFile, readdir } from 'node:fs/promises';
import { extname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { masteryTierLevels } from '../src/data/formulas.mjs';

const root = fileURLToPath(new URL('..', import.meta.url));
const docsRoot = fileURLToPath(new URL('../src/content/docs/', import.meta.url));
const dataRoot = new URL('../src/data/', import.meta.url);
const required = ['title', 'description', 'category'];
const locales = ['es', 'fr', 'ru'];

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) =>
      entry.isDirectory() ? walk(join(directory, entry.name)) : join(directory, entry.name),
    ),
  );
  return nested.flat();
}

function parseFrontmatter(text, file) {
  if (!text.startsWith('---\n')) throw new Error(`${file}: missing YAML frontmatter`);
  const end = text.indexOf('\n---\n', 4);
  if (end < 0) throw new Error(`${file}: unterminated YAML frontmatter`);
  const yaml = text.slice(4, end);
  const values = new Map();
  let currentList = null;
  for (const rawLine of yaml.split('\n')) {
    const listItem = rawLine.match(/^\s+-\s+(.+)$/);
    if (listItem && currentList) {
      values.get(currentList).push(listItem[1].trim());
      continue;
    }
    const pair = rawLine.match(/^([A-Za-z][A-Za-z0-9]*):\s*(.*)$/);
    if (!pair) continue;
    const [, key, rawValue] = pair;
    if (rawValue === '') {
      values.set(key, []);
      currentList = key;
    } else {
      values.set(key, rawValue.replace(/^['"]|['"]$/g, ''));
      currentList = null;
    }
  }
  return values;
}

const docFiles = (await walk(docsRoot))
  .filter((file) => ['.md', '.mdx'].includes(extname(file)))
  .sort();

if (docFiles.length < 15)
  throw new Error(`Expected at least 15 useful pages; found ${docFiles.length}`);

for (const file of docFiles) {
  const text = await readFile(file, 'utf8');
  const meta = parseFrontmatter(text, relative(root, file));
  for (const key of required) {
    if (!meta.has(key) || meta.get(key) === '') throw new Error(`${file}: missing ${key}`);
  }
}

const routeFor = (file) =>
  relative(docsRoot, file)
    .replaceAll('\\', '/')
    .replace(/\.(?:md|mdx)$/, '');
const fileByRoute = new Map(docFiles.map((file) => [routeFor(file), file]));
const englishRoutes = docFiles
  .map(routeFor)
  .filter((route) => !locales.some((locale) => route.startsWith(`${locale}/`)))
  .sort();
for (const locale of locales) {
  const localizedRoutes = docFiles
    .map(routeFor)
    .filter((route) => route.startsWith(`${locale}/`))
    .map((route) => route.slice(locale.length + 1))
    .sort();
  if (JSON.stringify(localizedRoutes) !== JSON.stringify(englishRoutes)) {
    throw new Error(`${locale}: localized routes do not match the English wiki`);
  }
}

function bodyOf(text) {
  const end = text.indexOf('\n---\n', 4);
  return end < 0 ? text : text.slice(end + 5);
}

function countColumns(line) {
  return line.split(/(?<!\\)\|/).length - 2;
}

function blockKind(block) {
  const firstLine = block.trimStart().split('\n', 1)[0];
  if (/^import\s/.test(firstLine)) return 'import';
  if (/^#{1,6}\s/.test(firstLine)) return 'heading';
  if (/^\|/.test(firstLine)) return 'table';
  if (/^\$\$/.test(firstLine)) return 'math';
  if (/^:::+/.test(firstLine)) return 'directive';
  if (/^<(?:[A-Z]|\/)/.test(firstLine)) return 'component';
  if (/^(?:[-*+] |\d+\. )/.test(firstLine)) return 'list';
  return 'paragraph';
}

function structureOf(text) {
  const body = bodyOf(text);
  const lines = body.split('\n');
  const links = [...body.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)];
  const numericText = body.replace(/(?<=\d)[\s\u00a0\u202f](?=\d{3}\b)/g, '');
  return {
    blockKinds: body
      .trim()
      .split(/\n\s*\n/)
      .map(blockKind),
    headingDepths: lines.map((line) => line.match(/^(#{1,6})\s+/)?.[1].length).filter(Boolean),
    tableColumns: lines.filter((line) => /^\s*\|.*\|\s*$/.test(line)).map(countColumns),
    listKinds: lines
      .map((line) => line.match(/^\s*((?:[-*+])|(?:\d+\.))\s+/)?.[1])
      .filter(Boolean)
      .map((marker) => (/\d/.test(marker) ? 'ordered' : 'unordered')),
    components: [...body.matchAll(/<([A-Z][A-Za-z0-9]*)\b/g)].map((match) => match[1]).sort(),
    linkTargets: links.map((match) => match[1]),
    inlineCode: [...body.matchAll(/(?<!`)`([^`\n]+)`(?!`)/g)].map((match) => match[1]),
    displayMath: [...body.matchAll(/^\$\$\s*([\s\S]*?)\s*^\$\$/gm)].map((match) =>
      match[1].replace(/\s+/g, ''),
    ),
    numbers: [...numericText.matchAll(/\d+(?:[.,]\d+)*/g)].map((match) =>
      match[0].replace(/[,.]/g, ''),
    ),
    displayMathDelimiters: [...body.matchAll(/^\$\$/gm)].length,
    directives: [...body.matchAll(/^:::+([a-z-]+)?/gm)].map((match) => match[1] ?? '').sort(),
    letterCount: [...body.matchAll(/\p{L}/gu)].length,
  };
}

function assertSameStructure(route, locale, english, localized) {
  for (const key of [
    'blockKinds',
    'headingDepths',
    'tableColumns',
    'listKinds',
    'components',
    'linkTargets',
    'inlineCode',
    'displayMath',
    'numbers',
    'displayMathDelimiters',
    'directives',
  ]) {
    if (JSON.stringify(localized[key]) !== JSON.stringify(english[key])) {
      throw new Error(`${locale}/${route}: ${key} do not match the English page`);
    }
  }
  if (localized.letterCount < english.letterCount * 0.6) {
    throw new Error(
      `${locale}/${route}: localized body is suspiciously short (${localized.letterCount} letters versus ${english.letterCount} in English)`,
    );
  }
}

for (const route of englishRoutes) {
  const english = structureOf(await readFile(fileByRoute.get(route), 'utf8'));
  for (const locale of locales) {
    const localized = structureOf(await readFile(fileByRoute.get(`${locale}/${route}`), 'utf8'));
    assertSameStructure(route, locale, english, localized);
  }
}

const catalog = JSON.parse(await readFile(new URL('catalog.json', dataRoot), 'utf8'));
const mastery = JSON.parse(await readFile(new URL('mastery-items.json', dataRoot), 'utf8'));
const mechanics = JSON.parse(await readFile(new URL('mechanics.json', dataRoot), 'utf8'));

const countChecks = [
  ['classes', catalog.classes.length, 44],
  ['abilities', catalog.abilities.length, 49],
  ['properties', catalog.properties.length, 30],
  ['items', catalog.items.length, 24],
];
for (const [label, actual, expected] of countChecks) {
  if (actual !== expected) throw new Error(`${label}: expected ${expected}, found ${actual}`);
}

const ids = [
  ...catalog.classes.map((entry) => entry[0]),
  ...catalog.abilities.map((entry) => entry[0]),
  ...catalog.properties.map((entry) => entry[0]),
  ...catalog.items.map((entry) => entry[0]),
];
if (new Set(ids).size !== ids.length) throw new Error('Catalog contains duplicate IDs');
if (mechanics.counts.achievements !== 40) throw new Error('Achievement count must be 40');

if (mastery.categories.length !== 7)
  throw new Error('Mastery catalog must contain seven categories');
if (mastery.tiers.length !== 6) throw new Error('Mastery catalog must contain six tiers');
if (mastery.items.length !== 44) throw new Error('Mastery catalog must contain 44 items');

const masteryIds = mastery.items.map((item) => item.id);
const masteryIcons = mastery.items.map((item) => item.icon);
const masteryJobs = mastery.items.map((item) => item.job);
if (new Set(masteryIds).size !== masteryIds.length)
  throw new Error('Mastery item IDs must be unique');
if (new Set(masteryIcons).size !== masteryIcons.length)
  throw new Error('Mastery source icons must be unique');
if (new Set(masteryJobs).size !== masteryJobs.length)
  throw new Error('Mastery items must target unique classes');

const classIds = catalog.classes.map((entry) => entry[0]).sort();
if (JSON.stringify([...masteryIds].sort()) !== JSON.stringify(classIds))
  throw new Error('Mastery catalog must contain exactly one item for every class ID');

const categoryIds = new Set(mastery.categories.map((category) => category.id));
for (const item of mastery.items) {
  if (!categoryIds.has(item.category)) throw new Error(`${item.id}: invalid mastery category`);
  if (!['related', 'global'].includes(item.secondaryScale))
    throw new Error(`${item.id}: invalid secondary scale`);
  if (!Number.isInteger(item.routeLevel) || item.routeLevel < 1)
    throw new Error(`${item.id}: route level must be a positive integer`);
  if (
    item.thresholds.length !== 6 ||
    item.thresholds.some((value, index) =>
      index === 0 ? value < 1 : value <= item.thresholds[index - 1],
    )
  ) {
    throw new Error(`${item.id}: mastery thresholds must contain six increasing levels`);
  }
  if (JSON.stringify(item.thresholds) !== JSON.stringify(masteryTierLevels(item.routeLevel)))
    throw new Error(`${item.id}: mastery thresholds do not match its route-level formula`);
  await access(new URL(`../public/mastery/${item.id}.png`, import.meta.url));
}

if (mechanics.counts.masteryItems !== mastery.items.length)
  throw new Error('Mechanics mastery item count does not match the catalog');

console.log(
  `Validated ${docFiles.length} pages, ${ids.length} base catalog entries, and ${mastery.items.length} mastery items.`,
);
