/**
 * SAIRAM Portfolio — Structured Data
 * All portfolio content lives here. Add or modify without touching UI components.
 */

// ─── Personal Info ────────────────────────────────────────────────────────────
export const personal = {
  name: "KUNIBILLI SAIRAM",
  fullName: "Kunibilli Sairam",
  role: "Computer Science Engineering Student",
  tagline: "Building ideas into real experiences.",
  description:
    "I'm a Computer Science Engineering student who enjoys building web applications, exploring machine learning, working with data, and experimenting with new technologies.",
  status: "Available for Opportunities",
  currentFocus: [
    "Machine Learning & Data Analytics",
    "Full-Stack Web Development",
    "Data Visualization with Power BI",
  ],
  location: "India",
  email: "kunibillisairam05@gmail.com",
  github: "https://github.com/kunibillisairam",
  linkedin: "https://www.linkedin.com/in/kunibillisairam/",
};

// ─── Navigation ───────────────────────────────────────────────────────────────
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Tech Stack", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

// ─── Tech Stack ───────────────────────────────────────────────────────────────
export const techStack = [
  { name: "Python", category: "language" },
  { name: "JavaScript", category: "language" },
  { name: "React", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "SQL", category: "database" },
  { name: "Power BI", category: "analytics" },
  { name: "Machine Learning", category: "ml" },
];

// ─── Projects ─────────────────────────────────────────────────────────────────
/**
 * Each project supports:
 * - title: string
 * - description: string
 * - image: string (path to image in /public/projects/)
 * - technologies: string[]
 * - liveDemo: string | null
 * - github: string | null
 * - category: "web" | "ml" | "data" | "backend" | "fullstack"
 * - featured: boolean
 */
export const projects = [
  {
    id: "project-1",
    title: "Subscription Cancellation Prediction",
    description: "A machine learning system featuring data preprocessing, exploratory data analysis, and model comparison to predict customer retention and cancellation trends.",
    image: "/projects/sub-predict.jpg",
    technologies: ["Python", "Scikit-learn", "Pandas", "TypeScript"],
    liveDemo: "https://subscription-cancellation-predictio.vercel.app/",
    github: "https://github.com/kunibillisairam/Subscription-Cancellation-Prediction-System",
    category: "ml",
    featured: true,
  },
  {
    id: "project-2",
    title: "Global Superstore Sales Analysis",
    description: "End-to-end data analytics and forecasting project utilizing Python for sales aggregation and Power BI for high-impact regional profitability insights.",
    image: "/projects/superstore.jpg",
    technologies: ["Power BI", "Python", "Pandas", "Matplotlib"],
    liveDemo: "https://github.com/kunibillisairam/Global-Superstore-Sales-Analysis",
    github: "https://github.com/kunibillisairam/Global-Superstore-Sales-Analysis",
    category: "ml",
    featured: true,
  },
  {
    id: "project-3",
    title: "Food Express Web App",
    description: "A modern food delivery platform featuring rich responsive user interfaces, real-time item filters, dynamic cart updates, and interactive checkout tracking.",
    image: "/projects/food-express.jpg",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Vite"],
    liveDemo: "https://food-express-sandy.vercel.app/",
    github: "https://github.com/kunibillisairam/food-Express",
    category: "fullstack",
    featured: true,
  },
  {
    id: "project-4",
    title: "Spends & Earns Tracker",
    description: "A client-side personal finance manager letting students securely log incomes, allocate spending budgets, and render interactive expense charts.",
    image: "/projects/spends-and-earns.jpg",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    liveDemo: "https://spends-and-earns.vercel.app/",
    github: "https://github.com/kunibillisairam/spends-and-earns",
    category: "web",
    featured: false,
  },
  {
    id: "project-5",
    title: "Code Gravity Experiment",
    description: "An interactive creative coding script mapping physics engine principles to HTML canvas objects using modern JavaScript techniques.",
    image: "/projects/code-gravity.jpg",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    liveDemo: "https://code-gravity.vercel.app/",
    github: "https://github.com/kunibillisairam/code-gravity",
    category: "web",
    featured: false,
  },
  {
    id: "project-6",
    title: "Our Tourism Explorer",
    description: "An interactive, responsive travel and tourism booking web platform highlighting destinations and travel packages.",
    image: "/projects/our-tourism.jpg",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    liveDemo: "https://our-tourism.vercel.app/",
    github: "https://github.com/kunibillisairam/our-tourism",
    category: "web",
    featured: false,
  },
];

