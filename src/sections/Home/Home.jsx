
import "./Home.css";

function Home() {
  return (
    <section className="home">

      <div className="home-content">

        <div className="intro">

          <p className="hello">Hello, I'm</p>

          <h1 className="name">
            Fathima Ishka
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

            <button
              className="work-btn"
              onClick={() =>
                document.getElementById("projects").scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              View My Work
            </button>

            <button
              className="contact-btn"
              onClick={() =>
                document.getElementById("contact").scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              Contact Me
            </button>

          </div>

        </div>

        <div className="profile">
          <img
            src="/Ishqa.jpeg"
            alt="Ishka Lafir"
            className="profile-image"
          />
        </div>

      </div>

    </section>
  );
}

export default Home;
