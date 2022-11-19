class DiceGame {
  constructor(array, score) {
    this.array = array;
    this.score = score;
  }

  startGame() {
    return this.scoreDice(this.array);
  }
  randomNumber() {
    const diceNumbers = Math.floor(Math.random() * 5) + 1;
    return diceNumbers;
  }

  checkNumbers(selected) {
    //*a user selects numbers to reroll
    //*roll new numbers, calculate their score value. if it's 0, you lose
    //*take out the old numbers, put in the new numbers
    const reroll = [];

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
        sortedDice[i] == 1
          ? (score += 100)
          : sortedDice[i] == 5
          ? (score += 50)
          : score;
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

let globalScore = 0;

//*starts a new game with set params for now.
//*startGame will score the dice and return an int value
let dicegame = new DiceGame([1, 1, 1, 3, 6], 0);
const game1 = dicegame.startGame();

//*now we want to reroll the dice
console.log('------------------ pre check');
const check = dicegame.checkNumbers([3, 6]);

globalScore = dicegame.score;

console.log('globalscore', globalScore);
console.log('------------------ continue');
dicegame.continueGame('continue');
console.log('dg', dicegame.score);
