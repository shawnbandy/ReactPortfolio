import React from 'react';
//*import the components of each one
import Footer from './components/Footer';
import Header from './components/Header';
import Project from './components/Project';

const classes = 'container text-center';

function App() {
  return (
    <main className={classes}>
      <Header />
      <Project />
      <Footer />
    </main>
  );
}

export default App;
