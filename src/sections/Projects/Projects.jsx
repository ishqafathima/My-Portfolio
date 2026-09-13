import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "MyUniPal",
      description:
        "A university community and student support application designed to help students connect, share information, and access useful resources.",
      technologies: ["React Native", "Node.js", "Firebase"],
      github: "https://github.com/ishqafathima",
    },
    {
      title: "AI Study Planner",
      description:
        "An AI-powered study planning application that helps students organize their study schedules and manage their learning activities.",
      technologies: ["React.js", "Spring Boot", "AI"],
      github: "https://github.com/ishqafathima",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing my skills, projects, experience, and background as a developer and UI/UX designer.",
      technologies: ["React.js", "JavaScript", "CSS"],
      github: "https://github.com/ishqafathima",
    },
  ];

  return (
    <section className="projects">
      <div className="projects-content">

        <h1>My Projects</h1>

        <p className="projects-subtitle">
          Here are some of the projects I have worked on.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>

              <div className="project-image">
                <span>Project {index + 1}</span>
              </div>

              <div className="project-info">

                <h2>{project.title}</h2>

                <p>{project.description}</p>

                <div className="technologies">
                  {project.technologies.map((technology, techIndex) => (
                    <span key={techIndex}>
                      {technology}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-btn"
                >
                  View on GitHub
                </a>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;