import { access, readFile, readdir } from 'node:fs/promises';
import { dirname, extname, join, normalize, relative, resolve } from 'node:path';

const projectRoot = resolve(new URL('..', import.meta.url).pathname);
const canonicalDist = join(projectRoot, 'dist-canonical');
const githubDist = join(projectRoot, 'dist-github');
const cloudflareRoot = join(projectRoot, 'dist-cloudflare');
const cloudflareDist = join(cloudflareRoot, 'legacy');
const artifactRoot = join(projectRoot, 'pages-artifact');
const canonicalBase = '/games/legacy/wiki';
const githubBase = '/legacy-wiki';
const cloudflareBase = '/legacy';

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) =>
      entry.isDirectory() ? walk(join(directory, entry.name)) : join(directory, entry.name),
    ),
  );
  return nested.flat();
}

function candidates(path) {
  if (extname(path)) return [path];
  return [path, join(path, 'index.html'), `${path}.html`];
}

async function existsAny(paths) {
  for (const path of paths) {
    try {
      await access(path);
      return true;
    } catch {}
  }
  return false;
}

async function validate(root, absoluteRoot, base, stripBase) {
  const htmlFiles = (await walk(root)).filter((file) => file.endsWith('.html'));
  const failures = [];
  const pattern = /(?:href|src)=["']([^"'#]+)(?:#[^"']*)?["']/g;

  for (const htmlFile of htmlFiles) {
    const html = await readFile(htmlFile, 'utf8');
    for (const match of html.matchAll(pattern)) {
      const target = match[1];
      if (/^(?:https?:|mailto:|tel:|data:|avatar:|javascript:)/.test(target)) continue;
      let resolved;
      if (target.startsWith('/')) {
        if (!target.startsWith(`${base}/`) && target !== `${base}`) {
          failures.push(`${relative(root, htmlFile)}: escaped base path ${target}`);
          continue;
        }
        resolved = join(absoluteRoot, target.slice(stripBase ? base.length : 1));
      } else {
        resolved = normalize(join(dirname(htmlFile), target));
      }
      if (!(await existsAny(candidates(resolved)))) {
        failures.push(`${relative(root, htmlFile)}: missing ${target}`);
      }
    }
  }

  const pagefindFiles = (await walk(root)).filter((file) => file.includes('/pagefind/'));
  if (pagefindFiles.length === 0) failures.push(`${base}: Pagefind index was not generated`);
  if (failures.length) throw new Error(`Link validation failed:\n${failures.join('\n')}`);

  return { html: htmlFiles.length, pagefind: pagefindFiles.length };
}

const results = await Promise.all([
  validate(canonicalDist, canonicalDist, canonicalBase, true),
  validate(githubDist, githubDist, githubBase, true),
  validate(cloudflareDist, cloudflareRoot, cloudflareBase, false),
  validate(join(artifactRoot, canonicalBase), artifactRoot, canonicalBase, false),
  validate(join(artifactRoot, githubBase), artifactRoot, githubBase, false),
]);
console.log(
  `Validated ${results.reduce((sum, result) => sum + result.html, 0)} HTML copies and ${results.reduce((sum, result) => sum + result.pagefind, 0)} Pagefind files.`,
);
