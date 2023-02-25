import React, { useEffect } from 'react';
import { useState } from 'react';
import { Carousel } from 'bootstrap';

import { grayB, lightBB, darkBB, whiteC, grayC, darkBC } from './colors';

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

const imTest = [
  {
    pic: sharpTop,
    desc: 'Love to hike \n- this is Sharp Top Mountain.',
    text: false,
  },
  {
    pic: dragontooth,
    desc: `This is from Dragon's tooth!`,
    text: false,
  },
  {
    pic: cove,
    desc: `Kayaking at Carvin's Cove!\n I love to be outside when I can.`,
    text: false,
  },
  {
    pic: pR,
    desc: `My personal record for distance cycling! Training to do 100 miles.\nCycling is my favorite exercise- I get to be outside, I get to see changes in scenery, and I can listen to my audio books.`,
    text: false,
  },
  {
    pic: masterGel,
    desc: `This is from my Master's Thesis! Called a 'constellation map' or 2D Gel, it was the culmination of many hours of work, planning, and execution. Note: I photoshoped myself in 👨🏻‍💻`,
    text: false,
  },
  {
    pic: rockysteps,
    desc: `Famous 'Rocky Steps'.`,
    text: false,
  },
  {
    pic: meandjo,
    desc: `Me and my cat, Jo!`,
    text: false,
  },
  {
    pic: jo,
    desc: `She's a little nosy...`,
    text: false,
  },
];

const imageStyle = {
  backgroundPosition: 'center',
  backgroundRepeat: 'no - repeat',
  objectFit: 'cover',
  width: '50rem',
  height: '50rem',
};

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

  return (
    <div className="flex justify-content-center text-center mt-3" id="aboutme">
      <div style={whiteC}>
        {/* <h1 className="card-header rounded-bottom" style={lightBB}>
          <p style={whiteC}>Get to Know Me</p>
        </h1> */}
        <div id="1" className="">
          <div className="container row justify-content-center">
            <div className="mt-1">
              <div
                id="carouselExampleControls"
                class="carousel slide carousel"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active" data-bs-interval="1000">
                    <img src={wedding1} class="col-6" alt="..." />
                    <div class="d-none d-md-block">
                      <h3 style={{ color: 'black' }}>Me at my wedding!</h3>
                    </div>
                  </div>

                  {imTest.map((image) => {
                    return (
                      <div class="carousel-item" data-bs-interval="10000">
                        <img src={image.pic} class="col-6"></img>
                        <div class="d-none d-md-block">
                          <h3
                            style={
                              image.text
                                ? { color: 'white' }
                                : { color: 'black' }
                            }
                          >
                            {image.desc}
                          </h3>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Picture;

/*
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="1000">
            <img src={information.tech[0]} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item" data-bs-interval="1000">
            <img src={information.tech[1]} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item" data-bs-interval="1000">
            <img src={information.tech[2]} class="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
*/
