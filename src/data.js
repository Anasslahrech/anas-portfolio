// Toutes les données du portfolio sont ici (issues du CV), en français (fr) et en anglais (en).
// Modifiez ce fichier pour mettre à jour le site sans toucher aux composants.

// ---------- Données communes aux deux langues ----------
const common = {
  name: 'Anass Lahrech',
  location: 'Rabat-Salé, Maroc',
  email: 'anas.lahrech13@gmail.com',
  phone: '+212 629-721844',
  phoneHref: '+212629721844',
  linkedin: 'https://linkedin.com/in/anass-lahrech-ab873b271',
  github: 'https://github.com/Anasslahrech',
  photo: '/photo.jpg', // placez votre photo dans /public/photo.jpg
  cv: '/cv.pdf', // placez votre CV dans /public/cv.pdf
}

const skillItems = {
  ia: [
    'Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'TensorFlow', 'Keras',
    'Scikit-learn', 'spaCy', 'Pandas', 'NumPy', 'SHAP', 'Jupyter Notebook',
  ],
  genai: [
    'LLM', 'Prompt Engineering', 'Agents IA', 'Architectures multi-agents', 'Orchestration',
    'Tool calling', 'Mémoire partagée', 'MCP (Model Context Protocol)',
  ],
  genaiEn: [
    'LLM', 'Prompt Engineering', 'AI Agents', 'Multi-agent architectures', 'Orchestration',
    'Tool calling', 'Shared memory', 'MCP (Model Context Protocol)',
  ],
  langages: ['Python', 'Java', 'PHP', 'JavaScript', 'TypeScript', 'Dart'],
  web: ['Laravel', 'Django', 'FastAPI', 'React.js', 'Vue.js', 'Node.js / Express', 'Spring Boot'],
  mobile: ['React Native (Expo)', 'Android Java', 'Flutter'],
  db: ['MySQL', 'MongoDB', 'PostgreSQL', 'Firebase', 'SQLite'],
  api: ['REST API', 'SOAP', 'RMI', 'Socket.IO', 'WebSocket', 'Google Maps / Mapbox'],
  devops: ['Git', 'GitHub', 'Docker', 'Postman', 'Linux', 'VS Code'],
  front: ['HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS', 'Canva'],
  methods: ['Agile / Scrum', 'OOP', 'UML', 'Merise', 'MVC', 'Design Patterns'],
  methodsFr: ['Agile / Scrum', 'POO', 'UML', 'Merise', 'MVC', 'Design Patterns'],
}

const tech = {
  ssp: ['Python', 'FastAPI', 'React', 'Vite', 'MySQL', 'Scikit-learn', 'SHAP', 'spaCy', 'OpenCV', 'ReportLab'],
  sgda: ['Laravel 11', 'React', 'Vite', 'React Native (Expo)', 'FastAPI', 'MySQL', 'WebSocket'],
  btp: ['Flask', 'spaCy', 'Scikit-learn', 'React', 'pytest'],
  parking: ['FastAPI', 'IoT (ESP32)', 'Machine Learning', 'Mobile app'],
  parkingFr: ['FastAPI', 'IoT (ESP32)', 'Machine Learning', 'Application mobile'],
  asment: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
}

