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
        dice, then you can click 'Continue to Roll', which will start a new
        round.<br></br> Press the 'New Game' button to start a new game, and
        click the numbers if you wish to reroll them.<br></br>
        <br></br>
        <i>
          Normally, you would play against another person, and the first person
          to 2000 points wins the game.<br></br> You choose when to stop
          rolling, record your points, and then pass the dice. <br></br> If you
          score 0 points on a roll, including any dice rerolled, you bust and
          loose all your points for that round.
        </i>
      </h5>
      <Display />
    </section>
  );
}

export default Game;
