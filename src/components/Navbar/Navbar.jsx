import { useState } from 'react';

export function Navbar () {
  const [isOpen, setIsOpen] = useState(false);

  // Define the navigation items in an array
  const navItems = ['Home', 'About', 'Skills',  'Projects', 'Contact'];

  return (
    <nav className="p-3 w-full">
      <div className="container mx-auto flex justify-center items-center">
        {/* Navigation items for larger screens */}
        <div className="hidden md:flex space-x-4 bg-slate-700 p-3 rounded-full">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="block text-white text-xl font-bold hover:text-cyan-500 px-3 py-2 rounded"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Hamburger menu for smaller screens */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none ml-16"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={!isOpen ? 'M4 6h16M4 12h16M4 18h16' : 'M6 18L18 6M6 6l12 12'}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Dropdown menu for smaller screens */}
      {isOpen && (
        <div className="md:hidden">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="block text-white font-bold hover:text-cyan-500 px-3 py-2 rounded"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};


