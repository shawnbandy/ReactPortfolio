import React from 'react';
import Codewars from './ProjectComponents/Codewars';
import Picture from './ProjectComponents/Pictures';
import Biography from './ProjectComponents/Biography';
import Projects from './ProjectComponents/ghProject';
import Game from './ProjectComponents/Game';
import { whiteB } from './ProjectComponents/colors';
import Main from './Main';
import Contact from './Contact';

const classes = {
  mainbody: 'container h-100',
  aboutMe: 'text-center fs-5 h-100',
  display: 'd-flex h-100 align-items-center',
  hidden: 'd-none',
};

function Project({ currentNav, handleNavChange }) {
  return (
    <section id="mainBodyDisplay" className={classes.mainbody} style={whiteB}>
      <div className={classes.aboutMe}>
        <div
          id="biography"
          className={
            currentNav === 'AboutMe' ? classes.display : classes.hidden
          }>
          <Main />
        </div>

        {/* <Picture />
        <Biography /> */}
        <div
          className={
            currentNav === 'Projects' ? classes.display : classes.hidden
          }>
          <Projects />
        </div>

        <div
          className={
            currentNav === 'Contact' ? classes.display : classes.hidden
          }>
          <Contact />
        </div>

        {/* <Codewars /> */}
        {/* <Game /> */}
      </div>
    </section>
  );
}

export default Project;
