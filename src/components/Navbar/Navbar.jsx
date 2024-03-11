import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";

function Navbar() {
  const [navbarVisible, setNavbarVisible] = useState(false);

  const navbarToggle = () => {
    setNavbarVisible(!navbarVisible);
  };

  return (
    <>
      <GiHamburgerMenu
        className="icon-nav-menu"
        onClick={navbarToggle}
      />
      {navbarVisible && (
        <nav className="navbar-container">
          <a
          className="nav-btn-home"
          href="#homepage-top">
            HOME
          </a>
          <a
          className="nav-btn-profile"
          href="#profile-page-top">
            PROFILE
          </a>
          <a
          className="nav-btn-skills"
          href="#skills-page-top">
            SKILLS
          </a>
          <a
          className="nav-btn-projects"
          href="#projects-page-top">
            PROJECTS
          </a>
          <a
          className="nav-btn-contact"
          href="#contact-page-top">
            CONTACT
          </a>
        </nav>
      )}
    </>
  );
}

export default Navbar;
