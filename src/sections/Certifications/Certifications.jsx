import "./Certifications.css";

function Certifications() {
  const certifications = [
    {
      title: "IEEEXtreme 17.0",
      issuer: "IEEE",
      date: "29th October 2023",
      team: "Triopartners",
      description:
        "Participated in IEEEXtreme 17.0, solving competitive programming and algorithmic problems as part of Team Triopartners.",
      pdf: "/Certificates/IEEEXtreme 17.0.pdf",
    },

    {
      title: "IEEEXtreme 18.0",
      issuer: "IEEE",
      date: "26th October 2024",
      team: "ISquad",
      description:
        "Participated in IEEEXtreme 18.0, solving competitive programming and algorithmic problems as part of Team ISquad.",
      pdf: "/Certificates/IEEEXtreme 18.0.pdf",
    },

    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      date: "9th August 2025",
      description:
        "Covered cybersecurity fundamentals, online safety, threats, vulnerabilities, and digital security practices.",
      pdf: "/Certificates/Cybersecurity.pdf",
    },

    {
      title: "JavaScript Essentials 1",
      issuer: "Cisco Networking Academy",
      date: "7th April 2025",
      description:
        "Covered JavaScript fundamentals including variables, data types, functions, operators, and control flow.",
      pdf: "/Certificates/JavaScript_Essentials_1.pdf",
    },

    {
      title: "JavaScript Essentials 2",
      issuer: "Cisco Networking Academy",
      date: "24th June 2025",
      description:
        "Covered advanced JavaScript concepts including objects, arrays, functions, and error handling.",
      pdf: "/Certificates/JavaScript_Essentials_2.pdf",
    },
  ];

  return (
    <section className="certifications">
      <div className="certifications-container">

        {/* Section Heading */}
        <div className="certifications-heading">

          <h1>Certifications</h1>

          <p>
            Certifications and courses I have completed to
            strengthen my technical and professional skills.
          </p>

          <div className="heading-line"></div>

        </div>

        {/* Certification Grid */}
        <div className="certification-grid">

          {certifications.map((certification) => (

            <article
              className="certification-card"
              key={certification.title}
            >

              {/* Card Top */}
              <div className="certificate-top">

                <span className="certificate-mark">
                  ✓
                </span>

              </div>

              {/* Certificate Information */}
              <div className="certificate-info">

                <h2>{certification.title}</h2>

                <h3>{certification.issuer}</h3>

                <div className="certificate-meta">

                  <span>
                    {certification.date}
                  </span>

                  {certification.team && (
                    <span>
                      Team: {certification.team}
                    </span>
                  )}

                </div>

                <p>
                  {certification.description}
                </p>

              </div>

              {/* Certificate Button */}
              {certification.pdf && (
                <a
                  href={certification.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-certificate"
                >
                  <span>View Certificate</span>

                  <span className="certificate-arrow">
                    ↗
                  </span>
                </a>
              )}

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Certifications;