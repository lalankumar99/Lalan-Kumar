import { PortfolioContent } from "@/types";

export const fr: PortfolioContent = {
  nav: [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "/#about" },
    { label: "Compétences", href: "/#skills" },
    { label: "Projets", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ],
  sections: {
    about: "À propos de moi",
    skills: "Compétences",
    projects: "Projets",
    training: "Stage et Formation",
    education: "Éducation",
    contact: "Me contacter",
    visitProject: "Voir le projet →",
    footerRights: "Tous droits réservés.",
  },
  profile: {
    name: "Lalan Kumar",
    role: "Étudiant en Diplôme de Génie Électrique",
    college: "Government Polytechnic, Banka",
    location: "Banka, Bihar, Inde",
    bio: "Étudiant en 2e année (3e semestre) de génie électrique, spécialisé dans les circuits électriques, les réseaux jusqu'à 11 kV et la création d'outils web pratiques pour les étudiants.",
    aboutHeading: "Allier Génie Électrique et Outils Web Modernes",
    aboutText:
      "Je prépare un diplôme en génie électrique (2025–2028) au Government Polytechnic, Banka (SBTE Bihar). Mon parcours se concentre sur les circuits électriques, la production et la distribution d'énergie, ainsi que le câblage résidentiel. En parallèle, je conçois des sites éducatifs légers et des utilitaires pour aider les étudiants.",
    ctaPrimary: "Voir les projets",
    ctaSecondary: "Profil GitHub",
  },
  skills: [
    {
      id: "electrical",
      category: "Génie Électrique Fondamental",
      items: [
        "Circuits et Réseaux Électriques",
        "Systèmes de Puissance (jusqu'à 11 kV)",
        "Câblage Résidentiel et Tableaux",
        "Mise à la Terre et Protection MCB",
        "Analyse de Compteurs Intelligents",
      ],
    },
    {
      id: "tech",
      category: "Web et Compétences Techniques",
      items: [
        "Python",
        "HTML & CSS",
        "JavaScript",
        "TypeScript",
        "Next.js",
        "GitHub & Vercel",
        "Design UI Responsive",
        "SEO de base",
      ],
    },
  ],
  projects: [
    {
      id: "lk-study-studio",
      name: "LK Study Studio",
      status: "En ligne",
      description:
        "Plateforme d'apprentissage en ligne offrant des ressources et des cours en direct pour les élèves de 10e année (Bihar Board) et les étudiants en diplôme.",
      techStack: ["HTML", "CSS", "JavaScript", "Vercel"],
      link: "https://lk-study-studio.vercel.app",
    },
    {
      id: "gp-banka-portal",
      name: "Portail Étudiant GP Banka",
      status: "En développement",
      description:
        "Suite d'outils pour les étudiants comprenant un calculateur SGPA-en-pourcentage, des outils de notes et les emplois du temps.",
      techStack: ["HTML", "CSS", "JavaScript", "PWA"],
      link: "https://gpbanka.vercel.app",
    },
    {
      id: "nanhi-pathshala",
      name: "Nanhi Pathshala",
      status: "En ligne",
      description:
        "Application web éducative interactive pour les jeunes élèves avec des histoires, vidéos, activités et quiz.",
      techStack: ["Web App", "Firebase", "Vercel"],
      link: "https://nanhipathshala.vercel.app",
    },
    {
      id: "polytechnic-hub",
      name: "Polytechnic Hub",
      status: "Concept / Projet",
      description:
        "Plateforme prévue de ressources éducatives et de quiz dédiée aux étudiants en écoles polytechniques.",
      techStack: ["Concept", "UI Design", "Android / Web"],
      link: "#",
    },
  ],
  training: [
    {
      id: "cdac-3d-printing",
      title: "Impression 3D et Fabrication Additive",
      organization: "C-DAC (au Bhagalpur College of Engineering)",
      type: "Stage / Formation",
      details:
        "Formation pratique couvrant la modélisation CAO 3D (écrou et boulon, engrenage, cric à vis), préparation STL, découpage, utilisation d'imprimantes 3D, rétro-ingénierie et scan 3D.",
    },
  ],
  education: [
    {
      id: "diploma-ee",
      degree: "Diplôme en Génie Électrique",
      institution: "Government Polytechnic, Banka",
      board: "SBTE Bihar",
      duration: "2025 – 2028 (3e Semestre)",
      details:
        "Axé sur les circuits électriques, la production et distribution d'énergie, les mesures électriques et les machines à courant continu.",
    },
    {
      id: "matriculation",
      degree: "Matriculation (Classe 10)",
      institution: "High School Abhyuday Nagar, Banka",
      board: "BSEB Patna",
      duration: "2025",
      details: "Obtenu avec 78 % (388/500).",
    },
  ],
};
