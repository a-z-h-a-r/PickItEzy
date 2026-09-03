import { siteContent } from '../data/content';

function HowItWorks({ role }) {
  const content = siteContent[role].howItWorks;

  return (
    <section className="how-it-works" id="how-it-works">
      <div className="how-it-works-container">
        <div className="section-header">
          <span className="section-tag">{content.tag}</span>
          <h2 className="section-title">
            {content.title} <span className="highlight">{content.titleHighlight}</span>
          </h2>
          <p className="section-subtitle">{content.subtitle}</p>
        </div>
        <div className="steps-grid">
          {content.steps.map((step, index) => (
            <div className="step-card" key={index}>
              <div className="step-number">{step.step}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
