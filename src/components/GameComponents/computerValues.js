//*I really didn't want to code an AI that will play against you, so we're just going to sample some initial roll scores and reroll scores, and do some simple chance logic to see if the computer should select a value from the increasing rolls

const initValues = [
  100, 300, 250, 50, 200, 50, 50, 100, 600, 50, 150, 300, 700, 200, 50, 250, 50,
  200, 700, 50, 50, 250, 150, 600, 0, 200, 0, 300, 100, 50, 100, 350, 100, 100,
  1050, 500, 350, 400, 150, 100, 100, 100, 150, 750, 250, 100, 600, 0, 250, 150,
  0, 500, 400, 50, 50, 0, 150, 100, 50, 0, 100, 100, 200, 0, 0, 0, 0, 0, 50,
  1050, 0, 0, 0, 50, 0, 50, 100, 100, 0, 150, 100, 100, 500, 100, 0, 50, 300,
  150, 50, 150,
];

const randomInt = (array) => {
  return Math.floor(Math.random() * array.length);
};

const feelingLucky = (score) => {
  let roundScore = 0;

  if (score) {
    roundScore = roundScore + score;
  }

  let round = initValues[randomInt(initValues)];

  if (round === 0) {
    return 0;
  } else {
    roundScore += round;
  }

  const probability = randomInt([0, 1]);

  if (probability == 1) {
    return feelingLucky(roundScore);
  } else {
    console.log('FINISHED RETURNING VALUE,', roundScore);
    return roundScore;
  }
};

//console.log(initValues.length);
//console.log(initValues[randomInt(initValues)]);
export { initValues, randomInt, feelingLucky };
