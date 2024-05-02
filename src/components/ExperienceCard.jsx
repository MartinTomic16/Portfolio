const ExperienceCard = ({ src, alt, name, level }) => (
  <article>
    <img src={src} alt={alt} className="icon" />
    <div>
      <h3>{name}</h3>
      <p>{level}</p>
    </div>
  </article>
);

export default ExperienceCard;
