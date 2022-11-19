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

function Game() {
  return (
    <section className="container row justify-content-center text-center mt-3">
      <h2>
        <u>
          I liked the above problem so much, that I made a game revolving around
          it!
        </u>
      </h2>
      <h4>
        The rules remain just as above, <u>except</u> if you roll a scoring
        value,<br></br> you can choose any number of dice <u>other</u> than the
        scored dice to reroll.<br></br> Press the 'roll' button to roll dice,
        and then type in the dice you wish to keep.
      </h4>
    </section>
  );
}

export default Game;
