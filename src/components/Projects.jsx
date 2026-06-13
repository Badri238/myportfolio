import { useState } from 'react';
import './Projects.css';

export default function Projects() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: 'Merged PR Trigger',
      desc: 'Developer merges a Feature branch into the DEV branch on GitHub, completing local tasks.',
      status: 'Source Event'
    },
    {
      title: 'Webhook Event Payload',
      desc: 'GitHub sends a Webhook JSON payload containing merge details, commit diffs, and repository metadata to our Node.js server.',
      status: 'Transmission'
    },
    {
      title: 'LLM Conflict Analyzer',
      desc: 'Our Node.js service analyzes potential cherry-pick conflicts using an LLM. It resolves minor context discrepancies, preparing a clean patch.',
      status: 'AI Engine'
    },
    {
      title: 'GitHub Actions Execution',
      desc: 'Workflow runners pull the patch, cherry-pick commits, and automatically push a new branch (e.g. promote-dev-to-uat-102).',
      status: 'Automation runner'
    },
    {
      title: 'Auto-PR Generated',
      desc: 'A Pull Request is generated from the promotion branch to the UAT branch. Ready for QA and release team confirmation.',
      status: 'Destination PR'
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="glow-orb orb-project"></div>
      
      <div className="container">
        <h2 className="section-title">Key Projects</h2>
        
        <p className="projects-intro">
          Designing solutions that solve real business and engineering bottlenecks. 
          Here is a deep dive into an automated release pipeline tool I engineered.
        </p>

        {/* Highlighted Project Showcase Card */}
        <div className="glass-card project-showcase-card">
          <div className="project-grid">
            
            {/* Left: Project Details */}
            <div className="project-details">
              <span className="badge internal-badge">Internal Automation Tool</span>
              <h3 className="project-title">AI-Powered Auto-Clone & Branch Promotion Tool</h3>
              
              <div className="project-tags">
                <span className="tag">ReactJS</span>
                <span className="tag">Node.js</span>
                <span className="tag">LLM API</span>
                <span className="tag">Git</span>
                <span className="tag">GitHub Actions</span>
                <span className="tag">Webhooks</span>
                <span className="tag">REST APIs</span>
              </div>

              <p className="project-description">
                Engineered an intelligent internal DevOps tool that automates environment promotion pipelines. 
                By listening to Git events and utilizing Large Language Models, the tool eliminates manual cherry-picking 
                and automates conflict resolutions across staging branches.
              </p>

              <div className="project-stats-row">
                <div className="p-stat">
                  <span className="p-stat-val">100%</span>
                  <span className="p-stat-lbl">Manual Effort Saved</span>
                </div>
                <div className="p-stat">
                  <span className="p-stat-val">3–5 hrs</span>
                  <span className="p-stat-lbl">Saved Weekly / Engineer</span>
                </div>
                <div className="p-stat">
                  <span className="p-stat-val">~0</span>
                  <span className="p-stat-lbl">Integration Drift</span>
                </div>
              </div>

              <div className="project-bullet-points">
                <div className="bullet-item">
                  <span className="bullet-icon">✦</span>
                  <p>Listens for merged Pull Requests via GitHub webhook configurations.</p>
                </div>
                <div className="bullet-item">
                  <span className="bullet-icon">✦</span>
                  <p>Employs LLM context injection to intelligently fix minor code conflicts, reducing cherry-pick failures to near zero.</p>
                </div>
                <div className="bullet-item">
                  <span className="bullet-icon">✦</span>
                  <p>Automatically triggers promotion workflows: Dev → UAT → Main release branch.</p>
                </div>
              </div>
            </div>

            {/* Right: Interactive Architecture Flowchart */}
            <div className="project-architecture">
              <h4 className="architecture-title">INTERACTIVE PIPELINE PIPES:</h4>
              <p className="architecture-hint">Click a stage to inspect details</p>

              <div className="flowchart-container">
                {steps.map((step, index) => (
                  <div 
                    key={step.title}
                    className={`flow-node ${activeStep === index ? 'active' : ''}`}
                    onClick={() => setActiveStep(index)}
                  >
                    <div className="flow-node-index">0{index + 1}</div>
                    <div className="flow-node-content">
                      <div className="flow-node-status">{step.status}</div>
                      <div className="flow-node-title">{step.title}</div>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="flow-connector">
                        <span className="connector-arrow">➔</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Interactive Node Details Panel */}
              <div className="glass-card architecture-details-box">
                <div className="details-box-header">
                  <span className="step-tag">STAGE 0{activeStep + 1}</span>
                  <h5>{steps[activeStep].title}</h5>
                </div>
                <p className="details-box-body">{steps[activeStep].desc}</p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
