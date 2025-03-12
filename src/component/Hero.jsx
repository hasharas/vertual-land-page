import React from 'react';
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';

const Hero = () => {
      return (
            <div className='flex flex-col items-center mt-6 lg:mt-20'>
                  <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                        My Test Landing Page
                        <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'>
                              {" "} for developers
                        </span>
                  </h1>
                  <p className='mt-10 text-center text-lg text-neutral-500 max-w-4xl'>
                        Experience simplicity and innovation in one place. Explore seamless solutions designed to enhance your journey with efficiency, reliability, and ease.
                  </p>
                  <div className="flex justify-center my-10">
                        <a href="" className='bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md'>
                              Start to Free
                        </a>
                        <a href="" className='py-3 px-4 mx-3 rounded-md border'>Documentation</a>
                  </div>
                  <div className='flex mt-10 justify-center'>
                        <video autoPlay loop muted className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4' src="" >
                              <source src={video1} type='video/mp4' />
                        </video>
                        <video autoPlay loop muted className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4' src="" >
                              <source src={video2} type='video/mp4' />
                        </video>
                  </div>
            </div>
      );
}

export default Hero;
