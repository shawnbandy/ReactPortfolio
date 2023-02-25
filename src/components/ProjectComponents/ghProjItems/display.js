import React from 'react';
const fightGame = import('../../GameComponents/fight');

const classes = {
  display: 'd-block',
  hidden: 'd-none',
};

const sn = require('../../../assets/img/SwiftNews.png');
const bb = require('../../../assets/img/bb.png');
const cms = require('../../../assets/img/CMS.png');
const rplace = require('../../../assets/img/rplace.png');

const images = [sn, bb, cms, rplace];

function Display({ currentPage }) {
  return (
    <div>
      <div
        className={
          currentPage === 'FightingGame' ? classes.display : classes.hidden
        }>
        <canvas id="canvas" style={{ backgroundColor: 'black' }}></canvas>
        <p className="mt-3">
          This is a personal project I began when I was on a flight to San
          Diego! You can move with keys AD, jump with W, and attack with X. Some
          challenges I faced were establishing gravity, preventing players from
          moving outside the canvas, and collision detection.
        </p>
        <p>
          Currently working on bug fixing the collision between characters. If
          you get stuck on the second player, you can jump out of it.
        </p>
        <div className="row">
          <div className="col-lg-6 col-sm-12 col-md-6">
            <h3>On the Stack TODOs</h3>
            <ul className="list-group text-center">
              <li className="list-group-item">Fix Collision</li>
              <li className="list-group-item">
                Finish attack system to deduct enemy health when attack
                rectangle collides with opponent.
              </li>
              <li className="list-group-item">
                Retune attacks to prevent people from spamming.
              </li>
              <li className="list-group-item">
                Create a stylized background for the canvas and change the
                character models to look like actual characters.
              </li>
              <li className="list-group-item">
                Allow a second person to control the second character.
              </li>
            </ul>
          </div>
          <div className="col-lg-6 col-sm-12 col-md-6">
            <h3>Planned Feature TODOs</h3>
            <ul className="list-group text-center">
              <li className="list-group-item">
                Make different classes for character selection, such as
                barbarians with slow powerful attacks, a long-ranged class that
                uses projectiles, etc.
              </li>
              <li className="list-group-item">
                Make multiple types of attacks like a jab, kick, slash, heavy
                slash.
              </li>
              <li className="list-group-item">
                Implement a combo system so players can chain together attacks.
                For example, a simple 'jab, kick, slash'.
              </li>
              <li className="list-group-item">
                Make a blocking system to negate damage from enemy attacks to
                encourage tactical play.
              </li>
              <li className="list-group-item">Code AI. </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={
          currentPage === 'BudgetBuddy' ? classes.display : classes.hidden
        }>
        <img
          alt="BudBud financial application"
          className="col-12 rounded"
          src={images[1]}
        />
        <p className="mt-3">
          Continuing to work on this project by rebuilding it in the MERN stack.
        </p>
        <p>
          Currently setting up the MongoDB API calls and using Apollo/GraphQL
          for API testing.
        </p>
        <h2></h2>
      </div>
      <div
        className={
          currentPage === 'Bramson' ? classes.display : classes.hidden
        }>
        {/* <img
          alt="content management system"
          className="col-12 rounded"
          src={images[2]}
        /> */}
        <p className="mt-3">Building a new landing page for my company!</p>
        <p>
          Currently in the planning stages, so I'm researching other webpages
          and competitors to find the industry standard, talking with the
          President of our creative department, and meeting with graphic
          designers to collaborate with ideas to make our site stand out.
        </p>
      </div>
    </div>
  );
}

export default Display;
