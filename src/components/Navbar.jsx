import { useState } from "react";
import { Navlinks } from "./";

const DesktopNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav id="desktop-nav">
        <div className="logo">Martin Tomić</div>
        <div>
          <Navlinks />
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">Martin Tomić</div>
        <div className="hamburger-menu">
          <div
            className={`hamburger-icon ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`menu-links ${isOpen ? "open" : ""}`}>
            <li>
              <a href="#about" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#experience" onClick={toggleMenu}>
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" onClick={toggleMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
};

export default DesktopNav;
