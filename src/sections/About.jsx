import { about } from "../assets";
import { Arrow } from "../components";

const About = () => (
  <section id="about">
    <p className="section__text__p1">Get To Know More</p>
    <h1 className="title">About Me</h1>
    <div className="section-container">
      <div className="section__pic-container">
        <img src={about} alt="web development icon" className="about-pic" />
      </div>
      <div className="about-details-container">
        <div className="text-container">
          <p>
            Former student of law, I&apos;m self-taught front-end web developer
            based in Serbia. After I left studies of law, I started learning Web
            Development. I have finished Dr. Angela Yu&apos;s web development
            bootcamp course. I have huge passion for web development and web
            design. I love to create different things and express my creativity.
            If you have a project that you want to get started, think you need
            my help with something or just fancy saying hey, then get in touch.
          </p>
        </div>
      </div>
    </div>
    <Arrow location={"./#experience"} />
  </section>
);

export default About;
