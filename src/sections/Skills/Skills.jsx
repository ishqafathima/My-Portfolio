import "./Skills.css";

function Skills() {
  const skills = [
    "React.js",
    "React Native",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Firebase",
    "Spring Boot",
    "Git & GitHub",
    "Figma",
  ];

  return (
    <section className="skills">
      <div className="section-content">
        <h2>My Skills</h2>

        <div className="skills-list">
          {skills.map((skill, index) => (
            <div className="skill-item" key={index}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;