import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { join, resolve, sep } from 'node:path';

const artifactRoot = resolve(new URL('../pages-artifact/', import.meta.url).pathname);

const server = createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://127.0.0.1').pathname);
    let file = resolve(join(artifactRoot, pathname.slice(1)));
    if (file !== artifactRoot && !file.startsWith(`${artifactRoot}${sep}`)) {
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
    ['/legacy-wiki/pagefind/pagefind-entry.json', '"languages"'],
    ['/games/legacy/wiki/', 'Legacy Wiki'],
    ['/games/legacy/wiki/reference/formulas/', 'Class income'],
    ['/games/legacy/wiki/pagefind/pagefind-entry.json', '"languages"'],
    ['/404.html', 'Page not found'],
  ];

  for (const [path, expected] of checks) {
    const response = await fetch(`${origin}${path}`);
    const body = await response.text();
    if (!response.ok || !body.includes(expected)) {
      throw new Error(`${path}: expected HTTP 200 containing ${JSON.stringify(expected)}`);
    }
  }

  console.log(`Smoke-tested ${checks.length} GitHub and canonical artifact routes.`);
} finally {
  server.close();
}
