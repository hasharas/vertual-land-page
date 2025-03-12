import React from 'react';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Feature from './component/Feature';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />
        <Feature />
      </div>
    </>
  );
}

export default App;
