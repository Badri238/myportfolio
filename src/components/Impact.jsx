import { useState } from 'react';
import './Impact.css';

export default function Impact() {
  const [activeMetric, setActiveMetric] = useState(0);

  const metrics = [
    {
      value: '30%',
      label: 'API Speedup',
      subtitle: 'Response Time & Throughput Optimization',
      shortDesc: 'Optimized critical financial workflows in Spring Boot and tuned complex Oracle SQL queries.',
      fullDetails: 'Designed and developed Spring Boot microservices for high-volume trade order flows. By rewriting service logic to leverage parallel streams, and profiling Oracle DB queries (indexing strategies, cursor reuse, partition tuning), API response times decreased by 30% and peak throughput increased by 20%.',
      icon: (
        <svg className="metric-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      value: '35%',
      label: 'Incident Reduction',
      subtitle: 'System Stability & P2 Incident Control',
      shortDesc: 'Led root cause analysis and implemented permanent code fixes to reduce production issues.',
      fullDetails: 'Spearheaded investigative root cause analyses for critical P2 production incidents. Implemented robust logging architectures, enhanced global Exception Handling handlers, and delivered permanent bug fixes. This reduced recurring support tickets by 35% and cut team troubleshooting timelines by 30%.',
      icon: (
        <svg className="metric-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      value: '100%',
      label: 'PR Automation',
      subtitle: 'Eliminated Manual Environment Syncing',
      shortDesc: 'Developed an LLM-powered Git tool that automates UAT and production release promotions.',
      fullDetails: 'Created an internal AI-powered clone and branch promotion tool using React, Node.js, and LLM APIs. Configured webhooks to listen for merged Pull Request events and auto-raise cherry-pick PRs down the pipeline (dev → UAT → main). Handled context cherry-pick conflicts via LLM-assisted code resolution, completely saving 3–5 team-hours weekly.',
      icon: (
        <svg className="metric-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      value: '0',
      label: 'Rollback Deployments',
      subtitle: 'Consistent, High-Reliability Releases',
      shortDesc: 'Designed and enhanced Jenkins CI/CD pipelines enabling bulletproof deployments.',
      fullDetails: 'Maintained a flawless release record across critical trading environments. Integrated extensive automated unit test blocks (JUnit 5, Mockito) and SonarQube verification into Jenkins-based builds. Enabled robust, repeatable deployments that eliminated manual delivery slip-ups and guaranteed zero production rollbacks.',
      icon: (
        <svg className="metric-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 8H18.5" />
        </svg>
      )
    }
  ];

  return (
    <section id="impact" className="section impact-section">
      <div className="container">
        <h2 className="section-title">Measurable Impact</h2>
        
        <p className="impact-intro">
          Performance, reliability, and automation are the core pillars of my engineering. 
          Here is how I drive business value and technical excellence.
        </p>

        <div className="impact-grid">
          {/* Interactive Metric Cards */}
          <div className="metric-cards-container">
            {metrics.map((metric, index) => (
              <div 
                key={metric.label}
                className={`glass-card metric-card ${activeMetric === index ? 'active' : ''}`}
                onClick={() => setActiveMetric(index)}
              >
                <div className="metric-card-left">
                  {metric.icon}
                  <div>
                    <h3 className="metric-card-label">{metric.label}</h3>
                    <p className="metric-card-subtitle">{metric.subtitle}</p>
                  </div>
                </div>
                <div className="metric-card-right">
                  <span className="metric-card-value">{metric.value}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Detailed View Pane */}
          <div className="glass-card metric-detail-pane">
            <div className="detail-pane-header">
              <span className="detail-indicator animate-pulse-glow"></span>
              <h3>Impact Case Study</h3>
            </div>
            
            <div className="detail-pane-body">
              <div className="detail-large-value">
                <span className="value-num">{metrics[activeMetric].value}</span>
                <span className="value-label">{metrics[activeMetric].label}</span>
              </div>
              
              <h4 className="detail-subtitle">{metrics[activeMetric].subtitle}</h4>
              
              <p className="detail-short">{metrics[activeMetric].shortDesc}</p>
              
              <div className="detail-divider"></div>
              
              <h5 className="detail-header-small">HOW IT WAS ACHIEVED:</h5>
              <p className="detail-full">{metrics[activeMetric].fullDetails}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
