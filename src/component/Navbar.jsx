import React from 'react';
import Logo from '../assets/logo.png';
import { navItems } from '../constants/index'

const Navbar = () => {
      return (
            <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg  border-b border-neutral-700/80">
                  <div className="container px-4 mx-auto relative text-sm">
                        <div className="flex justify-center items-center">
                              <div className="flex items-center flex-shrink-0">
                                    <img className='w-10 h-10' src={Logo} alt="logo" />
                                    <span className="text-xl tracking-tight">
                                          VR-Land
                                    </span>
                              </div>
                              <ul className='hidden lg:flex ml-14 space-x-12'>

                                    {navItems.map((item, index) => (
                                          console.log(navItems),
                                          <li key={index}>
                                                <a href={item.href}>{item.label}</a>
                                          </li>
                                    ))

                                    }

                              </ul>
                        </div>
                  </div>
            </nav>
      );
}

export default Navbar;
