function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="section-header">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">
            Contact <span className="highlight">Us</span>
          </h2>
          <p className="section-subtitle">
            Have questions or want to partner with us? We would love to hear from you.
          </p>
        </div>
        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-icon">&#128231;</div>
            <h3 className="contact-card-title">Email Us</h3>
            <div className="contact-emails">
              <a className="contact-email" href="mailto:mgupta5562@gmail.com">
                Manav Gupta - mgupta5562@gmail.com
              </a>
              <a className="contact-email" href="mailto:priyanshkol123@gmail.com">
                Priyansh - priyanshkol123@gmail.com
              </a>
            </div>
          </div>
          <div className="contact-card">
            <div className="contact-icon">&#128222;</div>
            <h3 className="contact-card-title">Call Us</h3>
            <div className="contact-contacts">
              <div className="contact-item">
                <span className="contact-name">Manav Gupta</span>
                <a className="contact-phone" href="tel:+919858481232">+91 98584 81232</a>
              </div>
              <div className="contact-item">
                <span className="contact-name">Priyansh</span>
                <a className="contact-phone" href="tel:+917780918400">+91 77809 18400</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
