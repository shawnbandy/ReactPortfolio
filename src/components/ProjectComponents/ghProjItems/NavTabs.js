import React from 'react';
import { lightBB, whiteC, darkBC } from '../colors';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs rounded" style={lightBB}>
      <li className="nav-item col-lg-4 col-md-4 col-sm-12">
        <a
          href="#FightingGame"
          style={currentPage === 'FightingGame' ? darkBC : whiteC}
          onClick={() => handlePageChange('FightingGame')}
          className={
            currentPage === 'FightingGame' ? 'nav-link active' : 'nav-link'
          }>
          HTML Fighting Game
        </a>
      </li>
      <li className="nav-item col-lg-4 col-md-4 col-sm-12">
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
      <li className="nav-item col-lg-4 col-md-4 col-sm-12">
        <a
          href="#Bramson"
          onClick={() => handlePageChange('Bramson')}
          style={currentPage === 'Bramson' ? darkBC : whiteC}
          className={
            currentPage === 'Bramson' ? 'nav-link active' : 'nav-link'
          }>
          Bramson's Webpage
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
