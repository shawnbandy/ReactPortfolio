import React from 'react';
import { lightBB, whiteC, darkBC } from '../colors';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs rounded" style={lightBB}>
      <li className="nav-item col-lg-3 col-md-6 col-sm-12">
        <a
          href="#SwiftNews"
          style={currentPage === 'SwiftNews' ? darkBC : whiteC}
          onClick={() => handlePageChange('SwiftNews')}
          className={
            currentPage === 'SwiftNews' ? 'nav-link active' : 'nav-link'
          }>
          SwiftNews
        </a>
      </li>
      <li className="nav-item col-lg-3 col-md-6 col-sm-12">
        <a
          href="#BudgetBuddy"
          style={currentPage === 'BudgetBuddy' ? darkBC : whiteC}
          onClick={() => handlePageChange('BudgetBuddy')}
          className={
            currentPage === 'BudgetBuddy'
              ? 'nav-link active col-sm-12'
              : 'nav-link'
          }>
          BudgetBuddy
        </a>
      </li>
      <li className="nav-item col-lg-3 col-md-6 col-sm-12">
        <a
          href="#CMS"
          onClick={() => handlePageChange('CMS')}
          style={currentPage === 'CMS' ? darkBC : whiteC}
          className={currentPage === 'CMS' ? 'nav-link active' : 'nav-link'}>
          CMS
        </a>
      </li>
      <li className="nav-item col-lg-3 col-md-6 col-sm-12">
        <a
          href="#Proj3"
          onClick={() => handlePageChange('Proj3')}
          style={currentPage === 'Proj3' ? darkBC : whiteC}
          className={currentPage === 'Proj3' ? 'nav-link active' : 'nav-link'}>
          Proj3
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
