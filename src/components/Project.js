import React from 'react';
import Codewars from './ProjectComponents/Codewars';
import Picture from './ProjectComponents/Pictures';
import Biography from './ProjectComponents/Biography';
import Projects from './ProjectComponents/ghProject';

const classes = {
  mainbody: 'container border border-danger',
  aboutMe: 'text-center fs-5',
};

function Project() {
  return (
    <section className={classes.mainbody}>
      <h1>About Me</h1>
      <div className={classes.aboutMe}>
        <Picture />
        <Biography />
        <Projects />
        <Codewars />
      </div>
    </section>
  );
}

export default Project;
