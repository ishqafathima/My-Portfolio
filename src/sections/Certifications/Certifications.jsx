
import "./Certifications.css";
import { useState } from "react";

function Certifications() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

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
      title: "Certification Name",
      issuer: "Issuing Organization",
      date: "2025",
      description: "Short description of the certification.",
      pdf: null,
    },
    {
      title: "Certification Name",
      issuer: "Issuing Organization",
      date: "2025",
      description: "Short description of the certification.",
      pdf: null,
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
  <button
    className="view-certificate"
    onClick={() => window.open(certification.pdf, "_blank")}
  >
    View Certificate
  </button>
)}

              </div>

            </div>
          ))}

        </div>
      </div>

      {/* PDF Popup */}
      {selectedCertificate && (
        <div
          className="certificate-modal"
          onClick={() => setSelectedCertificate(null)}
        >

          <div
            className="certificate-modal-content"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="close-certificate"
              onClick={() => setSelectedCertificate(null)}
            >
              ×
            </button>

            <iframe
              src={selectedCertificate}
              title="Certificate PDF"
              className="certificate-pdf"
            />

          </div>

        </div>
      )}

    </section>
  );
}

export default Certifications;

