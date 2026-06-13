import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Impact', href: '#impact' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Awards', href: '#awards' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background glassmorphism transition on scroll
      setIsScrolled(window.scrollY > 20);

      // Scroll progress indicator
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Determine active section based on scroll position
      const scrollPosition = window.scrollY + 150; // Offset for headers
      for (const link of navLinks) {
        const sectionId = link.href.substring(1);
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-progress" style={{ width: `${scrollProgress}%` }} />
      <div className="navbar-container">
        <a href="#hero" className="navbar-logo">
          <span className="logo-symbol">&lt;</span>
          <span className="logo-text">Badri</span>
          <span className="logo-accent">.B</span>
          <span className="logo-symbol">/&gt;</span>
        </a>

        {/* Desktop Nav */}
        <nav className="navbar-desktop-nav">
          {navLinks.map((link) => {
            const id = link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`navbar-link ${activeSection === id ? 'active' : ''}`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className={`navbar-mobile-toggle ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle Navigation Menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`navbar-mobile-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav className="navbar-mobile-nav">
          {navLinks.map((link) => {
            const id = link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`navbar-mobile-link ${activeSection === id ? 'active' : ''}`}
                onClick={handleLinkClick}
              >
                {link.name}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
