import alamgeerPhoto from "../assets/alamgeer-photo.png";

function HomePage({ navigate, profile }) {
  return (
    <section className="home-layout">
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

      <section className="home-summary">
        <article className="content-card">
          <h2>Core Stack</h2>
          <div className="chip-list">
            <span>React.js</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>MongoDB</span>
            <span>Django</span>
            <span>Django REST Framework</span>
          </div>
        </article>

        <article className="content-card">
          <h2>Project Focus</h2>
          <p>
            I mostly work on MERN projects, Django REST API applications, payment features, chatbot
            integrations, and other full-stack builds.
          </p>
        </article>

        <article className="content-card">
          <h2>Professional Presence</h2>
          <p>
            This portfolio also keeps my GitHub, LinkedIn, LeetCode, resume, and contact details in
            one place so everything is easy to find.
          </p>
        </article>
      </section>
    </section>
  );
}

export default HomePage;
