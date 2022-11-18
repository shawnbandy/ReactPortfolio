import React from 'react';
import { useState, useEffect } from 'react';

const images = [
  './img/wedding1.JPG',
  './img/wedding.JPG',
  './img/sharpTop.JPEG',
  './img/masterGel.PNG',
  './img/cove.JPEG',
  './img/dragontooth.JPEG',
  './img/PR.JPEG',
  './img/meandjo.JPEG',
  './img/rockysteps.JPEG',
  './img/jo.png',
];

function Picture() {
  const [count, setCount] = useState(0);

  const forwardClick = () => {
    count > 8 ? setCount(0) : setCount(count + 1);
    console.log(count);
  };

  const backwardClick = () => {
    count < 1 ? setCount(9) : setCount(count - 1);
    console.log(count);
  };

  return (
    <div className="card text-center">
      <h3 className="card-header bg-primary text-white">Some Pictures!</h3>
      <div className="card-body">
        <img alt="holding" className="w-100 rounded" src={images[count]} />
        <button
          className="btn btn-primary"
          type="button"
          onClick={backwardClick}>
          Prev
        </button>
        <button
          className="btn btn-primary"
          type="button"
          onClick={forwardClick}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Picture;
