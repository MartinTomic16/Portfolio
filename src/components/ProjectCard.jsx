const ProjectCard = ({ src, alt, name, github, demo }) => (
  <div className="details-container color-container">
    <div className="article-container">
      <img src={src} alt={alt} className="project-img" />
    </div>
    <h2 className="experience-sub-title project-title">{name}</h2>
    <div className="btn-container">
      <button
        className="btn btn-color-2 project-btn"
        onClick={() => (window.location.href = github)}
      >
        GitHub
      </button>
      <button
        className="btn btn-color-2 project-btn"
        onClick={() => (window.location.href = demo)}
      >
        Live Demo
      </button>
    </div>
  </div>
);

export default ProjectCard;
