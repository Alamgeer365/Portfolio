import { useEffect, useState } from "react";

function getInitialTheme() {
  if (typeof window === "undefined") return "dark";
  const savedTheme = window.localStorage.getItem("portfolio-theme");
  if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
  return "dark";
}

function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
}

export default useTheme;