// ─── Skills ───────────────────────────────────────────────────────────────────
export const skills = {
  languages: ["Python", "JavaScript", "HTML5", "CSS3", "SQL"],
  frontend: ["React.js", "Tailwind CSS", "Framer Motion", "Vite"],
  backend: ["Node.js", "Express.js", "REST APIs"],
  databases: ["MySQL", "PostgreSQL", "MongoDB"],
  dataAnalytics: ["Pandas", "NumPy", "Power BI", "Matplotlib", "Seaborn"],
  machineLearning: ["Scikit-learn", "TensorFlow (basics)", "Data Preprocessing"],
  tools: ["Git", "GitHub", "VS Code", "Figma", "Vercel", "Postman"],
};

// ─── Journey / Timeline ───────────────────────────────────────────────────────
export const journey = [
  {
    year: "2024",
    title: "Started Computer Science Engineering",
    description: "Enrolled in Computer Science Engineering and began mastering core programming fundamentals.",
    tag: "Programming • C/C++ • Algorithms",
    iconType: "education",
  },
  {
    year: "2025",
    title: "Web Applications & Technologies",
    description: "Started building interactive web applications and learning frontend development technologies.",
    tag: "React • JavaScript • Web Dev",
    iconType: "code",
  },
  {
    year: "2026",
    title: "Machine Learning & Data Analytics",
    description: "Expanded into Machine Learning, Data Analytics pipelines and deployed software projects.",
    tag: "Python • Scikit-learn • Power BI",
    iconType: "brain",
  },
  {
    year: "2026+",
    title: "Hackathons & Continuous Growth",
    description: "Participating in technical hackathons, complex software projects and continuous technical development.",
    tag: "Hackathons • Full-Stack • AI/ML",
    iconType: "rocket",
  },
];

// ─── Experiments / Explorations ───────────────────────────────────────────────
export const experiments = [
  {
    id: "exp-1",
    title: "Machine Learning Experiments",
    description: "Exploring ML algorithms, model training, and evaluation techniques.",
    tags: ["Python", "Scikit-learn", "ML"],
    status: "ongoing",
  },
  {
    id: "exp-2",
    title: "Data Visualization",
    description: "Creating insightful dashboards and charts with Power BI and Python.",
    tags: ["Power BI", "Pandas", "Matplotlib"],
    status: "ongoing",
  },
  {
    id: "exp-3",
    title: "React Advanced Patterns",
    description: "Experimenting with state management, performance optimization, and animations.",
    tags: ["React", "Framer Motion", "JavaScript"],
    status: "ongoing",
  },
];

// ─── Certifications ───────────────────────────────────────────────────────────
export const certifications = [
  {
    id: "cert-1",
    title: "Python for Data Science & Machine Learning",
    issuer: "Coursera / IBM",
    date: "2024",
    credentialUrl: null,
  },
  {
    id: "cert-2",
    title: "Full-Stack Web Development",
    issuer: "FreeCodeCamp / Udemy",
    date: "2023",
    credentialUrl: null,
  },
  {
    id: "cert-3",
    title: "Data Visualization with Power BI",
    issuer: "Microsoft Learning",
    date: "2024",
    credentialUrl: null,
  },
];

// ─── Education ────────────────────────────────────────────────────────────────
export const education = [
  {
    degree: "Bachelor of Engineering — Computer Science Engineering",
    institution: "Your College Name", // Update
    duration: "2021 — Present",
    cgpa: null, // Add if you want to display
    highlights: [
      "Core CS Fundamentals",
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Software Engineering",
    ],
  },
];
