import { readFile, readdir } from 'node:fs/promises';
import { join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = resolve(fileURLToPath(new URL('..', import.meta.url)));
const siteRoots = [
  {
    label: 'canonical',
    root: join(projectRoot, 'pages-artifact', 'games', 'legacy', 'wiki'),
    canonicalOrigin: 'https://limestudio.dev/games/legacy/wiki/',
  },
  {
    label: 'github',
    root: join(projectRoot, 'pages-artifact', 'legacy-wiki'),
    canonicalOrigin: 'https://limestudio.dev/games/legacy/wiki/',
  },
  {
    label: 'cloudflare',
    root: join(projectRoot, 'dist-cloudflare', 'legacy'),
    canonicalOrigin: 'https://wiki.limestudio.dev/legacy/',
  },
];

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) =>
      entry.isDirectory() ? walk(join(directory, entry.name)) : join(directory, entry.name),
    ),
  );
  return nested.flat();
}

function count(html, pattern) {
  return [...html.matchAll(pattern)].length;
}

function textContent(html) {
  return html
    .replace(/<svg\b[\s\S]*?<\/svg>/gi, '')
    .replace(/<[^>]+>/g, '')
    .replace(/&[a-z0-9#]+;/gi, ' ')
    .trim();
}

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const failures = [];
let pageCount = 0;

for (const { label, root, canonicalOrigin } of siteRoots) {
  const htmlFiles = (await walk(root)).filter((file) => file.endsWith('.html'));
  pageCount += htmlFiles.length;

  for (const file of htmlFiles) {
    const name = `${label}/${relative(root, file)}`;
    const html = await readFile(file, 'utf8');
    const is404 = file.endsWith(`${sep}404.html`);

    if (!/<html\b[^>]*\blang=["']en["']/i.test(html)) failures.push(`${name}: missing lang=en`);
    if (!/<meta\b[^>]*\bname=["']viewport["']/i.test(html)) {
      failures.push(`${name}: missing viewport metadata`);
    }
    if (count(html, /<title\b/gi) !== 1) failures.push(`${name}: expected exactly one title`);
    if (count(html, /<main\b/gi) !== 1) failures.push(`${name}: expected exactly one main region`);
    if (count(html, /<h1\b/gi) !== 1) failures.push(`${name}: expected exactly one h1`);

    if (!is404) {
      if (
        !new RegExp(
          `<link\\b[^>]*\\brel=["']canonical["'][^>]*\\bhref=["']${escapeRegex(canonicalOrigin)}`,
          'i',
        ).test(html)
      ) {
        failures.push(`${name}: missing preferred canonical URL`);
      }
      if (!/class=["'][^"']*\bsl-skip-link\b/i.test(html)) {
        failures.push(`${name}: missing skip link`);
      }
    }

    for (const image of html.matchAll(/<img\b[^>]*>/gi)) {
      if (!/\balt(?:\s*=\s*["'][^"']*["']|\s|>)/i.test(image[0])) {
        failures.push(`${name}: image has no alt attribute`);
      }
    }

    for (const button of html.matchAll(/<button\b([^>]*)>([\s\S]*?)<\/button>/gi)) {
      const attributes = button[1];
      if (!/\baria-label\s*=\s*["'][^"']+["']/i.test(attributes) && !textContent(button[2])) {
        failures.push(`${name}: button has no accessible name`);
      }
    }

    const ids = [...html.matchAll(/\bid=["']([^"']+)["']/gi)].map((match) => match[1]);
    const duplicateIds = [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];
    if (duplicateIds.length) failures.push(`${name}: duplicate IDs ${duplicateIds.join(', ')}`);
  }
}

if (failures.length) throw new Error(`HTML validation failed:\n${failures.join('\n')}`);
console.log(
  `Validated landmarks, headings, metadata, images, controls, and IDs on ${pageCount} page copies.`,
);
