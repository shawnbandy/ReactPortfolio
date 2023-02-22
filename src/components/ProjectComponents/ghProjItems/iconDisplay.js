import React from 'react';

function IconDisplay({ icons }) {
  console.log(icons);
  return (
    <div
      class="carousel-item row justify-content-evenly"
      data-bs-interval="4000"
    >
      <img className="col-lg-3" width="50rem" src={icons[0]}></img>
      <img className="col-lg-3" width="50rem" src={icons[1]}></img>
      <img className="col-lg-3" width="50rem" src={icons[2]}></img>
    </div>
  );
}

export default IconDisplay;
