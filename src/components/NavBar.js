import React, { useState } from 'react';
import { lightBB, whiteC, darkBC } from './ProjectComponents/colors';

const classes = {
  nav: '',
  link: 'navbar-brand',
  button:
    'btn btn-outline col-lg-1 col-m-12 col-xs-12 align-items-center navbtn',
  display: 'd-block',
  hidden: 'd-none',
  listItem: 'col',
};

function NavBar({ currentNav, handleNavChange }) {
  return (
    <nav className={classes.nav} style={darkBC}>
      <ul
        className="container justify-content-evenly nav nav-tabs"
        style={lightBB}>
        <li className={classes.listItem}>
          <a
            href="#AboutMe"
            style={currentNav === 'AboutMe' ? darkBC : whiteC}
            onClick={() => handleNavChange('AboutMe')}
            className={
              currentNav === 'AboutMe' ? 'nav-link active' : 'nav-link'
            }>
            About Me
          </a>
        </li>
        <li className={classes.listItem}>
          <a
            href="#Projects"
            style={currentNav === 'Projects' ? darkBC : whiteC}
            onClick={() => handleNavChange('Projects')}
            className={
              currentNav === 'Projects' ? 'nav-link active' : 'nav-link'
            }>
            Projects
          </a>
        </li>
        <li className={classes.listItem}>
          <a
            href="#Contact"
            style={currentNav === 'Contact' ? darkBC : whiteC}
            onClick={() => handleNavChange('Contact')}
            className={
              currentNav === 'Contact' ? 'nav-link active' : 'nav-link'
            }>
            Contact
          </a>
        </li>
      </ul>
      {/* <button className={classes.button} style={lightBB}>
        <a
          style={whiteC}
          href="https://github.com/shawnbandy"
          target="_blank"
          rel="noreferrer">
          <h4>About Me</h4>
        </a>
      </button>
      <button className={classes.button} style={lightBB}>
        <a
          style={whiteC}
          href="https://www.linkedin.com/in/shawn-canavan/"
          target="_blank"
          rel="noreferrer">
          <h4>Projects</h4>
        </a>
      </button>
      <button className={classes.button} style={lightBB}>
        <a
          style={whiteC}
          href="https://www.codewars.com/users/shawnbandy"
          target="_blank"
          rel="noreferrer">
          <h4>Contact</h4>
        </a>
      </button> */}
      {/* <button className={classes.button} style={lightBB}>
        <a style={whiteC} href="./ShawnCanavanResume.pdf" download>
          <h4>Resume</h4>
        </a>
      </button> */}
    </nav>
  );
}

export default NavBar;
