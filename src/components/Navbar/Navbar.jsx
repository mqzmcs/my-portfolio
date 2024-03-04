import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navbar.css";
{/*import { AuthContext } from "../../context/auth.context";*/ }

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  // const location = useLocation();
  // const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

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
          className="nav-btn-projects"
          href="#projects-page-top">
            PROJECTS
          </a>
          <a
          className="nav-btn-contact"
          href="#contact-page-top">
            CONTACT
          </a>

          {/*
        <Link to="/"><button className="nav-btn">Home</button></Link>
        {location.pathname !== '/about' && (<Link to='/about'><button className="nav-btn">Profile</button></Link>)}
        {location.pathname !== '/projects' && (<Link to='/projects'><button className="nav-btn">Projects</button></Link>)}
        {location.pathname !== '/contact' && (<Link to='/contact'><button className="nav-btn">Contact</button></Link>)}
        

        <div className="access-btn-container">
          {!isLoggedIn && (
            <>
              <Link to="/signup"><button>Sign Up</button></Link>
              <Link to="/login"><button className="access-btn">▶</button></Link>
            </>
          )}

          {isLoggedIn && (
            <>
              <button className="access-btn" onClick={logOutUser}>✖</button>
              <span>{user && user.name}</span>
            </>
          )}
        </div>
      */}

        </nav>
      )}
    </>
  );
}

export default Navbar;
