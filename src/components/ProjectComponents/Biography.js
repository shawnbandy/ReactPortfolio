import React from 'react';
import { useState, useEffect } from 'react';
import {
  whiteB,
  grayB,
  lightBB,
  darkBB,
  whiteC,
  grayC,
  lightBC,
  darkBC,
} from './colors';

const classes = {
  div: 'card col-lg-3  col-sm-12 col-md-6',
  cardBody: 'card-body row align-items-center',
};

function Biography() {
  return (
    <section className="container row justify-content-center text-center mt-3">
      <h2>
        <u>Biography</u>
      </h2>
      <div className={classes.div} style={grayB}>
        <h5 className="card-header rounded" style={lightBB}>
          <p style={whiteC}>Academic</p>
        </h5>
        <div className={classes.cardBody}>
          <div>
            <p style={darkBC}>
              I am currently enrolled in Georgia Tech's Full Stack Coding
              Bootcamp! Graduating this December 2022.
            </p>
            <p style={darkBC}>
              Previously, I graduated with my Master of Science in Biology from
              Georgia State University in 2021. You can read my Master's Thesis
              <a href="#"> here!</a> It was a lot of work to finish, but you can
              see the final product in the above pictures.
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
            I currently work at Bramson Productions as a Webcaster, where I work
            with a diverse international team delivering professional broadcasts
            for clients to wide audiences.
          </p>
          <p style={darkBC}>
            Previously, I worked in Biomedical Engineering at Georgia Tech
            researching neurotrama on an animal model. I provided research,
            support, analyses, performed experiments, as well as project managed
            the lab and its members for success.
          </p>
          <p style={darkBC}>Download my full resume in the header!</p>
        </div>
      </div>
      <div className={classes.div} style={grayB}>
        <h5 className="card-header rounded" style={lightBB}>
          <p style={whiteC}>Personal</p>
        </h5>
        <div className={classes.cardBody}>
          <p style={darkBC}>
            My hobbies are: gaming, cycling, learning guitar, hiking,
            racketball, photography, and of course, coding! I also love to cook,
            bake, hang out with friends, and try new foods and drinks.
          </p>
          <p style={darkBC}>
            Some fun facts about me are that I played CS:GO semi-professionally,
            have a black belt in karate, and make sourdough!
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
    </section>
  );
}

export default Biography;
