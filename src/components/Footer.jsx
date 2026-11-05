import logo from '../assets/logo3.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo">
              <img src={logo} alt="PickItEzy" className="logo-icon" />
            </div>
            <p className="footer-brand-text">
              Groceries delivered in 10 minutes. Fresh, fast, and affordable.
            </p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-column-title">Company</h4>
              <ul>
                <li><a href="#home">About Us</a></li>
                <li><a href="#features">Careers</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="footer-column-title">Support</h4>
              <ul>
                <li><a href="#contact">Help Center</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4 className="footer-column-title">Follow Us</h4>
              <ul>
                <li><a href="https://instagram.com/pickitezy" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 PickItEzy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
