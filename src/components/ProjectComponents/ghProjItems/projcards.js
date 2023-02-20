import React from 'react';
import IconDisplay from './iconDisplay';
import Carousel from 'react-bootstrap/Carousel';

function ProjCards({ information }) {
  console.log(information.tech.length);

  let iconCarouselGrouping = [];

  if (information.tech.length % 3 == 0) {
    for (let i = 0; i < information.tech.length; i += 3) {
      let iconObjGrouping = [
        information.tech[i],
        information.tech[i + 1],
        information.tech[i + 2],
      ];
      iconCarouselGrouping.push(iconObjGrouping);
    }
  } else {
    for (let i = 0; i < information.tech.length; i += 3) {
      let iconObjGrouping = [];
      if (information.tech[i + 1] == undefined) {
        console.log('hit1');
        iconObjGrouping.push(
          information.tech[i],
          information.tech[0],
          information.tech[1]
        );
        iconCarouselGrouping.push(iconObjGrouping);
      } else if (information.tech[i + 2] == undefined) {
        console.log('hit2');
        iconObjGrouping.push(
          information.tech[i],
          information.tech[i + 1],
          information.tech[0]
        );
        iconCarouselGrouping.push(iconObjGrouping);
      } else {
        console.log('hit3');
        iconObjGrouping = [
          information.tech[i],
          information.tech[i + 1],
          information.tech[i + 2],
        ];
        iconCarouselGrouping.push(iconObjGrouping);
      }
    }
  }

  console.log('GROUPING-----------', iconCarouselGrouping);

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
          <div
            id="carouselExampleControls"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel">
            <div className="carousel inner">
              <div
                className="carousel-item active"
                data-bs-interval="4000"
                data-bs-wrap="true">
                <img
                  src={information.tech[0]}
                  className="col-3"
                  width="50rem"
                  alt="..."
                />
                <img
                  src={information.tech[1]}
                  className="col-3"
                  width="50rem"
                  alt="..."
                />
                <img
                  src={information.tech[2]}
                  className="col-3"
                  width="50rem"
                  alt="..."
                />
              </div>

              {iconCarouselGrouping.map((group) => {
                <div class="carousel-item" data-bs-interval="4000">
                  <img className="col-3" width="50rem" src={group[0]}></img>
                  <img className="col-3" width="50rem" src={group[1]}></img>
                  <img className="col-3" width="50rem" src={group[2]}></img>
                </div>;
              })}
              <div class="carousel-item" data-bs-interval="4000">
                <img
                  className="col-3"
                  width="50rem"
                  src={information.tech[1]}></img>
                <img
                  className="col-3"
                  width="50rem"
                  src={information.tech[1]}></img>
                <img
                  className="col-3"
                  width="50rem"
                  src={information.tech[1]}></img>
              </div>
              {/* 
              {iconCarouselGrouping.map((icon, key) => {
                return <IconDisplay icons={icon} key={key} />;
              })} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjCards;

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
