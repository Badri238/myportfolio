import { useState } from 'react';
import './Experience.css';

export default function Experience() {
  const [activeTab, setActiveTab] = useState('performance');

  const roleDetails = {
    company: 'CGI',
    location: 'Chennai, India (Financial Domain)',
    title: 'Software Engineer – Full Stack Developer',
    duration: 'August 2022 – Present (4 Years)',
    summary: '4 years building microservices and full stack solutions for enterprise financial trading platforms serving institutional and retail clients.'
  };

  const contributionTabs = [
    {
      id: 'performance',
      label: 'Performance & DB',
      title: 'Performance Optimization & Database Engineering',
      points: [
        'Designed and developed Spring Boot microservices for critical financial workflows.',
        'Optimized service execution logic and Oracle DB queries, resulting in a 30% speedup in API response times and a 20% increase in system throughput during peak trading hours.',
        'Authored and tuned complex Oracle SQL queries, designed indexing strategies, and conducted application-level profiling to deliver consistent query performance improvements across high-volume financial data.'
      ],
      badge: 'SQL / Spring / JProfiler'
    },
    {
      id: 'apis',
      label: 'APIs & Integration',
      title: 'REST APIs & Event-Driven Architecture',
      points: [
        'Designed and implemented REST APIs integrated with Oracle DB via JPA/Hibernate, ensuring transactional integrity and ACID compliance across all financial operations.',
        'Engineered inter-service communication using Solace messaging broker to distribute real-time transaction updates.',
        'Resolved financial message processing issues via Apache QuickFIX (FIX Protocol), ensuring SLA compliance for trade order flows.'
      ],
      badge: 'Solace / REST / FIX Protocol'
    },
    {
      id: 'reliability',
      label: 'Reliability & Support',
      title: 'System Support & Production Incident Resolution',
      points: [
        'Led investigative root cause analysis for P2 production incidents, stabilizing trading environments.',
        'Implemented permanent code fixes to reduce recurring production issues by 35%.',
        'Improved global logging frameworks and centralized exception handling, cutting team troubleshooting times by 30%.'
      ],
      badge: 'Logback / P2 Resolution'
    },
    {
      id: 'devops',
      label: 'CI/CD & DevOps',
      title: 'Automated Deployments & Reliability',
      points: [
        'Designed and enhanced Jenkins-based CI/CD pipelines, enabling reliable, automated deployments.',
        'Maintained a zero production rollback record across all production releases by integrating JUnit 5 unit testing and Mockito mock layers.',
        'Leveraged Docker containers for local developer workspace isolation and fast onboarding.'
      ],
      badge: 'Jenkins / Docker / Git Flow'
    },
    {
      id: 'leadership',
      label: 'Leadership',
      title: 'Ownership, Code Quality & Collaboration',
      points: [
        'Mentored junior developers, helping them master Spring Boot microservice architectures and Oracle query designs.',
        'Conducted thorough code reviews, promoting clean code practices and SOLID design principles.',
        'Coordinated with QA engineers, business analysts, and production support teams to ensure timely delivery of critical financial features.'
      ],
      badge: 'Code Review / Mentoring'
    }
  ];

  const currentTab = contributionTabs.find(tab => tab.id === activeTab);

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>

        <div className="experience-timeline">
          {/* Timeline Node */}
          <div className="timeline-node">
            {/* Left side: Timeline Icon and line */}
            <div className="timeline-marker-container">
              <div className="timeline-dot animate-pulse-glow">
                <svg className="timeline-dot-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="timeline-line"></div>
            </div>

            {/* Right side: Detailed Card */}
            <div className="glass-card timeline-content-card">
              <div className="timeline-card-header">
                <div>
                  <span className="badge company-badge">{roleDetails.company}</span>
                  <h3 className="role-title">{roleDetails.title}</h3>
                  <p className="role-location">{roleDetails.location}</p>
                </div>
                <div className="role-duration-container">
                  <span className="role-duration">{roleDetails.duration}</span>
                </div>
              </div>

              <p className="role-summary-text">{roleDetails.summary}</p>
              
              <div className="inner-dashboard-divider"></div>

              {/* Nested tabs for CGI contributions */}
              <div className="experience-tabs-container">
                <h4 className="dashboard-title">EXPLORE KEY RESPONSIBILITIES:</h4>
                <div className="experience-tabs">
                  {contributionTabs.map((tab) => (
                    <button
                      key={tab.id}
                      className={`exp-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Tab Panel */}
              <div className="experience-panel glass-card">
                <div className="panel-header">
                  <h4 className="panel-title">{currentTab.title}</h4>
                  <span className="badge panel-badge">{currentTab.badge}</span>
                </div>
                <ul className="panel-list">
                  {currentTab.points.map((point, index) => (
                    <li key={index} className="panel-list-item">
                      <span className="bullet-point"></span>
                      <p>{point}</p>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
