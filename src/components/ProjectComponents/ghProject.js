import React from 'react';
import { useState, useEffect } from 'react';
import {
  whiteB,
  grayB,
  lightBB,
  darkBB,
  whiteC,
  grayC,
  lightBC,
  darkBC,
} from './colors';
import NavTabs from './ghProjItems/NavTabs';
import Display from './ghProjItems/display';

function Projects() {
  const [currentPage, setCurrentPage] = useState('BudgetBuddy');

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <section className="container row justify-content-center text-center mt-3">
      <h2>
        <u>Projects</u>
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
