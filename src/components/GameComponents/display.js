import React, { useState } from 'react';
import {
  whiteB,
  grayB,
  lightBB,
  darkBB,
  whiteC,
  grayC,
  lightBC,
  darkBC,
} from '../ProjectComponents/colors';
import DiceGame from './logic';
import CheckBoxDisplay from './CheckBoxDisplay';
import NumberDisplay from './NumberDisplay';

function Display() {
  const [highScore, setHighScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [numberDisplay, setNumberDisplay] = useState([]);
  const [diceArray, setDiceArray] = useState([]);
  //const [diceScore, setDiceScore] = useState(0);
  const [busted, setBusted] = useState(false);
  const diceGame = new DiceGame([], 0);

  //*start a new game
  const startNewGame = (e) => {
    e.preventDefault();
    setBusted(false);
    document.getElementById('rerollSelectorForm').reset();

    diceGame.startGame();

    setNumberDisplay(diceGame.getArray);
    setDiceArray(diceGame.getArray);

    console.log('startNewGame dicegame Array', diceGame.getArray);

    if (diceGame.getScore == 0) {
      setBusted(true);
      document.getElementById('rerollSelectorForm').disabled = true;
    }

    setCurrentScore(diceGame.getScore);
  };

  //*rerolls selected values based on.... checkbox? form submission?
  const rerollSelected = (e) => {
    e.preventDefault();
    const numbersSelected = [];

    for (let i = 0; i <= 4; i++) {
      if (e.target[i].checked) {
        numbersSelected.push(e.target[i].value);
      }
    }

    diceGame.rerollNumbers(numbersSelected, diceArray);
    setNumberDisplay(diceGame.getArray);

    if (diceGame.getScore == 0) {
      setBusted(true);
      document.getElementById('rerollSelectorForm').disabled = true;
    }

    setCurrentScore(currentScore + diceGame.getScore);
    e.target.reset();
  };

  //*continues to play the game and rerolls
  const continueToRoll = diceGame;

  if (currentScore > highScore) {
    setHighScore(currentScore);
  }

  // // TODO Change from pressing the button to a simple check box
  // // TODO have the class of the check box change if it's not supposed to be rerolled
  // // TODO update some of the classes to by DRY
  //TODO fix the 'continue to roll' logic
  // // ?basically use the value from the checkboxes and put that in the array
  // // ?move some of these elements into different files since it's getting kinda large?
  //TODO do a 'pass turn' button that allows computer to roll
  return (
    <section className="container row justify-content-center text-center">
      <div className="card text-center col-8" style={grayB}>
        <h1 className="card-header rounded-bottom" style={lightBB}>
          <p style={whiteC}>Dice Game: Greed</p>
        </h1>
        <section className="card-body">
          <div className="container row justify-content-center">
            <h3>HighScore: {highScore}</h3>
            <h5>Current Score: {currentScore}</h5>
            <p className={!busted ? 'd-none' : ''}>You Busted!</p>
          </div>
          <div className="container row justify-content-center">
            <button
              className="btn col-2"
              style={darkBB}
              type="button"
              onClick={startNewGame}>
              <p style={grayC}>New Game</p>
            </button>
          </div>
          <div className="container row justify-content-center">
            {/*FORM */}
            <form
              className="container row justify-content-center"
              id="rerollSelectorForm"
              onSubmit={rerollSelected}>
              <CheckBoxDisplay numberArr={numberDisplay} />
            </form>
          </div>
          <section className="container row justify-content-center">
            <NumberDisplay numberArr={numberDisplay} />
          </section>
          <div className="container row justify-content-center">
            <button className="btn col-2" style={darkBB} type="button">
              {/*only allow them to roll if it should be possible based on array values */}
              <p style={grayC}>Continue to Roll</p>
            </button>
            <button
              className="btn col-2"
              style={darkBB}
              type="submit"
              form="rerollSelectorForm">
              {/*only allow them to select if those values are unscored values be possible based on array values */}
              <p style={grayC}>Reroll Selected</p>
            </button>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Display;
