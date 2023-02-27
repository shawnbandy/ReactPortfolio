import React from 'react';
import { lightBB, whiteC } from './ProjectComponents/colors';

const classes = {
  footer: 'container row justify-content-evenly border border-primary mt-2',
  contact: 'col',
  button: 'btn btn-outline',
};

function Footer() {
  return (
    <footer className={classes.footer} style={lightBB}>
      <div class="row">
        <div class="col-lg-3 col-md-3 col-sm-6">
          <button className={classes.button} style={lightBB}>
            <a style={whiteC} href="mailto:shawncanavanjobs@gmail.com">
              <h4>📧</h4>
            </a>
          </button>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6">
          <button className={classes.button} style={lightBB}>
            <a
              style={whiteC}
              href="https://www.github.com/shawnbandy"
              target="_blank"
              rel="noreferrer">
              <h4>GitHub</h4>
            </a>
          </button>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6">
          <div class="col">
            <button className={classes.button} style={lightBB}>
              <a style={whiteC} href="#header">
                <h4>Header</h4>
              </a>
            </button>
          </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6">
          <button className={classes.button} style={lightBB}>
            <a
              style={whiteC}
              href="https://www.linkedin.com/in/shawn-canavan/"
              target="_blank"
              rel="noreferrer">
              <h4>🔗</h4>
            </a>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
