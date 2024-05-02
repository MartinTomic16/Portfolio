import { Arrow, ProjectCard } from "../components";
import { projects } from "../constants";

const Projects = () => (
  <section id="projects">
    <p className="section__text__p1">Browse My Recent</p>
    <h1 className="title">Projects</h1>
    <div className="experience-details-container">
      <div className="about-containers">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            alt={project.alt}
            name={project.name}
            github={project.github}
            demo={project.demo}
          />
        ))}
      </div>
    </div>
    <Arrow location={"./#contact"} />
  </section>
);

export default Projects;
