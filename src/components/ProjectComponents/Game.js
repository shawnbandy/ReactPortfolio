import React from 'react';
import { useState, useEffect } from 'react';
import Display from '../GameComponents/display';
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

function Game() {
  return (
    <section className="container row justify-content-center text-center mt-3">
      <h2>
        <u>
          I liked the above problem so much, that I made a game revolving around
          it!
        </u>
      </h2>
      <h5>
        The rules remain just as above, <u>except</u> if you roll a scoring
        value,<br></br> you can choose any number of dice <u>other</u> than
        scoring dice to reroll.<br></br> If <b>all</b> of your dice are scoring
        dice, then you can click 'Continue to Roll',<br></br> which will start a
        new round.<br></br> Press the 'New Game' button to start a new game,
        <br></br> click the numbers if you wish to reroll them.
      </h5>
      <Display />
    </section>
  );
}

export default Game;
