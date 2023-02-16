import React from 'react';

function IconDisplay({ icons }) {
  console.log(icons);
  return (
    <div class="col-3">
      <img width="50rem" src={icons}></img>
    </div>
  );
}

export default IconDisplay;
