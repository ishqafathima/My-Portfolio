
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "MyUniPal",
      description:
        "A university community and student support application designed to help students connect, share information, and access useful resources.",
      technologies: ["React Native", "Node.js", "Firebase"],
      github: "https://github.com/ishqafathima/MyUniPal-My-Code-Frontend-",
      figma:
        "https://www.figma.com/design/LiM9rB82j3ZfRc7VfeJntD/MyUniPal",
    },
    {
      title: "AI Study Planner",
      description:
        "An AI-powered study planning application that helps students organize their study schedules and manage their learning activities.",
      technologies: ["React.js", "Spring Boot", "AI"],
      github: "https://github.com/ishqafathima/AI-Study-Planner",
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive personal portfolio website showcasing my skills, projects, certifications, and experience as a Full-Stack Developer and UI/UX Designer. It includes a contact form with email functionality that allows visitors to send messages directly through the website.",
      technologies: ["React.js", "JavaScript", "CSS","Spring Boot","MongoDB Atlas","Resend"],
      github: "https://github.com/ishqafathima/My-Portfolio",
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

                <div className="project-buttons">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-btn"
                  >
                    View on GitHub
                  </a>

                  {project.figma && (
                    <a
                      href={project.figma}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="figma-btn"
                    >
                      View Figma
                    </a>
                  )}

                </div>

              </div>

            </div>
          ))}
        </div>

        <div className="view-all-projects">
          <a
            href="https://github.com/ishqafathima?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All Projects →
          </a>
        </div>

      </div>
    </section>
  );
}

export default Projects;