// ---------- FRANÇAIS ----------
export const fr = {
  ui: {
    htmlLang: 'fr',
    pageTitle: 'Anass Lahrech — Ingénieur IA & Data Science',
    nav: {
      home: 'Accueil',
      about: 'À propos',
      skills: 'Compétences',
      projects: 'Projets',
      journey: 'Parcours',
      contact: 'Contact',
      logoLabel: "Retour à l'accueil",
      mainNav: 'Navigation principale',
      toLight: 'Passer en mode clair',
      toDark: 'Passer en mode sombre',
      theme: 'Changer de thème',
      menu: 'Ouvrir le menu',
      langBtn: 'EN',
      langLabel: 'Switch to English',
    },
    hero: {
      hello: '<Bonjour, je suis />',
      projects: 'Voir mes projets',
      cv: 'Télécharger mon CV',
      contact: 'Me contacter →',
      email: 'E-mail',
      ring: 'INGÉNIEUR IA • DATA SCIENCE • MULTI-AGENTS • FULL-STACK • ',
      portrait: 'Portrait de',
      success: '✓ succès probable',
    },
    about: {
      eyebrow: 'À propos',
      title: 'Qui suis-je ?',
      school: 'ISMAGI · Cycle Ingénieur 2023-2026',
      languages: 'Langues',
      qualities: 'Qualités',
    },
    skills: { eyebrow: 'Compétences', title: 'Ma boîte à outils' },
    projects: {
      eyebrow: 'Projets',
      title: "Ce que j'ai construit",
      filterLabel: 'Filtrer les projets',
      filters: { all: 'Tous', ia: 'IA & Data', web: 'Web', mobile: 'Mobile' },
      empty: 'Aucun projet principal dans cette catégorie.',
      hide: 'Masquer',
      show: 'Voir',
      others: 'les autres projets Web & Mobile',
      moreBefore: 'Plus de code sur',
      moreLink: 'mon GitHub',
    },
    journey: {
      eyebrow: 'Parcours',
      title: 'Expérience & Formation',
      experience: 'Expérience',
      education: 'Formation',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Travaillons ensemble',
      lead:
        "Je recherche un stage PFE de 6 mois. Une opportunité, une question, un projet ? Écrivez-moi, je réponds rapidement.",
      phone: 'Téléphone',
      formTitle: 'Envoyez-moi un message',
      name: 'Nom',
      email: 'E-mail',
      message: 'Message',
      send: 'Envoyer le message',
      subject: 'Contact portfolio',
    },
    footer: {
      sub: 'Ingénieur IA & Data Science · Développeur Full-Stack',
      cv: 'CV',
      rights: 'Tous droits réservés.',
    },
    backToTop: 'Retour en haut de page',
  },

  profile: {
    ...common,
    title: 'Ingénieur en Intelligence Artificielle, Data Science & Systèmes Multi-Agents',
    roles: [
      'Ingénieur IA & Data Science',
      'Développeur Full-Stack',
      'LLM · Systèmes Multi-Agents · MCP',
      'Machine Learning · NLP · Computer Vision',
    ],
    intro:
      "Je conçois des applications web et mobiles qui intègrent du Machine Learning, du NLP, de la vision par ordinateur et des agents IA, de la donnée brute jusqu'à l'interface utilisateur.",
    about: [
      "Ingénieur en Génie Informatique, option Intelligence Artificielle et Data Science (ISMAGI), titulaire d'une Licence Professionnelle en Développement Web et Mobile (2025).",
      "J'ai une solide expérience pratique du développement full-stack (web, mobile, API) et du Machine Learning, Deep Learning et NLP, acquise à travers plusieurs projets académiques et mon Projet de Fin d'Études (PFE) 2025-2026. Je maîtrise les LLM et les systèmes multi-agents (orchestration, tool calling, MCP).",
      "Je recherche un stage PFE de 6 mois pour contribuer à des projets innovants à forte valeur ajoutée.",
    ],
    available: 'Disponible : Stage PFE (6 mois)',
  },

  stats: [
    { value: '4', label: 'Projets IA & Data' },
    { value: '11+', label: 'Projets réalisés' },
    { value: '2', label: 'Stages en entreprise' },
    { value: '3', label: 'Langues parlées' },
  ],

  skills: [
    { title: 'Intelligence Artificielle & Data Science', icon: '🧠', items: skillItems.ia },
    { title: 'IA Générative & Systèmes Multi-Agents', icon: '🤖', items: skillItems.genai },
    { title: 'Langages', icon: '⌨️', items: skillItems.langages },
    { title: 'Frameworks Web', icon: '🌐', items: skillItems.web },
    { title: 'Mobile', icon: '📱', items: skillItems.mobile },
    { title: 'Bases de données', icon: '🗄️', items: skillItems.db },
    { title: 'API & Temps réel', icon: '🔌', items: skillItems.api },
    { title: 'DevOps & Outils', icon: '🛠️', items: skillItems.devops },
    { title: 'Front-end & Design', icon: '🎨', items: skillItems.front },
    { title: 'Méthodologies', icon: '📐', items: skillItems.methodsFr },
  ],

  // categories : 'ia' | 'web' | 'mobile'
  projects: [
    {
      title: 'Startup Success Predictor',
      subtitle: 'Prédiction de la réussite de startups marocaines',
      badge: 'PFE · 2026',
      categories: ['ia', 'web'],
      description:
        "Application web complète de Machine Learning prédisant le succès de startups marocaines à partir de données réelles (budget, secteur, ville, taille d'équipe, pitch).",
      highlights: [
        "API FastAPI modulaire : prédiction, statistiques, authentification faciale, tableau de bord admin, extraction d'entités NLP.",
        'Recommandations actionnables par perturbation du modèle et simulateur de sensibilité (budget / équipe / secteur).',
        'Recherche de startups similaires par distance pondérée (k-NN).',
        'NER avec spaCy sur les textes de pitch (ville, secteur, montant, technologie).',
        "Rapports PDF automatisés (ReportLab) avec graphiques d'interprétabilité SHAP.",
      ],
      tech: tech.ssp,
      featured: true,
    },
    {
      title: 'SGDA',
      subtitle: 'Système de Gestion des Demandes et Achats',
      badge: 'PFE · 2025-2026',
      categories: ['ia', 'web', 'mobile'],
      description:
        'Plateforme full-stack (web + mobile) de gestion des achats et de la chaîne logistique pour une entreprise marocaine du BTP, avec 5 rôles utilisateurs distincts.',
      highlights: [
        'Rôles : Admin, Chef Chantier, Magasinier, Comptable, Livreur.',
        "Workflow complet : demandes d'achat, bons de commande, bons de livraison, factures et paiements, avec notifications temps réel (WebSocket).",
        "Microservice ML (Isolation Forest) de détection d'anomalies, avec variables contextuelles (calendrier marocain, périodes fiscales).",
      ],
      tech: tech.sgda,
      featured: true,
    },
    {
      title: 'BTPDetect',
      subtitle: 'Détection de conflits entre plans de corps de métier',
      badge: 'Projet personnel',
      categories: ['ia', 'web'],
      description:
        'Outil de détection automatique de conflits spatiaux entre les plans de différents corps de métier dans le secteur du BTP.',
      highlights: [
        'Modèle NER entraîné sur un jeu de données enrichi (~390 exemples annotés).',
        'Validation croisée (StratifiedKFold) avec intervalle de confiance à 95 %.',
        'Suite de 13 tests unitaires automatisés (pytest).',
      ],
      tech: tech.btp,
    },
    {
      title: 'Smart Parking',
      subtitle: 'Stationnement intelligent IoT + IA',
      badge: 'Projet personnel',
      categories: ['ia', 'mobile'],
      description:
        'Solution complète de gestion de parking combinant capteurs IoT (ESP32), backend FastAPI, application mobile et tableau de bord administrateur.',
      highlights: ['Modèle de Machine Learning pour la prédiction de disponibilité des places.'],
      tech: tech.parkingFr,
    },
  ],

  otherProjects: [
    { title: 'Gestion des Examens', stack: 'Java, JSP/Servlet, MySQL', desc: 'Plateforme CRUD de gestion des examens, étudiants et questions.', category: 'web' },
    { title: 'Fitness & Nutrition', stack: 'Android Java, SQLite', desc: 'Application mobile de calcul de calories et génération de programmes alimentaires personnalisés.', category: 'mobile' },
    { title: "Réservation d'Amphithéâtres et Salles", stack: 'Java, REST API, SOAP, RMI, MySQL', desc: "Système multi-protocole d'intégration multi-plateforme.", category: 'web' },
    { title: 'E-commerce Équipements Sportifs', stack: 'Django, Python, MySQL', desc: 'Catalogue, commandes et gestion des utilisateurs.', category: 'web' },
    { title: "Site d'Offres d'Emploi", stack: 'Laravel, PHP, MySQL', desc: 'Plateforme avec espaces Candidat et Recruteur.', category: 'web' },
    { title: 'Suivi de Livraisons en Temps Réel', stack: 'Node.js, Express, MongoDB, Socket.IO, Google Maps API', desc: 'Application de tracking temps réel sur carte interactive.', category: 'web' },
    { title: 'Site Vitrine Marketing Digital', stack: 'React.js, CSS3, Bootstrap', desc: 'Site web professionnel responsive.', category: 'web' },
  ],

  experience: [
    {
      role: 'Stagiaire Développeur',
      company: 'Asment Temara',
      place: 'Aïn Atiq, Maroc',
      period: 'Juillet – Août 2024 · 2 mois',
      points: [
        "Développement d'une application web de gestion du parc matériel informatique (suivi, affectation, gestion des équipements).",
        "Implémentation des fonctionnalités CRUD, de la gestion des utilisateurs et d'un tableau de bord de suivi.",
      ],
      tech: tech.asment,
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
  ],

  education: [
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
  ],

  languages: [
    { name: 'Arabe', code: 'AR', level: 'Langue maternelle', percent: 100 },
    { name: 'Français', code: 'FR', level: 'Courant · C1', percent: 88 },
    { name: 'Anglais', code: 'EN', level: 'Intermédiaire · B1/B2', percent: 65 },
  ],

  qualities: [
    'Esprit analytique', 'Rigueur', 'Autonomie', 'Apprentissage rapide',
    'Travail en équipe', 'Adaptabilité', 'Curiosité technologique', 'Force de proposition',
  ],
}

// ---------- ENGLISH ----------
export const en = {
  ui: {
    htmlLang: 'en',
    pageTitle: 'Anass Lahrech — AI & Data Science Engineer',
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      journey: 'Journey',
      contact: 'Contact',
      logoLabel: 'Back to home',
      mainNav: 'Main navigation',
      toLight: 'Switch to light mode',
      toDark: 'Switch to dark mode',
      theme: 'Change theme',
      menu: 'Open menu',
      langBtn: 'FR',
      langLabel: 'Passer en français',
    },
    hero: {
      hello: "<Hello, I'm />",
      projects: 'View my projects',
      cv: 'Download my CV',
      contact: 'Contact me →',
      email: 'Email',
      ring: 'AI ENGINEER • DATA SCIENCE • MULTI-AGENT • FULL-STACK • ',
      portrait: 'Portrait of',
      success: '✓ likely success',
    },
    about: {
      eyebrow: 'About',
      title: 'Who am I?',
      school: 'ISMAGI · Engineering Cycle 2023-2026',
      languages: 'Languages',
      qualities: 'Strengths',
    },
    skills: { eyebrow: 'Skills', title: 'My toolbox' },
    projects: {
      eyebrow: 'Projects',
      title: "What I've built",
      filterLabel: 'Filter projects',
      filters: { all: 'All', ia: 'AI & Data', web: 'Web', mobile: 'Mobile' },
      empty: 'No main project in this category.',
      hide: 'Hide',
      show: 'Show',
      others: 'other Web & Mobile projects',
      moreBefore: 'More code on',
      moreLink: 'my GitHub',
    },
    journey: {
      eyebrow: 'Journey',
      title: 'Experience & Education',
      experience: 'Experience',
      education: 'Education',
    },
    contact: {
      eyebrow: 'Contact',
      title: "Let's work together",
      lead:
        "I'm looking for a 6-month final-year internship (PFE). An opportunity, a question, a project? Write to me, I reply quickly.",
      phone: 'Phone',
      formTitle: 'Send me a message',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send message',
      subject: 'Portfolio contact',
    },
    footer: {
      sub: 'AI & Data Science Engineer · Full-Stack Developer',
      cv: 'CV',
      rights: 'All rights reserved.',
    },
    backToTop: 'Back to top',
  },

  profile: {
    ...common,
    location: 'Rabat-Salé, Morocco',
    title: 'Engineer in Artificial Intelligence, Data Science & Multi-Agent Systems',
    roles: [
      'AI & Data Science Engineer',
      'Full-Stack Developer',
      'LLM · Multi-Agent Systems · MCP',
      'Machine Learning · NLP · Computer Vision',
    ],
    intro:
      'I build web and mobile applications that integrate Machine Learning, NLP, computer vision and AI agents, from raw data all the way to the user interface.',
    about: [
      "Computer Engineering graduate, Artificial Intelligence and Data Science track (ISMAGI), and holder of a Professional Bachelor's degree in Web and Mobile Development (2025).",
      'I have solid hands-on experience in full-stack development (web, mobile, APIs) and in Machine Learning, Deep Learning and NLP, gained through several academic projects and my final-year project (PFE) 2025-2026. I am proficient with LLMs and multi-agent systems (orchestration, tool calling, MCP).',
      "I'm looking for a 6-month final-year internship (PFE) where I can contribute to innovative, high-value projects.",
    ],
    available: 'Available: 6-month PFE internship',
  },

  stats: [
    { value: '4', label: 'AI & Data projects' },
    { value: '11+', label: 'Projects completed' },
    { value: '2', label: 'Company internships' },
    { value: '3', label: 'Languages spoken' },
  ],

  skills: [
    { title: 'Artificial Intelligence & Data Science', icon: '🧠', items: skillItems.ia },
    { title: 'Generative AI & Multi-Agent Systems', icon: '🤖', items: skillItems.genaiEn },
    { title: 'Languages', icon: '⌨️', items: skillItems.langages },
    { title: 'Web Frameworks', icon: '🌐', items: skillItems.web },
    { title: 'Mobile', icon: '📱', items: skillItems.mobile },
    { title: 'Databases', icon: '🗄️', items: skillItems.db },
    { title: 'APIs & Real-time', icon: '🔌', items: skillItems.api },
    { title: 'DevOps & Tools', icon: '🛠️', items: skillItems.devops },
    { title: 'Front-end & Design', icon: '🎨', items: skillItems.front },
    { title: 'Methodologies', icon: '📐', items: skillItems.methods },
  ],

  projects: [
    {
      title: 'Startup Success Predictor',
      subtitle: 'Predicting the success of Moroccan startups',
      badge: 'PFE · 2026',
      categories: ['ia', 'web'],
      description:
        'Complete Machine Learning web application that predicts the success of Moroccan startups from real data (budget, sector, city, team size, pitch).',
      highlights: [
        'Modular FastAPI backend: prediction, statistics, face authentication, admin dashboard, NLP entity extraction.',
        'Actionable recommendations through model perturbation and a sensitivity simulator (budget / team / sector).',
        'Similar-startup search using weighted distance (k-NN).',
        'spaCy NER on pitch texts (city, sector, amount, technology).',
        'Automated PDF reports (ReportLab) with SHAP interpretability charts.',
      ],
      tech: tech.ssp,
      featured: true,
    },
    {
      title: 'SGDA',
      subtitle: 'Request and Purchase Management System',
      badge: 'PFE · 2025-2026',
      categories: ['ia', 'web', 'mobile'],
      description:
        'Full-stack platform (web + mobile) for purchasing and supply-chain management at a Moroccan construction company, with 5 distinct user roles.',
      highlights: [
        'Roles: Admin, Site Manager, Storekeeper, Accountant, Delivery Driver.',
        'Complete workflow: purchase requests, purchase orders, delivery notes, invoices and payments, with real-time notifications (WebSocket).',
        'ML microservice (Isolation Forest) for anomaly detection, using contextual features (Moroccan calendar, fiscal periods).',
      ],
      tech: tech.sgda,
      featured: true,
    },
    {
      title: 'BTPDetect',
      subtitle: 'Conflict detection between construction trade plans',
      badge: 'Personal project',
      categories: ['ia', 'web'],
      description:
        'Tool that automatically detects spatial conflicts between the plans of different trades in the construction industry.',
      highlights: [
        'NER model trained on an enriched dataset (~390 annotated examples).',
        'Cross-validation (StratifiedKFold) with a 95% confidence interval.',
        'Suite of 13 automated unit tests (pytest).',
      ],
      tech: tech.btp,
    },
    {
      title: 'Smart Parking',
      subtitle: 'Smart parking with IoT + AI',
      badge: 'Personal project',
      categories: ['ia', 'mobile'],
      description:
        'Complete parking management solution combining IoT sensors (ESP32), a FastAPI backend, a mobile app and an admin dashboard.',
      highlights: ['Machine Learning model predicting parking space availability.'],
      tech: tech.parking,
    },
  ],

  otherProjects: [
    { title: 'Exam Management', stack: 'Java, JSP/Servlet, MySQL', desc: 'CRUD platform to manage exams, students and questions.', category: 'web' },
    { title: 'Fitness & Nutrition', stack: 'Android Java, SQLite', desc: 'Mobile app that calculates calories and generates personalized meal plans.', category: 'mobile' },
    { title: 'Lecture Hall & Room Booking', stack: 'Java, REST API, SOAP, RMI, MySQL', desc: 'Multi-protocol, cross-platform integration system.', category: 'web' },
    { title: 'Sports Equipment E-commerce', stack: 'Django, Python, MySQL', desc: 'Catalog, orders and user management.', category: 'web' },
    { title: 'Job Board', stack: 'Laravel, PHP, MySQL', desc: 'Platform with Candidate and Recruiter spaces.', category: 'web' },
    { title: 'Real-Time Delivery Tracking', stack: 'Node.js, Express, MongoDB, Socket.IO, Google Maps API', desc: 'Real-time tracking application on an interactive map.', category: 'web' },
    { title: 'Digital Marketing Showcase Site', stack: 'React.js, CSS3, Bootstrap', desc: 'Professional responsive website.', category: 'web' },
  ],

  experience: [
    {
      role: 'Developer Intern',
      company: 'Asment Temara',
      place: 'Aïn Atiq, Morocco',
      period: 'July – August 2024 · 2 months',
      points: [
        'Built a web application to manage the company’s IT equipment (tracking, assignment, equipment management).',
        'Implemented CRUD features, user management and a monitoring dashboard.',
      ],
      tech: tech.asment,
    },
    {
      role: 'Observation Intern',
      company: 'Information Systems Department (DSI)',
      place: 'Rabat Souissi, Morocco',
      period: '2022 · 1 month',
      points: [
        'Discovered the work environment of a public IT department: IT asset tracking, introduction to information systems management and network infrastructure.',
      ],
      tech: [],
    },
  ],

  education: [
    {
      title: 'Engineering Cycle — Computer Engineering, Artificial Intelligence track',
      school: 'ISMAGI, Morocco',
      period: '2023 – 2026',
      detail: 'Modules: Machine Learning, Deep Learning, NLP, Computer Vision, Big Data, Cloud Computing.',
    },
    {
      title: "Professional Bachelor's Degree — Web and Mobile Development",
      school: 'Higher education institution, Morocco',
      period: '2022 – 2025',
      detail: 'Degree obtained in 2025.',
    },
    {
      title: 'Baccalaureate — Physics-Chemistry, French Section',
      school: 'École Jean Charcot, Morocco',
      period: '2021',
      detail: '',
    },
  ],

  languages: [
    { name: 'Arabic', code: 'AR', level: 'Native', percent: 100 },
    { name: 'French', code: 'FR', level: 'Fluent · C1', percent: 88 },
    { name: 'English', code: 'EN', level: 'Intermediate · B1/B2', percent: 65 },
  ],

  qualities: [
    'Analytical mind', 'Rigor', 'Autonomy', 'Fast learner',
    'Teamwork', 'Adaptability', 'Tech curiosity', 'Proactive',
  ],
}