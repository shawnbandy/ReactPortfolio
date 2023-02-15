import React from 'react';
//*import the components of each one
import Footer from './components/Footer';
import Header from './components/Header';
import Project from './components/Project';
import { useState } from 'react';

const classes = 'container text-center';

function App() {
  const [currentNav, setCurrentNav] = useState('AboutMe');
  const handleNavChange = (page) => setCurrentNav(page);
  return (
    <main className={classes}>
      <Header currentNav={currentNav} handleNavChange={handleNavChange} />
      <Project currentNav={currentNav} handleNavChange={handleNavChange} />
      <Footer />
    </main>
  );
}

export default App;
