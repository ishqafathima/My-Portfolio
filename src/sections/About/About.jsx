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

      <p>
        I am an undergraduate Information Technology student
        interested in full-stack development, mobile
        application development, and UI/UX design.
      </p>

      <p>
        I enjoy creating useful applications and learning
        new technologies to improve my development skills.
      </p>

      <button className="cv-button" onClick={downloadCV}>
        Download CV
      </button>
    </div>
  );
}

export default About;