import { siteContent } from '../data/content';

function WhatsAppGroup({ role }) {
  const content = siteContent[role].whatsapp;
  const whatsappLink = content.link;

  return (
    <section className="whatsapp-group" id="whatsapp">
      <div className="whatsapp-container">
        <div className="whatsapp-card">
          <div className="whatsapp-icon">&#128172;</div>
          <div className="section-tag">Stay Updated</div>
          <h2 className="whatsapp-title">
            {content.title} <span className="highlight">{content.titleHighlight}</span>
          </h2>
          <p className="whatsapp-subtitle">{content.subtitle}</p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            <span className="whatsapp-btn-icon">&#128172;</span>
            Join WhatsApp Group
          </a>
        </div>
      </div>
    </section>
  );
}

export default WhatsAppGroup;
