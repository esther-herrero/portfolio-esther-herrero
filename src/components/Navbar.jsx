import { Link } from 'react-router-dom';
import React from 'react';
import './styles.css'

const Navbar = () => {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top menuShadow">
        <div className="navbar-container">
          <Link className="navbar-brand" to="/">Proyectos :)</Link>
          <a className="nav-link" href="https://esther-herrero.github.io/develop.github.io/#about" target="_blank" rel="noopener noreferrer">About me</a>
          <Link className="nav-link" to="/contact">Contact</Link>

          {/*<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"*/}
          {/*        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">*/}
          {/*  <span className="navbar-toggler-icon"></span>*/}
          {/*</button>*/}
          {/*<div className="collapse navbar-collapse" id="navbarNav">*/}
          {/*  <ul className="navbar-nav">*/}
          {/*    <li className="nav-item">*/}
          {/*      <a className="nav-link" href="https://esther-herrero.github.io/develop.github.io/#about" target="_blank"*/}
          {/*         rel="noopener noreferrer">About me</a>*/}
          {/*    </li>*/}
          {/*    <li className="nav-item">*/}
          {/*      <Link className="nav-link" to="/contact">Contact</Link>*/}
          {/*    </li>*/}
          {/*  </ul>*/}
          {/*</div>*/}
        </div>
      </nav>
  );
};

export default Navbar;
