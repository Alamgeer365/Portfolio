function AboutPage({ highlights, profile }) {
  return (
    <section className="page-content">
      <div className="page-heading">
        <p className="page-label">About</p>
        <h1>About Me</h1>
      </div>

      <div className="two-column-grid">
        <article className="content-card">
          <h2>Developer Profile</h2>
          <p>{profile.intro}</p>
          <p>
            I enjoy working on full-stack applications where frontend quality, backend structure,
            and practical functionality all matter together.
          </p>
        </article>

        <article className="content-card">
          <h2>What Defines My Work</h2>
          <ul className="bullet-list">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}

export default AboutPage;
