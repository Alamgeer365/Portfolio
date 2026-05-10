export const profile = {
  name: "Alamgeer Shekh",
  title: "Full-Stack Developer & Data Analyst Enthusiast",
  tagline: "I build full-stack web applications with MERN and Django REST Framework, and I also turn data into clear insights through SQL, Python, Excel, and dashboards.",
  intro:
    "I enjoy building practical digital products end to end and also working with data to discover patterns, clean information, and present insights in a way that supports better decisions.",
  email: "alamgeershekh365@gmail.com",
  phone: "8127340413",
  location: "Kushinagar, Uttar Pradesh",
  github: "https://github.com/Alamgeer365",
  linkedin: "https://www.linkedin.com/in/alamgeer-shekh-345a8331b",
  leetcode: "https://leetcode.com/u/AlamgeerShekh/",
  resume: "/Alamgeer_Shekh_Resume.pdf",
  shortBio:
    "I am a full-stack developer with hands-on experience in MERN and Django REST Framework, and a growing analytics profile built through SQL, Python, Excel, Power BI, and data projects.",
  availability: "Open to full-stack developer and data analyst opportunities",
};

export const routes = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/skills", label: "Skills" },
  { path: "/projects", label: "Projects" },
  { path: "/experience", label: "Experience" },
  { path: "/education", label: "Education" },
  { path: "/resume", label: "Resume" },
  { path: "/contact", label: "Contact" },
];

export const skillGroups = [
  { title: "Programming", items: ["Python", "SQL", "Java"] },
  {
    title: "Data Analysis",
    items: ["Pandas", "NumPy", "Matplotlib", "Exploratory Data Analysis"],
  },
  { title: "Visualization & Reporting", items: ["Power BI", "Microsoft Excel", "Dashboarding"] },
  { title: "Databases", items: ["MySQL", "MongoDB"] },
  { title: "Tools", items: ["Jupyter Notebook", "VS Code", "Git", "GitHub"] },
  { title: "Web & API Exposure", items: ["HTML5", "CSS3", "React.js", "Django REST Framework"] },
];

export const aboutHighlights = [
  "Built hands-on analysis projects using Python, SQL, Excel, and Power BI.",
  "Comfortable with data cleaning, exploratory analysis, trend discovery, and visual reporting.",
  "Worked with real datasets to find patterns in content, sales, customer behavior, and growth.",
  "Built full-stack applications using MERN, React.js, and Django REST Framework with practical product features.",
];

export const experience = [
  {
    company: "Digiquest Consultancy Services Pvt. Ltd.",
    role: "Software Developer Intern",
    duration: "Mar 2025 - Sep 2025",
    summary:
      "Contributed to a healthcare web application by building frontend components, backend APIs, and database-connected features in a collaborative environment.",
    responsibilities: [
      "Developed React components and user-facing flows for a healthcare product.",
      "Wrote REST APIs using Django REST Framework to support application functionality.",
      "Handled data storage and retrieval with MySQL for application features and records.",
    ],
    tech: ["React.js", "Django REST Framework", "MySQL", "REST APIs"],
  },
  {
    company: "Infosys Springboard",
    role: "Data Visualization Virtual Intern",
    duration: "Apr 2026 - Present",
    summary:
      "Strengthening core analytics skills through dataset work, reporting practice, and visualization-focused exercises.",
    responsibilities: [
      "Practicing SQL queries to extract, filter, and summarize dataset information.",
      "Cleaning and preparing data using Pandas for better analysis quality.",
      "Creating basic visualizations and report-oriented views using Power BI and Python tools.",
    ],
    tech: ["SQL", "Pandas", "Power BI", "Python"],
  },
];

export const education = [
  {
    institution: "Buddha Institute of Technology, Gorakhpur",
    degree: "B.Tech in Computer Science and Engineering",
    score: "CGPA: 7.98 | Aug 2022 - Jun 2026",
    summary:
      "Built a strong technical foundation in programming, problem solving, databases, and software systems while developing a growing interest in analytics and insight-driven work.",
  },
];

export const projects = [
  {
    name: "Netflix Data Analysis Using Python",
    type: "Exploratory Data Analysis Project",
    description:
      "Analyzed a Netflix dataset to identify content trends, genre distribution, country-wise patterns, and post-2015 platform growth through cleaning, EDA, and visual storytelling.",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "EDA"],
    link: null,
  },
  {
    name: "SQL Retail Bookstore Analytics",
    type: "SQL Analytics Project",
    description:
      "Designed a relational SQL analysis project to study sales, customer behavior, and inventory using joins, aggregations, CTEs, repeat customer logic, and low-stock tracking.",
    tech: ["SQL", "MySQL", "CTEs", "Joins", "Aggregations"],
    link: null,
  },
  {
    name: "Health Mate Go",
    type: "MERN Stack Healthcare Application",
    description:
      "Developed a full-stack healthcare application with JWT authentication, role-based access control, REST APIs, and dashboards for patient management and operational visibility.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Dashboards"],
    link: null,
  },
  {
    name: "Portfolio Website",
    type: "Personal Branding Project",
    description:
      "A responsive personal portfolio built to present my analytics profile, technical skills, resume, and projects in a structured and professional way.",
    tech: ["React.js", "CSS", "JavaScript", "Responsive Design"],
    link: null,
  },
];

export const profileLinks = [
  { label: "GitHub", value: "github.com/Alamgeer365", href: profile.github },
  { label: "LinkedIn", value: "alamgeer-shekh-345a8331b", href: profile.linkedin },
  { label: "LeetCode", value: "leetcode.com/u/AlamgeerShekh", href: profile.leetcode },
];
