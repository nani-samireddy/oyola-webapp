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
                <a className="title" href="http://localhost:3000">
                    <h1>OYOLA</h1>
                </a>
                <div className="links" ref={navRef}>
                    <a href="http://localhost:3000">Packages</a>
                    <a href="http://localhost:3000">Gallery</a>
                    <a href="http://localhost:3000">Login</a>
                    <a className="registerButton" href="http://localhost:3000">
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
