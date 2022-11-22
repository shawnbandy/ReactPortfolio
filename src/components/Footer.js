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
//*contact
//*Navigation to other sections
//*facebook
//*linkedIn
//*copyright
function Footer() {
  return (
    <footer className={classes.footer} style={lightBB}>
      {/* <div className="container row col-4">
        <p className={classes.contact} style={whiteC}>
          Contact
        </p>
        <p className={classes.contact} style={whiteC}>
          facebook
        </p>
        <p className={classes.contact} style={whiteC}>
          linkedIn
        </p>
        <p className={classes.contact} style={whiteC}>
          Copyright
        </p>
      </div> */}
      <div class="row col-6">
        <div class="col">
          <button className={classes.button} style={lightBB}>
            <a
              style={whiteC}
              href="https://github.com/shawnbandy"
              target="_blank"
            >
              <h4>📧</h4>
            </a>
          </button>
        </div>
        <div class="col">
          {' '}
          <button className={classes.button} style={lightBB}>
            <a
              style={whiteC}
              href="https://github.com/shawnbandy"
              target="_blank"
            >
              <h4>🙂📘</h4>
            </a>
          </button>
        </div>
        <div class="w-100"></div>
        <div class="col">
          {' '}
          <button className={classes.button} style={lightBB}>
            <a
              style={whiteC}
              href="https://github.com/shawnbandy"
              target="_blank"
            >
              <h4>🔗</h4>
            </a>
          </button>
        </div>
        <div class="col">
          {' '}
          <button className={classes.button} style={lightBB}>
            <a
              style={whiteC}
              href="https://github.com/shawnbandy"
              target="_blank"
            >
              <h4>©</h4>
            </a>
          </button>
        </div>
      </div>
      <div class="row col-6">
        <div class="col">
          {' '}
          <button className={classes.button} style={lightBB}>
            <a
              style={whiteC}
              href="https://github.com/shawnbandy"
              target="_blank"
            >
              <h4>GitHub</h4>
            </a>
          </button>
        </div>
        <div class="col">
          {' '}
          <button className={classes.button} style={lightBB}>
            <a
              style={whiteC}
              href="https://github.com/shawnbandy"
              target="_blank"
            >
              <h4>GitHub</h4>
            </a>
          </button>
        </div>
        <div class="w-100"></div>
        <div class="col">
          {' '}
          <button className={classes.button} style={lightBB}>
            <a
              style={whiteC}
              href="https://github.com/shawnbandy"
              target="_blank"
            >
              <h4>GitHub</h4>
            </a>
          </button>
        </div>
        <div class="col">
          {' '}
          <button className={classes.button} style={lightBB}>
            <a
              style={whiteC}
              href="https://github.com/shawnbandy"
              target="_blank"
            >
              <h4>GitHub</h4>
            </a>
          </button>
        </div>
        <div class="w-100"></div>
        <div class="col">
          {' '}
          <button className={classes.button} style={lightBB}>
            <a
              style={whiteC}
              href="https://github.com/shawnbandy"
              target="_blank"
            >
              <h4>GitHub</h4>
            </a>
          </button>
        </div>
        <div class="col">
          {' '}
          <button className={classes.button} style={lightBB}>
            <a
              style={whiteC}
              href="https://github.com/shawnbandy"
              target="_blank"
            >
              <h4>GitHub</h4>
            </a>
          </button>
        </div>
      </div>
      {/* <div className="row col-6">
        <div className="container row col-6">
          <p className="col" style={whiteC}>
            Header
          </p>
          <p className="col" style={whiteC}>
            About Me
          </p>
          <p className="col" style={whiteC}>
            Biography
          </p>
        </div>
        <div className="container row col-6">
          <p className="col" style={whiteC}>
            Projects
          </p>
          <p className="col" style={whiteC}>
            Example Code
          </p>
          <p className="col" style={whiteC}>
            Game
          </p>
        </div>
      </div> */}
    </footer>
  );
}

export default Footer;
