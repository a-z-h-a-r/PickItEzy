import { useState } from 'react';
import { siteContent } from '../data/content';

function Download({ role }) {
  const content = siteContent[role].download;
  const [showToast, setShowToast] = useState(false);

  const handleStoreClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  return (
    <section className="download" id="download">
      <div className="download-container">
        <div className="download-content">
          <h2 className="download-title">
            {content.title} <span className="highlight">{content.titleHighlight}</span>
          </h2>
          <p className="download-subtitle">{content.subtitle}</p>
          <div className="download-buttons">
            <div className="store-badge" onClick={handleStoreClick}>
              <span className="store-icon">&#128241;</span>
              <div className="store-info">
                <span className="store-small">GET IT ON</span>
                <span className="store-name">Google Play</span>
              </div>
            </div>
            <div className="store-badge" onClick={handleStoreClick}>
              <span className="store-icon">&#128241;</span>
              <div className="store-info">
                <span className="store-small">Download on the</span>
                <span className="store-name">App Store</span>
              </div>
            </div>
          </div>
        </div>
        <div className="download-visual">
          <div className="phone-mockup">
            <div className="phone-screen">
              <div className="phone-header">
                <span className="phone-logo">QuickMart</span>
              </div>
              <div className="phone-content">
                <div className="phone-placeholder-text">Coming Soon</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`store-toast ${showToast ? 'store-toast-show' : ''}`}>
        <span className="store-toast-icon">&#128227;</span>
        <span>Coming Soon</span>
      </div>
    </section>
  );
}

export default Download;
