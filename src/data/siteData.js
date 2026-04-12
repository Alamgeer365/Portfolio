export const profile = {
  name: "Alamgeer Shekh",
  title: "Full-Stack Developer",
  tagline: "I build web applications that are clean to use, practical in real life, and solid from frontend to backend.",
  intro:
    "I enjoy working on the full flow of a product. I like making the interface feel clear and comfortable, and I also enjoy building the backend logic that makes the whole thing work properly.",
  email: "alamgeershekh365@gmail.com",
  phone: "8127340413",
  location: "India",
  github: "https://github.com/Alamgeer365",
  linkedin: "https://www.linkedin.com/in/alamgeer-shekh-345a8331b",
  leetcode: "https://leetcode.com/u/AlamgeerShekh/",
  resume: "/Alamgeer_Shekh_Resume.pdf",
  shortBio:
    "I am a full-stack developer who enjoys building useful products with React, MERN, and Django. I care about clean structure, responsive UI, and backend features that make the final project feel complete.",
  availability: "Looking for full-time software developer opportunities",
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
  { title: "Frontend", items: ["HTML", "CSS", "JavaScript", "React.js"] },
  {
    title: "Backend",
    items: ["Django", "Django REST Framework", "Node.js", "Express.js"],
  },
  { title: "Database", items: ["MongoDB", "SQL", "PostgreSQL"] },
  { title: "Languages & Core", items: ["Python", "Java", "OOPs"] },
  { title: "Tools", items: ["Git", "GitHub", "MERN Stack", "Stripe Integration"] },
];

export const aboutHighlights = [
  "Built full-stack projects using React, MERN, Django, and REST APIs.",
  "Comfortable handling both the user-facing side and the backend side of a product.",
  "Completed a 6-month software developer internship with hands-on frontend, backend, and Figma work.",
  "Worked on practical features like payments, authentication, dashboards, and chatbot integration.",
];

export const experience = [
  {
    company: "Digiquest Consultancy Services Pvt. Ltd.",
    role: "Software Developer Intern",
    duration: "6-Month Internship",
    summary:
      "Worked across design, frontend, and backend tasks to build practical web application features in a collaborative environment.",
    responsibilities: [
      "Created and refined interface ideas in Figma before implementation.",
      "Built frontend screens and components using React.js and Tailwind CSS.",
      "Worked on backend APIs and application logic using Django and Django REST Framework.",
    ],
    tech: ["Figma", "React.js", "Tailwind CSS", "Django", "Django REST Framework"],
  },
];

export const education = [
  {
    institution: "Dr. A.P.J. Abdul Kalam Technical University",
    degree: "B.Tech in Computer Science and Engineering",
    score: "CGPA: 8.0",
    summary:
      "Completed my bachelor's degree in Computer Science and Engineering with a strong academic foundation in software development and core computer science subjects.",
  },
];

export const projects = [
  {
    name: "Portfolio Website",
    type: "Personal Portfolio Project",
    description:
      "A portfolio website designed to present my work, technical background, resume, and contact details in a cleaner and more personal way.",
    tech: ["React.js", "CSS", "JavaScript", "Responsive Design"],
    link: null,
  },
  {
    name: "HealthMate Go",
    type: "MERN Stack Healthcare Project",
    description:
      "A MERN stack healthcare project where I worked on user-focused flows along with Stripe payments and Gemini chatbot integration.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Stripe", "Gemini Chatbot"],
    link: null,
  },
  {
    name: "Tech Path Finder",
    type: "MERN Stack Career Guidance Project",
    description:
      "A MERN-based platform built to help users explore technology career paths through a simple and guided web experience.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    link: null,
  },
  {
    name: "Blogging Web Application",
    type: "Django REST Framework + React.js",
    description:
      "A blogging web application built with Django REST Framework and React.js using an API-driven setup for managing and showing content smoothly.",
    tech: ["Django", "Django REST Framework", "React.js", "SQL"],
    link: null,
  },
];

export const profileLinks = [
  { label: "GitHub", value: "github.com/Alamgeer365", href: profile.github },
  { label: "LinkedIn", value: "alamgeer-shekh-345a8331b", href: profile.linkedin },
  { label: "LeetCode", value: "leetcode.com/u/AlamgeerShekh", href: profile.leetcode },
];
