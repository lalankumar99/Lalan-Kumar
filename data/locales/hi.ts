import { PortfolioContent } from "@/types";

export const hi: PortfolioContent = {
  nav: [
    { label: "होम", href: "/" },
    { label: "परिचय", href: "/#about" },
    { label: "कौशल", href: "/#skills" },
    { label: "प्रोजेक्ट्स", href: "/projects" },
    { label: "संपर्क", href: "/contact" },
  ],
  sections: {
    about: "मेरे बारे में",
    skills: "कौशल (Skills)",
    projects: "प्रोजेक्ट्स",
    training: "इंटर्नशिप और ट्रेनिंग",
    education: "शिक्षा",
    contact: "संपर्क करें",
    visitProject: "प्रोजेक्ट देखें →",
    footerRights: "सर्वाधिकार सुरक्षित।",
  },
  profile: {
    name: "ललन कुमार",
    role: "डिप्लोमा इन इलेक्ट्रिकल इंजीनियरिंग छात्र",
    college: "गवर्नमेंट पॉलिटेक्निक, बांका",
    location: "बांका, बिहार, भारत",
    bio: "इलेक्ट्रिकल इंजीनियरिंग (द्वितीय वर्ष, तृतीय सेमेस्टर) का छात्र। इलेक्ट्रिकल सर्किट, 11kV तक के पावर सिस्टम और छात्रों के लिए उपयोगी वेब टूल्स बनाने पर फोकस।",
    aboutHeading: "इलेक्ट्रिकल इंजीनियरिंग और आधुनिक वेब टूल्स का संगम",
    aboutText:
      "मैं गवर्नमेंट पॉलिटेक्निक, बांका (SBTE बिहार) से इलेक्ट्रिकल इंजीनियरिंग में डिप्लोमा (2025–2028) कर रहा हूँ। मेरा मुख्य फोकस इलेक्ट्रिकल सर्किट, पावर जनरेशन, ट्रांसमिशन और घरेलू वायरिंग पर है। पढ़ाई के साथ-साथ मैं पॉलिटेक्निक और स्कूल के छात्रों के लिए हल्के और उपयोगी वेब एप्लिकेशन बनाता हूँ।",
    ctaPrimary: "प्रोजेक्ट्स देखें",
    ctaSecondary: "गिटहब प्रोफाइल",
  },
  skills: [
    {
      id: "electrical",
      category: "कोर इलेक्ट्रिकल इंजीनियरिंग",
      items: [
        "इलेक्ट्रिकल सर्किट और नेटवर्क",
        "पावर सिस्टम (11kV तक)",
        "घरेलू वायरिंग और स्विचबोर्ड",
        "अर्थिंग और MCB सुरक्षा",
        "स्मार्ट एनर्जी मीटर विश्लेषण",
      ],
    },
    {
      id: "tech",
      category: "वेब और तकनीकी कौशल",
      items: [
        "Python",
        "HTML और CSS",
        "JavaScript",
        "TypeScript",
        "Next.js",
        "GitHub और Vercel",
        "रिस्पॉन्सिव UI डिज़ाइन",
        "बेसिक SEO",
      ],
    },
  ],
  projects: [
    {
      id: "lk-study-studio",
      name: "LK Study Studio",
      status: "लाइव",
      description:
        "बिहार बोर्ड कक्षा 10वीं और डिप्लोमा के छात्रों के लिए स्टडी मटेरियल और ऑनलाइन क्लास सपोर्ट प्लेटफॉर्म।",
      techStack: ["HTML", "CSS", "JavaScript", "Vercel"],
      link: "https://lk-study-studio.vercel.app",
    },
    {
      id: "gp-banka-portal",
      name: "GP Banka स्टूडेंट पोर्टल",
      status: "विकास में",
      description:
        "गवर्नमेंट पॉलिटेक्निक, बांका के छात्रों के लिए SGPA-से-प्रतिशत कैलकुलेटर, सेमेस्टर टूल्स और क्लास रूटीन पोर्टल।",
      techStack: ["HTML", "CSS", "JavaScript", "PWA"],
      link: "https://gpbanka.vercel.app",
    },
    {
      id: "nanhi-pathshala",
      name: "ननी पाठशाला",
      status: "लाइव",
      description:
        "छोटे बच्चों के लिए कहानियों, वीडियो, गतिविधियों और क्विज़ से भरपूर इंटरैक्टिव एजुकेशनल वेब ऐप।",
      techStack: ["Web App", "Firebase", "Vercel"],
      link: "https://nanhipathshala.vercel.app",
    },
    {
      id: "polytechnic-hub",
      name: "Polytechnic Hub",
      status: "कॉन्सेप्ट / प्रोजेक्ट",
      description:
        "पॉलिटेक्निक इंजीनियरिंग के छात्रों के लिए प्रस्तावित एजुकेशनल रिसोर्स और क्विज़ प्लेटफॉर्म।",
      techStack: ["Concept", "UI Design", "Android / Web"],
      link: "#",
    },
  ],
  training: [
    {
      id: "cdac-3d-printing",
      title: "3D प्रिंटिंग और एडिटिव मैन्युफैक्चरिंग",
      organization: "C-DAC (भागलपुर कॉलेज ऑफ इंजीनियरिंग में)",
      type: "इंटर्नशिप / ट्रेनिंग",
      details:
        "3D CAD मॉडलिंग (नट और बोल्ट, गियर, स्क्रू जैक), STL फाइल तैयारी, स्लाइसिंग, 3D प्रिंटर संचालन, रिवर्स इंजीनियरिंग और 3D स्कैनिंग का व्यावहारिक प्रशिक्षण।",
    },
  ],
  education: [
    {
      id: "diploma-ee",
      degree: "डिप्लोमा इन इलेक्ट्रिकल इंजीनियरिंग",
      institution: "गवर्नमेंट पॉलिटेक्निक, बांका",
      board: "SBTE बिहार",
      duration: "2025 – 2028 (तृतीय सेमेस्टर)",
      details:
        "इलेक्ट्रिकल सर्किट, पावर जनरेशन और डिस्ट्रीब्यूशन, इलेक्ट्रिकल मेजरमेंट और डीसी मशीन पर मुख्य अध्ययन।",
    },
    {
      id: "matriculation",
      degree: "मैट्रिक (कक्षा 10वीं)",
      institution: "हाई स्कूल अभयदानगर, बांका",
      board: "BSEB पटना",
      duration: "2025",
      details: "78% अंकों (388/500) के साथ उत्तीर्ण।",
    },
  ],
};
