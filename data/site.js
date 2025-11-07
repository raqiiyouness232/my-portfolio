// /data/site.js — STRICTLY based on your PDF + your project list

export const profile = {
  name: "RAQI YOUNES",
  role: {
    fr: "Développeur Informatique",
    en: "Software Developer"
  },
  tagline: {
    fr: "Créer des sites performants, propres et bien référencés.",
    en: "Building fast, clean, and well-optimized websites."
  },
  avatar: "/images/avatar.jpg",
  email: "raqiyounes3@gmail.com",
  phone: "06 18 49 64 54",
  socials: {
    linkedin: "https://www.linkedin.com/in/younes-raqi-57826a2a9/"
  }
};

export const tech = {
  // From PDF — no additions
  languages: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
  frameworks: ["Laravel", "Next.js", "React.js"],
  cms: ["WordPress", "Shopify"],
  languagesSpoken: ["Anglais (avancé)", "Français (professionnelle)", "Arabe (natif)"]
};

// Projects — your live sites + the "coming soon" items you specified
export const projects = [
  {
    title: "Maroc Voyage Privé",
    description: "Site de voyages — pages circuits, contenu optimisé et SEO on-page.",
    image: "/images/marocvoyageprive.png",
    tech: ["WordPress"],
    tags: ["Travel", "SEO"],
    demoUrl: "https://marocvoyageprive.com",
    sourceUrl: null
  },
  {
    title: "Le Jardin Convivial",
    description: "Site vitrine — mise en avant des services avec design clair et rapide.",
    image: "/images/lejardinconvivial.png",
    tech: ["Shopify"],
    tags: ["Vitrine"],
    demoUrl: "https://lejardinconvivial.com",
    sourceUrl: null
  },
  {
    title: "The Exceptional Furniture",
    description: "Catalogue mobilier — fiches produits soignées, performance & SEO.",
    image: "/images/theexceptionalfurniture.png",
    tech: ["WordPress"],
    tags: ["E-commerce"],
    demoUrl: "https://theexceptionalfurniture.com",
    sourceUrl: null
  },
  {
    title: "Adnane Photography",
    description: "Portfolio photo — mise en valeur des galeries et des services.",
    image: "/images/photographerportfolio.png",
    tech: ["WordPress"],
    tags: ["Portfolio"],
    demoUrl: "https://adnanephotography.com/",
    sourceUrl: null
  },
  {
    title: "Bricollano",
    description: "Site / app de services — parcours simple, focus conversions.",
    image: "/images/bricollano.png",
    tech: ["Next.js"],
    tags: ["Services", "App"],
    demoUrl: "https://bricollano.it",
    sourceUrl: null
  },

  // Coming soon — exactly as you asked
  {
    title: "Nagiago (Coming Soon)",
    description: "Application mobile — lancement prochain.",
    image: "/images/mobile-app-placeholder.svg",
    tech: ["React Native"],
    tags: ["Mobile"],
    demoUrl: null,
    sourceUrl: null,
    status: "coming-soon"
  },
  {
    title: "Bricollano Mobile App (Coming Soon)",
    description: "Application mobile — en cours de développement.",
    image: "/images/mobile-app-placeholder.svg",
    tech: ["React Native"],
    tags: ["Mobile"],
    demoUrl: null,
    sourceUrl: null,
    status: "coming-soon"
  },
  {
    title: "Nouveau Site de Voyages (Coming Soon)",
    description: "Nouveau site travel — contenu & SEO en préparation.",
    image: "/images/travel-site-placeholder.svg",
    tech: ["Next.js"],
    tags: ["Travel"],
    demoUrl: null,
    sourceUrl: null,
    status: "coming-soon"
  }
];

// Experience — verbatim structure from your PDF
export const experience = [
  {
    role: "Développeur web (Stage)",
    company: "Solution Développement (SDEV)",
    location: "Marrakech, Maroc",
    start: "Février 2022",
    end: "Février 2022",
    bullets: [
      "1 mois - Développeur web au sein de l'entreprise Solution Développement."
    ]
  },
  {
    role: "Développeur web (Stage)",
    company: "Solution Développement (SDEV)",
    location: "Marrakech, Maroc",
    start: "Juin 2023",
    end: "Octobre 2023",
    bullets: [
      "4 mois - Développeur web au sein de l'entreprise Solution Développement."
    ]
  },
  {
    role: "Développeur web et SEO (Plein temps)",
    company: "Tribalart Morocco",
    location: "Marrakech, Maroc",
    start: "Août 2024",
    end: "Février 2025",
    bullets: [
      "6 mois - Création et mise à jour de sites internet, avec optimisation SEO."
    ]
  },
  {
    role: "Développeur web et SEO (Plein temps)",
    company: "Rayanox Events",
    location: "Marrakech, Maroc",
    start: "Février 2025",
    end: "Aujourd'hui",
    bullets: [
      "Optimisation SEO pour améliorer la visibilité des projets, création et mise à jour de sites."
    ]
  }
];

// Education — exactly as in your PDF (no certificates section)
export const education = [
  {
    school: "ESMA-ULCO",
    program: "Licence en technologies de l'information",
    start: "2022",
    end: "2023"
  },
  {
    school: "ISGI (OFPPT)",
    program: "Technicien spécialisé en développement informatique",
    start: "2020",
    end: "2022"
  },
  {
    school: "Faculté des Sciences Semlalia Marrakech",
    program: "Première année en sciences physiques",
    start: "2019",
    end: "2019"
  },
  {
    school: "Lycée Ibn Sina",
    program: "Baccalauréat en sciences physiques",
    start: "2018",
    end: "2018"
  }
];
