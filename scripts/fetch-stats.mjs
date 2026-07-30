import { readFile, writeFile } from 'node:fs/promises';

const fileUrl = new URL('../src/data/statistics.json', import.meta.url);
const current = JSON.parse(await readFile(fileUrl, 'utf8'));
const packageIdent = current.package;
const stats = ['total-years-lived', 'lifespan-years', 'total-rebirths'];
const controller = new AbortController();
const timeout = setTimeout(() => controller.abort(), 15_000);

try {
  const entries = {};
  for (const stat of stats) {
    const url = new URL(
      `https://public.facepunch.com/sbox/package/${packageIdent}/leaderboard/${stat}/`,
    );
    url.searchParams.set('count', '10');
    url.searchParams.set('aggregation', 'last');
    url.searchParams.set('sort', 'desc');
    const response = await fetch(url, {
      headers: { 'user-agent': 'legacy-wiki/1.0 (+https://github.com/TheLime1/legacy-wiki)' },
      signal: controller.signal,
    });
    if (!response.ok) throw new Error(`${stat}: HTTP ${response.status}`);
    const payload = await response.json();
    entries[stat] = (payload.Entries ?? []).map((entry) => ({
      rank: entry.Rank,
      value: entry.Value,
      steamId: String(entry.SteamId),
      displayName: entry.DisplayName,
      countryCode: entry.CountryCode || null,
      timestamp: entry.Timestamp,
    }));
  }
  current.retrievedAt = new Date().toISOString();
  current.stale = false;
  current.leaderboards.entries = entries;
  await writeFile(fileUrl, `${JSON.stringify(current, null, 2)}\n`);
  console.log(`Refreshed ${stats.length} public Legacy leaderboards.`);
} finally {
  clearTimeout(timeout);
}
