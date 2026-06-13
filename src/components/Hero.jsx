import { useState, useEffect } from 'react';
import './Hero.css';

export default function Hero() {
  const titles = [
    'Java Full Stack Developer',
    'Financial Microservices Specialist',
    'AI Git Automation Engineer'
  ];
  
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentTitle, setCurrentTitle] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const fullTitle = titles[titleIndex];
    
    if (isDeleting) {
      // Deleting text
      timer = setTimeout(() => {
        setCurrentTitle(fullTitle.substring(0, currentTitle.length - 1));
        setTypingSpeed(40); // speed up deletion
      }, typingSpeed);
    } else {
      // Typing text
      timer = setTimeout(() => {
        setCurrentTitle(fullTitle.substring(0, currentTitle.length + 1));
        setTypingSpeed(100);
      }, typingSpeed);
    }

    // Handle switching states
    if (!isDeleting && currentTitle === fullTitle) {
      // Pause at full text before deleting
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentTitle === '') {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
      setTypingSpeed(100);
    }

    return () => clearTimeout(timer);
  }, [currentTitle, isDeleting, titleIndex]);

  return (
    <section id="hero" className="hero-section">
      {/* Decorative Grid Grid & Glowing Orbs */}
      <div className="hero-grid-pattern"></div>
      <div className="glow-orb orb-1"></div>
      <div className="glow-orb orb-2"></div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-tagline">
            <span className="badge">Available for Senior Roles</span>
          </div>
          
          <h1 className="hero-name">
            Hi, I'm <span className="highlight-text">Badri B</span>
          </h1>
          
          <h2 className="hero-title">
            <span className="title-text">{currentTitle}</span>
            <span className="typing-cursor">|</span>
          </h2>
          
          <p className="hero-summary">
            Java Full Stack Developer with <strong>4 years of experience</strong> building scalable microservices for financial trading and wealth management platforms. Specialist in low-latency systems, database performance tuning, and automating developer workflows via LLM integrations.
          </p>

          <div className="hero-ctas">
            <a href="#impact" className="btn btn-primary">
              Explore Impact
              <svg className="cta-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </div>
        </div>

        {/* High-Impact Stat Dashboard Overlay */}
        <div className="hero-dashboard-container animate-float">
          <div className="glass-card hero-dashboard">
            <div className="dashboard-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="terminal-title">system_performance.sh</span>
            </div>
            
            <div className="dashboard-body">
              <div className="stat-row">
                <div className="stat-card">
                  <div className="stat-value text-emerald">-30%</div>
                  <div className="stat-label">API Latency</div>
                </div>
                <div className="stat-card">
                  <div className="stat-value text-cyan">-35%</div>
                  <div className="stat-label">P2 Incidents</div>
                </div>
              </div>

              <div className="stat-card full-width">
                <div className="stat-value text-indigo">100%</div>
                <div className="stat-label">Git PR Promotion Automation</div>
              </div>

              <div className="console-line">
                <span className="prompt">$</span> git push origin production
              </div>
              <div className="console-response">
                <span className="success-tag">DEPLOYED</span> Rollback status: <strong className="text-emerald">0% (Zero Rollbacks)</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <a href="#impact" aria-label="Scroll Down">
          <svg className="scroll-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
