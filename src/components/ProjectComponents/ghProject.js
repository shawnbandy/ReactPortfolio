import React from 'react';
import { useState } from 'react';
import { grayB } from './colors';
import NavTabs from './ghProjItems/NavTabs';
import Display from './ghProjItems/display';

function Projects() {
  const [currentPage, setCurrentPage] = useState('SwiftNews');

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <section
      id="projects"
      className="container row justify-content-center text-center mt-3">
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
