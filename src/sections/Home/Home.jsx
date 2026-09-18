import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <section className="home">

      <div className="home-content">

        <div className="intro">

          <p className="hello">Hello, I'm</p>

          <h1 className="name">
            Ishka Lafir
          </h1>

          <h2 className="role">
            <span>IT Undergraduate</span> |{" "}
            <span>Full-stack Developer</span> |{" "}
            <span>Mobile Application Developer</span> |{" "}
            <span>UI/UX Designer</span>
          </h2>

          <p className="description">
            I am an IT undergraduate passionate about software development,
            UI/UX design, and building user-friendly applications.
          </p>

          <div className="home-buttons">

            <button className="work-btn">
              View My Work
            </button>

            <button
              className="contact-btn"
              onClick={() => navigate("/contact")}
            >
              Contact Me
            </button>

          </div>

        </div>

        <div className="profile">
          <img
            src="/Ishqa.jpeg"
            alt="Ishqa Lafir"
            className="profile-image"
          />
        </div>

      </div>

    </section>
  );
}

export default Home;