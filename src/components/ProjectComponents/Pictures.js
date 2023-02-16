import React, { useEffect } from 'react';
import { useState } from 'react';

import { grayB, lightBB, darkBB, whiteC, grayC } from './colors';

const wedding1 = require('../../assets/img/wedding1.JPG');
const wedding = require('../../assets/img/wedding.JPG');
const sharpTop = require('../../assets/img/sharpTop.JPEG');
const dragontooth = require('../../assets/img/dragontooth.JPEG');
const cove = require('../../assets/img/cove.JPEG');
const pR = require('../../assets/img/PR.JPEG');
const rockysteps = require('../../assets/img/rockysteps.jpeg');
const meandjo = require('../../assets/img/meandjo.JPEG');
const jo = require('../../assets/img/jo.png');
const masterGel = require('../../assets/img/masterGel.PNG');

const images = [
  wedding1,
  sharpTop,
  dragontooth,
  cove,
  pR,
  masterGel,
  rockysteps,
  meandjo,
  jo,
];

const imageStyle = {
  backgroundPosition: 'center',
  backgroundRepeat: 'no - repeat',
  objectFit: 'cover',
  width: '50rem',
  height: '50rem',
};

const captions = [
  'Me at my wedding!',
  'Love to hike - this is Sharp Top Mountain.',
  `This is from Dragon's tooth!`,
  `Kayaking at Carvin's Cove! I love to be outside when I can.`,
  `My personal record for distance cycling! Training to do 100 miles.\nCycling is my favorite exercise- I get to be outside, I get to see changes in scenery, and I can listen to my audio books.`,
  `This is from my Master's Thesis! Called a 'constellation map' or 2D Gel, it was the culmination of many hours of work, planning, and execution. Note: I photoshoped myself in 👨🏻‍💻`,
  `Famous 'Rocky Steps'.`,
  `Me and my cat, Jo!`,
  `She's a little nosy...`,
];

function Picture() {
  const [count, setCount] = useState(0);
  const [currentImage, setCurrentImage] = useState(null);

  const forwardClick = () => {
    count > 8 ? setCount(0) : setCount(count + 1);
    console.log(count);
  };

  const backwardClick = () => {
    count < 1 ? setCount(9) : setCount(count - 1);
    console.log(count);
  };

  useEffect(() => {
    console.log('useEffect');
    console.log(count);

    setInterval(() => {
      setCount((prev) => (prev == images.length - 1 ? 0 : prev + 1));
    }, 10000);

    clearInterval();
  }, []);

  console.log(count);

  return (
    <div className="flex justify-content-center text-center mt-3" id="aboutme">
      <div style={whiteC}>
        {/* <h1 className="card-header rounded-bottom" style={lightBB}>
          <p style={whiteC}>Get to Know Me</p>
        </h1> */}
        <div id="1" className="">
          <div className="container row justify-content-center">
            <img alt="Shawn Canavan" style={imageStyle} src={images[count]} />
            <div className="d-flex justify-content-center mt-1">
              <h5 className="card-header rounded w-50" style={lightBB}>
                {captions[count]}
              </h5>
            </div>
          </div>
          {/* <button
            className="btn m-1"
            style={darkBB}
            type="button"
            onClick={backwardClick}>
            <p style={grayC}>Prev</p>
          </button>
          <button
            className="btn m-1"
            style={darkBB}
            type="button"
            onClick={forwardClick}>
            <p style={grayC}>Next</p>
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Picture;
