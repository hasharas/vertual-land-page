import React from 'react';
import Logo from '../assets/logo.png';
import { navItems } from "../constants/index";

const Navbar = () => {
      return (
            <div>
                  <nav className="sticky top-[0px] z-50 py-[12px] backdrop-blur-lg border-b border-neutral-700/80">
                        <div className=" container px-[4px] mx-auto relative text-[14px]">
                              <div className="flex justify-center item-center">
                                    <div className="flex items-center flex-shrink-0">
                                          <img className="h-[40px] w-[40px] mr-[8px]" src={Logo} alt="logo" />
                                          <span className="text-[20px] tracking-tight">VR-Land</span>
                                    </div>
                                    <ul className='hidden lg:flex ml-14 space-x-12'>
                                          {navItems.map((item, index) => (
                                                <li key={index}>
                                                      <a href={item.href}>{item.label}</a>

                                                </li>
                                          ))

                                          }

                                    </ul>

                              </div>


                        </div>
                  </nav>
            </div>
      );
}

export default Navbar;
