function ExperiencePage({ experience }) {
  return (
    <section className="page-content">
      <div className="page-heading">
        <p className="page-label">Experience</p>
        <h1>Work Experience</h1>
      </div>

      <article className="content-card">
        <div className="timeline-stack">
          {experience.map((item) => (
            <div key={`${item.company}-${item.role}`} className="timeline-entry">
              <p className="timeline-meta">{item.duration}</p>
              <h3>{item.role}</h3>
              <p className="timeline-title">{item.company}</p>
              <p>{item.summary}</p>
              <ul className="bullet-list">
                {item.responsibilities.map((responsibility) => (
                  <li key={responsibility}>{responsibility}</li>
                ))}
              </ul>
              <div className="chip-list">
                {item.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}

export default ExperiencePage;
