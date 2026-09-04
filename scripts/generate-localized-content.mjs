import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../src/content/docs/', import.meta.url));

function normalizeMdxBody(body) {
  const importMatch = body.match(/(?:^|\n\n)(import [^\n]+;)(?:\n\n|$)/);
  if (!importMatch) return body;
  return `${importMatch[1]}\n\n${body.replace(importMatch[0], '\n\n').trim()}`;
}

function normalizeBody(path, sourceBody) {
  let body = sourceBody
    .replaceAll('(./mastery-items/)', '(../mastery-items/)')
    .replaceAll('(./echoes/)', '(../echoes/)');
  if (path === 'index.md') body = body.replace(/^# Legacy\n\n/, '');
  return path.endsWith('.mdx') ? normalizeMdxBody(body) : body;
}

const shared = {
  classes: {
    fr: [
      'Classes',
      'Toutes les classes, leurs revenus, groupes et conditions de déblocage.',
      `Legacy propose 44 classes réparties en sept groupes. Seule la classe sélectionnée gagne de l'XP et produit du cuivre. Chaque classe révèle un [objet de maîtrise](./mastery-items/) après un véritable cycle de travail. Les classes admissibles peuvent ensuite devenir Great de façon permanente.\n\nimport CatalogTable from '../../../../components/CatalogTable.astro';\n\n<CatalogTable kind="classes" locale="fr" />`,
    ],
    ru: [
      'Классы',
      'Все классы, доходы, группы и условия разблокировки.',
      `В Legacy есть 44 класса в семи группах. Опыт и медь получает только выбранный класс. После первого рабочего тика класс навсегда открывает свой [предмет мастерства](./mastery-items/). Подходящие классы позднее можно навсегда повысить до Great.\n\nimport CatalogTable from '../../../../components/CatalogTable.astro';\n\n<CatalogTable kind="classes" locale="ru" />`,
    ],
  },
  abilities: {
    fr: [
      'Capacités',
      'Toutes les capacités, leurs effets, coefficients et déblocages.',
      `Legacy contient 49 capacités dans neuf groupes. La capacité principale gagne de l'XP et jusqu'à quatre [Échos](./echoes/) peuvent en entraîner d'autres. La plupart des effets sont linéaires; les réductions de dépenses et certains bonus utilisent des logarithmes. Les bonus de maîtrise applicables s'additionnent dans un seul multiplicateur.\n\nimport CatalogTable from '../../../../components/CatalogTable.astro';\n\n<CatalogTable kind="abilities" locale="fr" />`,
    ],
    ru: [
      'Способности',
      'Все способности, эффекты, коэффициенты и условия разблокировки.',
      `В Legacy 49 способностей в девяти группах. Основная способность получает опыт, а до четырёх [Эхо](./echoes/) могут параллельно тренировать другие. Большинство эффектов линейные; снижение расходов и отдельные усиления используют логарифмы. Подходящие бонусы мастерства складываются в один множитель.\n\nimport CatalogTable from '../../../../components/CatalogTable.astro';\n\n<CatalogTable kind="abilities" locale="ru" />`,
    ],
  },
  possessions: {
    fr: [
      'Possessions',
      'Propriétés, possessions, dépenses, effets et déblocages.',
      `Les 30 propriétés sont mutuellement exclusives et multiplient le Bonheur. Les 24 possessions diverses peuvent être activées séparément. Tous les coûts sont des dépenses quotidiennes récurrentes. Si le cuivre atteint zéro, les sélections payantes sont désactivées.\n\nimport CatalogTable from '../../../../components/CatalogTable.astro';\n\n<CatalogTable kind="properties" locale="fr" />\n\n<CatalogTable kind="items" locale="fr" />`,
    ],
    ru: [
      'Имущество',
      'Собственность, предметы, расходы, эффекты и разблокировки.',
      `30 видов собственности взаимоисключающие и умножают Счастье. 24 прочих предмета можно включать независимо. Все цены — ежедневные расходы. Если запас меди падает до нуля, платные предметы отключаются.\n\nimport CatalogTable from '../../../../components/CatalogTable.astro';\n\n<CatalogTable kind="properties" locale="ru" />\n\n<CatalogTable kind="items" locale="ru" />`,
    ],
  },
  mastery: {
    fr: [
      'Objets de maîtrise',
      'Découverte, paliers, bonus et catalogue complet.',
      `Chaque classe possède un objet passif permanent. Il apparaît après un véritable cycle de travail et progresse selon le plus haut niveau atteint pendant que la classe travaillait. Les paliers Cuivre, Argent, Or, Platine, Émeraude et Rubis remplacent le palier précédent; ils ne s'additionnent pas. Les renaissances normales conservent découvertes, pics et effets.\n\nimport MasteryCatalog from '../../../../components/MasteryCatalog.astro';\n\n<MasteryCatalog locale="fr" />`,
    ],
    ru: [
      'Предметы мастерства',
      'Открытие, уровни, бонусы и полный каталог.',
      `У каждого класса есть постоянный пассивный предмет. Он появляется после настоящего рабочего тика и растёт по максимальному уровню, достигнутому во время работы этим классом. Уровни Медь, Серебро, Золото, Платина, Изумруд и Рубин заменяют предыдущий, а не складываются. Обычные перерождения сохраняют открытия, пики и эффекты.\n\nimport MasteryCatalog from '../../../../components/MasteryCatalog.astro';\n\n<MasteryCatalog locale="ru" />`,
    ],
  },
};

const pages = {
  fr: {
    'index.md': [
      'Wiki Legacy',
      'Guides, systèmes, formules et stratégie pour Legacy.',
      `# Legacy\n\n_Une vie mesurée en choix._ Ce wiki explique chaque système, des premiers niveaux jusqu'à la fin permanente Legacy Complete.\n\n- [Commencer une vie](./getting-started/)\n- [Guide du débutant](./beginner-guide/)\n- [Ascension éternelle](./systems/eternal-ascension/)\n- [Formules](./reference/formulas/)\n\nLegacy est une simulation incrémentale solo: choisissez une classe et une capacité, financez vos possessions, maîtrisez les routes, puis transformez chaque nouvelle vie en progression permanente.`,
    ],
    'getting-started.md': [
      'Premiers pas',
      'Commencer une nouvelle vie et comprendre les premières commandes.',
      `Une nouvelle vie commence à **14 ans**, avec **0 cuivre**, Mendiant, Concentration et Sans-abri. Gardez Mendiant et Concentration actifs, passez Fermier au niveau 10, puis entraînez les capacités nécessaires aux prochains déblocages.\n\nLe Boutique apparaît à 750 cuivre, l'Automatisation à 20 ans et l'Amulette à 25 ans. Vérifiez toujours le revenu net avant d'activer une possession. Une seule classe, une seule capacité et une seule propriété peuvent être actives; les possessions diverses se cumulent. La vitesse de base est de quatre jours en jeu par seconde réelle.`,
    ],
    'beginner-guide.md': [
      'Guide du débutant',
      'Un parcours pratique pour la première vie.',
      `Concentration améliore l'XP des capacités, Productivité l'XP des classes, Marchandage réduit les dépenses et Méditation augmente le Bonheur, qui multiplie tous les XP. Suivez Mendiant 10 → Fermier 10 → Pêcheur 10, puis développez Force pour Mineur et Forgeron.\n\nToucher l'Œil à 65 ans conserve les pics de tâches; Embrasser le Mal à 200 ans donne du Mal mais efface ces pics. Les objets de maîtrise restent séparés et survivent. Après la première renaissance maléfique, configurez Écho I et dépensez prudemment les points d'avantages maléfiques.`,
    ],
    'strategy.md': [
      'Stratégie',
      'Principes pratiques pour renforcer votre Legacy.',
      `Privilégiez les multiplicateurs larges comme Bonheur, Concentration et Productivité. Considérez les possessions comme des abonnements: activez-les seulement si leur bonus sert la tâche actuelle et si le revenu couvre largement les dépenses.\n\nRenaître doit avoir un objectif. Toucher l'Œil améliore les prochaines vies, Embrasser le Mal échange les pics contre du Mal et Transcender conserve une fraction arrondie vers le bas. Utilisez l'automatisation comme supervision, planifiez les chaînes Great dans l'ordre et comparez toujours la récompense affichée avant un Effondrement ou une entrée dans le Métavers.`,
    ],
    'controls.md': [
      'Commandes',
      'Souris, clavier et navigation dans Legacy.',
      `La plupart des actions utilisent la souris. Les flèches gauche/droite changent d'onglet, **Espace** met en pause, **P** active l'auto-promotion et **L** l'auto-apprentissage. **1–3** chargent un équipement de session; **Alt+1–3** l'enregistrent puis le chargent. **Échap** ferme l'Empire ou les fenêtres.\n\nLe bouton **E** d'une capacité gère la file des Échos: ce n'est pas un raccourci clavier. Choisir manuellement une capacité désactive l'auto-apprentissage et retire sa cible d'Écho.`,
    ],
    'interface.md': [
      'Interface',
      'Onglets, barre latérale, paramètres et accessibilité.',
      `Les onglets principaux sont Classes, Capacités, Boutique, Amulette, Héroïque, Objets et Chronique. L'en-tête ouvre Empire, Classement, Succès, Paramètres et Wiki. La barre latérale résume âge, tâches, cuivre, flux net, Bonheur, durée de vie et accélération.\n\nLes Paramètres proposent anglais, français et russe, audio, thème et en-tête fixe. Les nouveaux joueurs choisissent leur langue avant le démarrage; les anciens joueurs restent en anglais jusqu'à leur choix. Les cartes, textes et nombres s'adaptent aux différentes résolutions et aux valeurs extrêmes.`,
    ],
    'systems/eternal-ascension.md': [
      'Ascension éternelle',
      "Vue d'ensemble de l'extension et de son parcours.",
      `Ascension éternelle relie Écho I à Legacy Complete: quatre Échos, promotions Great, Effondrement, Ténèbres, Métavers et 42 jalons.\n\nParcours principal: première renaissance maléfique → Écho I; première Transcendance → Écho II et Intendant; 5 000 000 Essence → Great; Héroïque XIV → Effondrement; premier Effondrement → Écho III; Ténèbres XIII → Métavers; première entrée → Écho IV; Métavers VI et Great The Unwritten Absolute niveau 20 → fin permanente.`,
    ],
    'systems/core-loop.md': [
      'Boucle de jeu',
      'Temps, travail, entraînement, revenus et dépenses.',
      `À chaque cycle actif, le jeu avance l'âge, applique l'automatisation, entraîne la classe et la capacité, produit les ressources, met à jour Échos, jalons et Chronique, puis soustrait les dépenses. Le Bonheur et les bonus applicables multiplient l'XP.\n\nPause, mort et prison donnent une vitesse nulle: aucun XP, revenu, progrès de maîtrise ni génération ne doit alors avancer. À la durée de vie maximale, la vie s'arrête jusqu'à une renaissance disponible.`,
    ],
    'systems/echoes.md': [
      'Échos et Résonance',
      'Entraînement parallèle, ciblage et efficacité.',
      `Quatre Échos se débloquent après la première renaissance maléfique, Transcendance, Effondrement et entrée dans le Métavers. Sans cible **E**, chacun choisit la capacité admissible la plus proche du niveau suivant. Une capacité ne peut pas être la cible principale et celle d'un Écho.\n\nChaque Écho commence à 25 % d'efficacité, atteint 100 % lorsque le pic mémorisé de sa Résonance atteint 1 000 / 1 250 / 1 500 / 1 750, puis gagne 5 points par doublement. Les pics survivent à tous les resets; les cibles sont effacées.`,
    ],
    'systems/shop-steward.md': [
      'Intendant de boutique',
      'Coût, budget et recommandations.',
      `La première Transcendance débloque l'Intendant. Activé, il prélève **10 % du revenu brut** et recommande la combinaison propriété/possessions la plus forte dans les 90 % restants. Il recalcule toutes les 30 journées actives.\n\nL'achat reste manuel: activez l'Intendant, vérifiez propriété, objets, coût et budget, puis choisissez **Acheter l'équipement**. Le désactiver arrête les frais et retire toutes les sélections payantes.`,
    ],
    'systems/unlocks.md': [
      'Déblocages et jalons',
      'Conditions permanentes et propres à une vie.',
      `Objets, Chronique et Héroïque sont toujours visibles. Boutique exige 750 cuivre, Automatisation 20 ans et Amulette 25 ans. Toucher l'Œil commence à 65 ans et Embrasser le Mal à 200 ans, réduits par les avantages permanents.\n\nLe Mal ouvre la Magie noire; l'Essence ouvre la Toute-puissance. Héroïque XIV ouvre l'Effondrement, Ténèbres XIII le Métavers, et Métavers VI mène à la fin. Les seuils sont inclusifs. Une carte de maîtrise exige réellement un cycle de travail.`,
    ],
    'systems/rebirths.md': [
      'Renaissances et resets',
      'Récompenses et progression conservée.',
      `Toucher l'Œil conserve le meilleur niveau et donne le multiplicateur par tâche \`1 + maximum/10\`. Embrasser le Mal donne du Mal mais efface les maximums. Transcender donne de l'Essence et conserve \`floor(Rappel cosmique × pic)\`.\n\nL'Effondrement transforme l'Essence en Matière noire et réinitialise la progression active; le Métavers ajoute des Points du Métavers et efface aussi les ressources de la run non protégées. Maîtrise, Résonance, jalons, promotions Great et Chronique survivent selon les règles indiquées.`,
    ],
    'systems/evil-perks.md': [
      'Avantages maléfiques',
      'Génération des EPP et améliorations permanentes.',
      `Après le premier Embrasser le Mal, les EPP sont générés uniquement pendant une vie active selon le Mal et l'Essence. Ils achètent cinq améliorations permanentes: Œil plus tôt, Mal plus tôt, Vide plus tôt, Galactique plus tôt et Marché d'Essence.\n\nLes quatre premières réduisent les âges requis; Marché d'Essence ajoute 10 % de récompense par rang. Les pauses automatiques du Vide et du Conseil galactique restent fixées aux âges originaux 1 000 et 10 000.`,
    ],
    'systems/chronicle.md': [
      'Chronique et jalons',
      "Les 42 récompenses permanentes et l'historique.",
      `La Chronique conserve les jours actifs, les plus grandes récompenses et les 50 vies récentes. Ses 42 jalons sont répartis entre Essence (9), Héroïque (14), Ténèbres (13) et Métavers (6).\n\nLes récompenses deviennent permanentes dès que le seuil inclusif est atteint: bonus d'XP, vitesse, ressources, promotions Great, Effondrement, classes des Ténèbres, Métavers et fin. Les compteurs n'avancent que lorsque le jeu tourne réellement.`,
    ],
    'systems/automation.md': [
      'Automatisation',
      'Auto-promotion, auto-apprentissage et pauses.',
      `L'Automatisation apparaît à 20 ans. Auto-promotion avance dans la carrière; après la première renaissance maléfique elle peut traverser les carrières et ignorer les classes verrouillées. Auto-apprentissage choisit chaque seconde une capacité non ignorée et non utilisée par un Écho.\n\nLes pauses automatiques surveillent les âges 1 000 et 10 000. Les choix d'automatisation, équipements et options Ignorer ne durent que pendant la session de l'application.`,
    ],
    'systems/heroic.md': [
      'Progression héroïque',
      'Jalons Héroïques, tâches Great et conversions.',
      `Après une Transcendance, 5 000 000 Essence et un pic One Above All de 2 000, les classes et capacités admissibles peuvent devenir **Great**. Dans chaque famille, la première promotion est libre puis chaque entrée exige la précédente au niveau Great 20. Les Résonances ne peuvent pas devenir Great.\n\nLes quatorze jalons Héroïques multiplient l'XP Great jusqu'à ×4096 et Héroïque XIV débloque l'Effondrement. Les possessions originales payantes suivent deux chaînes de conversion permanentes avec coûts et effets supérieurs.`,
    ],
    'systems/darkness.md': [
      'Ténèbres et Effondrement',
      'Matière noire, Orbes, doctrines et progression.',
      `Héroïque XIV permet de convertir l'Essence d'une run profonde en Matière noire. Le solde actuel se dépense; le total à vie contrôle les déblocages; le total de run calcule la prochaine récompense du Métavers.\n\nLes classes Ascendance sombre et six capacités Ténèbres s'ouvrent progressivement. **Un Miracle** produit des Orbes sombres pour quatre améliorations de run. Cinq doctrines offrent chacune deux branches avec avantage et pénalité. L'Effondrement conserve les systèmes permanents mais remet à zéro les tâches, l'âge, le cuivre, le Mal et l'Essence.`,
    ],
    'systems/metaverse.md': [
      'Le Métavers',
      'Points, avantages de run, Hypercubes, autels et fin.',
      `Ténèbres XIII débloque le Métavers. La récompense dépend de la Matière noire brute gagnée pendant la run; les dépenses ne la réduisent pas. Avant la nouvelle run, les Points du Métavers financent une configuration remboursable de préservation et de gain.\n\nLes Hypercubes achètent cinq autels pour génération, recharge/durée du Reality Boost, Essence et Matière noire. Reality Boost multiplie la vitesse par 5. La chaîne de quatre classes mène à The Unwritten Absolute; Métavers VI et son niveau Great 20 débloquent Legacy Complete.`,
    ],
    'systems/empire.md': [
      'Empire et classements',
      'Classements partagés, couches et couronne.',
      `Legacy reste solo mais compare les records via les classements et l'Empire. Les joueurs sont placés dans des couches selon leur meilleure propriété occupée, de Paysans à Princes. Seules les couches peuplées sont affichées.\n\nLa couronne compare successivement score de carrière, ordre de classe, durée de vie améliorée, renaissances, propriété, durée totale puis Steam ID. Le score de carrière vaut \`prestige de classe × pic travaillé²\`.`,
    ],
    'systems/achievements.md': [
      'Succès',
      'Catégories, score et permanence.',
      `Legacy possède 40 succès de compte pour 1 000 points, répartis en Vie, Entraînement, Possessions et Legacy. Ils suivent âges, cuivre, pics de tâches, Boutique, propriétés, renaissances et ressources permanentes. **A Legacy Complete** exige les 39 autres. Un succès obtenu survit à tous les resets et apparaît aussi dans s&box.`,
    ],
    'reference/saving.md': [
      'Sauvegarde et progression',
      'Sauvegardes, imports et sécurité de la progression.',
      `Legacy sauvegarde automatiquement toutes les cinq secondes. Les sauvegardes de progression restent au schéma signé v11; la langue est conservée séparément dans les préférences. Changer de langue ou perdre ce fichier ne peut donc pas effacer la progression.\n\nDeux emplacements protègent contre une coupure pendant l'écriture. Si l'un est tronqué, malformé ou invalide mais que l'autre est vérifié, le jeu charge le fichier fiable sans sanction anti-triche puis répare seulement l'emplacement rejeté. Une signature invalide sans copie fiable reste considérée comme une altération. Les exports/imports, v10 signé et migration v9 restent pris en charge.`,
    ],
    'reference/glossary.md': [
      'Glossaire',
      'Définitions rapides des termes de Legacy.',
      `**Classe** — tâche qui produit du revenu. **Capacité** — tâche qui modifie un canal. **Cuivre** — ressource dépensable. **Mal / Essence** — monnaies de renaissance. **Écho** — entraîneur secondaire. **Résonance** — pic mémorisé qui règle son efficacité. **Maîtrise** — objet passif lié à une classe. **Great** — promotion permanente. **Effondrement** — conversion de l'Essence en Matière noire. **Doctrine** — choix sombre à deux branches. **Point du Métavers** — monnaie de configuration de run. **Hypercube** — ressource des autels. **Chronique** — historique permanent du compte.`,
    ],
    'reference/formulas.mdx': [
      'Formules et calculs',
      'Formules principales, arrondis et calculateur.',
      `import XpCalculator from '../../../../components/XpCalculator.astro';\n\nLes produits « arrondis » utilisent l'entier le plus proche, les moitiés allant vers l'infini positif. Une vie commence à 14 ans, dure 70 ans de base et avance de quatre jours en jeu par seconde réelle.\n\n## XP requis\n\n$$\\operatorname{maxXP}(b,l)=\\operatorname{round}(b(l+1)(1.01)^l)$$\n\n<XpCalculator locale="fr" />\n\n## Seuil de maîtrise\n\n$$N(L)=\\sum_{k=0}^{L-1}(k+1)(1.01)^k$$\n\nAvec $T=\\max(N(15),2N(P))$, les six paliers demandent $T,2T,4T,8T,16T,32T$.\n\n## Récompenses tardives\n\nEffondrement utilise $x=E/(5\\times10^{10})$ et $\\lfloor x^{1.12}(1+0.15\\log_{10}x)M_{DM}\\rfloor$. Le Métavers utilise $y=R/1000$ et $\\lfloor y^{1.1}(1+0.1\\log_{10}y)M_{MP}\\rfloor$. Les résultats extrêmes saturent au lieu de déborder.`,
    ],
  },
  ru: {
    'index.md': [
      'Вики Legacy',
      'Руководства, системы, формулы и стратегия Legacy.',
      `# Legacy\n\n_Жизнь, измеряемая выборами._ Здесь описан весь путь — от первых уровней до постоянной концовки Legacy Complete.\n\n- [Начать жизнь](./getting-started/)\n- [Руководство новичка](./beginner-guide/)\n- [Вечное вознесение](./systems/eternal-ascension/)\n- [Формулы](./reference/formulas/)\n\nLegacy — одиночный инкрементальный симулятор жизни: выбирайте класс и способность, оплачивайте имущество, осваивайте маршруты и превращайте каждую новую жизнь в постоянный прогресс.`,
    ],
    'getting-started.md': [
      'Первые шаги',
      'Начало новой жизни и первые элементы управления.',
      `Новая жизнь начинается в **14 лет** с **0 меди**, классом Нищий, способностью Концентрация и статусом Бездомный. Оставьте Нищего и Концентрацию активными, перейдите на Фермера на уровне 10, затем тренируйте способности для следующих разблокировок.\n\nМагазин появляется при 750 меди, Автоматизация — в 20 лет, Амулет — в 25. Всегда проверяйте чистый доход перед включением имущества. Одновременно активны один класс, одна способность и одна собственность; прочие предметы складываются. Базовая скорость — четыре игровых дня за реальную секунду.`,
    ],
    'beginner-guide.md': [
      'Руководство новичка',
      'Практичный маршрут первой жизни.',
      `Концентрация усиливает опыт способностей, Продуктивность — опыт классов, Торг снижает расходы, а Медитация повышает Счастье, умножающее весь опыт. Следуйте Нищий 10 → Фермер 10 → Рыбак 10, затем развивайте Силу для Шахтёра и Кузнеца.\n\nКоснуться Ока в 65 лет сохраняет пики задач; Принять Зло в 200 лет даёт Зло, но стирает пики. Предметы мастерства существуют отдельно и сохраняются. После первого злого перерождения настройте Эхо I и обдуманно расходуйте очки злых улучшений.`,
    ],
    'strategy.md': [
      'Стратегия',
      'Практические принципы усиления Legacy.',
      `Сначала развивайте широкие множители: Счастье, Концентрацию и Продуктивность. Считайте имущество подписками: включайте предмет, только когда он помогает текущей задаче, а доход уверенно покрывает расходы.\n\nКаждое перерождение должно иметь цель. Коснуться Ока усиливает будущие жизни, Принять Зло меняет пики на Зло, а Трансценденция сохраняет округлённую вниз долю. Контролируйте автоматизацию, проходите цепочки Great по порядку и сравнивайте показанную награду перед Коллапсом или входом в Метавселенную.`,
    ],
    'controls.md': [
      'Управление',
      'Мышь, клавиатура и навигация.',
      `Большинство действий выполняется мышью. Стрелки влево/вправо меняют вкладку, **Пробел** ставит игру на паузу, **P** переключает автоповышение, **L** — автообучение. **1–3** загружают сессионный набор; **Alt+1–3** сохраняют и сразу загружают его. **Escape** закрывает Империю и окна.\n\nКнопка **E** в строке способности управляет очередью Эхо и не является клавишей. Ручной выбор способности отключает автообучение и снимает с неё фокус Эхо.`,
    ],
    'interface.md': [
      'Интерфейс',
      'Вкладки, боковая панель, настройки и доступность.',
      `Основные вкладки: Классы, Способности, Магазин, Амулет, Героическое, Предметы и Хроника. В верхней панели находятся Империя, Рейтинг, Достижения, Настройки и Вики. Боковая панель показывает возраст, задачи, медь, чистый поток, Счастье, срок жизни и ускорение.\n\nВ Настройках доступны английский, французский и русский языки, звук, тема и закреплённый заголовок. Новые игроки выбирают язык до запуска симуляции; старые остаются на английском до ручного выбора. Интерфейс рассчитан на разные разрешения и предельные числа.`,
    ],
    'systems/eternal-ascension.md': [
      'Вечное вознесение',
      'Обзор расширения и полного пути развития.',
      `Вечное вознесение связывает Эхо I с Legacy Complete: четыре Эхо, повышения Great, Коллапс, Тьма, Метавселенная и 42 вехи.\n\nОсновной путь: первое злое перерождение → Эхо I; первая Трансценденция → Эхо II и Управляющий; 5 000 000 Эссенции → Great; Героическое XIV → Коллапс; первый Коллапс → Эхо III; Тьма XIII → Метавселенная; первый вход → Эхо IV; Метавселенная VI и Great The Unwritten Absolute 20 → постоянная концовка.`,
    ],
    'systems/core-loop.md': [
      'Игровой цикл',
      'Время, работа, обучение, доходы и расходы.',
      `В каждый активный тик игра увеличивает возраст, применяет автоматизацию, тренирует класс и способность, выдаёт ресурсы, обновляет Эхо, вехи и Хронику, затем вычитает расходы. Счастье и подходящие бонусы умножают опыт.\n\nПауза, смерть и тюрьма дают нулевую скорость: опыт, доход, мастерство и генерация не растут. При достижении максимального срока жизни она останавливается до доступного перерождения.`,
    ],
    'systems/echoes.md': [
      'Эхо и Резонанс',
      'Параллельное обучение, цели и эффективность.',
      `Четыре Эхо открываются после первого злого перерождения, Трансценденции, Коллапса и входа в Метавселенную. Без фокуса **E** Эхо выбирает доступную способность с минимальным временем до уровня. Способность не может одновременно быть основной и целью Эхо.\n\nЭхо начинает с 25 %, достигает 100 % при запомненном пике Резонанса 1 000 / 1 250 / 1 500 / 1 750 и получает ещё 5 пунктов при каждом удвоении. Пики переживают все сбросы, цели очищаются.`,
    ],
    'systems/shop-steward.md': [
      'Управляющий магазином',
      'Плата, бюджет и рекомендации.',
      `Первая Трансценденция открывает Управляющего. При включении он забирает **10 % валового дохода** и рекомендует лучшую комбинацию собственности и предметов в оставшихся 90 %. Пересчёт выполняется каждые 30 активных игровых дней.\n\nПокупка всегда ручная: включите Управляющего, проверьте имущество, стоимость и бюджет, затем нажмите **Купить набор**. Отключение прекращает плату и снимает все платные предметы.`,
    ],
    'systems/unlocks.md': [
      'Разблокировки и вехи',
      'Постоянные и жизненные условия.',
      `Предметы, Хроника и Героическое видны всегда. Магазину нужно 750 меди, Автоматизации — возраст 20, Амулету — 25. Коснуться Ока доступно с 65 лет, Принять Зло — с 200; постоянные улучшения снижают эти значения.\n\nЗло открывает Тёмную магию, Эссенция — Всемогущество. Героическое XIV открывает Коллапс, Тьма XIII — Метавселенную, Метавселенная VI ведёт к финалу. Порог включителен. Карточка мастерства требует настоящего рабочего тика.`,
    ],
    'systems/rebirths.md': [
      'Перерождения и сбросы',
      'Награды и сохраняемый прогресс.',
      `Коснуться Ока сохраняет лучший уровень и даёт множитель задачи \`1 + максимум/10\`. Принять Зло выдаёт Зло, но стирает максимумы. Трансценденция выдаёт Эссенцию и сохраняет \`floor(Космическое воспоминание × пик)\`.\n\nКоллапс превращает Эссенцию в Тёмную материю и сбрасывает активный прогресс; Метавселенная также выдаёт Очки Метавселенной и очищает незащищённые ресурсы забега. Мастерство, Резонанс, вехи, повышения Great и Хроника сохраняются по правилам соответствующего сброса.`,
    ],
    'systems/evil-perks.md': [
      'Злые улучшения',
      'Генерация EPP и постоянные ранги.',
      `После первого Принять Зло очки EPP производятся только во время активной жизни и зависят от Зла и Эссенции. Они покупают пять постоянных улучшений: более раннее Око, Зло, Пустоту и Галактику, а также Сделку Эссенции.\n\nПервые четыре снижают требуемый возраст; Сделка добавляет 10 % к награде за ранг. Автопаузы Пустоты и Галактического совета остаются на исходных возрастах 1 000 и 10 000.`,
    ],
    'systems/chronicle.md': [
      'Хроника и вехи',
      '42 постоянные награды и история жизней.',
      `Хроника хранит активные игровые дни, крупнейшие награды и 50 последних жизней. 42 вехи разделены на Эссенцию (9), Героическое (14), Тьму (13) и Метавселенную (6).\n\nНаграда становится постоянной при достижении включительного порога: опыт, скорость, ресурсы, Great, Коллапс, классы Тьмы, Метавселенная и концовка. Счётчики растут только во время реальной работы игры.`,
    ],
    'systems/automation.md': [
      'Автоматизация',
      'Автоповышение, автообучение и паузы.',
      `Автоматизация появляется в 20 лет. Автоповышение двигается по карьере; после первого злого перерождения оно может переходить между карьерами и пропускать закрытые классы. Автообучение раз в секунду выбирает не пропущенную способность, не занятую Эхо.\n\nАвтопаузы контролируют возраст 1 000 и 10 000. Переключатели, наборы и отметки Пропустить сохраняются только до закрытия приложения.`,
    ],
    'systems/heroic.md': [
      'Героический прогресс',
      'Вехи, задачи Great и преобразования.',
      `После Трансценденции, 5 000 000 Эссенции и пика One Above All 2 000 подходящие классы и способности можно навсегда сделать **Great**. В каждой семье первая цель доступна сразу, а следующая требует предыдущую Great-задачу уровня 20. Резонансы не становятся Great.\n\nЧетырнадцать Героических вех умножают Great-опыт вплоть до ×4096, а XIV открывает Коллапс. Исходные платные предметы имеют две отдельные постоянные цепочки преобразований.`,
    ],
    'systems/darkness.md': [
      'Тьма и Коллапс',
      'Тёмная материя, Сферы, доктрины и развитие.',
      `Героическое XIV позволяет превратить глубокий запас Эссенции в Тёмную материю. Текущий баланс тратится, пожизненный открывает системы, а валовой доход забега определяет следующую награду Метавселенной.\n\nПостепенно открываются классы Тёмного вознесения и шесть способностей Тьмы. **Чудо** производит Тёмные сферы для четырёх улучшений забега. Пять доктрин предлагают по две ветви с выгодой и недостатком. Коллапс сохраняет постоянные системы, но сбрасывает задачи, возраст, медь, Зло и Эссенцию.`,
    ],
    'systems/metaverse.md': [
      'Метавселенная',
      'Очки, перки забега, Гиперкубы, алтари и финал.',
      `Тьма XIII открывает Метавселенную. Награда зависит от валовой Тёмной материи за забег, поэтому траты её не уменьшают. Перед новой попыткой Очки Метавселенной финансируют возвратный набор перков сохранения и усиления.\n\nГиперкубы покупают пять алтарей генерации, перезарядки/длительности Reality Boost, Эссенции и Тёмной материи. Reality Boost умножает скорость на 5. Цепочка четырёх классов ведёт к The Unwritten Absolute; Метавселенная VI и его Great-уровень 20 открывают Legacy Complete.`,
    ],
    'systems/empire.md': [
      'Империя и рейтинги',
      'Общие рейтинги, слои и корона.',
      `Legacy остаётся одиночной игрой, но сравнивает рекорды через рейтинги и Империю. Игроки распределяются по слоям согласно лучшей занятой собственности — от Крестьян до Принцев. Показываются только населённые слои.\n\nКорона сравнивает по порядку карьерный счёт, класс, улучшенный срок жизни, перерождения, собственность, общую жизнь и Steam ID. Карьерный счёт равен \`престиж класса × рабочий пик²\`.`,
    ],
    'systems/achievements.md': [
      'Достижения',
      'Категории, очки и постоянство.',
      `В Legacy 40 достижений аккаунта общей стоимостью 1 000 очков: Жизнь, Обучение, Имущество и Legacy. Они отслеживают возраст, медь, пики задач, Магазин, собственность, перерождения и постоянные ресурсы. **A Legacy Complete** требует остальные 39. Полученное достижение переживает все сбросы и также отображается в s&box.`,
    ],
    'reference/saving.md': [
      'Сохранение и прогресс',
      'Автосохранение, импорт и защита прогресса.',
      `Legacy автоматически сохраняется каждые пять секунд. Формат прогресса остаётся подписанной схемой v11; язык хранится отдельно в настройках, поэтому переключение языка или повреждение предпочтений не стирает прогресс.\n\nДва слота защищают от отключения питания во время записи. Если один обрезан, повреждён или не проходит проверку, а второй доверенный, игра загружает надёжную копию без наказания античита и восстанавливает только плохой слот. Неверная подпись без доверенной копии по-прежнему считается подменой. Экспорт/импорт, подписанный v10 и миграция v9 сохраняются.`,
    ],
    'reference/glossary.md': [
      'Глоссарий',
      'Краткие определения терминов Legacy.',
      `**Класс** — задача, производящая доход. **Способность** — задача, меняющая параметр. **Медь** — расходуемая валюта. **Зло / Эссенция** — валюты перерождения. **Эхо** — вторичный тренер. **Резонанс** — запомненный пик его эффективности. **Мастерство** — пассивный предмет класса. **Great** — постоянное повышение. **Коллапс** — обмен Эссенции на Тёмную материю. **Доктрина** — двухветочный тёмный выбор. **Очко Метавселенной** — валюта настройки забега. **Гиперкуб** — ресурс алтарей. **Хроника** — постоянная история аккаунта.`,
    ],
    'reference/formulas.mdx': [
      'Формулы и расчёты',
      'Главные формулы, округление и калькулятор.',
      `import XpCalculator from '../../../../components/XpCalculator.astro';\n\n«Округлённые» произведения округляют к ближайшему целому, половины — к положительной бесконечности. Жизнь начинается в 14 лет, базово длится 70 лет и идёт со скоростью четыре игровых дня за реальную секунду.\n\n## Требуемый опыт\n\n$$\\operatorname{maxXP}(b,l)=\\operatorname{round}(b(l+1)(1.01)^l)$$\n\n<XpCalculator locale="ru" />\n\n## Порог мастерства\n\n$$N(L)=\\sum_{k=0}^{L-1}(k+1)(1.01)^k$$\n\nПри $T=\\max(N(15),2N(P))$ шесть уровней требуют $T,2T,4T,8T,16T,32T$.\n\n## Поздние награды\n\nКоллапс использует $x=E/(5\\times10^{10})$ и $\\lfloor x^{1.12}(1+0.15\\log_{10}x)M_{DM}\\rfloor$. Метавселенная использует $y=R/1000$ и $\\lfloor y^{1.1}(1+0.1\\log_{10}y)M_{MP}\\rfloor$. Экстремальные результаты насыщаются вместо переполнения.`,
    ],
  },
};

for (const locale of ['fr', 'ru']) {
  Object.assign(pages[locale], {
    'systems/classes.mdx': shared.classes[locale],
    'systems/abilities.mdx': shared.abilities[locale],
    'systems/possessions.mdx': shared.possessions[locale],
    'systems/mastery-items.mdx': shared.mastery[locale],
  });
  for (const [path, [title, description, sourceBody]] of Object.entries(pages[locale])) {
    const target = join(root, locale, path);
    await mkdir(dirname(target), { recursive: true });
    const category =
      path === 'index.md'
        ? 'home'
        : path.startsWith('systems/')
          ? 'systems'
          : path.startsWith('reference/')
            ? 'reference'
            : 'start';
    const body = normalizeBody(path, sourceBody);
    await writeFile(
      target,
      `---\ntitle: ${JSON.stringify(title)}\ndescription: ${JSON.stringify(description)}\ncategory: ${category}\n---\n\n${body}\n`,
      'utf8',
    );
  }
}

console.log(
  `Generated ${Object.keys(pages.fr).length + Object.keys(pages.ru).length} localized pages.`,
);
