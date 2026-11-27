import { PortfolioContent } from "@/types";

export const zh: PortfolioContent = {
  nav: [
    { label: "首页", href: "/" },
    { label: "关于我", href: "/#about" },
    { label: "技能", href: "/#skills" },
    { label: "项目", href: "/projects" },
    { label: "联系", href: "/contact" },
  ],
  sections: {
    about: "关于我",
    skills: "专业技能",
    projects: "项目展示",
    training: "实习与培训",
    education: "教育背景",
    contact: "联系我",
    visitProject: "查看项目 →",
    footerRights: "保留所有权利。",
  },
  profile: {
    name: "Lalan Kumar",
    role: "电气工程文凭课程学生",
    college: "Government Polytechnic, Banka",
    location: "印度比哈尔邦班卡 (Banka, Bihar, India)",
    bio: "电气工程二年级（第三学期）学生，专注于电路、11kV以下电力系统，并为学生构建实用的Web工具。",
    aboutHeading: "将核心电气工程与现代Web工具相结合",
    aboutText:
      "我目前在印度比哈尔邦技术教育委员会 (SBTE Bihar) 下属的 Government Polytechnic, Banka 攻读电气工程文凭 (2025–2028)。我的主要学习重点是电路、发电、输电和住宅布线。在核心学业之外，我还为理工学院和学校的学生开发轻量级教育网站和实用工具。",
    ctaPrimary: "查看项目",
    ctaSecondary: "GitHub 主页",
  },
  skills: [
    {
      id: "electrical",
      category: "核心电气工程",
      items: [
        "电路与网络",
        "电力系统 (11kV以下)",
        "住宅布线与配电板",
        "接地与MCB保护",
        "智能电表分析",
      ],
    },
    {
      id: "tech",
      category: "Web与技术技能",
      items: [
        "Python",
        "HTML & CSS",
        "JavaScript",
        "TypeScript",
        "Next.js",
        "GitHub & Vercel",
        "响应式UI设计",
        "基础SEO",
      ],
    },
  ],
  projects: [
    {
      id: "lk-study-studio",
      name: "LK Study Studio",
      status: "已上线",
      description:
        "为比哈尔邦10年级和专科学生提供学习资料和在线课程支持的教育平台。",
      techStack: ["HTML", "CSS", "JavaScript", "Vercel"],
      link: "https://lk-study-studio.vercel.app",
    },
    {
      id: "gp-banka-portal",
      name: "GP Banka 学生门户",
      status: "开发中",
      description:
        "为 Government Polytechnic, Banka 学生打造的工具套件，包含SGPA转百分比计算器、成绩工具和课程表。",
      techStack: ["HTML", "CSS", "JavaScript", "PWA"],
      link: "https://gpbanka.vercel.app",
    },
    {
      id: "nanhi-pathshala",
      name: "Nanhi Pathshala",
      status: "已上线",
      description:
        "面向低龄学生的互动学习Web应用，包含故事、视频、活动和测验。",
      techStack: ["Web App", "Firebase", "Vercel"],
      link: "https://nanhipathshala.vercel.app",
    },
    {
      id: "polytechnic-hub",
      name: "Polytechnic Hub",
      status: "概念 / 项目",
      description:
        "专为理工学院工程学生规划的教育资源和测验平台。",
      techStack: ["Concept", "UI Design", "Android / Web"],
      link: "#",
    },
  ],
  training: [
    {
      id: "cdac-3d-printing",
      title: "3D打印与增材制造",
      organization: "C-DAC (于 Bhagalpur College of Engineering)",
      type: "实习 / 培训",
      details:
        "完成了涵盖3D CAD建模（螺母与螺栓、齿轮、螺旋千斤顶）、STL文件准备、切片、3D打印机操作、逆向工程和3D扫描的实践培训。",
    },
  ],
  education: [
    {
      id: "diploma-ee",
      degree: "电气工程文凭 (Diploma in Electrical Engineering)",
      institution: "Government Polytechnic, Banka",
      board: "SBTE Bihar",
      duration: "2025 – 2028 (第三学期)",
      details: "主修电路、发电与配电、电气测量和直流电机。",
    },
    {
      id: "matriculation",
      degree: "初中毕业 (Class 10th)",
      institution: "High School Abhyuday Nagar, Banka",
      board: "BSEB Patna",
      duration: "2025",
      details: "以78%的成绩 (388/500) 完成学业。",
    },
  ],
};
