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
import { feelingLucky } from './computerValues';

const classes = {
  buttons: 'btn col-sm-12 col-md-12 col-lg-2',
};

function Display() {
  const [yourScore, setYourScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [computerCurrentScore, setComputerCurentScore] = useState(0);
  const [hidden, setHidden] = useState(true);
  const [wins, setWins] = useState(0);
  const [loss, setLoss] = useState(0);
  const [numberDisplay, setNumberDisplay] = useState([]);
  const [diceArray, setDiceArray] = useState([]);
  const [busted, setBusted] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [canContinue, setCanContinue] = useState(true);

  //*useMemo//useRef
  const diceGame = new DiceGame([], 0);

  const checkBust = (score) => {
    if (score === 0) {
      setBusted(true);
      setCurrentScore(score);
      setDisabled(true);
      console.log('bust', currentScore);
      return true;
      //passTurn();
    } else {
      return false;
    }
  };

  //*start a new game
  const startNewGame = (e) => {
    e.preventDefault();
    setBusted(false);
    setDisabled(false);
    setHidden(true);
    setYourScore(0);
    setComputerScore(0);
    setComputerCurentScore(0);
    setCanContinue(true);
    document.getElementById('rerollSelectorForm').reset();

    diceGame.startGame();

    setNumberDisplay(diceGame.getArray);
    setDiceArray(diceGame.getArray);

    console.log('startNewGame diceGame Array', diceGame.getArray);

    setCurrentScore(diceGame.getScore);
    checkBust(diceGame.getScore);
  };

  const continueGame = () => {
    setBusted(false);
    setDisabled(false);
    setHidden(true);
    document.getElementById('rerollSelectorForm').reset();
    diceGame.startGame();
    setNumberDisplay(diceGame.getArray);
    setDiceArray(diceGame.getArray);
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
    const isBust = checkBust(diceGame.getScore);

    if (!isBust) {
      setCurrentScore(currentScore + diceGame.getScore);
    }

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

  const passTurn = (e) => {
    e.preventDefault();
    setYourScore(yourScore + currentScore);
    const isWinner = checkWinner(yourScore, computerScore);
    if (!isWinner) {
      setCurrentScore(0);
      const computerScoreValue = feelingLucky();
      setComputerCurentScore(computerScoreValue);
      setHidden(false);
      if (computerScoreValue != 0) {
        setComputerScore(computerScore + computerScoreValue);
      }
      continueGame();
    } else {
      setCanContinue(false);
    }
  };

  const checkWinner = (userScore, compScore) => {
    if (userScore < 2000 && compScore < 2000) {
      //*no winners
      return false;
    } else {
      userScore > 2000 ? setWins(wins + 1) : setLoss(loss + 1);
      return true;
    }
  };

  return (
    <section className="container row justify-content-center text-center">
      <div className="card text-center col-8" style={grayB}>
        <h1 className="card-header rounded-bottom" style={lightBB}>
          <p style={whiteC}>Dice Game: Greed</p>
        </h1>
        <section className="card-body">
          <div className="container row justify-content-center">
            <h3>Wins: {wins}</h3>
            <h5>Losses: {loss}</h5>
            <h3>Your Score: {yourScore}</h3>
            <h5>Computer Score: {computerScore}</h5>
            <p className={!busted ? 'd-none' : ''}>You Busted!</p>
            <p className={canContinue ? 'd-none' : ''}>You won!</p>
          </div>
          <div className="container row justify-content-center">
            <button
              className={classes.buttons}
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
              className={classes.buttons}
              style={darkBB}
              type="button"
              onClick={continueToRoll}
            >
              {/*only allow them to roll if it should be possible based on array values */}
              <p style={grayC}>Continue</p>
            </button>
            <button
              className={classes.buttons}
              style={darkBB}
              type="submit"
              form="rerollSelectorForm"
            >
              {/*only allow them to select if those values are unscored values be possible based on array values */}
              <p style={grayC}>Reroll</p>
            </button>
            <button
              className={classes.buttons}
              style={darkBB}
              type="button"
              onClick={passTurn}
            >
              {/*only allow them to select if those values are unscored values be possible based on array values */}
              <p style={grayC}>Pass</p>
            </button>
            <p>Your Current Roll: {currentScore}</p>
            <p>Computer's Last Roll: {computerCurrentScore}</p>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Display;
