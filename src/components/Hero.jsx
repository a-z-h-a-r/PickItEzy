import { siteContent } from '../data/content';

function Hero({ role }) {
  const content = siteContent[role].hero;

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-coming-soon">Coming Soon</div>
        <div className="hero-badge">{content.badge}</div>
        <h1 className="hero-title">
          {content.title}
          <span className="highlight"> {content.titleHighlight}</span>
        </h1>
        <p className="hero-subtitle">{content.subtitle}</p>
        <div className="hero-stats">
          {content.stats.map((stat, index) => (
            <div className="stat" key={index}>
              <span
                className="stat-number"
                dangerouslySetInnerHTML={{ __html: stat.number }}
              />
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-glow"></div>
      </div>
    </section>
  );
}

export default Hero;
