function ResumePage({ profile, profileLinks }) {
  return (
    <section className="page-content">
      <div className="page-heading">
        <p className="page-label">Resume</p>
        <h1>Resume & Profiles</h1>
      </div>

      <div className="two-column-grid">
        <article className="content-card">
          <h2>Resume</h2>
          <p>
            My resume is available directly from this portfolio and includes a compact overview of my
            work, projects, skills, and professional background.
          </p>
          <a className="action-button" href={profile.resume} target="_blank" rel="noreferrer">
            Open Resume PDF
          </a>
        </article>

        <article className="content-card">
          <h2>Professional Links</h2>
          <div className="link-stack">
            {profileLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                <span>{link.label}</span>
                <strong>{link.value}</strong>
              </a>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

export default ResumePage;
