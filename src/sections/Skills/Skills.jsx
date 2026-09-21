import "./Skills.css";

import {
SiReact,
SiJavascript,
SiTypescript,
SiHtml5,
SiCss,
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
{ name: "React.js", icon: SiReact },
{ name: "JavaScript", icon: SiJavascript },
{ name: "TypeScript", icon: SiTypescript },
{ name: "HTML", icon: SiHtml5 },
{ name: "CSS", icon: SiCss },
],


"Mobile Development": [
  { name: "React Native", icon: SiReact },
  { name: "Expo", icon: SiExpo },
],

"Backend Development": [
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express.js", icon: SiExpress },
  { name: "Spring Boot", icon: SiSpringboot },
],

"Database & Cloud": [
  { name: "MongoDB", icon: SiMongodb },
  { name: "MySQL", icon: SiMysql },
  { name: "Firebase", icon: SiFirebase },
],

"Tools & Design": [
  { name: "Git & GitHub", icon: SiGithub },
  { name: "Postman", icon: SiPostman },
  { name: "Figma", icon: SiFigma },
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

return ( <section className="skills"> <div className="skills-container">


    {/* Section Heading */}
    <div className="skills-heading">
      <span className="section-label">MY EXPERTISE</span>

      <h2>Technical Skills</h2>

      <p>
        Technologies and tools I use to design, develop, and
        build modern digital experiences.
      </p>

      <div className="heading-line"></div>
    </div>


    {/* Technical Skills */}
    <div className="technical-skills">

      {Object.entries(technicalSkills).map(
        ([category, skills]) => (

          <div
            className="skill-category"
            key={category}
          >

            <div className="category-header">
              <span className="category-number">
                {String(
                  Object.keys(technicalSkills).indexOf(category) + 1
                ).padStart(2, "0")}
              </span>

              <h3>{category}</h3>
            </div>

            <div className="skills-list">

              {skills.map((skill) => {

                const Icon = skill.icon;

                return (
                  <div
                    className="skill-item"
                    key={skill.name}
                  >

                    <div className="skill-icon">

                      {Icon ? (
                        <Icon />
                      ) : (
                        <span className="axure-icon">
                          A
                        </span>
                      )}

                    </div>

                    <span>{skill.name}</span>

                  </div>
                );
              })}

            </div>

          </div>
        )
      )}

    </div>


    {/* Soft Skills */}
    <div className="soft-skills-section">

      <div className="soft-skills-heading">

        <span className="section-label">
          BEYOND TECHNICAL
        </span>

        <h2>Soft Skills</h2>

        <p>
          Personal qualities that help me collaborate,
          adapt, and solve problems effectively.
        </p>

      </div>


      <div className="soft-skills-list">

        {softSkills.map((skill, index) => (

          <div
            className="soft-skill-item"
            key={skill}
          >

            <span className="soft-skill-number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <span>{skill}</span>

          </div>

        ))}

      </div>

    </div>

  </div>
</section>


);
}

export default Skills;
