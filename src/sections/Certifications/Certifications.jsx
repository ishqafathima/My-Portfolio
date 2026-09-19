import "./Certifications.css";

function Certifications() {
  const certifications = [
    {
      title: "Certification Name",
      issuer: "Issuing Organization",
      date: "2026",
      description: "Short description of the certification.",
    },
    {
      title: "Certification Name",
      issuer: "Issuing Organization",
      date: "2025",
      description: "Short description of the certification.",
    },
    {
      title: "Certification Name",
      issuer: "Issuing Organization",
      date: "2025",
      description: "Short description of the certification.",
    },
  ];

  return (
    <section className="certifications">
      <div className="certifications-content">

        <h1>Certifications</h1>

        <p className="certifications-intro">
          Certifications and courses I have completed to strengthen my
          technical and professional skills.
        </p>

        <div className="certification-grid">
          {certifications.map((certification, index) => (
            <div className="certification-card" key={index}>

              <div className="certificate-icon">
                🏆
              </div>

              <div className="certificate-info">
                <h2>{certification.title}</h2>

                <h3>{certification.issuer}</h3>

                <span className="certificate-date">
                  {certification.date}
                </span>

                <p>{certification.description}</p>

                <button className="view-certificate">
                  View Certificate
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Certifications;