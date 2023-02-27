import React from 'react';
import { useState } from 'react';
import { grayB } from './colors';
import NavTabs from './ghProjItems/NavTabs';
import Display from './ghProjItems/display';
import ProjCards from './ghProjItems/projcards';
import icons from '../../components/ProjectComponents/icons';
import picImgs from './pics';

const project = [
  {
    picture: picImgs.bb,
    title: 'BudgetBuddy',
    body: 'BudgetBuddy is a free and hands-on money management web application to host all your expenses in one place.',
    gLink: 'https://github.com/shawnbandy/FinancialBudgeting',
    dLink: 'https://budget-buddy-group-project.herokuapp.com/',
    tech: [
      icons.html,
      icons.css,
      icons.tw,
      icons.ex,
      icons.node,
      icons.mysql,
      icons.seq,
      icons.json,
      icons.js,
      icons.ins,
      icons.git,
      icons.her,
      icons.hb,
    ],
    issue: null,
    moreInfo:
      'My role in this team project was that I was the project manager, and I set up the MVC routing to render the handlebar pages, I coded parts of the handlebar pages, I added scripting to the website for CRUD API calls, and set up the API calls. This application uses HTML, CSS, Tailwind, Express.js, Node.js, MySQL, Sequelize, JSON, JavaScript, Insomnia, Git, Heroku, and Handlebars.',
  },
  {
    picture: picImgs.rplace,
    title: 'RPlace',
    body: 'RPlace is a multiuser MERN full stack web application reminiscent of MySpace.',
    gLink: 'https://github.com/shawnbandy/RPlace',
    dLink: 'https://rplace1.herokuapp.com/',
    tech: [
      icons.css,
      icons.ex,
      icons.git,
      icons.her,
      icons.ins,
      icons.js,
      icons.json,
      icons.mdb,
      icons.react,
    ],
    issue: null,
    moreInfo:
      'My role in this team project was to be the back end specialist, so I set up MongoDB, Mongoose, Node, Express, Apollo, GraphQL, and all CRUD API requests. I also took initiative and worked on some front end elements to help my team out. This application uses Express.js, Git, Heroku, Insomnia, JSON, Javascript, MongoDB, React.js, Mongoose, and MaterialUI.',
  },
  {
    picture: picImgs.sn,
    title: 'SwiftNews',
    body: 'SwiftNews is an easy to access news website using the NYT API for its articles.',
    gLink: 'https://github.com/shawnbandy/SwiftNews',
    dLink: 'https://shawnbandy.github.io/SwiftNews/',
    tech: [
      icons.html,
      icons.css,
      icons.tw,
      icons.ins,
      icons.jq,
      icons.js,
      icons.node,
      icons.json,
      icons.ex,
      icons.git,
    ],
    issue: null,
    moreInfo:
      'My role in this team project was the project manager, I coded and framed the main article page using HTML and Tailwind, set up the API calls to the NYT, and added scripting for the Navigation bar. This application uses HTML, CSS, Tailwind, Insomnia, JQuery, JavaScript, Node.js, JSON, Express.js, and Git.',
  },
  {
    picture: picImgs.nt,
    title: 'NoteTaker',
    body: 'NoteTaker is a CRUD application to make, get, and delete notes.',
    gLink: 'https://github.com/shawnbandy/NoteTaker',
    dLink: null,
    tech: [
      icons.html,
      icons.js,
      icons.css,
      icons.json,
      icons.git,
      icons.ex,
      icons.ins,
      icons.her,
    ],
    issue:
      'Unfortunately, Heroku has stopped their free plan, so this application is not currently deployed.',
    moreInfo:
      'NoteTaker uses Express.js to handle CRUD requests to db.json for a simple and local database environment.',
  },
  {
    picture: picImgs.cms,
    title: 'Content Management System',
    body: 'The CMS is a database system allowing users to manage their department.',
    gLink: 'https://github.com/shawnbandy/CMS',
    dLink: 'https://www.youtube.com/watch?v=MbHEhctDvc4',
    tech: [icons.mysql, icons.js, icons.ins, icons.node],
    issue: null,
    moreInfo:
      'This was a solo project to outline database structures for future planning and success. I used MySQL, Node.js, JavaScript, Inquirer, and Insomnia to make a complex database application.',
  },

  {
    picture: picImgs.tb,
    title: 'TechBlog',
    body: 'TechBlog is a multi-user blogging website that uses the CRUD design for accounts, comments, and posts.',
    gLink: 'https://github.com/shawnbandy/TechBlog',
    dLink: null,
    tech: [
      icons.html,
      icons.css,
      icons.bs,
      icons.ex,
      icons.mysql,
      icons.seq,
      icons.json,
      icons.js,
      icons.ins,
      icons.git,
      icons.her,
      icons.hb,
    ],
    issue:
      'Unfortunately, Heroku has stopped their free plan, so this application is not currently deployed.',
    moreInfo:
      'This application was a solo project that used a wide variety of MVC tools to make a multi-user application. The tools used were MySQL, Express.js, Handlebars, Sequelize, Dotenv, Bcrypt, Express-Session, Session-Sequelize, JavaScript, HTML, Bootstrap, and Handlebars.',
  },
];

function Projects() {
  const [currentPage, setCurrentPage] = useState('SwiftNews');

  const handlePageChange = (page) => setCurrentPage(page);

  let projectCards = [];

  project.forEach((object, index) => {
    projectCards.push(<ProjCards information={object} index={index} />);
  });

  return (
    <section
      id="projects"
      className="container row justify-content-center text-center mt-3">
      <h2>
        <u>Projects</u>
      </h2>
      <div className="container row justify-content-center text-center">
        {projectCards}
      </div>
      <h2 className="mt-3">
        <u>Ongoing</u>
      </h2>
      <div className="card" style={grayB}>
        <NavTabs
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />

        <div className="card-body">
          <Display
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
