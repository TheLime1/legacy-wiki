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
        es: { label: 'Español', lang: 'es' },
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
        {
          label: 'Home',
          translations: { es: 'Inicio', fr: 'Accueil', ru: 'Главная' },
          link: '/',
        },
        {
          label: 'Start Here',
          translations: { es: 'Primeros pasos', fr: 'Bien débuter', ru: 'Начало игры' },
          items: [
            {
              label: 'Getting Started',
              translations: { es: 'Cómo empezar', fr: 'Premiers pas', ru: 'Первые шаги' },
              link: '/getting-started/',
            },
            {
              label: 'Beginner Guide',
              translations: {
                es: 'Guía para principiantes',
                fr: 'Guide du débutant',
                ru: 'Руководство новичка',
              },
              link: '/beginner-guide/',
            },
            {
              label: 'Strategy',
              translations: { es: 'Estrategia', fr: 'Stratégie', ru: 'Стратегия' },
              link: '/strategy/',
            },
            {
              label: 'Controls',
              translations: { es: 'Controles', fr: 'Commandes', ru: 'Управление' },
              link: '/controls/',
            },
            {
              label: 'Interface',
              translations: { es: 'Interfaz', fr: 'Interface', ru: 'Интерфейс' },
              link: '/interface/',
            },
          ],
        },
        {
          label: 'Game Systems',
          translations: { es: 'Sistemas de juego', fr: 'Systèmes de jeu', ru: 'Игровые системы' },
          items: [
            {
              label: 'Eternal Ascension',
              translations: {
                es: 'Ascensión eterna',
                fr: 'Ascension éternelle',
                ru: 'Вечное вознесение',
              },
              link: '/systems/eternal-ascension/',
            },
            {
              label: 'Core Gameplay Loop',
              translations: { es: 'Bucle de juego', fr: 'Boucle de jeu', ru: 'Игровой цикл' },
              link: '/systems/core-loop/',
            },
            {
              label: 'Classes',
              translations: { es: 'Clases', fr: 'Classes', ru: 'Классы' },
              link: '/systems/classes/',
            },
            {
              label: 'Mastery Items',
              translations: {
                es: 'Objetos de maestría',
                fr: 'Objets de maîtrise',
                ru: 'Предметы мастерства',
              },
              link: '/systems/mastery-items/',
            },
            {
              label: 'Abilities',
              translations: { es: 'Habilidades', fr: 'Capacités', ru: 'Способности' },
              link: '/systems/abilities/',
            },
            {
              label: 'Echoes & Resonance',
              translations: {
                es: 'Ecos y resonancia',
                fr: 'Échos et Résonance',
                ru: 'Эхо и Резонанс',
              },
              link: '/systems/echoes/',
            },
            {
              label: 'Possessions',
              translations: { es: 'Posesiones', fr: 'Possessions', ru: 'Имущество' },
              link: '/systems/possessions/',
            },
            {
              label: 'Shop Steward',
              translations: {
                es: 'Administrador de la tienda',
                fr: 'Intendant de boutique',
                ru: 'Управляющий магазином',
              },
              link: '/systems/shop-steward/',
            },
            {
              label: 'Unlocks & Milestones',
              translations: {
                es: 'Desbloqueos e hitos',
                fr: 'Déblocages et jalons',
                ru: 'Разблокировки и вехи',
              },
              link: '/systems/unlocks/',
            },
            {
              label: 'Rebirths',
              translations: { es: 'Renacimientos', fr: 'Renaissances', ru: 'Перерождения' },
              link: '/systems/rebirths/',
            },
            {
              label: 'Evil Perks',
              translations: {
                es: 'Ventajas malignas',
                fr: 'Avantages maléfiques',
                ru: 'Злые улучшения',
              },
              link: '/systems/evil-perks/',
            },
            {
              label: 'Chronicle',
              translations: { es: 'Crónica', fr: 'Chronique', ru: 'Хроника' },
              link: '/systems/chronicle/',
            },
            {
              label: 'Automation',
              translations: {
                es: 'Automatización',
                fr: 'Automatisation',
                ru: 'Автоматизация',
              },
              link: '/systems/automation/',
            },
            {
              label: 'Heroic Progression',
              translations: {
                es: 'Progresión heroica',
                fr: 'Progression héroïque',
                ru: 'Героический прогресс',
              },
              link: '/systems/heroic/',
            },
            {
              label: 'Darkness & Collapse',
              translations: {
                es: 'Oscuridad y Colapso',
                fr: 'Ténèbres et Effondrement',
                ru: 'Тьма и Коллапс',
              },
              link: '/systems/darkness/',
            },
            {
              label: 'The Metaverse',
              translations: { es: 'El Metaverso', fr: 'Le Métavers', ru: 'Метавселенная' },
              link: '/systems/metaverse/',
            },
            {
              label: 'Empire & Leaderboards',
              translations: {
                es: 'Imperio y clasificaciones',
                fr: 'Empire et classements',
                ru: 'Империя и рейтинги',
              },
              link: '/systems/empire/',
            },
            {
              label: 'Achievements',
              translations: { es: 'Logros', fr: 'Succès', ru: 'Достижения' },
              link: '/systems/achievements/',
            },
          ],
        },
        {
          label: 'Reference',
          translations: { es: 'Referencia', fr: 'Référence', ru: 'Справочник' },
          items: [
            {
              label: 'Formulas',
              translations: { es: 'Fórmulas', fr: 'Formules', ru: 'Формулы' },
              link: '/reference/formulas/',
            },
            {
              label: 'Saving & Progress',
              translations: {
                es: 'Guardado y progreso',
                fr: 'Sauvegarde et progression',
                ru: 'Сохранение и прогресс',
              },
              link: '/reference/saving/',
            },
            {
              label: 'Glossary',
              translations: { es: 'Glosario', fr: 'Glossaire', ru: 'Глоссарий' },
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
