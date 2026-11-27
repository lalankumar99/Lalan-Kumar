import { PortfolioContent } from "@/types";

export const de: PortfolioContent = {
  nav: [
    { label: "Startseite", href: "/" },
    { label: "Über mich", href: "/#about" },
    { label: "Fähigkeiten", href: "/#skills" },
    { label: "Projekte", href: "/projects" },
    { label: "Kontakt", href: "/contact" },
  ],
  sections: {
    about: "Über mich",
    skills: "Fähigkeiten",
    projects: "Projekte",
    training: "Praktikum & Weiterbildung",
    education: "Ausbildung",
    contact: "Kontakt aufnehmen",
    visitProject: "Projekt ansehen →",
    footerRights: "Alle Rechte vorbehalten.",
  },
  profile: {
    name: "Lalan Kumar",
    role: "Student für Elektrotechnik (Diploma)",
    college: "Government Polytechnic, Banka",
    location: "Banka, Bihar, Indien",
    bio: "Elektrotechnik-Student im 2. Jahr (3. Semester) mit Fokus auf Stromkreise, Energiesysteme bis 11 kV und die Entwicklung praktischer Web-Tools für Studierende.",
    aboutHeading: "Verbindung von Elektrotechnik und modernen Web-Tools",
    aboutText:
      "Ich absolviere ein Diploma in Elektrotechnik (2025–2028) am Government Polytechnic, Banka (SBTE Bihar). Mein Schwerpunkt liegt auf elektrischen Schaltungen, Energieerzeugung, Übertragung und Hausinstallationen. Neben dem Studium entwickle ich leichtgewichtige Bildungs-Websites und nützliche Tools für Schüler und Studierende.",
    ctaPrimary: "Projekte ansehen",
    ctaSecondary: "GitHub-Profil",
  },
  skills: [
    {
      id: "electrical",
      category: "Elektrotechnik (Kernbereich)",
      items: [
        "Elektrische Schaltungen & Netzwerke",
        "Energiesysteme (bis 11 kV)",
        "Hausinstallation & Schalttafeln",
        "Erdung & MCB-Schutz",
        "Smart-Meter-Analyse",
      ],
    },
    {
      id: "tech",
      category: "Web & Technische Fähigkeiten",
      items: [
        "Python",
        "HTML & CSS",
        "JavaScript",
        "TypeScript",
        "Next.js",
        "GitHub & Vercel",
        "Responsives UI-Design",
        "Basis-SEO",
      ],
    },
  ],
  projects: [
    {
      id: "lk-study-studio",
      name: "LK Study Studio",
      status: "Live",
      description:
        "Online-Lernplattform mit Lernmaterialien und Live-Unterricht für Schüler der 10. Klasse (Bihar Board) und Diploma-Studierende.",
      techStack: ["HTML", "CSS", "JavaScript", "Vercel"],
      link: "https://lk-study-studio.vercel.app",
    },
    {
      id: "gp-banka-portal",
      name: "GP Banka Studentenportal",
      status: "In Entwicklung",
      description:
        "Tool-Sammlung mit SGPA-zu-Prozent-Rechner, Semester-Tools und Stundenplänen für das Government Polytechnic, Banka.",
      techStack: ["HTML", "CSS", "JavaScript", "PWA"],
      link: "https://gpbanka.vercel.app",
    },
    {
      id: "nanhi-pathshala",
      name: "Nanhi Pathshala",
      status: "Live",
      description:
        "Interaktive Bildungs-Web-App für junge Lernende mit Geschichten, Videos, Aktivitäten und Quizzen.",
      techStack: ["Web App", "Firebase", "Vercel"],
      link: "https://nanhipathshala.vercel.app",
    },
    {
      id: "polytechnic-hub",
      name: "Polytechnic Hub",
      status: "Konzept / Projekt",
      description:
        "Geplante Bildungsressourcen- und Quiz-Plattform speziell für Studierende an Polytechniken.",
      techStack: ["Concept", "UI Design", "Android / Web"],
      link: "#",
    },
  ],
  training: [
    {
      id: "cdac-3d-printing",
      title: "3D-Druck & Additive Fertigung",
      organization: "C-DAC (am Bhagalpur College of Engineering)",
      type: "Praktikum / Training",
      details:
        "Praxistraining in 3D-CAD-Modellierung (Mutter & Schraube, Zahnrad, Wagenheber), STL-Vorbereitung, Slicing, 3D-Drucker-Bedienung, Reverse Engineering und 3D-Scanning.",
    },
  ],
  education: [
    {
      id: "diploma-ee",
      degree: "Diploma in Elektrotechnik",
      institution: "Government Polytechnic, Banka",
      board: "SBTE Bihar",
      duration: "2025 – 2028 (3. Semester)",
      details:
        "Schwerpunkt auf elektrischen Schaltungen, Energieerzeugung & -verteilung, elektrischer Messtechnik und Gleichstrommaschinen.",
    },
    {
      id: "matriculation",
      degree: "Mittlere Reife (Klasse 10)",
      institution: "High School Abhyuday Nagar, Banka",
      board: "BSEB Patna",
      duration: "2025",
      details: "Abgeschlossen mit 78 % (388/500 Punkten).",
    },
  ],
};
