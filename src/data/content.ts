export const challenges = [
  {
    title: 'Déficit de données',
    description:
      'Absence d’outils modernes de prévision et de suivi hydrologique en temps réel dans le bassin de l’Itimbiri.',
  },
  {
    title: 'Vulnérabilité agricole',
    description:
      'Le scénario pessimiste SSP1-19 montre un risque d’effondrement hydrique majeur, avec une baisse des précipitations de -20,96 % et un ruissellement chutant de -77,22 % en 2057.',
  },
  {
    title: 'Menace sur la sécurité alimentaire',
    description:
      'L’évapotranspiration potentielle actuelle est déjà très élevée, rendant l’humidité du sol critique pour les cultures de subsistance.',
  },
];

export const pillars = [
  {
    title: 'Un cœur scientifique validé',
    text: 'Le modèle hydrologique a été calibré et validé sur la station d’Aketi avec une fiabilité supérieure à 93 %.',
    icon: 'Microscope',
  },
  {
    title: 'Une plateforme numérique interactive',
    text: 'Un tableau de bord web et mobile centralise l’humidité du sol, le ruissellement et les scénarios climatiques du GIEC.',
    icon: 'BarChart3',
  },
  {
    title: 'Un impact communautaire direct',
    text: 'Les alertes hydriques sont traduites en calendriers agricoles dynamiques et envoyées par SMS hors ligne aux coopératives agricoles.',
    icon: 'Smartphone',
  },
];

export const metrics = [
  { label: 'NSE au site d’Aketi', value: '0,65' },
  { label: 'R² mensuel', value: '0,96' },
  { label: 'PBIAS', value: '-2 %' },
  { label: 'Ruissellement en SSP1-19', value: '-77,22 %' },
];

export const highlights = [
  'Modèle hydrologique calibré sur des données historiques et validé localement.',
  'Interface pensée pour les décideurs, les agriculteurs et les gestionnaires de l’eau.',
  'Système d’alerte adapté aux contextes ruraux avec faible connectivité.',
];

export const alertFeed = [
  {
    level: 'Critique',
    title: 'Déficit hydrique majeur',
    area: 'Aketi / Itimbiri central',
    description: 'Le niveau de ruissellement descend à des valeurs anormalement faibles et l’humidité du sol devient insuffisante pour les cultures de saison sèche.',
    action: 'Diffuser une alerte prioritaire, programmer un contrôle de station et ajuster les calendriers culturaux.',
  },
  {
    level: 'Élevée',
    title: 'Vulnérabilité agricole croissante',
    area: 'Sous-bassins de Bas-Uele',
    description: 'Les modèles de scénarios climatiques indiquent une hausse de la pression sur les petits exploitants en raison d’un manque d’eau disponible.',
    action: 'Mettre en place une prévention ciblée sur les zones sensibles avec suivi agronomique renforcé.',
  },
  {
    level: 'Standard',
    title: 'Suivi des précipitations',
    area: 'Bassin de l’Itimbiri',
    description: 'Les derniers relevés portent un indice de vigilance sur les tendances pluviométriques locales à mesurer avant les prochaines campagnes.',
    action: 'Renforcer les observations de terrain et consolider les transmissions vers les centres de décision.',
  },
];

export const subBasins = [
  { name: 'Aketi', territory: 'Bas-Uele', area: '1845,83 km²' },
  { name: 'Itimbiri (1)', territory: 'Bas-Uele/Mongala', area: '2340,94 km²' },
  { name: 'Tele (1)', territory: 'Tshopo/Bas-Uele', area: '5017,89 km²' },
  { name: 'Likali (1)', territory: 'Bas-Uele', area: '5752,36 km²' },
  { name: 'Rubi (2)', territory: 'Bas-Uele', area: '3648,84 km²' },
  { name: 'Bilengo', territory: 'Mongala/Bas-Uele', area: '620,98 km²' },
];

type LatLngTuple = [number, number];

export const localisationPoints = [
  {
    title: 'Station d’Aketi',
    description: 'Centre de calibration du modèle hydrologique local.',
    position: [2.455, 24.06] as LatLngTuple,
  },
  {
    title: 'Bassin de l’Itimbiri',
    description: 'Zone principale d’intervention du projet.',
    position: [2.575, 23.42] as LatLngTuple,
  },
];
