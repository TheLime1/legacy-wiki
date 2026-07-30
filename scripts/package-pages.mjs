import { cp, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const canonicalDist = join(projectRoot, 'dist-canonical');
const githubDist = join(projectRoot, 'dist-github');
const artifactRoot = join(projectRoot, 'pages-artifact');
const canonicalRoot = join(artifactRoot, 'games', 'legacy', 'wiki');
const githubAliasRoot = join(artifactRoot, 'legacy-wiki');
const githubOrigin = 'https://thelime1.github.io/legacy-wiki';
const canonicalOrigin = 'https://limestudio.dev/games/legacy/wiki';

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) =>
      entry.isDirectory() ? walk(join(directory, entry.name)) : join(directory, entry.name),
    ),
  );
  return nested.flat();
}

// The GitHub-hosted copy is an alternate route. Point its canonical and social
// metadata to the preferred limestudio.dev path to avoid duplicate indexing.
for (const file of (await walk(githubDist)).filter(
  (entry) => entry.endsWith('.html') || entry.endsWith('.xml'),
)) {
  const content = await readFile(file, 'utf8');
  await writeFile(file, content.replaceAll(githubOrigin, canonicalOrigin));
}

await rm(artifactRoot, { recursive: true, force: true });
await mkdir(dirname(canonicalRoot), { recursive: true });
await mkdir(dirname(githubAliasRoot), { recursive: true });

// Artifact root is mounted at /legacy-wiki/ on the standard GitHub project URL.
await cp(githubDist, artifactRoot, { recursive: true });
// Keep the same path working after a custom apex domain is attached.
await cp(githubDist, githubAliasRoot, { recursive: true });
// Publish the preferred custom-domain route as a physical nested directory.
await cp(canonicalDist, canonicalRoot, { recursive: true });

console.log('Packaged GitHub Pages artifact for /legacy-wiki/ and /games/legacy/wiki/.');
