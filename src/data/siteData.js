export const profile = {
  name: "Alamgeer Shekh",
  title: "Full-Stack Developer",
  tagline: "Building practical web applications with clean frontend experiences and strong backend systems.",
  intro:
    "I work across the full stack and enjoy building products that are useful, clear, and production-minded. My focus is on React-based interfaces, backend APIs, database-driven applications, and real-world project delivery.",
  email: "alamgeer.shekh05@gmail.com",
  phone: "+91 93695 37482",
  location: "India",
  github: "https://github.com/Alamgeer365",
  linkedin: "https://www.linkedin.com/in/alamgeer-shekh-345a8331b",
  leetcode: "https://leetcode.com/u/AlamgeerShekh/",
  resume: "/Alamgeer_Shekh_Resume.pdf",
};

export const routes = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/skills", label: "Skills" },
  { path: "/projects", label: "Projects" },
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
  "Full-stack development across React, MERN, Django, and REST APIs.",
  "Comfortable building both interface-heavy and backend-driven applications.",
  "Project work includes authentication, APIs, databases, payments, and chatbot integration.",
];

export const projects = [
  {
    name: "Portfolio Website",
    type: "Personal Portfolio Project",
    description:
      "A responsive developer portfolio built to present my profile, skills, projects, resume, and contact details in a clean and professional way.",
    tech: ["React.js", "CSS", "JavaScript", "Responsive Design"],
    link: "https://github.com/Alamgeer365/Portfolio",
  },
  {
    name: "HealthMate Go",
    type: "MERN Stack Healthcare Project",
    description:
      "A health-focused web application built with the MERN stack. It includes practical product structure and extends into advanced features like Stripe payment integration and Gemini chatbot support.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Stripe", "Gemini Chatbot"],
    link: null,
  },
  {
    name: "Tech Path Finder",
    type: "MERN Stack Career Guidance Project",
    description:
      "A MERN-based platform designed to help users explore technical career directions through a structured and user-friendly web experience.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    link: null,
  },
  {
    name: "Blogging Web Application",
    type: "Django REST Framework + React.js",
    description:
      "A blogging application built with Django REST Framework on the backend and React.js on the frontend, focused on API-driven content flow and modern web app structure.",
    tech: ["Django", "Django REST Framework", "React.js", "SQL"],
    link: null,
  },
];

export const profileLinks = [
  { label: "GitHub", value: "github.com/Alamgeer365", href: profile.github },
  { label: "LinkedIn", value: "alamgeer-shekh-345a8331b", href: profile.linkedin },
  { label: "LeetCode", value: "leetcode.com/u/AlamgeerShekh", href: profile.leetcode },
];
