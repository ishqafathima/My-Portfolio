
import "./Certifications.css";

function Certifications() {
  const certifications = [
    {
      title: "IEEEXtreme 17.0",
      issuer: "IEEE",
      date: "29th October 2023",
      team: "Triopartners",
      description:
        "Participated in IEEEXtreme 17.0 as a member of Team Triopartners, collaborating to solve competitive programming and algorithmic problems within a limited time.",
      pdf: "/Certificates/IEEEXtreme 17.0.pdf",
    },
    {
     title: "IEEEXtreme 18.0",
      issuer: "IEEE",
      date: "26th October 2024",
      team: "ISquad",
      description:
        "Participated in IEEEXtreme 18.0 as a member of Team ISquad, collaborating to solve competitive programming and algorithmic problems within a limited time.",
      pdf: "/Certificates/IEEEXtreme 18.0.pdf",
    },
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      date: "9th August 2025",
      description: "An introductory cybersecurity course covering basic cybersecurity concepts, online safety, threats, vulnerabilities, and best practices for protecting digital information.",
      pdf: "/Certificates/Cybersecurity.pdf",
    },
    {
      title: "JavaScript Essentials 1",
      issuer: "Cisco Networking Academy",
      date: "7th April 2025",
      description: "An introductory JavaScript course covering fundamental programming concepts, variables, data types, operators, functions, control flow, and basic JavaScript programming techniques.",
      pdf: "/Certificates/JavaScript_Essentials_1.pdf",
    },
    {
      title: "JavaScript Essentials 2",
      issuer: "Cisco Networking Academy",
      date: "24th June 2025",
      description: "An intermediate JavaScript course covering advanced programming concepts, objects, arrays, functions, error handling, and modern JavaScript programming techniques.",
      pdf: "/Certificates/JavaScript_Essentials_2.pdf",
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

                {certification.team && (
                  <span className="certificate-team">
                    Team: {certification.team}
                  </span>
                )}

                <p>{certification.description}</p>

                {certification.pdf && (
                  <a
                    href={certification.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="view-certificate"
                  >
                    View Certificate
                  </a>
                )}

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Certifications;
