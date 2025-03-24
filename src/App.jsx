import React from 'react';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Feature from './component/Feature';
import WorkFlor from './component/WorkFlor';
import Pricing from './component/Pricing';
import TestingMonials from './component/TestingMonials';
import Footer from './component/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />
        <Feature />
        <WorkFlor />
        <Pricing />
        <TestingMonials />
        <Footer />
      </div>
    </>
  );
}

export default App;
