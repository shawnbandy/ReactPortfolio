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
  const [busted, setBusted] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [canContinue, setCanContinue] = useState(false);

  const diceGame = new DiceGame([], 0);

  const checkBust = (score) => {
    if (score == 0) {
      setBusted(true);
      setCurrentScore(0);
      setDisabled(true);
    }
  };

  //*start a new game
  const startNewGame = (e) => {
    e.preventDefault();
    setBusted(false);
    setDisabled(false);
    document.getElementById('rerollSelectorForm').reset();

    diceGame.startGame();

    setNumberDisplay(diceGame.getArray);
    setDiceArray(diceGame.getArray);

    console.log('startNewGame diceGame Array', diceGame.getArray);

    setCurrentScore(diceGame.getScore);
    checkBust(diceGame.getScore);
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

    setCurrentScore(currentScore + diceGame.getScore);
    checkBust(diceGame.getScore);
    e.target.reset();
  };

  //*continues to play the game and rerolls
  const continueToRoll = (e) => {
    e.preventDefault();

    const formEl = document.getElementById('rerollSelectorForm');

    let allDisabled = 0;

    for (let i = 0; i < 5; i++) {
      if (formEl.children[i].children[0].disabled) {
        allDisabled++;
      }
    }

    if (currentScore > 0 && allDisabled == 5) {
      diceGame.continueGame();
      document.getElementById('rerollSelectorForm').reset();
      setNumberDisplay(diceGame.getArray);
      setDiceArray(diceGame.getArray);
      console.log('Continuing diceGame Array', diceGame.getArray);
      checkBust(diceGame.getScore);
      setCurrentScore(currentScore + diceGame.getScore);
    }
  };

  if (currentScore > highScore) {
    setHighScore(currentScore);
  }

  // // TODO Change from pressing the button to a simple check box
  // // TODO have the class of the check box change if it's not supposed to be rerolled
  // // TODO update some of the classes to by DRY
  // // TODO fix the 'continue to roll' logic
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
            <p className={!canContinue ? 'd-none' : ''}>
              You can continue to roll or pass the dice.
            </p>
          </div>
          <div className="container row justify-content-center">
            <button
              className="btn col-2"
              style={darkBB}
              type="button"
              onClick={startNewGame}
            >
              <p style={grayC}>New Game</p>
            </button>
          </div>
          <div className="container row justify-content-center">
            {/*FORM */}
            <fieldset disabled={disabled}>
              <form
                className="container row justify-content-center m-0 p-0"
                id="rerollSelectorForm"
                onSubmit={rerollSelected}
                value="1"
              >
                <CheckBoxDisplay numberArr={numberDisplay} />
              </form>
            </fieldset>
          </div>
          <section className="container row justify-content-center">
            <NumberDisplay numberArr={numberDisplay} />
          </section>
          <div className="container row justify-content-center">
            <button
              className="btn col-2"
              style={darkBB}
              type="button"
              onClick={continueToRoll}
            >
              {/*only allow them to roll if it should be possible based on array values */}
              <p style={grayC}>Continue to Roll</p>
            </button>
            <button
              className="btn col-2"
              style={darkBB}
              type="submit"
              form="rerollSelectorForm"
            >
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
