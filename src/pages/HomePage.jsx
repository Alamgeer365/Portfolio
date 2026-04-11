import alamgeerPhoto from "../assets/alamgeer-photo.png";

function HomePage({ navigate, profile, profileLinks, projects }) {
  const featuredProjects = projects.slice(0, 3);
  const focusAreas = [
    "React and responsive frontend development",
    "MERN stack applications with practical product features",
    "Django and Django REST Framework backend work",
    "Payments, APIs, dashboards, and chatbot integrations",
  ];

  return (
    <section className="home-page">
      <div className="home-layout">
        <div className="hero-panel">
          <p className="page-label">Portfolio</p>
          <h1>{profile.name}</h1>
          <h2>{profile.title}</h2>
          <p className="hero-copy">{profile.tagline}</p>
          <p className="hero-copy secondary">{profile.intro}</p>

          <div className="hero-actions">
            <button type="button" className="action-button" onClick={() => navigate("/projects")}>
              View Projects
            </button>
            <button type="button" className="ghost-button" onClick={() => navigate("/contact")}>
              Contact Me
            </button>
          </div>

          <div className="hero-points">
            {focusAreas.map((item) => (
              <div key={item} className="hero-point">
                <span className="hero-point-mark" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="photo-panel">
          <div className="photo-frame">
            <img className="profile-photo" src={alamgeerPhoto} alt="Portrait of Alamgeer Shekh" />
          </div>
          <div className="photo-info">
            <p className="photo-note">
              I like building websites and web apps that feel simple, useful, and reliable from both
              the frontend and backend side.
            </p>
            <div className="photo-meta">
              <div>
                <span>Based In</span>
                <strong>{profile.location}</strong>
              </div>
              <div>
                <span>Primary Focus</span>
                <strong>MERN and Django</strong>
              </div>
            </div>
          </div>
        </aside>
      </div>

      <section className="website-section">
        <div className="section-intro section-row">
          <div>
            <p className="page-label">What I Do</p>
            <h2>Clear full-stack work across frontend, backend, and real product features.</h2>
          </div>
          <button type="button" className="ghost-button" onClick={() => navigate("/skills")}>
            View Skills
          </button>
        </div>

        <div className="service-grid">
          <article className="content-card">
            <h2>Frontend Development</h2>
            <p>I build React interfaces with cleaner layouts, responsive behavior, and straightforward user flow.</p>
          </article>
          <article className="content-card">
            <h2>Backend Development</h2>
            <p>I work with Node.js, Express, Django, and REST APIs to create backend systems that stay practical and usable.</p>
          </article>
          <article className="content-card">
            <h2>Project Building</h2>
            <p>I like taking projects from UI to API to database so the final result feels like a complete product, not just a demo.</p>
          </article>
        </div>
      </section>

      <section className="website-section">
        <div className="section-intro section-row">
          <div>
            <p className="page-label">Featured Work</p>
            <h2>Projects that reflect my stack and interests.</h2>
          </div>
          <button type="button" className="ghost-button" onClick={() => navigate("/projects")}>
            See All Projects
          </button>
        </div>

        <div className="feature-grid">
          {featuredProjects.map((project) => (
            <article key={project.name} className="project-card">
              <p className="project-type">{project.type}</p>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <div className="chip-list">
                {project.tech.slice(0, 4).map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="website-section compact-section">
        <div className="section-intro">
          <p className="page-label">Profiles</p>
          <h2>Everything important in one place.</h2>
        </div>

        <div className="link-strip">
          {profileLinks.map((link) => (
            <a key={link.label} className="link-strip-item" href={link.href} target="_blank" rel="noreferrer">
              <span>{link.label}</span>
              <strong>{link.value}</strong>
            </a>
          ))}
          <a className="link-strip-item" href={profile.resume} target="_blank" rel="noreferrer">
            <span>Resume</span>
            <strong>Open PDF</strong>
          </a>
        </div>
      </section>

      <section className="cta-banner">
        <div>
          <p className="page-label">Let&apos;s Connect</p>
          <h2>If you want to work together, feel free to reach out.</h2>
        </div>
        <div className="cta-actions">
          <button type="button" className="action-button" onClick={() => navigate("/contact")}>
            Contact Page
          </button>
          <a className="ghost-button" href={profile.resume} target="_blank" rel="noreferrer">
            Resume
          </a>
        </div>
      </section>
    </section>
  );
}

export default HomePage;
