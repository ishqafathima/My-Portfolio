import "./About.css";
import { FaGithub, FaLinkedin, FaMapMarkerAlt, FaEnvelope, FaPhone, FaBriefcase } from "react-icons/fa";

function About() {
const downloadCV = () => {
const link = document.createElement("a");
link.href = "/ishqa.pdf";
link.download = "ishqa.pdf";
link.click();
};

return ( <section className="about-section"> <div className="about-container">


    {/* Section Heading */}
    <div className="about-heading">
      <span className="section-label">ABOUT ME</span>
      <h2>Who am I?</h2>
      <div className="heading-line"></div>
    </div>

    <div className="about-content">

      {/* Left Side */}
      <div className="about-text">

        <p className="intro-text">
          I am an Information Technology graduate with a strong
          interest in <span>full-stack development</span>,{" "}
          <span>mobile application development</span>, and{" "}
          <span>UI/UX design</span>.
        </p>

        <p>
          I am particularly good at frontend development using
          React.js, and I enjoy creating clean, responsive, and
          user-friendly interfaces. I also enjoy learning new
          technologies and building useful applications.
        </p>

        {/* Social Links */}
        <div className="about-actions">

          <button className="cv-button" onClick={downloadCV}>
            Download CV
          </button>

          <div className="social-links">
            <a
              href="https://github.com/ishqafathima"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/ishqalafir/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>

        </div>

      </div>

      {/* Right Side - Information Card */}
      <div className="info-card">

        <div className="info-card-header">
          <div className="profile-dot"></div>
          <div>
            <h3>Personal Details</h3>
            <p>Get to know me</p>
          </div>
        </div>

        <div className="info-list">

          <div className="info-item">
            <div className="info-icon">
              <FaEnvelope />
            </div>
            <div>
              <span>Email</span>
              <p>ishqafathima34@gmail.com</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <FaMapMarkerAlt />
            </div>
            <div>
              <span>Location</span>
              <p>Weligama, Matara, Sri Lanka</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <FaPhone />
            </div>
            <div>
              <span>Phone</span>
              <p>+94 767607224</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon">
              <FaBriefcase />
            </div>
            <div>
              <span>Experience</span>
              <p>Fresher – Seeking Internship</p>
            </div>
          </div>

        </div>

      </div>

    </div>

  </div>
</section>

);
}

export default About;
