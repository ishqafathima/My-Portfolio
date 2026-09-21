import "./Experience.css";

function Experience() {
  const experiences = [
    {
      number: "01",
      title: "Fresher – Seeking Internship",
      subtitle: "Information Technology Graduate",
      description:
        "I am a recent Information Technology graduate currently seeking an internship opportunity to begin my professional career in software development.",
    },
    {
      number: "02",
      title: "University Project Experience",
      subtitle: "Academic Projects",
      description:
        "Although I do not have professional work experience yet, I have gained practical experience through university projects involving web development, mobile application development, databases, UI/UX design, and software development.",
    },
    {
      number: "03",
      title: "Technical & Practical Skills",
      subtitle: "University Experience",
      description:
        "Through my academic projects, I have developed problem-solving skills and practical knowledge of different technologies. I am eager to apply my knowledge in a professional environment and continue developing my skills.",
    },
  ];

  return (
    <section className="experience">
      <div className="experience-container">

        <div className="experience-heading">
          <span className="section-label">MY EXPERIENCE</span>

          <h1>Experience</h1>

          <p>
            My academic journey, practical project experience,
            and readiness to begin my professional career.
          </p>

          <div className="heading-line"></div>
        </div>

        <div className="experience-list">
          {experiences.map((experience) => (
            <article
              className="experience-card"
              key={experience.number}
            >
              <div className="experience-number">
                {experience.number}
              </div>

              <div className="experience-content">
                <div className="experience-top">
                  <div>
                    <h2>{experience.title}</h2>
                    <h3>{experience.subtitle}</h3>
                  </div>

                  <span className="experience-mark">+</span>
                </div>

                <p>{experience.description}</p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;