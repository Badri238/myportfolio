import { useState } from 'react';
import './Projects.css';

export default function Projects() {
  const [activeStep, setActiveStep] = useState(0);

  // States for BFitness Gym App Mock Tracker
  const [gymSets, setGymSets] = useState([
    { id: 1, exercise: 'Barbell Bench Press', weight: 80, reps: 8, completed: true },
    { id: 2, exercise: 'Barbell Bench Press', weight: 85, reps: 6, completed: true },
    { id: 3, exercise: 'Barbell Bench Press', weight: 90, reps: 4, completed: false },
  ]);
  const [newWeight, setNewWeight] = useState(90);
  const [newReps, setNewReps] = useState(5);

  const toggleSetComplete = (id) => {
    setGymSets(gymSets.map(set => 
      set.id === id ? { ...set, completed: !set.completed } : set
    ));
  };

  const addGymSet = (e) => {
    e.preventDefault();
    if (newWeight <= 0 || newReps <= 0) return;
    const newSet = {
      id: Date.now(),
      exercise: 'Barbell Bench Press',
      weight: parseFloat(newWeight),
      reps: parseInt(newReps),
      completed: false
    };
    setGymSets([...gymSets, newSet]);
  };

  const deleteGymSet = (id) => {
    setGymSets(gymSets.filter(set => set.id !== id));
  };

  const steps = [
    {
      title: 'Merged PR Trigger',
      desc: 'Developer merges a Feature branch into the DEV branch on GitHub, completing local tasks.',
      status: 'Source Event'
    },
    {
      title: 'Webhook Event Payload',
      desc: 'GitHub sends a Webhook JSON payload containing merge details, diffs, and repository metadata to our Node.js server.',
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
          Developing highly interactive systems, from automated DevOps workflows 
          to personal tools designed for mobile responsiveness and performance.
        </p>

        {/* Project 1: Enterprise Auto-Clone Tool */}
        <div className="project-section-divider">
          <span className="divider-tag">Enterprise Workflow Automation</span>
          <h3 className="project-section-subtitle">AI-Powered Git Promotion Pipeline</h3>
        </div>

        <div className="glass-card project-showcase-card">
          <div className="project-grid">
            
            {/* Left: Project Details */}
            <div className="project-details">
              <span className="badge internal-badge">Internal DevOps Tool</span>
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

        {/* Project 2: Personal Fitness Application */}
        <div className="project-section-divider" style={{ marginTop: '70px' }}>
          <span className="divider-tag">Personal Applications</span>
          <h3 className="project-section-subtitle">Mobile-First Fitness Tracker</h3>
        </div>

        <div className="glass-card project-showcase-card">
          <div className="project-grid">
            
            {/* Left: Project Details */}
            <div className="project-details">
              <span className="badge personal-badge">Personal Project</span>
              <h3 className="project-title">BFitness — Gym Journaling App</h3>
              
              <div className="project-tags">
                <span className="tag">ReactJS</span>
                <span className="tag">CSS3</span>
                <span className="tag">HTML5</span>
                <span className="tag">Local Storage</span>
                <span className="tag">Netlify</span>
                <span className="tag">Mobile Responsive</span>
              </div>

              <p className="project-description">
                A modern, high-performance, mobile-first workout diary developed to streamline gym session tracking 
                and replace manual notebook logging. Features clean responsive dashboards, set-by-set completions, 
                and weight progression logs that persist across browser reloads.
              </p>

              <div className="project-stats-row">
                <div className="p-stat">
                  <span className="p-stat-val">100%</span>
                  <span className="p-stat-lbl">Mobile Responsive</span>
                </div>
                <div className="p-stat">
                  <span className="p-stat-val">Local</span>
                  <span className="p-stat-lbl">Storage Persistence</span>
                </div>
                <div className="p-stat">
                  <span className="p-stat-val">0s</span>
                  <span className="p-stat-lbl">Server Delay (Client-Side)</span>
                </div>
              </div>

              <div className="project-bullet-points">
                <div className="bullet-item">
                  <span className="bullet-icon">✦</span>
                  <p>Designed a distraction-free, high-contrast workout interface perfect for gym floor lighting.</p>
                </div>
                <div className="bullet-item">
                  <span className="bullet-icon">✦</span>
                  <p>Responsive design built purely with vanilla CSS grids and flexbox, ensuring smooth viewport adaptability.</p>
                </div>
                <div className="bullet-item">
                  <span className="bullet-icon">✦</span>
                  <p>Hosted on Netlify for continuous integration, with ultra-fast page speeds and static delivery optimizations.</p>
                </div>
              </div>

              <div className="project-action-links" style={{ marginTop: '24px' }}>
                <a 
                  href="https://bfitness.netlify.app/login" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                  style={{ gap: '8px' }}
                >
                  Visit Live Application
                  <svg className="cta-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: '16px', height: '16px' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right: Interactive Gym Journal Simulator */}
            <div className="project-architecture">
              <h4 className="architecture-title">INTERACTIVE TRACKER SIMULATOR:</h4>
              <p className="architecture-hint">Add or complete sets to preview the journaling logic</p>

              <div className="gym-simulator glass-card">
                <div className="simulator-header">
                  <div className="sim-status">
                    <span className="sim-live-dot animate-pulse-glow"></span>
                    <span>ACTIVE SESSION: PUSH DAY</span>
                  </div>
                  <span className="sim-timer">00:42:15</span>
                </div>

                <div className="simulator-body">
                  <h4 className="exercise-name">1. Flat Barbell Bench Press</h4>
                  <p className="exercise-goal">Goal: 3 Sets × 6-8 Reps</p>

                  <div className="sets-table">
                    <div className="table-header-row">
                      <span>SET</span>
                      <span>PREVIOUS</span>
                      <span>KG</span>
                      <span>REPS</span>
                      <span>DONE</span>
                    </div>

                    {gymSets.map((set, index) => (
                      <div 
                        key={set.id} 
                        className={`table-row ${set.completed ? 'completed' : ''}`}
                      >
                        <span className="set-num">{index + 1}</span>
                        <span className="set-prev">75kg × 8</span>
                        
                        <span className="set-input-val">{set.weight} kg</span>
                        <span className="set-input-val">{set.reps}</span>

                        <div className="set-check-col">
                          <button 
                            type="button" 
                            className={`set-checkbox-btn ${set.completed ? 'checked' : ''}`}
                            onClick={() => toggleSetComplete(set.id)}
                            aria-label={`Toggle set ${index + 1}`}
                          >
                            {set.completed ? '✓' : ''}
                          </button>
                          
                          {index >= 3 && (
                            <button 
                              type="button" 
                              className="delete-set-btn" 
                              onClick={() => deleteGymSet(set.id)}
                              title="Delete set"
                            >
                              ×
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <form onSubmit={addGymSet} className="simulator-add-set-form">
                    <div className="input-group">
                      <input 
                        type="number" 
                        value={newWeight}
                        onChange={(e) => setNewWeight(e.target.value)}
                        placeholder="Weight"
                        min="1"
                        step="0.5"
                        required
                        aria-label="Set Weight in kilograms"
                      />
                      <span className="input-unit">kg</span>
                    </div>
                    <div className="input-group">
                      <input 
                        type="number" 
                        value={newReps}
                        onChange={(e) => setNewReps(e.target.value)}
                        placeholder="Reps"
                        min="1"
                        required
                        aria-label="Set Reps count"
                      />
                      <span className="input-unit">reps</span>
                    </div>
                    <button type="submit" className="btn btn-secondary add-set-btn-submit">
                      + Add Set
                    </button>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
