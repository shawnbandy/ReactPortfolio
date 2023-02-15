import React from 'react';
import NavBar from './NavBar';
import { lightBB, whiteC } from './ProjectComponents/colors';
import { useState } from 'react';

function Header({ currentNav, handleNavChange }) {
  return (
    <header className="" id="header" style={lightBB}>
      <h1 style={whiteC}>Hello, I'm Shawn.</h1>
      <h5 style={whiteC}>
        I am a Full Stack Web Developer living in Roanoke, VA.
      </h5>
      <NavBar currentNav={currentNav} handleNavChange={handleNavChange} />
    </header>
  );
}

export default Header;
