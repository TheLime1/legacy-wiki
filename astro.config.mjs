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
      locales: {
        root: { label: 'English', lang: 'en' },
        fr: { label: 'Français', lang: 'fr' },
        ru: { label: 'Русский', lang: 'ru' },
      },
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
        { label: 'Home', translations: { fr: 'Accueil', ru: 'Главная' }, link: '/' },
        {
          label: 'Start Here',
          translations: { fr: 'Bien débuter', ru: 'Начало игры' },
          items: [
            {
              label: 'Getting Started',
              translations: { fr: 'Premiers pas', ru: 'Первые шаги' },
              link: '/getting-started/',
            },
            {
              label: 'Beginner Guide',
              translations: { fr: 'Guide du débutant', ru: 'Руководство новичка' },
              link: '/beginner-guide/',
            },
            {
              label: 'Strategy',
              translations: { fr: 'Stratégie', ru: 'Стратегия' },
              link: '/strategy/',
            },
            {
              label: 'Controls',
              translations: { fr: 'Commandes', ru: 'Управление' },
              link: '/controls/',
            },
            {
              label: 'Interface',
              translations: { fr: 'Interface', ru: 'Интерфейс' },
              link: '/interface/',
            },
          ],
        },
        {
          label: 'Game Systems',
          translations: { fr: 'Systèmes de jeu', ru: 'Игровые системы' },
          items: [
            {
              label: 'Eternal Ascension',
              translations: { fr: 'Ascension éternelle', ru: 'Вечное вознесение' },
              link: '/systems/eternal-ascension/',
            },
            {
              label: 'Core Gameplay Loop',
              translations: { fr: 'Boucle de jeu', ru: 'Игровой цикл' },
              link: '/systems/core-loop/',
            },
            {
              label: 'Classes',
              translations: { fr: 'Classes', ru: 'Классы' },
              link: '/systems/classes/',
            },
            {
              label: 'Mastery Items',
              translations: { fr: 'Objets de maîtrise', ru: 'Предметы мастерства' },
              link: '/systems/mastery-items/',
            },
            {
              label: 'Abilities',
              translations: { fr: 'Capacités', ru: 'Способности' },
              link: '/systems/abilities/',
            },
            {
              label: 'Echoes & Resonance',
              translations: { fr: 'Échos et Résonance', ru: 'Эхо и Резонанс' },
              link: '/systems/echoes/',
            },
            {
              label: 'Possessions',
              translations: { fr: 'Possessions', ru: 'Имущество' },
              link: '/systems/possessions/',
            },
            {
              label: 'Shop Steward',
              translations: { fr: 'Intendant de boutique', ru: 'Управляющий магазином' },
              link: '/systems/shop-steward/',
            },
            {
              label: 'Unlocks & Milestones',
              translations: { fr: 'Déblocages et jalons', ru: 'Разблокировки и вехи' },
              link: '/systems/unlocks/',
            },
            {
              label: 'Rebirths',
              translations: { fr: 'Renaissances', ru: 'Перерождения' },
              link: '/systems/rebirths/',
            },
            {
              label: 'Evil Perks',
              translations: { fr: 'Avantages maléfiques', ru: 'Злые улучшения' },
              link: '/systems/evil-perks/',
            },
            {
              label: 'Chronicle',
              translations: { fr: 'Chronique', ru: 'Хроника' },
              link: '/systems/chronicle/',
            },
            {
              label: 'Automation',
              translations: { fr: 'Automatisation', ru: 'Автоматизация' },
              link: '/systems/automation/',
            },
            {
              label: 'Heroic Progression',
              translations: { fr: 'Progression héroïque', ru: 'Героический прогресс' },
              link: '/systems/heroic/',
            },
            {
              label: 'Darkness & Collapse',
              translations: { fr: 'Ténèbres et Effondrement', ru: 'Тьма и Коллапс' },
              link: '/systems/darkness/',
            },
            {
              label: 'The Metaverse',
              translations: { fr: 'Le Métavers', ru: 'Метавселенная' },
              link: '/systems/metaverse/',
            },
            {
              label: 'Empire & Leaderboards',
              translations: { fr: 'Empire et classements', ru: 'Империя и рейтинги' },
              link: '/systems/empire/',
            },
            {
              label: 'Achievements',
              translations: { fr: 'Succès', ru: 'Достижения' },
              link: '/systems/achievements/',
            },
          ],
        },
        {
          label: 'Reference',
          translations: { fr: 'Référence', ru: 'Справочник' },
          items: [
            {
              label: 'Formulas',
              translations: { fr: 'Formules', ru: 'Формулы' },
              link: '/reference/formulas/',
            },
            {
              label: 'Saving & Progress',
              translations: { fr: 'Sauvegarde et progression', ru: 'Сохранение и прогресс' },
              link: '/reference/saving/',
            },
            {
              label: 'Glossary',
              translations: { fr: 'Glossaire', ru: 'Глоссарий' },
              link: '/reference/glossary/',
            },
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
