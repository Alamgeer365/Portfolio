function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 2.5v2.5M12 19v2.5M21.5 12H19M5 12H2.5M18.7 5.3l-1.8 1.8M7.1 16.9l-1.8 1.8M18.7 18.7l-1.8-1.8M7.1 7.1 5.3 5.3"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M14.5 3.2a8.8 8.8 0 1 0 6.3 15.1A9.8 9.8 0 0 1 14.5 3.2Z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function ThemeToggle({ theme, toggleTheme }) {
  const isLight = theme === "light";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      title={isLight ? "Switch to dark mode" : "Switch to light mode"}
    >
      <span className="theme-icon" aria-hidden="true">
        {isLight ? <MoonIcon /> : <SunIcon />}
      </span>
    </button>
  );
}

export default ThemeToggle;
