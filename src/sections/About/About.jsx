import "./About.css";

function About() {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/ishqa.pdf";
    link.download = "ishqa.pdf";
    link.click();
  };

  return (
    <div className="section-content">
      <h2>About Me</h2>

      <h2>Who am I?</h2>

      <p>
        I am an Information Technology graduate with a strong
        interest in full-stack development, mobile application
        development, and UI/UX design.
      </p>

      <p>
        I am particularly good at frontend development using
        React.js, and I enjoy creating clean, responsive, and
        user-friendly interfaces. I also enjoy learning new
        technologies and building useful applications.
      </p>

      <div className="contact-info">
        <p>
          <strong>Name:</strong> Ishqa Lafir
        </p>

        <p>
          <strong>Email:</strong> your-email@gmail.com
        </p>

        <p>
          <strong>Location:</strong> Sri Lanka
        </p>
      </div>

      <button className="cv-button" onClick={downloadCV}>
        Download CV
      </button>
    </div>
  );
}

export default About;