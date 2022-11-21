import React from 'react';
import Codewars from './ProjectComponents/Codewars';
import Picture from './ProjectComponents/Pictures';
import Biography from './ProjectComponents/Biography';
import Projects from './ProjectComponents/ghProject';
import Game from './ProjectComponents/Game';
import { whiteB } from './ProjectComponents/colors';

const classes = {
  mainbody: 'container border border-danger',
  aboutMe: 'text-center fs-5',
};

function Project() {
  return (
    <section className={classes.mainbody} style={whiteB}>
      <div className={classes.aboutMe}>
        <Picture />
        <Biography />
        <Projects />
        <Codewars />
        <Game />
      </div>
    </section>
  );
}

export default Project;
