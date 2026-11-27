export const PORTFOLIO_IMAGES = {
  profile: "/profile.png",
  briefLink:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCrTsGcmP-YgAr4zkgiWMGt3B-q9yhKKIpw_llL85oS82m0eKhcxSdizeNewbrulP6CKHFUzBFpuZ6j5HBJXxQoc0C7dBT1eZ_lpI88wgD5SNXejo7AMEHtDA2bGKpzFogAHRTXeXXZXT36SRiN7Mr31WJArKO0VxLLIbAP0GZWZj3z99zfi9FueWewS0pVQjNHJYF82yrP4Hu4AQ3hLyS0bL92V0TpTbI5pgvKpKf6",
  chronicleJournal:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAvIGAXyf4TQ3CZ71tUzTg3gWecPAGlS5-ifCYnDxNvzu8Jxb_pEByqd4K1pXdW5hUNgj_Euo5yk7H4pNIAIM1XuFZoi2MTJw4r6w5OM210sMf3aOpHZVfeBVrosYfomJ6KzsRoTh-s2RqzyORNPgVNZyMEMX9ghkDESPmm5owdSnHGYRH2caSEzRxP2Ff5LsE-24a9YK-QsImG5Nufnzcoqrce-ezy-4_ECP4LsyDj",
  atmosphere:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDN9wlqRIcVJ3xuNHZjmEw13NjB4Hm0ZtBFZLZWnZ12VUPGD-3ln-_72uekZVkchrvGHfUyZMyQUKcbhb9c9mLy2r1RxPLeoVVPvmtiNt7U_1RiL0Slu1mhdBGvTdCqrJUrLh3Ovg_nsy_VsUxHglKd67UCMGFXY_3hhYUmcTlIzeIpZ7IX38P9TcNKNtzNqcofCyAt_eDzq5raj3IkSN2I9StXr_Coiht6Es4m9m2E",
} as const;

export const RESUME_URL = "/resume.pdf";

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "journey", label: "Journey", href: "#journey" },
  { id: "beyond", label: "Beyond", href: "#beyond" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export interface ProjectItem {
  id: string;
  category: string;
  categoryAccent: "primary" | "tertiary" | "primary-container";
  title: string;
  description: string;
  stack: string[];
  browserPath: string;
  imageUrl: string;
  imageAlt: string;
  liveUrl: string;
  sourceUrl: string;
  reverseLayout?: boolean;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "brieflink",
    category: "Full-Stack SaaS · System Design",
    categoryAccent: "primary",
    title: "BriefLink — Smart URL Shortener",
    description:
      "A high-performance URL shortening platform that transforms unwieldy URLs into concise, branded links. Features real-time click stream analytics, custom slug allocation, and instant downloadable QR codes.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    browserPath: "chieflink.internal / dashboard",
    imageUrl: PORTFOLIO_IMAGES.briefLink,
    imageAlt:
      "A clean modern web application UI dashboard for a URL shortener called BriefLink showing traffic analytics chart with deep blue wave curves, referral metrics for Twitter and LinkedIn, and a table of recently shortened links with QR codes on a soft light grey canvas.",
    liveUrl: "#projects",
    sourceUrl: "https://github.com",
  },
  {
    id: "chronicle",
    category: "Productivity & Markdown Engine",
    categoryAccent: "tertiary",
    title: "Chronicle Journal — Distraction-Free Writing",
    description:
      "A serene journal application designed to help users capture, organize, and reflect upon personal thoughts. Features an interactive calendar overview, metadata taxonomy, and an authentic serif writing canvas.",
    stack: ["Java", "Spring Boot", "REST APIs", "PostgreSQL"],
    browserPath: "chronicle.app / journal-editor",
    imageUrl: PORTFOLIO_IMAGES.chronicleJournal,
    imageAlt:
      "Editorial screenshot of a minimalist digital journal application called Chronicle Journal showing an open writing notebook with warm beige tones, calendar sidebar, tags, and clean serif typography in reflection entry mode.",
    liveUrl: "#projects",
    sourceUrl: "https://github.com",
    reverseLayout: true,
  },
  {
    id: "atmosphere",
    category: "Data Visualization & Live Telemetry",
    categoryAccent: "primary-container",
    title: "Atmosphere — Atmospheric Dashboard",
    description:
      "A responsive weather application presenting multi-layered meteorological data in an intuitive interface. Integrates real-time sensor metrics, interactive precipitation curves, and 5-day forecasts.",
    stack: ["React.js", "JavaScript (ES6+)", "OpenWeather API", "Tailwind CSS"],
    browserPath: "atmosphere.io / bangalore-live",
    imageUrl: PORTFOLIO_IMAGES.atmosphere,
    imageAlt:
      "A futuristic dark themed weather telemetry dashboard titled Atmosphere displayed on a sleek desktop monitor showing precipitation graphs, UV index gauge, humidity, wind indicators, and a five day forecast with glassmorphism.",
    liveUrl: "#projects",
    sourceUrl: "https://github.com",
  },
];

