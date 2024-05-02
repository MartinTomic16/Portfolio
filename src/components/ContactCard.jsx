const ContactCard = ({ src, alt, href, name }) => (
  <div className="contact-info-container">
    <img src={src} alt={alt} className="icon contact-icon" />
    <p>
      <a href={href}>{name}</a>
    </p>
  </div>
);

export default ContactCard;
