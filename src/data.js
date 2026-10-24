// Toutes les données du portfolio sont ici (issues du CV).
// Modifiez ce fichier pour mettre à jour le site sans toucher aux composants.

export const profile = {
  name: 'Anass Lahrech',
  title: 'Ingénieur en Intelligence Artificielle & Data Science',
  roles: [
    'Ingénieur IA & Data Science',
    'Développeur Full-Stack',
    'Machine Learning · NLP · Computer Vision',
  ],
  location: 'Rabat-Salé, Maroc',
  email: 'anas.lahrech13@gmail.com',
  phone: '+212 629-721844',
  phoneHref: '+212629721844',
  linkedin: 'https://linkedin.com/in/anass-lahrech-ab873b271',
  github: 'https://github.com/Anasslahrech',
  photo: '/photo.jpg', // placez votre photo dans /public/photo.jpg
  cv: '/cv.pdf', // placez votre CV dans /public/cv.pdf
  intro:
    "Je conçois des applications web et mobiles qui intègrent du Machine Learning, du NLP et de la vision par ordinateur, de la donnée brute jusqu'à l'interface utilisateur.",
  about: [
    "Ingénieur en Génie Informatique, option Intelligence Artificielle et Data Science (ISMAGI), titulaire d'une Licence Professionnelle en Développement Web et Mobile (2025).",
    "J'ai une solide expérience pratique du développement full-stack (web, mobile, API) et du Machine Learning, Deep Learning et NLP, acquise à travers plusieurs projets académiques et mon Projet de Fin d'Études (PFE) 2025-2026.",
    "Je recherche un poste de développeur / data scientist / stage PFE  pour contribuer à des projets innovants à forte valeur ajoutée.",
  ],
  available: 'Disponible pour un poste / stage PFE ',
}

export const stats = [
  { value: '4', label: 'Projets IA & Data' },
  { value: '11+', label: 'Projets réalisés' },
  { value: '2', label: 'Stages en entreprise' },
  { value: '3', label: 'Langues parlées' },
]

export const skills = [
  {
    title: 'Intelligence Artificielle & Data Science',
    icon: '🧠',
    items: [
      'Machine Learning',
      'Deep Learning',
      'NLP',
      'Computer Vision',
      'TensorFlow',
      'Keras',
      'Scikit-learn',
      'spaCy',
      'Pandas',
      'NumPy',
      'SHAP',
      'Jupyter Notebook',
    ],
  },
  {
    title: 'Langages',
    icon: '⌨️',
    items: ['Python', 'Java', 'PHP', 'JavaScript', 'TypeScript', 'Dart'],
  },
  {
    title: 'Frameworks Web',
    icon: '🌐',
    items: ['Laravel', 'Django', 'FastAPI', 'React.js', 'Vue.js', 'Node.js / Express', 'Spring Boot'],
  },
  {
    title: 'Mobile',
    icon: '📱',
    items: ['React Native (Expo)', 'Android Java', 'Flutter'],
  },
  {
    title: 'Bases de données',
    icon: '🗄️',
    items: ['MySQL', 'MongoDB', 'PostgreSQL', 'Firebase', 'SQLite'],
  },
  {
    title: 'API & Temps réel',
    icon: '🔌',
    items: ['REST API', 'SOAP', 'RMI', 'Socket.IO', 'WebSocket', 'Google Maps / Mapbox'],
  },
  {
    title: 'DevOps & Outils',
    icon: '🛠️',
    items: ['Git', 'GitHub', 'Docker', 'Postman', 'Linux', 'VS Code'],
  },
  {
    title: 'Front-end & Design',
    icon: '🎨',
    items: ['HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS', 'Canva'],
  },
  {
    title: 'Méthodologies',
    icon: '📐',
    items: ['Agile / Scrum', 'POO', 'UML', 'Merise', 'MVC', 'Design Patterns'],
  },
]

