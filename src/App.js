import React from 'react';
//*import the components of each one
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/NavBar';
import Project from './components/Project';

function App() {
  return (
    <main>
      <Header />
      <Navbar />
      <Project />
      <Footer />
    </main>
  );
}

export default App;
