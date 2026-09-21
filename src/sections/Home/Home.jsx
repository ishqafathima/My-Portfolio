import "./Home.css";

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">

        {/* LEFT CONTENT */}
        <div className="intro">

          <span className="home-label">
            WELCOME TO MY PORTFOLIO
          </span>

          <p className="hello">
            Hello, I'm
          </p>

          <h1 className="name">
            Fathima Ishka
          </h1>

          <h2 className="role">
            <span>Full-stack Developer</span>
            <span className="separator">|</span>
            <span>Mobile Application Developer</span>
            <span className="separator">|</span>
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
              <span>View My Work</span>
              <span className="button-arrow">↗</span>
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

        {/* RIGHT PROFILE */}
        <div className="profile">

          <div className="profile-frame">

            <div className="profile-top">
              <span>PROFILE</span>
              <span>IT • DESIGN • DEVELOPMENT</span>
            </div>

            <div className="profile-image-wrapper">
              <img
                src="/Ishqa.jpeg"
                alt="Fathima Ishka"
                className="profile-image"
              />
            </div>

            <div className="profile-caption">

              <div className="profile-name">
                <span>FATHIMA ISHKA</span>
                <small>FULL-STACK DEVELOPER</small>
              </div>

              

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Home;