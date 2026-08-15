import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const canonicalSite = 'https://limestudio.dev';
const canonicalBase = '/games/legacy/wiki';
const githubSite = 'https://thelime1.github.io';
const githubBase = '/legacy-wiki';
const cloudflareSite = 'https://wiki.limestudio.dev';
const cloudflareBase = '/legacy';
const buildTarget = process.env.LEGACY_WIKI_TARGET ?? 'canonical';
const buildTargets = {
  canonical: {
    site: canonicalSite,
    base: canonicalBase,
    outDir: './dist-canonical',
  },
  github: {
    site: githubSite,
    base: githubBase,
    outDir: './dist-github',
  },
  cloudflare: {
    site: cloudflareSite,
    base: cloudflareBase,
    outDir: './dist-cloudflare/legacy',
  },
};
const target = buildTargets[buildTarget];

if (!target) {
  throw new Error(`Unknown LEGACY_WIKI_TARGET: ${buildTarget}`);
}

export default defineConfig({
  site: target.site,
  base: target.base,
  outDir: target.outDir,
  trailingSlash: 'always',
  integrations: [
    starlight({
      disable404Route: true,
      title: 'Legacy Wiki',
      description: 'Guides, systems, formulas, and strategy for Legacy players.',
      favicon: '/favicon.svg',
      logo: {
        src: './src/assets/legacy-logo.png',
        alt: 'Legacy',
        replacesTitle: false,
      },
      customCss: ['./src/styles/custom.css', 'katex/dist/katex.min.css'],
      lastUpdated: false,
      head: [
        {
          tag: 'meta',
          attrs: { property: 'og:image', content: `${target.site}${target.base}/og-image.svg` },
        },
        {
          tag: 'meta',
          attrs: { name: 'theme-color', content: '#151513' },
        },
      ],
      sidebar: [
        { label: 'Home', link: '/' },
        {
          label: 'Start Here',
          items: [
            { label: 'Getting Started', link: '/getting-started/' },
            { label: 'Beginner Guide', link: '/beginner-guide/' },
            { label: 'Strategy', link: '/strategy/' },
            { label: 'Controls', link: '/controls/' },
            { label: 'Interface', link: '/interface/' },
          ],
        },
        {
          label: 'Game Systems',
          items: [
            { label: 'Eternal Ascension', link: '/systems/eternal-ascension/' },
            { label: 'Core Gameplay Loop', link: '/systems/core-loop/' },
            { label: 'Classes', link: '/systems/classes/' },
            { label: 'Mastery Items', link: '/systems/mastery-items/' },
            { label: 'Abilities', link: '/systems/abilities/' },
            { label: 'Echoes & Resonance', link: '/systems/echoes/' },
            { label: 'Possessions', link: '/systems/possessions/' },
            { label: 'Shop Steward', link: '/systems/shop-steward/' },
            { label: 'Unlocks & Milestones', link: '/systems/unlocks/' },
            { label: 'Rebirths', link: '/systems/rebirths/' },
            { label: 'Evil Perks', link: '/systems/evil-perks/' },
            { label: 'Chronicle', link: '/systems/chronicle/' },
            { label: 'Automation', link: '/systems/automation/' },
            { label: 'Heroic Progression', link: '/systems/heroic/' },
            { label: 'Darkness & Collapse', link: '/systems/darkness/' },
            { label: 'The Metaverse', link: '/systems/metaverse/' },
            { label: 'Empire & Leaderboards', link: '/systems/empire/' },
            { label: 'Achievements', link: '/systems/achievements/' },
          ],
        },
        {
          label: 'Reference',
          items: [
            { label: 'Formulas', link: '/reference/formulas/' },
            { label: 'Saving & Progress', link: '/reference/saving/' },
            { label: 'Glossary', link: '/reference/glossary/' },
          ],
        },
      ],
    }),
    sitemap({
      filter: (page) => !page.endsWith('/404/'),
    }),
  ],
  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    }),
  },
});
