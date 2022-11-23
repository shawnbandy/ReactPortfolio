import React from 'react';
import {
  whiteB,
  grayB,
  lightBB,
  darkBB,
  whiteC,
  grayC,
  lightBC,
  darkBC,
} from '../colors';

const classes = {
  display: 'd-block',
  hidden: 'd-none',
};

const sn = require('../../../assets/img/SwiftNews.png');
const bb = require('../../../assets/img/bb.png');
const cms = require('../../../assets/img/CMS.png');

const images = [sn, bb, cms];

function Display({ currentPage }) {
  return (
    <div>
      <div
        className={
          currentPage === 'SwiftNews' ? classes.display : classes.hidden
        }>
        <img
          alt="Image of news application"
          className="col-12 rounded"
          src={images[0]}
        />
        <p className="mt-3">
          Swift News is a easy to access news website that uses multiple APIs
          from the New York Times to display the most popular news, the top
          stories of today, and other news articles. The articles are presented
          as an easy-to-read format, with their image, abstract, and title
          displayed per article.
        </p>
        <p>
          My role in this team project was the project manager, coding the main
          article page, setting up the API calls, and adding functionality to
          the NavBar and other buttons
        </p>
        <h2>
          <a href="https://github.com/shawnbandy/SwiftNews">Github</a>
        </h2>
        <h2>
          <a href="https://shawnbandy.github.io/SwiftNews/">Deployed</a>
        </h2>
      </div>
      <div
        className={
          currentPage === 'BudgetBuddy' ? classes.display : classes.hidden
        }>
        <img
          alt="Image of BudBud financial application"
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
          alt="Image of a content management system"
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
        className={currentPage === 'Proj3' ? classes.display : classes.hidden}>
        Coming soon!! A MERN full stack application. It's going to be spicy!
      </div>
    </div>
  );
}

export default Display;
