import { siteContent } from '../data/content';

function Features({ role }) {
  const content = siteContent[role].features;

  return (
    <section className="features" id="features">
      <div className="features-container">
        <div className="section-header">
          <span className="section-tag">{content.tag}</span>
          <h2 className="section-title">
            {content.title} <span className="highlight">{content.titleHighlight}</span>
          </h2>
          <p className="section-subtitle">{content.subtitle}</p>
        </div>
        <div className="features-grid">
          {content.items.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div
                className="feature-icon"
                dangerouslySetInnerHTML={{ __html: feature.icon }}
              />
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
