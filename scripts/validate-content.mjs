import { readFile, readdir } from 'node:fs/promises';
import { extname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const docsRoot = fileURLToPath(new URL('../src/content/docs/', import.meta.url));
const dataRoot = new URL('../src/data/', import.meta.url);
const required = ['title', 'description', 'category'];

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

const catalog = JSON.parse(await readFile(new URL('catalog.json', dataRoot), 'utf8'));
const mechanics = JSON.parse(await readFile(new URL('mechanics.json', dataRoot), 'utf8'));

const countChecks = [
  ['classes', catalog.classes.length, 35],
  ['abilities', catalog.abilities.length, 39],
  ['properties', catalog.properties.length, 16],
  ['items', catalog.items.length, 18],
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
console.log(`Validated ${docFiles.length} pages and ${ids.length} catalog entries.`);
