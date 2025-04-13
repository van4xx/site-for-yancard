import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Hero />
      <Services />
      <Pricing />
      <Process />
      <FAQ />
      <Contact />
    </div>
  );
}

export default App;
