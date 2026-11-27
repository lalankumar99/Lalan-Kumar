import { PortfolioContent } from "@/types";

export const ar: PortfolioContent = {
  nav: [
    { label: "الرئيسية", href: "/" },
    { label: "عني", href: "/#about" },
    { label: "المهارات", href: "/#skills" },
    { label: "المشاريع", href: "/projects" },
    { label: "تواصل معي", href: "/contact" },
  ],
  sections: {
    about: "عني",
    skills: "المهارات",
    projects: "المشاريع",
    training: "التدريب العملي",
    education: "التعليم",
    contact: "تواصل معي",
    visitProject: "زيارة المشروع ←",
    footerRights: "جميع الحقوق محفوظة.",
  },
  profile: {
    name: "لالان كومار (Lalan Kumar)",
    role: "طالب دبلوم في الهندسة الكهربائية",
    college: "Government Polytechnic, Banka",
    location: "بانكا، بيهار، الهند",
    bio: "طالب في السنة الثانية (الفصل الثالث) في الهندسة الكهربائية، أركز على الدوائر الكهربائية وأنظمة الطاقة حتى 11 كيلوفولت وبناء أدوات ويب عملية للطلاب.",
    aboutHeading: "الجمع بين الهندسة الكهربائية وأدوات الويب الحديثة",
    aboutText:
      "أدرس دبلوم الهندسة الكهربائية (2025–2028) في Government Polytechnic, Banka (SBTE Bihar). يتركز اهتمامي الأساسي على الدوائر الكهربائية وتوليد وتوزيع الطاقة والتمديدات المنزلية، وإلى جانب دراستي أقوم بتطوير مواقع تعليمية خفيفة وأدوات مفيدة للطلاب.",
    ctaPrimary: "عرض المشاريع",
    ctaSecondary: "حساب GitHub",
  },
  skills: [
    {
      id: "electrical",
      category: "الهندسة الكهربائية الأساسية",
      items: [
        "الدوائر والشبكات الكهربائية",
        "أنظمة الطاقة (حتى 11 كيلوفولت)",
        "التمديدات المنزلية ولوحات التوزيع",
        "التأريض وحماية قواطع MCB",
        "تحليل عدادات الطاقة الذكية",
      ],
    },
    {
      id: "tech",
      category: "الويب والمهارات التقنية",
      items: [
        "Python",
        "HTML و CSS",
        "JavaScript",
        "TypeScript",
        "Next.js",
        "GitHub و Vercel",
        "تصميم واجهات متجاوبة",
        "أساسيات SEO",
      ],
    },
  ],
  projects: [
    {
      id: "lk-study-studio",
      name: "LK Study Studio",
      status: "متاح",
      description:
        "منصة تعليمية عبر الإنترنت توفر مواد دراسية ودعمًا للدروس المباشرة لطلاب الصف العاشر والدبلوم.",
      techStack: ["HTML", "CSS", "JavaScript", "Vercel"],
      link: "https://lk-study-studio.vercel.app",
    },
    {
      id: "gp-banka-portal",
      name: "بوابة طلاب GP Banka",
      status: "قيد التطوير",
      description:
        "مجموعة أدوات للطلاب تشمل حاسبة تحويل SGPA إلى نسبة مئوية وأدوات الدرجات وجداول الحصص.",
      techStack: ["HTML", "CSS", "JavaScript", "PWA"],
      link: "https://gpbanka.vercel.app",
    },
    {
      id: "nanhi-pathshala",
      name: "Nanhi Pathshala",
      status: "متاح",
      description:
        "تطبيق ويب تعليمي تفاعلي للصغار يحتوي على قصص وفيديوهات وأنشطة واختبارات.",
      techStack: ["Web App", "Firebase", "Vercel"],
      link: "https://nanhipathshala.vercel.app",
    },
    {
      id: "polytechnic-hub",
      name: "Polytechnic Hub",
      status: "فكرة / مشروع",
      description:
        "منصة مقترحة للموارد التعليمية والاختبارات مخصصة لطلاب المعاهد التقنية.",
      techStack: ["Concept", "UI Design", "Android / Web"],
      link: "#",
    },
  ],
  training: [
    {
      id: "cdac-3d-printing",
      title: "الطباعة ثلاثية الأبعاد والتصنيع الإضافي",
      organization: "C-DAC (في Bhagalpur College of Engineering)",
      type: "تدريب عملي",
      details:
        "تدريب عملي شمل النمذجة ثلاثية الأبعاد CAD وإعداد ملفات STL والتقطيع وتشغيل الطابعات ثلاثية الأبعاد والهندسة العكسية والمسح ثلاثي الأبعاد.",
    },
  ],
  education: [
    {
      id: "diploma-ee",
      degree: "دبلوم في الهندسة الكهربائية",
      institution: "Government Polytechnic, Banka",
      board: "SBTE Bihar",
      duration: "2025 – 2028 (الفصل الثالث)",
      details:
        "التركيز على الدوائر الكهربائية وتوليد وتوزيع الطاقة والقياسات الكهربائية وآلات التيار المستمر.",
    },
    {
      id: "matriculation",
      degree: "الشهادة الثانوية (الصف العاشر)",
      institution: "High School Abhyuday Nagar, Banka",
      board: "BSEB Patna",
      duration: "2025",
      details: "أتممت الدراسة بنسبة 78% (388/500).",
    },
  ],
};
