import logo from '../assets/logo3.png';

function Navbar({ role, theme, onToggleTheme }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src={logo} alt="PickItEzy" className="logo-icon" />
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#how-it-works">How It Works</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="nav-cta">
          <button
            type="button"
            className={`theme-toggle ${theme === 'light' ? '' : 'theme-toggle-dark'}`}
            onClick={onToggleTheme}
            aria-label="Toggle theme"
          >
            <span className="theme-knob"></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
