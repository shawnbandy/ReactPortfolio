import React from 'react';
import {
  whiteB,
  grayB,
  lightBB,
  darkBB,
  whiteC,
  grayC,
  lightBC,
  darkBC,
} from './ProjectComponents/colors';

const classes = {
  nav: 'navbar justify-content-around',
  link: 'navbar-brand',
};

function NavBar() {
  return (
    <nav className={classes.nav} style={lightBB}>
      <a className={classes.link} href="#">
        <p style={whiteC}>GitHub</p>
      </a>
      <a className={classes.link} href="#">
        <p style={whiteC}>LinkedIn</p>
      </a>
      <a className={classes.link} href="#">
        <p style={whiteC}>Codewars</p>
      </a>
      <a className={classes.link} href="#">
        <p style={whiteC}>Resume</p>
      </a>
    </nav>
  );
}

export default NavBar;
