import { React, useRef } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className="navBarContainer">
      <nav>
        <a className="title">
          <h1>OYOLA</h1>
        </a>
        <div className="links" ref={navRef}>
          <a href="#">Packages</a>
          <a href="#">Gallery</a>
          <a href="#">Login</a>
          <a className="registerButton" href="#">
            Register
          </a>

          <button className="nav-btn nav-close-btn" onClick={showNavBar}>
            <FaTimes />
          </button>
        </div>
      </nav>

      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
    </div>
  );
};

export default Navbar;
