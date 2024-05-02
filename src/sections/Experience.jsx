import { Arrow, ExperienceCard } from "../components";
import { frontend, backend } from "../constants";

const Experience = () => (
  <section id="experience">
    <p className="section__text__p1">Explore My</p>
    <h1 className="title">Experience</h1>
    <div className="experience-details-container">
      <div className="about-containers">
        <div className="details-container">
          <h2 className="experience-sub-title">Frontend Development</h2>
          <div className="article-container">
            {frontend.map((item, index) => (
              <ExperienceCard
                key={index}
                src={item.src}
                alt={item.alt}
                name={item.name}
                level={item.level}
              />
            ))}
          </div>
        </div>
        <div className="details-container">
          <h2 className="experience-sub-title">Backend Development</h2>
          <div className="article-container">
            {backend.map((item, index) => (
              <ExperienceCard
                key={index}
                src={item.src}
                alt={item.alt}
                name={item.name}
                level={item.level}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
    <Arrow location={"./#projects"} />
  </section>
);

export default Experience;
