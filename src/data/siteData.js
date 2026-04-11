export const profile = {
  name: "Alamgeer Shekh",
  title: "Full-Stack Developer",
  tagline: "I build full-stack web applications with a focus on clean UI, solid backend logic, and practical features.",
  intro:
    "I like working on projects from both sides of the stack. On the frontend, I care about layout, clarity, and user flow. On the backend, I focus on APIs, data handling, and features that make the product actually useful.",
  email: "alamgeershekh365@gmail.com",
  phone: "8127340413",
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
  "Hands-on experience with React, MERN, Django, and REST APIs.",
  "Comfortable working on both user interface and backend logic.",
  "Built projects with payments, databases, authentication, and chatbot features.",
];

export const projects = [
  {
    name: "Portfolio Website",
    type: "Personal Portfolio Project",
    description:
      "A personal portfolio website built to present my background, technical skills, projects, resume, and contact information in one place.",
    tech: ["React.js", "CSS", "JavaScript", "Responsive Design"],
    link: null,
  },
  {
    name: "HealthMate Go",
    type: "MERN Stack Healthcare Project",
    description:
      "A healthcare web application built with the MERN stack. It includes user-focused features and also integrates Stripe payments and a Gemini chatbot.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Stripe", "Gemini Chatbot"],
    link: null,
  },
  {
    name: "Tech Path Finder",
    type: "MERN Stack Career Guidance Project",
    description:
      "A MERN-based platform made to help users explore technology career paths through a clear and simple web experience.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    link: null,
  },
  {
    name: "Blogging Web Application",
    type: "Django REST Framework + React.js",
    description:
      "A blogging application built with Django REST Framework and React.js, using an API-driven structure for managing and displaying content.",
    tech: ["Django", "Django REST Framework", "React.js", "SQL"],
    link: null,
  },
];

export const profileLinks = [
  { label: "GitHub", value: "github.com/Alamgeer365", href: profile.github },
  { label: "LinkedIn", value: "alamgeer-shekh-345a8331b", href: profile.linkedin },
  { label: "LeetCode", value: "leetcode.com/u/AlamgeerShekh", href: profile.leetcode },
];
