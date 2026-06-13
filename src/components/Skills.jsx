import { useState } from 'react';
import './Skills.css';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'backend', name: 'Backend & Frameworks' },
    { id: 'frontend', name: 'Frontend Web' },
    { id: 'database', name: 'Data & Messaging' },
    { id: 'devops', name: 'Architecture & DevOps' },
    { id: 'ai', name: 'AI & Automation' }
  ];

  const skillData = [
    // Backend & Frameworks
    { name: 'Java 8/11', category: 'backend', level: 'Expert', desc: 'Core language for building trading APIs, multithreading, collections.' },
    { name: 'Spring Boot 3.x', category: 'backend', level: 'Expert', desc: 'Enterprise microservices foundation, MVC, web services, dependency injection.' },
    { name: 'Spring Data JPA', category: 'backend', level: 'Expert', desc: 'Database access layer mapping, transactions, query abstractions.' },
    { name: 'Hibernate 6', category: 'backend', level: 'Expert', desc: 'ORM, session management, performance caching strategies, schema maps.' },
    { name: 'Spring Security (JWT)', category: 'Advanced', level: 'Advanced', desc: 'Secure stateless authentication, role-based authorization control.' },
    { name: 'Apache Camel', category: 'backend', level: 'Advanced', desc: 'Enterprise Integration Patterns (EIP), routing, system integration flows.' },
    { name: 'Camunda BPM', category: 'backend', level: 'Advanced', desc: 'Business process modeling, process engine integration, service tasks.' },
    { name: 'TypeScript', category: 'backend', level: 'Advanced', desc: 'Strongly typed scripting for backend configs and frontend applications.' },

    // Frontend Web
    { name: 'Angular 17', category: 'frontend', level: 'Advanced', desc: 'Component architecture, directives, state managers, enterprise frontend.' },
    { name: 'RxJS', category: 'frontend', level: 'Advanced', desc: 'Reactive programming, observable stream pipes, async event handling.' },
    { name: 'Angular Material', category: 'frontend', level: 'Advanced', desc: 'UI component library, tables, inputs, responsive dashboard elements.' },
    { name: 'JavaScript (ES6+)', category: 'frontend', level: 'Expert', desc: 'Dynamic scripting, callbacks, promises, web APIs, asynchronous execution.' },
    { name: 'ReactJS', category: 'frontend', level: 'Advanced', desc: 'Used to build internal AI git automation portal UI, hooks, state.' },

    // Data & Messaging
    { name: 'Oracle DB 19c', category: 'database', level: 'Expert', desc: 'Relational storage, complex join execution, data architecture schemas.' },
    { name: 'Complex SQL / PL/SQL', category: 'database', level: 'Expert', desc: 'Analytical functions, stored procedures, execution plan reviews.' },
    { name: 'Query Optimization', category: 'database', level: 'Expert', desc: 'SQL tuning, index strategies, materialized views, query rewrites.' },
    { name: 'Solace Messaging', category: 'database', level: 'Advanced', desc: 'Enterprise pub-sub event brokers, message queues, fan-out architecture.' },
    { name: 'ActiveMQ', category: 'database', level: 'Advanced', desc: 'JMS message queues, point-to-point and pub-sub integrations.' },
    { name: 'Apache QuickFIX', category: 'database', level: 'Advanced', desc: 'Financial Information eXchange (FIX Protocol) engines for order execution.' },

    // Architecture & DevOps
    { name: 'Microservices', category: 'devops', level: 'Expert', desc: 'Service decomposition, API gateways, service discovery, configurations.' },
    { name: 'REST API Design', category: 'devops', level: 'Expert', desc: 'JSON payloads, standard status codes, API versioning, documentation.' },
    { name: 'ACID Compliance', category: 'devops', level: 'Expert', desc: 'Distributed transaction management, locks, data integrity guarantees.' },
    { name: 'Jenkins', category: 'devops', level: 'Advanced', desc: 'Pipeline as code, automated build pipelines, static analysis steps.' },
    { name: 'GitHub Actions', category: 'devops', level: 'Expert', desc: 'CI/CD automation, workflow triggers, secrets storage, runner configs.' },
    { name: 'Git & Git Flow', category: 'devops', level: 'Expert', desc: 'Branch management, merge conflicts, pull requests, release tagging.' },
    { name: 'Docker', category: 'devops', level: 'Intermediate', desc: 'Containerization, dockerfiles, images, local container deployments.' },
    { name: 'AWS Basics', category: 'devops', level: 'Intermediate', desc: 'EC2 servers, S3 storage, basic cloud service configurations.' },
    { name: 'JUnit 5 & Mockito', category: 'devops', level: 'Expert', desc: 'Unit testing, test coverage profiling, mocking database layers.' },

    // AI & Automation
    { name: 'LLM APIs', category: 'ai', level: 'Advanced', desc: 'Integration of LLMs (Gemini/OpenAI) for conflict resolution and text mapping.' },
    { name: 'PR Automation', category: 'ai', level: 'Expert', desc: 'Automated branch promotion, merge handling, conflict analysis.' },
    { name: 'Webhooks', category: 'ai', level: 'Advanced', desc: 'Event listening servers for Git event payloads (GitHub/GitLab).' },
    { name: 'OpenAPI / Swagger', category: 'ai', level: 'Advanced', desc: 'API contracts, Swagger UI setup, code generators.' }
  ];

  const filteredSkills = activeTab === 'all' 
    ? skillData 
    : skillData.filter(skill => skill.category === activeTab);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">Technical Skillset</h2>
        
        {/* Navigation Tabs */}
        <div className="skills-tabs-container">
          <div className="skills-tabs">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`skills-tab-btn ${activeTab === category.id ? 'active' : ''}`}
                onClick={() => setActiveTab(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div key={`${skill.name}-${index}`} className="glass-card skill-card">
              <div className="skill-card-header">
                <h3 className="skill-name">{skill.name}</h3>
                <span className={`skill-level-badge level-${skill.level.toLowerCase()}`}>
                  {skill.level}
                </span>
              </div>
              <p className="skill-desc">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
