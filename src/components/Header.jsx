import ThemeToggle from "./ThemeToggle";

function Header({ currentPath, navigate, profile, routes, theme, toggleTheme }) {
  return (
    <header className="site-header">
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

      <div className="header-actions">
        <nav className="main-nav" aria-label="Main Navigation">
          {routes.map((route) => (
            <button
              key={route.path}
              type="button"
              className={currentPath === route.path ? "nav-item active" : "nav-item"}
              onClick={() => navigate(route.path)}
            >
              {route.label}
            </button>
          ))}
        </nav>

        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </header>
  );
}

export default Header;
