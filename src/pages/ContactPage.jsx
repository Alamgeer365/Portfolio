function ContactPage({ profile }) {
  return (
    <section className="page-content">
      <div className="page-heading">
        <p className="page-label">Contact</p>
        <h1>Get In Touch</h1>
      </div>

      <div className="contact-grid">
        <a className="contact-card" href={`mailto:${profile.email}`}>
          <span>Email</span>
          <strong>{profile.email}</strong>
        </a>
        <a className="contact-card" href={`tel:${profile.phone.replace(/\s+/g, "")}`}>
          <span>Phone</span>
          <strong>{profile.phone}</strong>
        </a>
        <a className="contact-card" href={profile.github} target="_blank" rel="noreferrer">
          <span>GitHub</span>
          <strong>github.com/Alamgeer365</strong>
        </a>
        <a className="contact-card" href={profile.linkedin} target="_blank" rel="noreferrer">
          <span>LinkedIn</span>
          <strong>alamgeer-shekh-345a8331b</strong>
        </a>
      </div>
    </section>
  );
}

export default ContactPage;
