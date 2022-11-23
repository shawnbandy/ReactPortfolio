import React from 'react';
import { useState } from 'react';
import Display from '../GameComponents/display';
import { darkBB, whiteC, lightBC } from './colors';

function Game() {
  const [howTo, setHowTo] = useState(false);
  const [rules, setRules] = useState(false);

  const flipH = () => {
    setHowTo(!howTo);
  };

  const flipR = () => {
    setRules(!rules);
  };

  return (
    <section
      id="game"
      className="container row justify-content-center text-center mt-3">
      <h2>
        I liked the above problem so much, that I made a game about around it!
      </h2>
      <h3>How to Play</h3>
      <button
        className="btn m-1 col-1"
        style={darkBB}
        type="button"
        onClick={flipH}>
        <p style={whiteC}>Show</p>
      </button>
      <h5 className={!howTo ? 'd-none' : ''}>
        Click 'new game' to start a new game at any time.<br></br>5 dice will be
        rolled and their values shown in ascending order. The game will
        automatically score your dice.<br></br>
        Use the checkbox above each dice to select the dice to reroll, and then
        click 'Reroll'. Only non-scoring dice can be rerolled.<br></br>To end
        your turn, click the 'Pass' button. You must end your turn to score your
        round.<br></br> If you score 0 points on any roll at any time, you lose
        all points from that round and your turn ends.<br></br>If you are unable
        to reroll any dice but have not busted
        <i style={lightBC}> example: rolling a 1, 1, 1, 5, 5</i> you may
        continue your turn by clicking 'Continue'.
      </h5>
      <h3>Rules</h3>
      <button
        className="btn m-1 col-1"
        style={darkBB}
        type="button"
        onClick={flipR}>
        <p style={whiteC}>Show</p>
      </button>
      <h5 className={!rules ? 'd-none' : ''}>
        First player to 2000 points wins the game.<br></br> 1s are worth 100
        points, 5s are worth 50 points.<br></br>
        Any three of a kind is given a 100x point multiplier, except 1s, which
        is 1000 points instead.<br></br> The computer will automatically roll
        against you on its turn.<br></br>
        <i style={lightBC}>
          {' '}
          Notice: this happens instantly. Check the 'Computer's last Roll' for
          info
        </i>
        <br></br>
      </h5>

      <Display />
    </section>
  );
}

export default Game;
