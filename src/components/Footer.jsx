function Footer({ navigate, profile, routes }) {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <p className="footer-label">Portfolio</p>
          <p className="footer-title">{profile.name}</p>
          <p className="footer-copy">{profile.shortBio}</p>
          <div className="footer-contact-line">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <span className="footer-divider" />
            <a href={`tel:${profile.phone}`}>{profile.phone}</a>
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h3>Pages</h3>
            <div className="footer-link-list">
              {routes.map((route) => (
                <a
                  key={route.path}
                  href={route.path}
                  onClick={(event) => {
                    event.preventDefault();
                    navigate(route.path);
                  }}
                >
                  {route.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3>Connect</h3>
            <div className="footer-link-list">
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>&copy; {new Date().getFullYear()} {profile.name}</span>
        <span>Built to present my analytics profile, projects, and resume with React and Vite</span>
      </div>
    </footer>
  );
}

export default Footer;
