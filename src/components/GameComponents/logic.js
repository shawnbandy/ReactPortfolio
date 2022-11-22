class DiceGame {
  constructor(array, score) {
    this.array = array;
    this.score = score;
  }

  get getArray() {
    return this.array;
  }

  set setArray(newArr) {
    this.array = newArr;
  }

  get getScore() {
    return this.score;
  }

  set setScore(newScore) {
    this.score = newScore;
  }

  startGame() {
    if (this.array.length > 0) {
      this.array = [];
    }
    for (let i = 0; i < 5; i++) {
      this.array.push(this.randomNumber());
    }
    console.log('new game started, values are: ', this.array);

    console.log('this.arry', this.getArray);

    return this.scoreDice(this.array);
  }
  randomNumber() {
    const diceNumbers = Math.floor(Math.random() * 6) + 1;
    return diceNumbers;
  }

  rerollNumbers(selected, original) {
    //*create rerolled numbers, score them, replace the original numbers w/ the new ones, return it
    const reroll = [];

    console.log('this is ReRollNumbers', this.array);

    for (let i = 0; i < selected.length; i++) {
      reroll.push(this.randomNumber());
    }

    //*This scores the rerolled dice
    this.scoreDice(reroll);

    for (let i = 0; i < selected.length; i++) {
      original[selected[i]] = reroll[i];
    }

    this.array = original;

    console.log('-----------', this.array);
    return this.array;
  }

  scoreDice(dice) {
    const sortedDice = dice.sort();
    let score = 0;
    let tempArr = [];

    for (let i = 0; i < sortedDice.length; i++) {
      if (sortedDice[i] === sortedDice[i + 2]) {
        tempArr.push(sortedDice[i], sortedDice[i + 1], sortedDice[i + 2]);
        score += this.multiplier(tempArr[0]);
        tempArr = [];
        i = i + 2;
      } else {
        switch (sortedDice[i]) {
          case 1:
            score += 100;
            break;
          case 5:
            score += 50;
            break;
          default:
            break;
        }
      }
    }

    //*checks to see if you have a score, if not, you lose
    if (score === 0) {
      this.continueGame('lose');
    }

    this.score += score;
    return this.score;
  }

  multiplier(number) {
    if (number === 1) {
      return 1000;
    } else {
      return number * 100;
    }
  }

  continueGame(state) {
    switch (state) {
      case 'lose': {
        console.log(`You lost! Your final score is: ${this.score}`);
        return true;
      }
      default: {
        this.array = [];
        for (let i = 0; i < 5; i++) {
          this.array.push(this.randomNumber());
        }
        this.startGame();
      }
    }
  }
}

//*starts a new game with set params for now.
//*startGame will score the dice and return an int value

export default DiceGame;
