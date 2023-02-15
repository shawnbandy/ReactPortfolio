import React, { useState } from 'react';
import { lightBB, whiteC } from './ProjectComponents/colors';
import NavBar from './NavBar';
import Picture from './ProjectComponents/Pictures';
import Biography from './ProjectComponents/Biography';

import {
  grayB,
  darkBB,
  grayC,
  darkBC,
} from '../components/ProjectComponents/colors';

const classes = {
  display: 'd-block',
  hidden: 'd-none',
  container: 'container row mt-1 justify-content-center',
  pictureDiv:
    'border border-danger col-md-4 col-sm-12 col-lg-4 align-items-center',
  description: 'container row col-md-8 cold-sm-12 col-lg-8 w-100 mb-3',
  cardBody: 'card-body row align-items-center justify-content-center',
  div: 'card col-lg-6 col-sm-12 col-md-12 p-1 border border-white',
};

function Main() {
  return (
    <div className={classes.container}>
      <h2>
        <u>Biography</u>
      </h2>
      <div className="col-lg-12 col-md-4 col-sm-4 h-50 align-self-md-center align-self-lg-center">
        <Picture />
      </div>
      <div className={classes.description}>
        <div className={classes.div} style={grayB}>
          <h5 className="card-header rounded" style={lightBB}>
            <p style={whiteC}>Academic</p>
          </h5>
          <div className={classes.cardBody}>
            <div>
              <p style={darkBC}>
                I am a Full Stack Developer that graduated from Georgia Tech!
              </p>
              <p style={darkBC}>
                I hold a Master of Science in Biology from Georgia State
                University, received in 2021. You can read my Master's Thesis{' '}
                <a href="../../mastersThesis.pdf" download>
                  here!
                </a>{' '}
                It was a lot of work to finish, and you can see the final
                product in the pictures.
              </p>
            </div>
          </div>
        </div>
        <div className={classes.div} style={grayB}>
          <h5 className="card-header rounded" style={lightBB}>
            <p style={whiteC}>Professional</p>
          </h5>
          <div className={classes.cardBody}>
            <p style={darkBC}>
              I currently work at Bramson Productions as a Webcaster, where I
              work with a diverse international team delivering professional
              broadcasts for clients to wide audiences.
            </p>
            <p style={darkBC}>
              Previously, I worked in Biomedical Engineering at Georgia Tech
              researching neurotrama on an animal model. I provided research,
              support, analyses, performed experiments, as well as project
              managed the lab and its members for success.
            </p>
            <p style={darkBC}>
              Download my full resume in the contact tab above!
            </p>
          </div>
        </div>
        <div className={classes.div} style={grayB}>
          <h5 className="card-header rounded" style={lightBB}>
            <p style={whiteC}>Personal</p>
          </h5>
          <div className={classes.cardBody}>
            <p style={darkBC}>
              My hobbies are: gaming, cycling, learning guitar, hiking,
              racketball, photography, and of course, coding! I also love to
              cook, bake, hang out with friends, and try new foods and drinks.
            </p>
            <p style={darkBC}>
              Some fun facts about me are that I played CS:GO
              semi-professionally, have a black belt in karate, and make
              sourdough!
            </p>
            <p style={darkBC}>
              I am from Atlanta, but live currently in Ronaoke, VA with my wife
              for her medical residency as an Emergency Medicine doctor.
            </p>
          </div>
        </div>
        <div className={classes.div} style={grayB}>
          <h5 className="card-header rounded" style={lightBB}>
            <p style={whiteC}>Future</p>
          </h5>
          <div className={classes.cardBody}>
            <p style={darkBC}>
              For my future, I would love to work long term with a great company
              and advance as a developer.
            </p>
            <p style={darkBC}>
              If you would like to get into contact with me, please use the
              'email' button in the footer below!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
