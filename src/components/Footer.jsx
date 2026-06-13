import './Footer.css';

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <div className="footer-left">
          <a href="#hero" className="footer-logo" onClick={scrollToTop}>
            <span className="logo-symbol">&lt;</span>
            <span className="logo-text">Badri</span>
            <span className="logo-accent">.B</span>
            <span className="logo-symbol">/&gt;</span>
          </a>
          <p className="footer-copyright">
            © {new Date().getFullYear()} Badri B. All rights reserved.
          </p>
        </div>

        <div className="footer-center">
          <p className="footer-stack-info">
            Built with <strong className="stack-highlight">React</strong> & <strong className="stack-highlight">Vite</strong>. 
            Styled with custom <strong className="stack-highlight">Vanilla CSS</strong>.
          </p>
        </div>

        <div className="footer-right">
          <button 
            className="back-to-top-btn glass-card" 
            onClick={scrollToTop} 
            aria-label="Back to Top"
          >
            <svg className="up-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
