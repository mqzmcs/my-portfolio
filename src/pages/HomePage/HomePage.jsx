import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";
import { GrMail } from "react-icons/gr";
import "./HomePage.css";

function HomePage() {
  const [flashVisible, setFlashVisible] = useState({
    title: true,
    profile: false,
    projects: false,
    skills: false,
    contact: false,
    linkedin: false,
    github: false,
    discord: false,
  });

  const handleHover = (element, type) => {
    const updatedFlashVisible = { ...flashVisible, title: false };
    Object.keys(updatedFlashVisible).forEach((key) => {
      updatedFlashVisible[key] = key === element;
    });

    if (type === "icon") {
      setFlashVisible(updatedFlashVisible);
    } else if (type === "nav") {
      setFlashVisible(updatedFlashVisible);
    }
  };

  const handleOffHover = () => {
    setFlashVisible({
      ...flashVisible,
      title: true,
      profile: false,
      projects: false,
      skills: false,
      contact: false,
      linkedin: false,
      github: false,
      discord: false,
    });
  };

  return (
    <div id="homepage-top" className="homepage-container">

      <div className="icon-fa-container">
        <a
          href="#contact-page-top">
          <GrMail
            className="icon-fa"
            onMouseOver={() => handleHover("contact", "icon")}
            onMouseOut={handleOffHover}
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/amlm-marquez">
          <FaLinkedin
            className="icon-fa"
            onMouseOver={() => handleHover("linkedin", "icon")}
            onMouseOut={handleOffHover}
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/mqzmcs">
          <FaGithub
            className="icon-fa"
            onMouseOver={() => handleHover("github", "icon")}
            onMouseOut={handleOffHover}
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://discordapp.com/users/635626418688229395">
          <SiDiscord
            className="icon-fa"
            onMouseOver={() => handleHover("discord", "icon")}
            onMouseOut={handleOffHover}
          />
        </a>
      </div>

      <div className="flash-container">
        <span
          id="title-flash"
          style={{ visibility: flashVisible.title ? "visible" : "hidden" }}><div id="flash-bar"></div> developer
        </span>
        <span
          id="profile-flash"
          style={{ visibility: flashVisible.profile ? "visible" : "hidden" }}><div id="flash-bar"></div> a little about me
        </span>
        <span
          id="projects-flash"
          style={{ visibility: flashVisible.projects ? "visible" : "hidden" }}><div id="flash-bar"></div> see some of my work
        </span>
        <span
          id="skills-flash"
          style={{ visibility: flashVisible.skills ? "visible" : "hidden" }}><div id="flash-bar"></div> check out what I use
        </span>
        <span
          id="contact-flash"
          style={{ visibility: flashVisible.contact ? "visible" : "hidden" }}><div id="flash-bar"></div> get in touch
        </span>
        <span
          id="linkedin-flash"
          style={{ visibility: flashVisible.linkedin ? "visible" : "hidden" }}><div id="flash-bar"></div> connect with me on LinkedIn
        </span>
        <span
          id="github-flash"
          style={{ visibility: flashVisible.github ? "visible" : "hidden" }}><div id="flash-bar"></div> work with me on GitHub
        </span>
        <span
          id="discord-flash"
          style={{ visibility: flashVisible.discord ? "visible" : "hidden" }}><div id="flash-bar"></div> hang out with me on Discord
        </span>
      </div>

      <div className="homepage-nav-container">
        <div
          onMouseOver={() => handleHover("profile", "icon")}
          onMouseOut={handleOffHover}>
          <a href="#profile-page-top">
            <span className="homepage-nav-text">
              PROFILE
            </span>
          </a>
        </div>
        <div
          onMouseOver={() => handleHover("skills", "icon")}
          onMouseOut={handleOffHover}>
          <a href="#skills-page-top">
            <span className="homepage-nav-text">
              SKILLS
            </span>
          </a>
        </div>
        <div id="dot"></div>
        <div
          onMouseOver={() => handleHover("projects", "icon")}
          onMouseOut={handleOffHover}>
          <a href="#projects-page-top">
            <span className="homepage-nav-text">
              PROJECTS
            </span>
          </a>
        </div>
      </div>

    </div>
  );
}

export default HomePage;
