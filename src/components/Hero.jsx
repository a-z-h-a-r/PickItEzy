import { useState } from 'react';
import { siteContent } from '../data/content';

function Hero({ role }) {
  const content = siteContent[role].hero;
  const [showComingSoon, setShowComingSoon] = useState(false);

  const handleBadgeClick = () => {
    if (role === 'vendors') {
      window.location.href = 'https://pick-it-ezy-vendor-web.vercel.app';
    } else {
      setShowComingSoon(true);
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        {content.badge && (
          <button
            className="hero-badge"
            type="button"
            onClick={handleBadgeClick}
          >
            {content.badge}
          </button>
        )}
        <h1 className="hero-title">
          {content.title}
          <span className="highlight"> {content.titleHighlight}</span>
        </h1>
        <p className="hero-subtitle">{content.subtitle}</p>
        {content.stats.length > 0 && (
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
        )}
      </div>
      <div className="hero-visual">
        <div className="hero-glow"></div>
      </div>

      {showComingSoon && (
        <div className="coming-soon-popup">
          <div className="coming-soon-popup-content">
            <h3>Coming Soon</h3>
            <p>This feature is coming soon to your city.</p>
            <button className="coming-soon-popup-ok" type="button" onClick={() => setShowComingSoon(false)}>
              Ok
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Hero;
