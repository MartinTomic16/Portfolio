import { contacts } from "../constants";
import { ContactCard } from "../components";

const Contact = () => (
  <section id="contact">
    <p className="section__text__p1">Get in Touch</p>
    <h1 className="title">Contact Me</h1>
    <div className="contact-info-upper-container">
      {contacts.map((contact, index) => (
        <ContactCard
          key={index}
          src={contact.src}
          alt={contact.alt}
          href={contact.href}
          name={contact.name}
        />
      ))}
    </div>
  </section>
);

export default Contact;
