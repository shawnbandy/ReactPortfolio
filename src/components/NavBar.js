import React from 'react';

//*60
const white = {
  color: '#F9F7F7',
};
//*30
const gray = {
  background: '#DBE2EF',
};
//*10
const lB = {
  background: '#3F72AF',
};

//*10
const dB = {
  color: '#112D4E',
};

const classes = {
  nav: 'navbar justify-content-between',
  link: 'navbar-brand',
};

function NavBar() {
  return (
    <nav className={classes.nav} style={lB}>
      <a className={classes.link} href="#">
        <p style={dB}>GitHub</p>
      </a>
      <a className={classes.link} href="#">
        LinkedIn
      </a>
      <a className={classes.link} href="#">
        Codewars
      </a>
      <a className={classes.link} href="#">
        Resume
      </a>
    </nav>
  );
}

export default NavBar;
