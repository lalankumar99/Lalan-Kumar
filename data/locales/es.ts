import { PortfolioContent } from "@/types";

export const es: PortfolioContent = {
  nav: [
    { label: "Inicio", href: "/" },
    { label: "Sobre mí", href: "/#about" },
    { label: "Habilidades", href: "/#skills" },
    { label: "Proyectos", href: "/projects" },
    { label: "Contacto", href: "/contact" },
  ],
  sections: {
    about: "Sobre mí",
    skills: "Habilidades",
    projects: "Proyectos",
    training: "Prácticas y Formación",
    education: "Educación",
    contact: "Contacto",
    visitProject: "Ver proyecto →",
    footerRights: "Todos los derechos reservados.",
  },
  profile: {
    name: "Lalan Kumar",
    role: "Estudiante de Diplomado en Ingeniería Eléctrica",
    college: "Government Polytechnic, Banka",
    location: "Banka, Bihar, India",
    bio: "Estudiante de 2.º año (3.er semestre) de Ingeniería Eléctrica enfocado en circuitos eléctricos, sistemas de potencia hasta 11 kV y creación de herramientas web prácticas para estudiantes.",
    aboutHeading: "Uniendo la Ingeniería Eléctrica con Herramientas Web Modernas",
    aboutText:
      "Estoy cursando un Diplomado en Ingeniería Eléctrica (2025–2028) en Government Polytechnic, Banka (SBTE Bihar). Mi enfoque principal son los circuitos eléctricos, la generación y distribución de energía y el cableado residencial. Además, desarrollo sitios web educativos ligeros y utilidades para ayudar a los estudiantes.",
    ctaPrimary: "Ver Proyectos",
    ctaSecondary: "Perfil de GitHub",
  },
  skills: [
    {
      id: "electrical",
      category: "Ingeniería Eléctrica Principal",
      items: [
        "Circuitos y Redes Eléctricas",
        "Sistemas de Potencia (hasta 11 kV)",
        "Cableado Residencial y Tableros",
        "Puesta a Tierra y Protección MCB",
        "Análisis de Medidores Inteligentes",
      ],
    },
    {
      id: "tech",
      category: "Web y Habilidades Técnicas",
      items: [
        "Python",
        "HTML y CSS",
        "JavaScript",
        "TypeScript",
        "Next.js",
        "GitHub y Vercel",
        "Diseño UI Responsivo",
        "SEO Básico",
      ],
    },
  ],
  projects: [
    {
      id: "lk-study-studio",
      name: "LK Study Studio",
      status: "En línea",
      description:
        "Plataforma de aprendizaje en línea con materiales de estudio y soporte de clases en vivo para estudiantes de 10.º grado (Bihar Board) y diplomado.",
      techStack: ["HTML", "CSS", "JavaScript", "Vercel"],
      link: "https://lk-study-studio.vercel.app",
    },
    {
      id: "gp-banka-portal",
      name: "Portal Estudiantil GP Banka",
      status: "En desarrollo",
      description:
        "Suite de utilidades con calculadora de SGPA a porcentaje, herramientas de calificaciones y horarios de clases para Government Polytechnic, Banka.",
      techStack: ["HTML", "CSS", "JavaScript", "PWA"],
      link: "https://gpbanka.vercel.app",
    },
    {
      id: "nanhi-pathshala",
      name: "Nanhi Pathshala",
      status: "En línea",
      description:
        "Aplicación web educativa interactiva para jóvenes estudiantes con historias, videos, actividades y cuestionarios.",
      techStack: ["Web App", "Firebase", "Vercel"],
      link: "https://nanhipathshala.vercel.app",
    },
    {
      id: "polytechnic-hub",
      name: "Polytechnic Hub",
      status: "Concepto / Proyecto",
      description:
        "Plataforma planificada de recursos educativos y cuestionarios diseñada específicamente para estudiantes politécnicos.",
      techStack: ["Concept", "UI Design", "Android / Web"],
      link: "#",
    },
  ],
  training: [
    {
      id: "cdac-3d-printing",
      title: "Impresión 3D y Fabricación Aditiva",
      organization: "C-DAC (en Bhagalpur College of Engineering)",
      type: "Prácticas / Formación",
      details:
        "Formación práctica en modelado CAD 3D (tuerca y perno, engranaje, gato de tornillo), preparación STL, laminado, operación de impresoras 3D, ingeniería inversa y escaneo 3D.",
    },
  ],
  education: [
    {
      id: "diploma-ee",
      degree: "Diplomado en Ingeniería Eléctrica",
      institution: "Government Polytechnic, Banka",
      board: "SBTE Bihar",
      duration: "2025 – 2028 (3.er Semestre)",
      details:
        "Enfocado en Circuitos Eléctricos, Generación y Distribución de Energía, Medición Eléctrica y Máquinas de CC.",
    },
    {
      id: "matriculation",
      degree: "Educación Secundaria (Clase 10)",
      institution: "High School Abhyuday Nagar, Banka",
      board: "BSEB Patna",
      duration: "2025",
      details: "Completado con un 78 % (388/500).",
    },
  ],
};
