function EducationPage({ education }) {
  return (
    <section className="page-content">
      <div className="page-heading">
        <p className="page-label">Education</p>
        <h1>Academic Background</h1>
      </div>

      <article className="content-card">
        <div className="timeline-stack">
          {education.map((item) => (
            <div key={`${item.institution}-${item.degree}`} className="timeline-entry">
              <p className="timeline-meta">{item.score}</p>
              <h3>{item.degree}</h3>
              <p className="timeline-title">{item.institution}</p>
              <p>{item.summary}</p>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}

export default EducationPage;
