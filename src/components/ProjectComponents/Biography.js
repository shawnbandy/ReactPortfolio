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
  div: 'card col-3',
};

function Biography() {
  return (
    <section className="container row justify-content-center text-center mt-3">
      <h2>
        <u>Biography</u>
      </h2>
      <div className={classes.div} style={grayB}>
        <h5 style={darkBC}>Academic</h5>
      </div>
      <div className={classes.div} style={grayB}>
        <h5 style={darkBC}>Professional</h5>
      </div>
      <div className={classes.div} style={grayB}>
        <h5 style={darkBC}>Personal</h5>
      </div>
      <div className={classes.div} style={grayB}>
        <h5 style={darkBC}>Future</h5>
      </div>
    </section>
  );
}

export default Biography;
