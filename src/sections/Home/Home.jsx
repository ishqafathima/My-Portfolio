
import "./Home.css";

function Home() {
  return (
    <section className="home">
      <div className="home-content">

        <div className="intro">
          <p className="hello">Hello, I'm</p>

          <h1 className="name">Ishqa Lafir</h1>

          <h2 className="role">
            <span>IT Undergraduate</span> |{" "}
            <span>Full-stack Developer</span> |{" "}
            <span>UI/UX Designer</span> |{" "}
            <span>Mobile Application Developer</span>
          </h2>

          <p className="description">
            I am an IT undergraduate passionate about software development,
            UI/UX design, and building user-friendly applications.
          </p>

          <div className="home-buttons">
            <button>View My Work</button>
            <button className="contact-btn">Contact Me</button>
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


