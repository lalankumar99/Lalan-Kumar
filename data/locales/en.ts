import { PortfolioContent } from "@/types";

export const en: PortfolioContent = {
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Skills", href: "/#skills" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ],
  sections: {
    about: "About Me",
    skills: "Skills",
    projects: "Projects",
    training: "Internship & Training",
    education: "Education",
    contact: "Get in Touch",
    visitProject: "Visit Project →",
    footerRights: "All rights reserved.",
  },
  profile: {
    name: "Lalan Kumar",
    role: "Diploma in Electrical Engineering Student",
    college: "Government Polytechnic, Banka",
    location: "Banka, Bihar, India",
    bio: "2nd-year (3rd Semester) Electrical Engineering student focused on electrical circuits, power systems up to 11kV, and building practical web tools for students.",
    aboutHeading: "Bridging Core Electrical Engineering with Modern Web Tools",
    aboutText:
      "I am pursuing a Diploma in Electrical Engineering (2025–2028) at Government Polytechnic, Banka under SBTE Bihar. My primary academic focus is on electrical circuits, power generation, transmission, and residential wiring. Alongside my core studies, I build lightweight educational websites and utilities to help polytechnic and school students.",
    ctaPrimary: "View Projects",
    ctaSecondary: "GitHub Profile",
  },
  skills: [
    {
      id: "electrical",
      category: "Core Electrical Engineering",
      items: [
        "Electrical Circuits & Networks",
        "Power Systems (up to 11kV)",
        "Residential Wiring & Switchboards",
        "Earthing & MCB Protection",
        "Smart Energy Meter Analysis",
      ],
    },
    {
      id: "tech",
      category: "Web & Technical Skills",
      items: [
        "Python",
        "HTML & CSS",
        "JavaScript",
        "TypeScript",
        "Next.js",
        "GitHub & Vercel",
        "Responsive UI Design",
        "Basic SEO",
      ],
    },
  ],
  projects: [
    {
      id: "lk-study-studio",
      name: "LK Study Studio",
      status: "Live",
      description:
        "Online learning platform providing study materials and live class support for Bihar Board Class 10th and Diploma students.",
      techStack: ["HTML", "CSS", "JavaScript", "Vercel"],
      link: "https://lk-study-studio.vercel.app",
    },
    {
      id: "gp-banka-portal",
      name: "GP Banka Student Portal",
      status: "In Development",
      description:
        "Student utility suite featuring SGPA-to-percentage calculator, semester marks tools, and class routines for Government Polytechnic, Banka.",
      techStack: ["HTML", "CSS", "JavaScript", "PWA"],
      link: "https://gpbanka.vercel.app",
    },
    {
      id: "nanhi-pathshala",
      name: "Nanhi Pathshala",
      status: "Live",
      description:
        "Interactive educational web application for young learners featuring stories, videos, activities, and quizzes.",
      techStack: ["Web App", "Firebase", "Vercel"],
      link: "https://nanhipathshala.vercel.app",
    },
    {
      id: "polytechnic-hub",
      name: "Polytechnic Hub",
      status: "Concept / Project",
      description:
        "Planned educational resource and quiz platform designed specifically for polytechnic engineering students.",
      techStack: ["Concept", "UI Design", "Android / Web"],
      link: "#",
    },
  ],
  training: [
    {
      id: "cdac-3d-printing",
      title: "3D Printing & Additive Manufacturing",
      organization: "C-DAC (at Bhagalpur College of Engineering)",
      type: "Internship / Training",
      details:
        "Completed hands-on training covering 3D CAD modelling (Nut & Bolt, Gear, Screw Jack), STL preparation, slicing, 3D printer operation, reverse engineering, and 3D scanning.",
    },
  ],
  education: [
    {
      id: "diploma-ee",
      degree: "Diploma in Electrical Engineering",
      institution: "Government Polytechnic, Banka",
      board: "SBTE Bihar",
      duration: "2025 – 2028 (3rd Semester)",
      details:
        "Focusing on Electrical Circuits, Power Generation & Distribution, Electrical Measurement, and DC Machines.",
    },
    {
      id: "matriculation",
      degree: "Matriculation (Class 10th)",
      institution: "High School Abhyuday Nagar, Banka",
      board: "BSEB Patna",
      duration: "2025",
      details: "Completed matriculation with 78% marks (388/500).",
    },
  ],
};
