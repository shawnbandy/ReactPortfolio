import React from 'react';
import { useState, useEffect } from 'react';
import {
  whiteB,
  grayB,
  lightBB,
  darkBB,
  whiteC,
  grayC,
  lightBC,
  darkBC,
} from './colors';

const classes = {
  section: 'container row justify-content-center text-center mt-3',
  imgHide: 'rounded d-none',
  imgShow: 'rounded',
};

const imgDisplay = (
  <div className="col-12">
    <img
      alt="Image of Shawn Canavan"
      className={classes.imgShow}
      src="./img/greed.png"
    />
    <figcaption>
      So! Maybe a little verbose, but I think it's pretty nifty.<br></br> We
      sort the array, and then we check to see if the first number is the same
      number as the third number.<br></br> This will check to see if a 3 of a
      kind is rolled, and then run the multiplier function on it which gives you
      a value, and adds it to your score.<br></br> Then we skip to the fourth
      number of the array since we covered the first three numbers.<br></br> If
      there is no 3 of a kind, then we check to see if the number is either a 1
      or a 5, and add that to your score.<br></br> I did this problem around 5AM
      at my airport, so I'm already seeing ways to improve it.<br></br> We don't
      really need tempArr at all, and we could instead just check the original
      dice array for duplicates instead of sorting!<br></br> But as they say,
      'code is never done'.
    </figcaption>
  </div>
);

function Codewars() {
  const [display, setDisplay] = useState(false);

  const toggleDisplay = () => {
    display === false ? setDisplay(true) : setDisplay(false);
  };

  return (
    <section className={classes.section}>
      <h2>
        <u>Codewars</u>
      </h2>
      <h4>Here's my favorite logic problem I've solved!</h4>
      <p>
        The description is: <br></br>Greed is a dice game played with five
        six-sided dice.<br></br> Your mission, should you choose to accept it,
        is to score a throw according to these rules.<br></br> You will always
        be given an array with five six-sided dice values.<br></br> A single die
        can only be counted once in each roll.<br></br> For example, a given "5"
        can only count as part of a triplet (contributing to the 500 points) or
        as a single 50 points, but not both in the same roll.<br></br> Only 1s
        and 5s are worth value as a single, 100 and 50 points respectively.
        <br></br> All other numbers are only worth value if they are part of a
        triplet.
        <br></br>Rolling '1, 2, 4, 4, 4' will award you 500 points:<br></br> 100
        from the 1 and 400 from the 4, 4, 4.
      </p>
      <div className="">
        <button
          className="btn m-1"
          style={darkBB}
          type="button"
          onClick={toggleDisplay}
        >
          <p style={whiteC}>Show my answer!</p>
        </button>
        {display ? imgDisplay : null}
      </div>
    </section>
  );
}

export default Codewars;
