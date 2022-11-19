class DiceGame {
  constructor(array, score) {
    this.array = array;
    this.score = score;
  }

  get getArray() {
    return this.array;
  }

  get getScore() {
    return this.score;
  }

  startGame() {
    if (this.array.length > 0) {
      this.array = [];
    }
    for (let i = 0; i < 5; i++) {
      this.array.push(this.randomNumber());
    }
    console.log('new game started, values are: ', this.array);
    return this.scoreDice(this.array);
  }
  randomNumber() {
    const diceNumbers = Math.floor(Math.random() * 5) + 1;
    return diceNumbers;
  }

  rerollNumbers([selected]) {
    //*a user selects numbers to reroll
    //*roll new numbers, calculate their score value. if it's 0, you lose
    //*take out the old numbers, put in the new numbers
    const reroll = [];
    console.log('selected', selected);

    for (let i = 0; i < selected.length; i++) {
      reroll.push(this.randomNumber());
    }

    //*This scores the rerolled dice
    this.scoreDice(reroll);

    //*removes the selected dice to reroll from this.array
    for (let i = 0; i < this.array.length; i++) {
      for (let j = 0; j < selected.length; j++) {
        if (this.array[i] === selected[j]) {
          this.array.splice(i, 1);
          selected.shift();
          j--;
        }
      }
    }

    for (let i = 0; i < reroll.length; i++) {
      this.array.push(reroll[i]);
    }
    console.log('-----------', this.array);
    return this.array;
  }

  scoreDice(dice) {
    console.log(dice);
    const sortedDice = dice.sort();
    let score = 0;
    let tempArr = [];

    for (let i = 0; i < sortedDice.length; i++) {
      if (sortedDice[i] == sortedDice[i + 2]) {
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
    if (score == 0) {
      this.continueGame('lose');
    }

    this.score += score;
    return this.score;
  }

  multiplier(number) {
    if (number == 1) {
      return 1000;
    } else {
      return number * 100;
    }
  }

  continueGame(state) {
    switch (state) {
      case 'lose': {
        console.log(`You lost! Your final score is: ${this.score}`);
        return this.score;
      }
      case 'continue': {
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
