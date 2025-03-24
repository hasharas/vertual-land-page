import React from 'react';
import { testimonials } from '../constants/index'

const TestingMonials = () => {
      return (
            <div className='mt-20 tracking-wide'>
                  <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20'>
                        What people are saying..
                  </h2>
                  <div className="flex flex-wrap justify-center">
                        {testimonials.map((testingmonial, index) => (
                              <div key={index} className='w-full sm:w-1/2 lg:w-1/3 px-4 py-2'>
                                    <div className='bg-neutral rounded-md p-6 text-md border border-neutral-50'></div>
                              </div>
                        ))

                        }
                  </div>
            </div>
      );
}

export default TestingMonials;
