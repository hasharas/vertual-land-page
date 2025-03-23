import React from 'react';
// import { CheckCircle2 } from 'lucide-react';
import codeImg from "../assets/code.png";

const WorkFlor = () => {
      return (
            <div className='mt-20'>
                  <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide'>
                        <span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'>
                              Explore your </span>
                        codeing workflow.
                  </h2>
                  <div className="flex flex-wrap justify-center">
                        <div className="p-2 w-full lg:w-1/2">
                              <img src={codeImg} alt="" />
                        </div>
                  </div>
            </div>
      );
}

export default WorkFlor;
