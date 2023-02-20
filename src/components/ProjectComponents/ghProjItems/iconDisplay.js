import React from 'react';

function IconDisplay({ icons }) {
  console.log(icons);
  return (
    <div class="carousel-item" data-bs-interval="1000">
      <img className="col-3" width="50rem" src={icons[0]}></img>
      <img className="col-3" width="50rem" src={icons[1]}></img>
      <img className="col-3" width="50rem" src={icons[2]}></img>
    </div>
  );
}

export default IconDisplay;
