import "./Skills.css";

import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiExpo,
  SiNodedotjs,
  SiExpress,
  SiSpringboot,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiGithub,
  SiPostman,
  SiFigma,
} from "react-icons/si";

function Skills() {
  const technicalSkills = {
    "Frontend Development": [
      { name: "React.js", icon: <SiReact /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss3 /> },
    ],

    "Mobile Development": [
      { name: "React Native", icon: <SiReact /> },
      { name: "Expo", icon: <SiExpo /> },
    ],

    "Backend Development": [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Spring Boot", icon: <SiSpringboot /> },
    ],

    "Database & Cloud": [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Firebase", icon: <SiFirebase /> },
    ],

    "Tools & Design": [
      { name: "Git & GitHub", icon: <SiGithub /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Figma", icon: <SiFigma /> },
      { name: "Axure", icon: null },
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
                    <div className="skill-item" key={skill.name}>

                      {skill.icon && (
                        <span className="skill-icon">
                          {skill.icon}
                        </span>
                      )}

                      <span>{skill.name}</span>

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