import "./Navbar.css";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <a href="#home" className="logo" onClick={closeMenu}>
          <span>I</span>shka.
        </a>

        {/* Desktop Navigation */}
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
          <a href="#experience">Experience</a>
          <a href="#contact" className="contact-nav">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`menu-btn ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
        </button>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${menuOpen ? "open" : ""}`}>

          <div className="mobile-nav-header">
            <span>NAVIGATION</span>
            <span>MENU</span>
          </div>

          <a href="#home" onClick={closeMenu}>
            <span>01</span>
            Home
          </a>

          <a href="#about" onClick={closeMenu}>
            <span>02</span>
            About
          </a>

          <a href="#skills" onClick={closeMenu}>
            <span>03</span>
            Skills
          </a>

          <a href="#projects" onClick={closeMenu}>
            <span>04</span>
            Projects
          </a>

          <a href="#certifications" onClick={closeMenu}>
            <span>05</span>
            Certifications
          </a>

          <a href="#experience" onClick={closeMenu}>
            <span>06</span>
            Experience
          </a>

          <a href="#contact" onClick={closeMenu}>
            <span>07</span>
            Contact
          </a>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;