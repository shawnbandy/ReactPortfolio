import React from 'react';

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
const classes = {
  numberGameDisplay: 'col-2 border border-dark justify-content-center',
  buttons: 'btn',
};

function NumberDisplay({ numberArr }) {
  const numberDisplayArr = [];

  for (let i = 0; i < numberArr.length; i++) {
    const htmlDisplay = (
      <div className={classes.numberGameDisplay} style={lightBB}>
        <button className={classes.buttons} style={whiteC}>
          {numberArr[i]}
        </button>
      </div>
    );
    numberDisplayArr.push(htmlDisplay);
  }

  return numberDisplayArr;
}

export default NumberDisplay;
