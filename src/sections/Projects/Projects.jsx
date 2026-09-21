import "./Projects.css";

function Projects() {
  const projects = [
    {
      number: "01",
      title: "MyUniPal",
      image: "/MyUnipal.jpeg",
      description:
        "A university community and student support application designed to help students connect, share information, and access useful resources.",
      technologies: ["React Native", "Node.js", "Firebase"],
      github:
        "https://github.com/ishqafathima/MyUniPal-My-Code-Frontend-",
      figma:
        "https://www.figma.com/design/LiM9rB82j3ZfRc7VfeJntD/MyUniPal",
    },

    {
      number: "02",
      title: "AI Study Planner",
      image: "/AI Study Planner.png",
      description:
        "An AI-powered study planning application that helps students organize their study schedules and manage their learning activities.",
      technologies: ["React.js", "Spring Boot", "AI"],
      github:
        "https://github.com/ishqafathima/AI-Study-Planner",
    },

    {
      number: "03",
      title: "Portfolio Website",
      image: "/Portfolio.png",
      description:
        "A modern, responsive portfolio showcasing my skills, projects, certifications, and experience as a Full-Stack Developer and UI/UX Designer, with an integrated contact form and email functionality.",
      technologies: [
        "React.js",
        "JavaScript",
        "CSS",
        "Spring Boot",
        "MongoDB Atlas",
        "Resend",
      ],
      github:
        "https://github.com/ishqafathima/My-Portfolio",
    },
  ];

  return (
    <section className="projects">
      <div className="projects-container">

        {/* Section Heading */}
        <div className="projects-heading">

          <span className="section-label">
            MY WORK
          </span>

          <h1>Featured Projects</h1>

          <p>
            A selection of applications and digital experiences
            I have designed and developed.
          </p>

          <div className="heading-line"></div>

        </div>

        {/* Projects */}
        <div className="projects-grid">

          {projects.map((project) => (

            <article
              className="project-card"
              key={project.number}
            >

              {/* Project Image */}
              <div className="project-image">

                <img
                  src={project.image}
                  alt={`${project.title} project`}
                />

                <span className="project-number">
                  {project.number}
                </span>

              </div>

              {/* Project Content */}
              <div className="project-info">

                <h2>{project.title}</h2>

                <p>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="technologies">

                  {project.technologies.map(
                    (technology) => (

                      <span key={technology}>
                        {technology}
                      </span>

                    )
                  )}

                </div>

                {/* Buttons */}
                <div className="project-buttons">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link primary-link"
                  >
                    GitHub
                    <span>↗</span>
                  </a>

                  {project.figma && (
                    <a
                      href={project.figma}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link secondary-link"
                    >
                      Figma
                      <span>↗</span>
                    </a>
                  )}

                </div>

              </div>

            </article>

          ))}

        </div>

        {/* View All */}
        <div className="view-all-projects">

          <a
            href="https://github.com/ishqafathima?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>View All Projects</span>
            <span className="arrow">→</span>
          </a>

        </div>

      </div>
    </section>
  );
}

export default Projects;