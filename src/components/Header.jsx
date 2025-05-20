import React from "react";
import Scrollspy from "react-scrollspy";

import '../navbar.css';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-white raised-header shadow-bottom fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src="../assets/logo.png" alt="Logo" height="40" className="d-inline-block align-top" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <Scrollspy
            items={['expertise','experience', 'projects', 'contact']}
            currentClassName="active"
            className="navbar-nav ms-auto"
            offset={-100}
          >
             <li className="nav-item">
              <a className="nav-link" href="#expertise">Expertise</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experience">Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </Scrollspy>
        </div>
      </div>
    </nav>
  );
}

export default Header;