// category : 'ia' | 'web' | 'mobile'
export const projects = [
  {
    title: 'Startup Success Predictor',
    subtitle: 'Prédiction de la réussite de startups marocaines',
    badge: 'PFE · 2026',
    categories: ['ia', 'web'],
    description:
      "Application web complète de Machine Learning prédisant le succès de startups marocaines à partir de données réelles (budget, secteur, ville, taille d'équipe, pitch).",
    highlights: [
      'API FastAPI modulaire : prédiction, statistiques, authentification faciale, tableau de bord admin, extraction d\'entités NLP.',
      'Recommandations actionnables par perturbation du modèle et simulateur de sensibilité (budget / équipe / secteur).',
      'Recherche de startups similaires par distance pondérée (k-NN).',
      'NER avec spaCy sur les textes de pitch (ville, secteur, montant, technologie).',
      'Rapports PDF automatisés (ReportLab) avec graphiques d\'interprétabilité SHAP.',
    ],
    tech: ['Python', 'FastAPI', 'React', 'Vite', 'MySQL', 'Scikit-learn', 'SHAP', 'spaCy', 'OpenCV', 'ReportLab'],
    featured: true,
  },
  {
    title: 'SGDA',
    subtitle: 'Système de Gestion des Demandes et Achats',
    badge: 'PFE · 2025-2026',
    categories: ['ia', 'web', 'mobile'],
    description:
      "Plateforme full-stack (web + mobile) de gestion des achats et de la chaîne logistique pour une entreprise marocaine du BTP, avec 5 rôles utilisateurs distincts.",
    highlights: [
      'Rôles : Admin, Chef Chantier, Magasinier, Comptable, Livreur.',
      'Workflow complet : demandes d\'achat, bons de commande, bons de livraison, factures et paiements, avec notifications temps réel (WebSocket).',
      'Microservice ML (Isolation Forest) de détection d\'anomalies, avec variables contextuelles (calendrier marocain, périodes fiscales).',
    ],
    tech: ['Laravel 11', 'React', 'Vite', 'React Native (Expo)', 'FastAPI', 'MySQL', 'WebSocket'],
    featured: true,
  },
  {
    title: 'BTPDetect',
    subtitle: 'Détection de conflits entre plans de corps de métier',
    badge: 'Projet personnel',
    categories: ['ia', 'web'],
    description:
      "Outil de détection automatique de conflits spatiaux entre les plans de différents corps de métier dans le secteur du BTP.",
    highlights: [
      'Modèle NER entraîné sur un jeu de données enrichi (~390 exemples annotés).',
      'Validation croisée (StratifiedKFold) avec intervalle de confiance à 95 %.',
      'Suite de 13 tests unitaires automatisés (pytest).',
    ],
    tech: ['Flask', 'spaCy', 'Scikit-learn', 'React', 'pytest'],
  },
  {
    title: 'Smart Parking',
    subtitle: 'Stationnement intelligent IoT + IA',
    badge: 'Projet personnel',
    categories: ['ia', 'mobile'],
    description:
      "Solution complète de gestion de parking combinant capteurs IoT (ESP32), backend FastAPI, application mobile et tableau de bord administrateur.",
    highlights: ['Modèle de Machine Learning pour la prédiction de disponibilité des places.'],
    tech: ['FastAPI', 'IoT (ESP32)', 'Machine Learning', 'Application mobile'],
  },
]

export const otherProjects = [
  { title: 'Gestion des Examens', stack: 'Java, JSP/Servlet, MySQL', desc: 'Plateforme CRUD de gestion des examens, étudiants et questions.', category: 'web' },
  { title: 'Fitness & Nutrition', stack: 'Android Java, SQLite', desc: 'Application mobile de calcul de calories et génération de programmes alimentaires personnalisés.', category: 'mobile' },
  { title: 'Réservation d\'Amphithéâtres et Salles', stack: 'Java, REST API, SOAP, RMI, MySQL', desc: 'Système multi-protocole d\'intégration multi-plateforme.', category: 'web' },
  { title: 'E-commerce Équipements Sportifs', stack: 'Django, Python, MySQL', desc: 'Catalogue, commandes et gestion des utilisateurs.', category: 'web' },
  { title: 'Site d\'Offres d\'Emploi', stack: 'Laravel, PHP, MySQL', desc: 'Plateforme avec espaces Candidat et Recruteur.', category: 'web' },
  { title: 'Suivi de Livraisons en Temps Réel', stack: 'Node.js, Express, MongoDB, Socket.IO, Google Maps API', desc: 'Application de tracking temps réel sur carte interactive.', category: 'web' },
  { title: 'Site Vitrine Marketing Digital', stack: 'React.js, CSS3, Bootstrap', desc: 'Site web professionnel responsive.', category: 'web' },
]

export const experience = [
  {
    role: 'Stagiaire Développeur',
    company: 'Asment Temara',
    place: 'Aïn Atiq, Maroc',
    period: 'Juillet – Août 2024 · 2 mois',
    points: [
      "Développement d'une application web de gestion du parc matériel informatique (suivi, affectation, gestion des équipements).",
      "Implémentation des fonctionnalités CRUD, de la gestion des utilisateurs et d'un tableau de bord de suivi.",
    ],
    tech: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
  },
  {
    role: 'Stagiaire Découverte',
    company: "Direction des Systèmes d'Information (DSI)",
    place: 'Rabat Souissi, Maroc',
    period: '2022 · 1 mois',
    points: [
      "Découverte de l'environnement d'une DSI publique : suivi du parc informatique, initiation à la gestion des systèmes d'information et aux infrastructures réseau.",
    ],
    tech: [],
  },
]

export const education = [
  {
    title: 'Cycle Ingénieur — Génie Informatique, option Intelligence Artificielle',
    school: 'ISMAGI, Maroc',
    period: '2023 – 2026',
    detail: 'Modules : Machine Learning, Deep Learning, NLP, Computer Vision, Big Data, Cloud Computing.',
  },
  {
    title: 'Licence Professionnelle — Développement Web et Mobile',
    school: 'Établissement supérieur, Maroc',
    period: '2022 – 2025',
    detail: 'Diplôme obtenu en 2025.',
  },
  {
    title: 'Baccalauréat — Option Physique-Chimie, Section Française',
    school: 'École Jean Charcot, Maroc',
    period: '2021',
    detail: '',
  },
]

export const languages = [
  { name: 'Arabe', level: 'Langue maternelle', percent: 100 },
  { name: 'Français', level: 'Courant — C1', percent: 88 },
  { name: 'Anglais', level: 'Intermédiaire — B1/B2', percent: 65 },
]

export const qualities = [
  'Esprit analytique',
  'Rigueur',
  'Autonomie',
  'Apprentissage rapide',
  'Travail en équipe',
  'Adaptabilité',
  'Curiosité technologique',
  'Force de proposition',
]
