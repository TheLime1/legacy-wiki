import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { join, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const artifactRoot = resolve(fileURLToPath(new URL('../pages-artifact/', import.meta.url)));
const cloudflareRoot = resolve(fileURLToPath(new URL('../dist-cloudflare/', import.meta.url)));

const server = createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://127.0.0.1').pathname);
    const cloudflareRequest = pathname.startsWith('/__cloudflare/');
    const root = cloudflareRequest ? cloudflareRoot : artifactRoot;
    const relativePath = cloudflareRequest
      ? pathname.slice('/__cloudflare/'.length)
      : pathname.slice(1);
    let file = resolve(join(root, relativePath));
    if (file !== root && !file.startsWith(`${root}${sep}`)) {
      response.writeHead(403).end();
      return;
    }
    if ((await stat(file)).isDirectory()) file = join(file, 'index.html');
    const body = await readFile(file);
    response.writeHead(200).end(body);
  } catch {
    response.writeHead(404).end();
  }
});

await new Promise((resolveListen) => server.listen(0, '127.0.0.1', resolveListen));
const address = server.address();
if (!address || typeof address === 'string') throw new Error('Could not start smoke server');
const origin = `http://127.0.0.1:${address.port}`;

try {
  const checks = [
    ['/legacy-wiki/', 'Legacy Wiki'],
    ['/legacy-wiki/reference/formulas/', 'Class income'],
    ['/legacy-wiki/systems/mastery-items/', 'Weathered Alms Cup'],
    ['/legacy-wiki/pagefind/pagefind-entry.json', '"languages"'],
    ['/games/legacy/wiki/', 'Legacy Wiki'],
    ['/games/legacy/wiki/reference/formulas/', 'Class income'],
    ['/games/legacy/wiki/systems/mastery-items/', 'Weathered Alms Cup'],
    ['/games/legacy/wiki/pagefind/pagefind-entry.json', '"languages"'],
    ['/__cloudflare/legacy/', 'Legacy Wiki'],
    ['/__cloudflare/legacy/reference/formulas/', 'Class income'],
    ['/__cloudflare/legacy/systems/mastery-items/', 'Weathered Alms Cup'],
    ['/__cloudflare/legacy/pagefind/pagefind-entry.json', '"languages"'],
    ['/404.html', 'Page not found'],
  ];

  for (const [path, expected] of checks) {
    const response = await fetch(`${origin}${path}`);
    const body = await response.text();
    if (!response.ok || !body.includes(expected)) {
      throw new Error(`${path}: expected HTTP 200 containing ${JSON.stringify(expected)}`);
    }
  }

  console.log(`Smoke-tested ${checks.length} GitHub, canonical, and Cloudflare routes.`);
} finally {
  server.close();
}