export interface SkillGroup {
  id: string;
  title: string;
  subtitle: string;
  dotColor?: "primary" | "primary-container" | "tertiary";
  items: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend",
    subtitle: "User Interfaces & State",
    dotColor: "primary",
    items: [
      "React.js",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "HTML5 / CSS3",
      "Responsive Layouts",
    ],
  },
  {
    id: "backend",
    title: "Backend",
    subtitle: "Server Logic & Microservices",
    dotColor: "primary-container",
    items: ["Java", "Spring Boot", "Node.js", "Express.js", "RESTful APIs"],
  },
  {
    id: "database",
    title: "Data Stores",
    subtitle: "Persistence & Schema Design",
    dotColor: "tertiary",
    items: [
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "Indexing & Query Optimization",
    ],
  },
  {
    id: "devops",
    title: "Tools & DevOps",
    subtitle: "Environment & Delivery",
    items: ["Git & GitHub", "Docker", "AWS Basics", "Linux / Bash", "Postman"],
  },
];

export interface AiFocusItem {
  title: string;
  description: string;
}

export const AI_FOCUS_ITEMS: AiFocusItem[] = [
  {
    title: "Generative AI & LLMs",
    description:
      "Prompt engineering, fine-tuning, and integrating OpenAI & Claude APIs.",
  },
  {
    title: "LangChain & Agents",
    description:
      "Autonomous tool usage, multi-agent collaboration, and structured reasoning.",
  },
  {
    title: "Vector Embeddings & RAG",
    description:
      "Semantic search pipelines, chunking strategies, and knowledge grounding.",
  },
  {
    title: "Machine Learning Core",
    description:
      "Supervised learning foundations, neural net math, and scikit-learn models.",
  },
];

export interface TimelineNode {
  period: string;
  phase: string;
  title: string;
  description: string;
  isCurrent?: boolean;
  badge?: string;
}

export const TIMELINE_NODES: TimelineNode[] = [
  {
    period: "2026 — PRESENT",
    phase: "Selected & Transitioning",
    title: "Selected @ KPIT Technologies",
    description:
      "Earned a software engineering role through rigorous competitive assessments and technical evaluations. Continuing to deepen engineering discipline while scaling expertise in modern enterprise web architecture and automotive-grade software quality.",
    isCurrent: true,
    badge: "Milestone",
  },
  {
    period: "2025",
    phase: "Full-Stack Synthesis",
    title: "Full-Stack Specialization & Applied AI",
    description:
      "Designed and deployed production-grade applications including BriefLink and Chronicle Journal. Architected microservices with Spring Boot, managed distributed state with React, and begun integrating machine intelligence frameworks into web frontends.",
  },
  {
    period: "2024",
    phase: "Fundamentals & Architecture",
    title: "Core Algorithms & System Fundamentals",
    description:
      "Deep dive into algorithmic complexity, relational database schema design, and Object-Oriented Principles in Java. Strengthened programmatic stamina solving competitive tracks on LeetCode.",
  },
  {
    period: "2023",
    phase: "Initiation",
    title: "Commenced Computer Science & Engineering",
    description:
      "Began formal degree program in Computer Science. Built early prototypes with vanilla JavaScript, grasped computer architecture, operating systems, and discrete mathematics.",
  },
];

export interface BeyondItem {
  id: string;
  title: string;
  description: string;
  tag: string;
}

export const BEYOND_ITEMS: BeyondItem[] = [
  {
    id: "learning",
    title: "Learning Tech",
    description:
      "Reading whitepapers, tracking open-source release notes, and analyzing architectural case studies of internet giants.",
    tag: "Continuous Curiosity",
  },
  {
    id: "ai-labs",
    title: "AI Experimentation",
    description:
      "Tinkering with local quantized models using Ollama, evaluating prompt workflows, and testing new agent frameworks.",
    tag: "Hands-on Labs",
  },
  {
    id: "challenges",
    title: "Problem Challenges",
    description:
      "Sharpening deductive reasoning and spatial intuition through algorithm puzzles, math riddles, and competitive tracks.",
    tag: "Logic Sharpness",
  },
  {
    id: "mindfulness",
    title: "Cooking & Yoga",
    description:
      "Resetting mental bandwidth through mindful physical movement and culinary experiments with regional Indian recipes.",
    tag: "Rest & Rebalance",
  },
];

export const CONTACT_CHANNELS = {
  email: "pardipnayak.dev@gmail.com",
  linkedinUrl: "https://linkedin.com",
  linkedinDisplay: "linkedin.com/in/pardip-nayak",
  githubUrl: "https://github.com",
  githubDisplay: "github.com/pardip-nayak",
};
