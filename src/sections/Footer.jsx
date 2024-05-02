import { Navlinks } from "../components";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <nav>
        <div className="nav-links-container">
          <Navlinks />
        </div>
      </nav>
      <p>Copyright &#169; {year} Martin Tomić. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
