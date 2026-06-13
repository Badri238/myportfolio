import './Education.css';

export default function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        
        <div className="education-grid">
          <div className="glass-card education-card">
            <div className="education-card-glow"></div>
            
            <div className="education-header">
              <div className="edu-icon-box">
                <svg className="edu-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </div>
              
              <div className="edu-title-group">
                <span className="badge edu-badge">Undergraduate Degree</span>
                <h3 className="edu-degree">B.Sc. Computer Science</h3>
                <h4 className="edu-college">Bishop Heber College, Tiruchirappalli</h4>
                <p className="edu-university">Anna University affiliated | 2019 – 2022</p>
              </div>
              
              <div className="edu-score-container">
                <div className="edu-score-box">
                  <span className="edu-score-val">8.0</span>
                  <span className="edu-score-scale">/ 10 CGPA</span>
                </div>
              </div>
            </div>

            <div className="edu-divider"></div>

            <div className="edu-body">
              <h4 className="edu-body-title">Core Academic Foundations:</h4>
              <div className="edu-subjects">
                <span className="edu-subject-tag">Data Structures & Algorithms</span>
                <span className="edu-subject-tag">Object-Oriented Programming (OOP)</span>
                <span className="edu-subject-tag">Database Management Systems (DBMS)</span>
                <span className="edu-subject-tag">Software Engineering Principles</span>
                <span className="edu-subject-tag">Computer Networks</span>
                <span className="edu-subject-tag">Web Technologies</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
