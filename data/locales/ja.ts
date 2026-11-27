import { PortfolioContent } from "@/types";

export const ja: PortfolioContent = {
  nav: [
    { label: "ホーム", href: "/" },
    { label: "自己紹介", href: "/#about" },
    { label: "スキル", href: "/#skills" },
    { label: "プロジェクト", href: "/projects" },
    { label: "お問い合わせ", href: "/contact" },
  ],
  sections: {
    about: "自己紹介",
    skills: "スキル",
    projects: "プロジェクト",
    training: "インターンシップ・研修",
    education: "学歴",
    contact: "お問い合わせ",
    visitProject: "プロジェクトを見る →",
    footerRights: "All rights reserved.",
  },
  profile: {
    name: "Lalan Kumar",
    role: "電気工学ディプロマ課程 学生",
    college: "Government Polytechnic, Banka",
    location: "インド・ビハール州バンカ (Banka, Bihar, India)",
    bio: "電気工学2年生（第3学期）。電気回路、11kVまでの電力システムを専攻しつつ、学生向けの実用的なWebツールを開発しています。",
    aboutHeading: "電気工学の基礎とモダンなWebツールの融合",
    aboutText:
      "SBTEビハール傘下の Government Polytechnic, Banka にて電気工学のディプロマ課程（2025–2028）を専攻しています。電気回路、発電・送配電、住宅配線を中心に学びながら、学生向けの軽量な学習サイトや便利ツールを制作しています。",
    ctaPrimary: "プロジェクトを見る",
    ctaSecondary: "GitHubプロフィール",
  },
  skills: [
    {
      id: "electrical",
      category: "電気工学（専門分野）",
      items: [
        "電気回路・ネットワーク",
        "電力システム（11kVまで）",
        "住宅配線・分電盤",
        "接地・MCB保護",
        "スマートメーター解析",
      ],
    },
    {
      id: "tech",
      category: "Web・技術スキル",
      items: [
        "Python",
        "HTML & CSS",
        "JavaScript",
        "TypeScript",
        "Next.js",
        "GitHub & Vercel",
        "レスポンシブUIデザイン",
        "基礎SEO",
      ],
    },
  ],
  projects: [
    {
      id: "lk-study-studio",
      name: "LK Study Studio",
      status: "公開中",
      description:
        "ビハール州10年生およびディプロマ学生向けの学習教材・オンライン授業サポートプラットフォーム。",
      techStack: ["HTML", "CSS", "JavaScript", "Vercel"],
      link: "https://lk-study-studio.vercel.app",
    },
    {
      id: "gp-banka-portal",
      name: "GP Banka 学生ポータル",
      status: "開発中",
      description:
        "SGPAからパーセンテージへの換算ツール、成績ツール、時間割を備えた学生向けユーティリティ。",
      techStack: ["HTML", "CSS", "JavaScript", "PWA"],
      link: "https://gpbanka.vercel.app",
    },
    {
      id: "nanhi-pathshala",
      name: "Nanhi Pathshala",
      status: "公開中",
      description:
        "物語、動画、アクティビティ、クイズを備えた子ども向けのインタラクティブ学習Webアプリ。",
      techStack: ["Web App", "Firebase", "Vercel"],
      link: "https://nanhipathshala.vercel.app",
    },
    {
      id: "polytechnic-hub",
      name: "Polytechnic Hub",
      status: "コンセプト / 企画",
      description:
        "ポリテクニック工学生向けに計画中の学習リソース・クイズプラットフォーム。",
      techStack: ["Concept", "UI Design", "Android / Web"],
      link: "#",
    },
  ],
  training: [
    {
      id: "cdac-3d-printing",
      title: "3Dプリンティング・積層造形",
      organization: "C-DAC（Bhagalpur College of Engineering にて実施）",
      type: "インターンシップ / 研修",
      details:
        "3D CADモデリング（ナット＆ボルト、ギア、スクリュージャッキ）、STLデータ作成、スライシング、3Dプリンター操作、リバースエンジニアリング、3Dスキャンの実践研修を修了。",
    },
  ],
  education: [
    {
      id: "diploma-ee",
      degree: "電気工学ディプロマ (Diploma in Electrical Engineering)",
      institution: "Government Polytechnic, Banka",
      board: "SBTE Bihar",
      duration: "2025 – 2028（第3学期）",
      details: "電気回路、発電・配電、電気計測、直流機を中心に学習。",
    },
    {
      id: "matriculation",
      degree: "中等教育修了（第10学年）",
      institution: "High School Abhyuday Nagar, Banka",
      board: "BSEB Patna",
      duration: "2025",
      details: "78%（388/500点）で修了。",
    },
  ],
};
