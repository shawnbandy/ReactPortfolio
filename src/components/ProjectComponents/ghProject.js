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
  },
  {
    picture: picImgs.cms,
    title: 'Content Management System',
    body: 'The CMS is a database system allowing users to manage their department.',
    gLink: 'https://github.com/shawnbandy/CMS',
    dLink: 'https://www.youtube.com/watch?v=MbHEhctDvc4',
    tech: [icons.mysql, icons.js, icons.ins, icons.node],
    issue: null,
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
      className="container row justify-content-center text-center mt-3"
    >
      <h2>
        <u>Projects</u>
      </h2>
      <div className="container row justify-content-center text-center">
        {projectCards}
      </div>
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
