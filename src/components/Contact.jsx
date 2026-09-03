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
              <a className="contact-email" href="mailto:singhshubham0493@gmail.com">
                singhshubham0493@gmail.com
              </a>
              <a className="contact-email" href="mailto:avaiszeehan63@gmail.com">
                avaiszeehan63@gmail.com
              </a>
              <a className="contact-email" href="mailto:azharbatt2006@gmail.com">
                azharbatt2006@gmail.com
              </a>
            </div>
          </div>
          <div className="contact-card">
            <div className="contact-icon">&#128222;</div>
            <h3 className="contact-card-title">Call Us</h3>
            <div className="contact-contacts">
              <div className="contact-item">
                <span className="contact-name">Shubham Singh Katal</span>
                <a className="contact-phone" href="tel:+916006241140">+91 60062 41140</a>
              </div>
              <div className="contact-item">
                <span className="contact-name">Zeeshan Ahmed</span>
                <a className="contact-phone" href="tel:+917889323575">+91 78893 23575</a>
              </div>
              <div className="contact-item">
                <span className="contact-name">Azhar Mushtaq Batt</span>
                <a className="contact-phone" href="tel:+919541085644">+91 95410 85644</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
