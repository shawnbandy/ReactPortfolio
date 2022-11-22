import React from 'react';
import NavBar from './NavBar';
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

function Header() {
  return (
    <header className="border border-primary" id="header" style={lightBB}>
      <h1 style={whiteC}>Hello, I'm Shawn.</h1>
      <h5 style={whiteC}>
        I am a Full Stack Web Developer living in Roanoke, VA.
      </h5>
      <NavBar />
    </header>
  );
}

export default Header;
