import React from 'react';
import Picture from './ProjectComponents/Pictures';

const classes = {
  mainbody: 'container border border-danger',
  aboutMe: 'text-center fs-5',
};

function Project() {
  return (
    <section className={classes.mainbody}>
      <h1>Welcome main Body</h1>
      <div className={classes.aboutMe}>
        <p>About Me section</p>
        <Picture />
        <p>Bio of me</p>
        <p>images of projects and links to them</p>
        <p>image of codewars problems and explanation on how I did it</p>
      </div>
    </section>
  );
}

export default Project;
