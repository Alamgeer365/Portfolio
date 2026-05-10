function AboutPage({ highlights, profile }) {
  return (
    <section className="page-content">
      <div className="page-heading">
        <p className="page-label">About</p>
        <h1>About Me</h1>
      </div>

      <div className="two-column-grid">
        <article className="content-card">
          <h2>Professional Profile</h2>
          <p>{profile.intro}</p>
          <p>
            I enjoy projects where I can either build the product itself or understand the story
            inside the data, then turn that work into something practical, clear, and useful.
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
