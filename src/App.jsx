import React from 'react';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Feature from './component/Feature';
import WorkFlor from './component/WorkFlor';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />
        <Feature />
        <WorkFlor />
      </div>
    </>
  );
}

export default App;
