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
  nav: 'navbar container justify-content-evenly',
  link: 'navbar-brand',
  button: 'btn btn-outline col-1 align-items-center navbtn',
};

const styles = {
  anchor: `${whiteC} `,
};

function NavBar() {
  return (
    <nav className={classes.nav} style={lightBB}>
      <button className={classes.button} style={lightBB}>
        <a style={whiteC}>
          <h4>GitHub</h4>
        </a>
      </button>
      <button className={classes.button} style={lightBB}>
        <a style={whiteC}>
          <h4>LinkedIn</h4>
        </a>
      </button>
      <button className={classes.button} style={lightBB}>
        <a style={whiteC}>
          <h4>Codewars</h4>
        </a>
      </button>
      <button className={classes.button} style={lightBB}>
        <a style={whiteC}>
          <h4>Resume</h4>
        </a>
      </button>
    </nav>
  );
}

export default NavBar;
