import { siteContent } from '../data/content';

function ComingSoon({ role }) {
  const content = siteContent[role].comingSoon;

  return (
    <section className="coming-soon" id="coming-soon">
      <div className="coming-soon-container">
        <div className="coming-soon-badge">Coming Soon</div>
        <h2 className="coming-soon-title">
          We Are Coming To <span className="highlight">Your City</span> Soon!
        </h2>
        <p className="coming-soon-subtitle">{content.subtitle}</p>

        <div className="launch-features">
          {content.features.map((feature, index) => (
            <div className="launch-feature-card" key={index}>
              <div
                className="launch-feature-icon"
                dangerouslySetInnerHTML={{ __html: feature.icon }}
              />
              <h3 className="launch-feature-title">{feature.title}</h3>
              <p className="launch-feature-description">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ComingSoon;
