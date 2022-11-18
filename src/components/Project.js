import React from 'react';

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
        <p>Picture of me</p>
        <p>Bio of me</p>
        <p>images of projects and links to them</p>
        <p>image of codewars problems and explanation on how I did it</p>
      </div>
    </section>
  );
}

export default Project;
