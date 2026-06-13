import './Awards.css';

export default function Awards() {
  const awards = [
    {
      title: 'Protostar Award (2023)',
      subtitle: 'Business Unit Recognition',
      desc: 'Awarded for rapid resolution of critical production incidents across Java, Angular, and Oracle PL/SQL applications. Ensured minimal business disruption and restored trading service flow within strict SLA timelines.',
      icon: (
        <svg className="award-card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      badgeColor: 'gold'
    },
    {
      title: 'Silver Award (2026)',
      subtitle: 'Team & Project Performance',
      desc: 'Received for successfully managing multiple projects, delivering complex business epics, and implementing key performance optimization initiatives that enhanced overall system throughput, efficiency, and scalability.',
      icon: (
        <svg className="award-card-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5a2 2 0 10-2 2h2zm-2 4h4M9 16h6m-7 4h8a2 2 0 002-2v-4a2 2 0 00-2-2H8a2 2 0 00-2 2v4a2 2 0 002 2z" />
        </svg>
      ),
      badgeColor: 'silver'
    }
  ];

  return (
    <section id="awards" className="section awards-section">
      <div className="container">
        <h2 className="section-title">Awards & Recognition</h2>
        
        <p className="awards-intro">
          Recognized for technical excellence, crisis resolution under pressure, and delivering reliable software.
        </p>

        <div className="awards-grid">
          {awards.map((award, index) => (
            <div key={award.title} className="glass-card award-card">
              <div className="award-card-glow"></div>
              <div className="award-card-header">
                <div className={`award-icon-box ${award.badgeColor}`}>
                  {award.icon}
                </div>
                <div>
                  <span className="badge award-type-badge">{award.subtitle}</span>
                  <h3 className="award-title">{award.title}</h3>
                </div>
              </div>
              <p className="award-desc">{award.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
