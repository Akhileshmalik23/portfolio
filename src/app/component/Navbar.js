'use client'
import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-custom-bg text-black" >
      <div className="container mx-auto flex flex-wrap items-center justify-between ">
        <div className="text-4xl text-black">Ak</div>
        <button 
          className="block lg:hidden md:hidden px-3 py-2 border rounded text-black border-white"
          onClick={toggleMenu}
        >
          <svg className="fill-current h-6 w-6" viewBox="0 0 24 24">
            <path 
              d="M3 6h18M3 12h18m-9 6h9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className={`w-full lg:flex lg:items-center lg:w-auto md:flex md:items-center md:w-auto ${isOpen ? 'block' : 'hidden'}`} id="menu">
          <div className="text-lg lg:flex-grow md:flex-grow ">
            <a href="/" className="block mt-4 lg:inline-block md:inline-block lg:mt-0 md:mt-0 text-black hover:text-gray-300 mr-4">
              Home
            </a>
            <a href="#about" className="block mt-4 lg:inline-block md:inline-block lg:mt-0 md:mt-0 text-black hover:text-gray-300 mr-4">
              About me
            </a>
            <a href="#projects" className="block mt-4 lg:inline-block md:inline-block lg:mt-0 md:mt-0 text-black hover:text-gray-300 mr-4">
              Projects
            </a>
            <a href="https://drive.google.com/file/d/1dPM_R0RH9EKl-KK145bbABH-DUq3rMkP/view?usp=sharing" className="block mt-4 lg:inline-block md:inline-block lg:mt-0 md:mt-0 text-black hover:text-gray-300 mr-4">
              Resume
            </a>
            <a href="#contact" className="block mt-4 lg:inline-block md:inline-block lg:mt-0 md:mt-0 text-black hover:text-gray-300">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
