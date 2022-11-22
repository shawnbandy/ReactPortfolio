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
  footer: 'container row justify-content-evenly border border-primary mt-2',
  contact: 'col',
  button: 'btn btn-outline',
};

function Footer() {
  return (
    <footer className={classes.footer} style={lightBB}>
      <div class="row col-6">
        <div class="col">
          <button className={classes.button} style={lightBB}>
            <a style={whiteC} href="mailto:canavan.shawn@gmail.com">
              <h4>📧</h4>
            </a>
          </button>
        </div>
        <div class="col">
          <button className={classes.button} style={lightBB}>
            <a
              style={whiteC}
              href="https://www.facebook.com/shawn.canavan"
              target="_blank"
            >
              <h4>🙂📘</h4>
            </a>
          </button>
        </div>
        <div class="w-100"></div>
        <div class="col">
          <button className={classes.button} style={lightBB}>
            <a
              style={whiteC}
              href="https://www.linkedin.com/in/shawn-canavan/"
              target="_blank"
            >
              <h4>🔗</h4>
            </a>
          </button>
        </div>
        <div class="col">
          <button className={classes.button} style={lightBB}>
            <a style={whiteC}>
              <h4>©</h4>
            </a>
          </button>
        </div>
      </div>
      <div class="row col-6">
        <div class="col">
          <button className={classes.button} style={lightBB}>
            <a style={whiteC} href="#header">
              <h4>Header</h4>
            </a>
          </button>
        </div>
        <div class="col">
          {' '}
          <button className={classes.button} style={lightBB}>
            <a style={whiteC} href="#aboutme">
              <h4>About Me</h4>
            </a>
          </button>
        </div>
        <div class="w-100"></div>
        <div class="col">
          <button className={classes.button} style={lightBB}>
            <a style={whiteC} href="#biography">
              <h4>Biography</h4>
            </a>
          </button>
        </div>
        <div class="col">
          <button className={classes.button} style={lightBB}>
            <a style={whiteC} href="#projects">
              <h4>Projects</h4>
            </a>
          </button>
        </div>
        <div class="w-100"></div>
        <div class="col">
          <button className={classes.button} style={lightBB}>
            <a style={whiteC} href="#code">
              <h4>Example Code</h4>
            </a>
          </button>
        </div>
        <div class="col">
          <button className={classes.button} style={lightBB}>
            <a style={whiteC} href="#game">
              <h4>Game</h4>
            </a>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
