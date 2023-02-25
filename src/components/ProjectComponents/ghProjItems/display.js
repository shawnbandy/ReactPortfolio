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
        }
      >
        <canvas id="canvas" style={{ backgroundColor: 'blacka' }}></canvas>
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
        }
      >
        <img
          alt="BudBud financial application"
          className="col-12 rounded"
          src={images[1]}
        />
        <p className="mt-3">
          Budget Buddy is a hands-on and easy-to-use money management web
          application. The app allows users to view, manage, and distribute
          their expenses all in one user-friendly dashboard. This full-stack web
          application was built using the MVC paradigm, handlebars.js and
          tailwind as the front-end UI and JS for scripting.
        </p>
        <p>
          My role in this team project was the project manager, setting up the
          routing to render the handlebars on different pages, coding parts of
          the handlebars pages, adding functionality to the dashboard including
          populating entries, editing, adding, and deleting entries, viewing
          your budget, expenses, and income.
        </p>
        <h2>
          <a href="https://github.com/shawnbandy/FinancialBudgeting">Github</a>
        </h2>
        <h2>
          <a href="https://budget-buddy-group-project.herokuapp.com/">
            Deployed
          </a>
        </h2>
      </div>
      <div className={currentPage === 'CMS' ? classes.display : classes.hidden}>
        <img
          alt="content management system"
          className="col-12 rounded"
          src={images[2]}
        />
        <p className="mt-3">
          CMS, or content management system, is a database system designed to
          allow users to quickly and efficiently create and manage a variety of
          tools for a department. The user is able to view all departments, view
          all roles, view all employees, adding departments, adding roles,
          adding employees, updating employees' roles, updating employees'
          managers, viewing employees by manager, viewing employees by
          department, viewing the combined salaries of employees of a
          department, and the ability to delete departments, roles, and
          employees from the database.
        </p>
        <p>This was a solo project!</p>
        <h2>
          <a href="https://github.com/shawnbandy/CMS">Github</a>
        </h2>
        <h2>
          <a href="https://www.youtube.com/watch?v=MbHEhctDvc4">Video Demo</a>
        </h2>
      </div>
      <div
        className={currentPage === 'ЯPlace' ? classes.display : classes.hidden}
      >
        <img
          alt="social media website Rplace"
          className="col-12 rounded"
          src={images[3]}
        />
        <p className="mt-3">
          ЯPlace is a multi-user full stack application inspired by the old
          social media giant MySpace. It uses React, MongoDB, Mongoose, Material
          UI, Node, express, Apollo, GraphQL, and JWT. Connect with your
          friends, share posts, comments, 'graffiti', and customize your profile
          using embedded HTML elements!
        </p>
        <p>
          My role in this team project was to implement MongoDB, Mongoose, Node,
          Express, Apollo, GraphQL, and all CRUD API requests.
        </p>
        <h2>
          <a href="https://github.com/shawnbandy/RPlace">Github</a>
        </h2>
        <h2>
          <a href="https://rplace1.herokuapp.com/">Deployed</a>
        </h2>
      </div>
    </div>
  );
}

export default Display;
