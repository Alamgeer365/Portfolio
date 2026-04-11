function ProjectsPage({ projects }) {
  return (
    <section className="page-content">
      <div className="page-heading">
        <p className="page-label">Projects</p>
        <h1>Project Work</h1>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.name} className="project-card">
            <p className="project-type">{project.type}</p>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <div className="chip-list">
              {project.tech.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            {project.link ? (
              <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                View Project
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsPage;
