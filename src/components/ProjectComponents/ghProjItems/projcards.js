import React from 'react';
import IconDisplay from './iconDisplay';

function ProjCards({ information }) {
  return (
    <div class="col-lg-4 col-md-6 col-sm-6 card">
      <img
        src={information.picture}
        class="card-img-top mt-2 rounded w-100 h-100"
        alt="..."
      />
      <div class="card-body ">
        <h4 class="card-title">
          <b>{information.title}</b>
        </h4>
        <p class="card-text">{information.body}</p>
        <a href={information.gLink} class="btn btn-primary">
          Github
        </a>
        <a href={information.dLink} class="btn btn-primary">
          Deployed
        </a>
        <div className="row justify-content-center align-items-center mt-3">
          <h5>
            <u>Technology Used</u>
          </h5>
          {information.tech.map((icon, key) => {
            return <IconDisplay icons={icon} key={key} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default ProjCards;
