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
const githubTarget = process.env.LEGACY_WIKI_TARGET === 'github';
const buildSite = githubTarget ? githubSite : canonicalSite;
const buildBase = githubTarget ? githubBase : canonicalBase;

export default defineConfig({
  site: buildSite,
  base: buildBase,
  outDir: githubTarget ? './dist-github' : './dist-canonical',
  trailingSlash: 'always',
  integrations: [
    starlight({
      disable404Route: true,
      title: 'Legacy Wiki',
      description: 'Verified guides, systems, formulas, and reference data for Legacy.',
      favicon: '/favicon.svg',
      logo: {
        src: './src/assets/legacy-logo.png',
        alt: 'Legacy',
        replacesTitle: false,
      },
      customCss: ['./src/styles/custom.css', 'katex/dist/katex.min.css'],
      lastUpdated: true,
      social: [
        { icon: 'github', label: 'Wiki source', href: 'https://github.com/TheLime1/legacy-wiki' },
      ],
      editLink: {
        baseUrl: 'https://github.com/TheLime1/legacy-wiki/edit/main/',
      },
      head: [
        {
          tag: 'meta',
          attrs: { property: 'og:image', content: `${canonicalSite}${canonicalBase}/og-image.svg` },
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
            { label: 'Controls', link: '/controls/' },
            { label: 'Interface', link: '/interface/' },
          ],
        },
        {
          label: 'Game Systems',
          items: [
            { label: 'Core Gameplay Loop', link: '/systems/core-loop/' },
            { label: 'Classes', link: '/systems/classes/' },
            { label: 'Abilities', link: '/systems/abilities/' },
            { label: 'Possessions', link: '/systems/possessions/' },
            { label: 'Unlocks & Milestones', link: '/systems/unlocks/' },
            { label: 'Rebirths', link: '/systems/rebirths/' },
            { label: 'Automation', link: '/systems/automation/' },
            { label: 'Empire & Leaderboards', link: '/systems/empire/' },
            { label: 'Achievements', link: '/systems/achievements/' },
          ],
        },
        {
          label: 'Reference',
          items: [
            { label: 'Formulas', link: '/reference/formulas/' },
            { label: 'Game Statistics', link: '/reference/statistics/' },
            { label: 'Saving & Persistence', link: '/reference/saving/' },
            { label: 'Technical Reference', link: '/reference/technical/' },
            { label: 'Glossary', link: '/reference/glossary/' },
          ],
        },
        {
          label: 'Help',
          items: [
            { label: 'Strategy', link: '/strategy/' },
            { label: 'FAQ', link: '/faq/' },
            { label: 'Troubleshooting', link: '/troubleshooting/' },
            { label: 'Update History', link: '/updates/' },
            { label: 'Credits & Sources', link: '/credits/' },
            { label: 'Contribute', link: '/contributing/' },
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
