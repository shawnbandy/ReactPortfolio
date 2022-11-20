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
//*can't get this to work for some reason
import CheckBoxDisplay from './CheckBoxDisplay';

const classes = {
  numberGameDisplay: 'col-2 border border-dark justify-content-center',
  buttons: 'btn',
  buttonsDisabled: 'btn disabled',
  checkbox: 'form-check-input',
  checkboxBlackout: 'form-check-input disabled',
};

const styles = {
  numberGameDisplay: `background-color: red; color: white`,
};

function Display() {
  const [highScore, setHighScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [numberDisplay, setNumberDisplay] = useState([]);
  const [numbersToReroll, setNumbersToReroll] = useState([]);
  const diceGame = new DiceGame([], 0);

  const checkUseableNumber = (currentNum) => {
    if (currentNum == 1 || currentNum == 5) {
      return true;
    }
  };

  //*start a new game
  const startNewGame = (e) => {
    e.preventDefault();
    diceGame.startGame();
    setNumberDisplay(diceGame.getArray);
    setCurrentScore(diceGame.getScore);
    setNumbersToReroll([]);
  };

  const chosenReroll = (e) => {
    e.preventDefault();
    const number = Number(e.target.innerText);
    if (number == 1 || number == 5) {
      console.log('Number not added! Select a Valid number');
    } else {
      console.log('added ', number);
      setNumbersToReroll((current) => [...current, number]);
      //e.target.classList.add('disabled');
    }
  };

  //*rerolls selected values based on.... checkbox? form submission?
  const rerollSelected = (e) => {
    e.preventDefault();
    diceGame.rerollNumbers([numbersToReroll]);
    setNumberDisplay(diceGame.getArray);
    setCurrentScore(diceGame.getScore);
    setNumbersToReroll([]);
  };

  //*continues to play the game and rerolls
  const continueToRoll = diceGame;

  if (currentScore > highScore) {
    setHighScore(currentScore);
  }

  //TODO Change from pressing the button to a simple check box
  //TODO have the class of the check box change if it's not supposed to be rerolled
  //TODO update some of the classes to by DRY
  //TODO fix the 'continue to roll' logic
  //?basically use the value from the checkboxes and put that in the array
  //?move some of these elements into different files since it's getting kinda large?
  return (
    <section className="container row justify-content-center text-center">
      <div className="card text-center col-8" style={grayB}>
        <h1 className="card-header rounded-bottom" style={lightBB}>
          <p style={whiteC}>Dice Game: Greed</p>
        </h1>
        <section className="card-body">
          <h3>HighScore: {highScore}</h3>
          <h5>Current Score: {currentScore}</h5>
          <div className="container row justify-content-center">
            <button
              className="btn col-3"
              style={darkBB}
              type="button"
              onClick={startNewGame}
            >
              <p style={grayC}>New Game</p>
            </button>
          </div>
          <div className="container row justify-content-center">
            <CheckBoxDisplay numberArr={numberDisplay} />
            <div class="col-2">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox"
                value={numberDisplay[0]}
                disabled={checkUseableNumber(numberDisplay[0])}
              />
            </div>
            <div class="col-2">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox"
                value={numberDisplay[1]}
                disabled={checkUseableNumber(numberDisplay[1])}
              />
            </div>
            <div class="col-2">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox"
                value={numberDisplay[2]}
                disabled={checkUseableNumber(numberDisplay[2])}
              />
            </div>
            <div class="col-2">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox"
                value={numberDisplay[3]}
              />
            </div>
            <div class="col-2">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineCheckbox"
                value={numberDisplay[4]}
              />
            </div>
          </div>
          <section className="container row justify-content-center">
            <div className={classes.numberGameDisplay} style={lightBB}>
              <button className={classes.buttons} style={whiteC}>
                {numberDisplay[0]}
              </button>
            </div>
            <div className={classes.numberGameDisplay} style={lightBB}>
              <button className={classes.buttons} style={whiteC}>
                {numberDisplay[1]}
              </button>
            </div>
            <div className={classes.numberGameDisplay} style={lightBB}>
              <button className={classes.buttons} style={whiteC}>
                {numberDisplay[2]}
              </button>
            </div>
            <div className={classes.numberGameDisplay} style={lightBB}>
              <button className={classes.buttons} style={whiteC}>
                {numberDisplay[3]}
              </button>
            </div>
            <div className={classes.numberGameDisplay} style={lightBB}>
              <button className={classes.buttons} style={whiteC}>
                {numberDisplay[4]}
              </button>
            </div>
          </section>
          <button className="btn m-1 col-4" style={darkBB} type="button">
            {/*only allow them to roll if it should be possible based on array values */}
            <p style={grayC}>Continue to Roll</p>
          </button>
          <button
            className="btn m-1 col-4"
            style={darkBB}
            type="button"
            onClick={rerollSelected}
          >
            {/*only allow them to select if those values are unscored values be possible based on array values */}
            <p style={grayC}>Reroll Selected</p>
          </button>
        </section>
      </div>
    </section>
  );
}

export default Display;
