import { profile, linkedin, github, resume } from "../assets";

const Profile = () => (
  <section id="profile">
    <div className="section__pic-container">
      <img src={profile} alt="profile picture icon" />
    </div>
    <div className="section__text">
      <p className="section__text__p1">Hello, I&apos;m</p>
      <h1 className="title">Martin Tomić</h1>
      <p className="section__text__p2">Self-taught Front-end Web Developer</p>
      <div className="btn-container">
        <button
          className="btn btn-color-2"
          onClick={() => {
            window.open(resume);
          }}
        >
          Download CV
        </button>
        <button
          className="btn btn-color-1"
          onClick={() => {
            window.location.href = "./#contact";
          }}
        >
          Contact Info
        </button>
      </div>
      <div id="socials-container">
        <img
          src={linkedin}
          alt="My LinkedIn profile"
          className="icon"
          onClick={() => {
            window.location.href =
              "https://www.linkedin.com/in/martin-tomi%C4%87-8469a6306/";
          }}
        />
        <img
          src={github}
          alt="My Github profile"
          className="icon"
          onClick={() => {
            window.location.href = "https://github.com/MartinTomic16";
          }}
        />
      </div>
    </div>
  </section>
);

export default Profile;
