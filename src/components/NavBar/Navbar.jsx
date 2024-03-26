import React from "react";
import { useState } from "react";
import MobileNav from "../MobileNav/MobileNav";
import "./Navbar.css";
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <MobileNav isOpen={isOpen} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          {/* <img className="" src="" alt="" /> */}
          <h3>Chiru.co</h3>
          <ul>
            <li>
              <a className="menu-item">Home</a>
            </li>
            <li>
              <a className="menu-item">Skills</a>
            </li>
            <li>
              <a className="menu-item">Work Experience</a>
            </li>
            <li>
              <a className="menu-item">Contact Me</a>
            </li>
            <button className="contact-btn" onClick={() => {}}>
              Hire Me
            </button>
          </ul>
          <button className="menu-btn" onClick={toggleMenu}>
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "1.8rem" }}
            >
              {isOpen ? "x" : "="}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
