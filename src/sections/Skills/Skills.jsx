import "./Skills.css";

function Skills() {
  const technicalSkills = {
    "Frontend Development": [
      "React.js",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
    ],

    "Mobile Development": [
      "React Native",
      "Expo"
    ],

    "Backend Development": [
      "Node.js",
      "Express.js",
      "Spring Boot",
    ],

    "Database & Cloud": [
      "MongoDB",
      "MySQL",
      "Firebase",
    ],

    "Tools & Design": [
      "Git & GitHub",
      "Postman",
      "Figma",
      "Axure",
    ],
  };

  const softSkills = [
    "Communication",
    "Teamwork",
    "Problem Solving",
    "Time Management",
    "Adaptability",
    "Quick Learning",
  ];

  return (
    <section className="skills">
      <div className="section-content">

        <h2>Technical Skills</h2>

        <div className="technical-skills">
          {Object.entries(technicalSkills).map(
            ([category, skills]) => (
              <div className="skill-category" key={category}>
                <h3>{category}</h3>

                <div className="skills-list">
                  {skills.map((skill) => (
                    <div className="skill-item" key={skill}>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
        </div>

        <h2 className="soft-skills-title">
          Soft Skills
        </h2>

        <div className="skills-list">
          {softSkills.map((skill) => (
            <div className="skill-item" key={skill}>
              {skill}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;