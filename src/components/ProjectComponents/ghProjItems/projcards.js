import React from 'react';
import IconDisplay from './iconDisplay';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';

const classes = {
  alertHide: 'alert alert-warning alert-dismissible fade show d-none',
  alertShow:
    'alert alert-warning alert-dismissible text-center fade show m-0 p-1',
};

function ProjCards({ information, index }) {
  console.log(information.tech.length);

  let iconCarouselGrouping = [];

  if (information.tech.length % 3 == 0) {
    for (let i = 3; i < information.tech.length; i += 3) {
      let iconObjGrouping = [
        information.tech[i],
        information.tech[i + 1],
        information.tech[i + 2],
      ];
      iconCarouselGrouping.push(iconObjGrouping);
    }
  } else {
    for (let i = 3; i < information.tech.length; i += 3) {
      let iconObjGrouping = [];
      if (information.tech[i + 1] == undefined) {
        iconObjGrouping.push(
          information.tech[i],
          information.tech[0],
          information.tech[1]
        );
        iconCarouselGrouping.push(iconObjGrouping);
      } else if (information.tech[i + 2] == undefined) {
        iconObjGrouping.push(
          information.tech[i],
          information.tech[i + 1],
          information.tech[0]
        );
        iconCarouselGrouping.push(iconObjGrouping);
      } else {
        iconObjGrouping = [
          information.tech[i],
          information.tech[i + 1],
          information.tech[i + 2],
        ];
        iconCarouselGrouping.push(iconObjGrouping);
      }
    }
  }

  //console.log('GROUPING-----------', iconCarouselGrouping);

  const flipCard = (e) => {
    console.log(e.target.parentNode.parentNode.parentNode.id);
  };

  const showIssue = (e) => {
    console.log(
      e.target.parentNode.parentNode.parentNode.parentNode.children[3]
    );

    if (information.issue) {
      setHidden(!isHidden);
    }
  };

  const [isHidden, setHidden] = useState(true);

  return (
    <div class="col-lg-4 col-md-6 col-sm-6 card card-rotating" id={index}>
      <img
        src={information.picture}
        class="card-img-top mt-2 rounded w-100 h-100"
        alt="..."
      />
      {/*START OF THE FLIP CARD, FRONT SIDE */}
      <div class="card-body face front">
        <h4 class="card-title">
          <b>{information.title}</b>
        </h4>
        <p class="card-text">{information.body}</p>

        <div className="row justify-content-center align-items-center mt-3">
          <h5>
            <u>Technology Used</u>
          </h5>
          <div
            id="carouselExampleControls"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div className="carousel inner">
              <div
                className="carousel-item active"
                data-bs-interval="4000"
                data-bs-wrap="true"
              >
                <div className="row justify-content-evenly">
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
              </div>
              {iconCarouselGrouping.map((group) => {
                return (
                  <div class="carousel-item" data-bs-interval="4000">
                    <div className="row justify-content-evenly">
                      <img className="col-3" width="50rem" src={group[0]}></img>
                      <img className="col-3" width="50rem" src={group[1]}></img>
                      <img className="col-3" width="50rem" src={group[2]}></img>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="row justify-content-evenly mt-3">
          <a href={information.gLink} class="col-lg-3 btn btn-primary">
            Github
          </a>
          <a href={information.dLink} class="col-lg-3 btn btn-primary">
            <p
              onClick={(e) => {
                showIssue(e);
              }}
            >
              Deployed
            </p>
          </a>
          <a
            class="col-lg-3 btn btn-primary rotate-btn"
            onClick={(e) => {
              flipCard(e);
            }}
          >
            More Info
          </a>
        </div>
      </div>
      {/*START OF THE FLIP CARD, BACK SIDE */}
      <div className="face back"></div>
      <div
        class={isHidden ? classes.alertHide : classes.alertShow}
        role="alert"
      >
        {information.issue}
        <br></br>
        <button
          type="button"
          class="btn btn-danger"
          onClick={() => setHidden(true)}
          data-dismiss="alert"
          aria-label="Close"
        >
          <span>&times;</span>
        </button>
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
