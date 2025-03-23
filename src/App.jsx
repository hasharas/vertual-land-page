import React from 'react';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Feature from './component/Feature';
import WorkFlor from './component/WorkFlor';
import Pricing from './component/Pricing';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />
        <Feature />
        <WorkFlor />
        <Pricing />
      </div>
    </>
  );
}

export default App;
