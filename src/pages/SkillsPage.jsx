function SkillsPage({ skillGroups }) {
  return (
    <section className="page-content">
      <div className="page-heading">
        <p className="page-label">Skills</p>
        <h1>Technical Skills</h1>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article key={group.title} className="content-card">
            <h2>{group.title}</h2>
            <div className="chip-list">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default SkillsPage;
