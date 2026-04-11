import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

function Header({ currentPath, navigate, profile, routes, theme, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 760) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="site-header">
      <div className="header-top">
        <div className="brand-block">
          <div className="brand-topline">
            <span className="brand-mark">AS</span>
            <div>
              <p className="brand-name">{profile.name}</p>
              <p className="brand-role">{profile.title}</p>
            </div>
          </div>
          <p className="brand-status">{profile.availability}</p>
        </div>

        <div className="header-controls">
          <button
            type="button"
            className="menu-toggle"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
          >
            <span />
            <span />
            <span />
          </button>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </div>

      <div className="header-actions">
        <nav
          className={isMenuOpen ? "main-nav menu-open" : "main-nav"}
          aria-label="Main Navigation"
        >
          {routes.map((route) => (
            <button
              key={route.path}
              type="button"
              className={currentPath === route.path ? "nav-item active" : "nav-item"}
              onClick={() => {
                setIsMenuOpen(false);
                navigate(route.path);
              }}
            >
              {route.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
