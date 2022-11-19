class DiceGame {
  constructor(array) {
    this.array = array;
  }

  startGame() {
    if (this.array.length > 0) {
      this.array = [];
    }
    for (let i = 0; i < 5; i++) {
      this.array.push(this.randomNumber());
    }
    return this.array;
  }
  randomNumber() {
    const diceNumbers = Math.floor(Math.random() * 5) + 1;
    return diceNumbers;
  }

  checkNumbers(selected) {}

  score(dice) {
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
    return score;
  }

  multiplier(number) {
    if (number == 1) {
      return 1000;
    } else {
      return number * 100;
    }
  }
}

const dicegame = new DiceGame([]);
const game1 = dicegame.startGame();

console.log(game1);
console.log(dicegame.score(game1));
