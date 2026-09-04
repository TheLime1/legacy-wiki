import fr from './localization/fr.json';
import ru from './localization/ru.json';

export type WikiLocale = 'en' | 'fr' | 'ru';

const catalogs: Record<Exclude<WikiLocale, 'en'>, Record<string, string>> = { fr, ru };

export function localeCode(locale: WikiLocale): string {
  return locale === 'fr' ? 'fr-FR' : locale === 'ru' ? 'ru-RU' : 'en-GB';
}

export function gameText(value: string, locale: WikiLocale): string {
  if (locale === 'en') return value;
  const catalog = catalogs[locale];
  if (catalog[value]) return catalog[value];

  let translated = value;
  const replacements = Object.entries(catalog)
    .filter(
      ([key, replacement]) => key.length >= 4 && key !== replacement && translated.includes(key),
    )
    .sort(([a], [b]) => b.length - a.length);
  for (const [key, replacement] of replacements)
    translated = translated.replaceAll(key, replacement);

  const words: Array<[RegExp, string]> =
    locale === 'fr'
      ? [
          [/Available immediately/g, 'Disponible immédiatement'],
          [/ level /g, ' niveau '],
          [/ and /g, ' et '],
          [/ total /g, ' au total '],
          [/Daily expenses/g, 'Dépenses quotidiennes'],
          [/Class XP/g, 'XP de classe'],
          [/Ability XP/g, 'XP de capacité'],
        ]
      : [
          [/Available immediately/g, 'Доступно сразу'],
          [/ level /g, ' уровень '],
          [/ and /g, ' и '],
          [/ total /g, ' всего '],
          [/Daily expenses/g, 'Ежедневные расходы'],
          [/Class XP/g, 'Опыт класса'],
          [/Ability XP/g, 'Опыт способности'],
        ];
  for (const [pattern, replacement] of words) translated = translated.replace(pattern, replacement);
  return translated;
}

export const componentText = {
  en: {
    classCatalog: 'Legacy class catalog',
    abilityCatalog: 'Legacy ability catalog',
    propertyCatalog: 'Legacy property catalog',
    possessionCatalog: 'Legacy possession catalog',
    class: 'Class',
    ability: 'Ability',
    property: 'Property',
    item: 'Item',
    group: 'Group',
    baseXp: 'Base max XP',
    copperDay: 'Base copper/day',
    unlock: 'Unlock',
    affects: 'Affects',
    formula: 'Formula',
    coefficient: 'Coefficient',
    expense: 'Daily expense',
    happiness: 'Happiness',
    effect: 'Effect',
    channel: 'Channel',
    routeLevel: 'Route level',
    secondary: 'Secondary',
    thresholds: 'Required worked peak levels',
    ownXp: 'Own class XP',
    iconBy: 'Icon by',
    calculator: 'XP requirement calculator',
    taskType: 'Task type',
    currentLevel: 'Current level',
    required: 'XP required',
    abilityBase: 'Ability (base 100)',
    beggarBase: 'Beggar (base 50)',
    classBase: 'Example class (base 1,000)',
  },
  fr: {
    classCatalog: 'Catalogue des classes de Legacy',
    abilityCatalog: 'Catalogue des capacités de Legacy',
    propertyCatalog: 'Catalogue des propriétés de Legacy',
    possessionCatalog: 'Catalogue des possessions de Legacy',
    class: 'Classe',
    ability: 'Capacité',
    property: 'Propriété',
    item: 'Objet',
    group: 'Groupe',
    baseXp: 'XP max. de base',
    copperDay: 'Cuivre/jour de base',
    unlock: 'Déblocage',
    affects: 'Affecte',
    formula: 'Formule',
    coefficient: 'Coefficient',
    expense: 'Dépense quotidienne',
    happiness: 'Bonheur',
    effect: 'Effet',
    channel: 'Canal',
    routeLevel: 'Niveau du parcours',
    secondary: 'Secondaire',
    thresholds: 'Pics travaillés requis',
    ownXp: 'XP de la classe associée',
    iconBy: 'Icône par',
    calculator: "Calculateur d'XP requis",
    taskType: 'Type de tâche',
    currentLevel: 'Niveau actuel',
    required: 'XP requis',
    abilityBase: 'Capacité (base 100)',
    beggarBase: 'Mendiant (base 50)',
    classBase: 'Exemple de classe (base 1 000)',
  },
  ru: {
    classCatalog: 'Каталог классов Legacy',
    abilityCatalog: 'Каталог способностей Legacy',
    propertyCatalog: 'Каталог собственности Legacy',
    possessionCatalog: 'Каталог имущества Legacy',
    class: 'Класс',
    ability: 'Способность',
    property: 'Собственность',
    item: 'Предмет',
    group: 'Группа',
    baseXp: 'Базовый максимум опыта',
    copperDay: 'Базовая медь/день',
    unlock: 'Разблокировка',
    affects: 'Влияет на',
    formula: 'Формула',
    coefficient: 'Коэффициент',
    expense: 'Ежедневный расход',
    happiness: 'Счастье',
    effect: 'Эффект',
    channel: 'Параметр',
    routeLevel: 'Уровень маршрута',
    secondary: 'Вторичный эффект',
    thresholds: 'Требуемые рабочие пики',
    ownXp: 'Опыт своего класса',
    iconBy: 'Автор значка',
    calculator: 'Калькулятор требуемого опыта',
    taskType: 'Тип задачи',
    currentLevel: 'Текущий уровень',
    required: 'Требуется опыта',
    abilityBase: 'Способность (база 100)',
    beggarBase: 'Нищий (база 50)',
    classBase: 'Пример класса (база 1 000)',
  },
} as const;
