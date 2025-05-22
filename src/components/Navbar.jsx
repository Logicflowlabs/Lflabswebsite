import React, { useState } from 'react';
// import Logiclogimg from '../assets/Logiclogimg.png';
import MenuIcon from '@mui/icons-material/Menu'; 
import logicflowlogo from '../assets/logicflowlogo.jpeg';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white text-grey-800">
      <div className="flex items-center justify-between max-w-screen-xl p-4 mx-auto">
        {/* Logo */}
        <div>
          <img src={logicflowlogo} alt="logo" className="h-10 , border-radius-3px" />
        </div>

        {/* Navbar Items (Visible only on medium screens and above) */}
        <div className="hidden space-x-8 md:flex">
          <ul className="flex space-x-8">
            <li className="transition-all hover:text-gray-400">Technology</li>
            <li className="transition-all hover:text-gray-400">Services</li>
            <li className="transition-all hover:text-gray-400">Career</li>
            <li className="transition-all hover:text-gray-400">About</li>
          </ul>
        </div>

        {/* Sign In Button (Visible on all screen sizes) */}
        <div className="hidden md:block">
          <button className="px-4 py-2 font-semibold text-white transition-all bg-black rounded-md hover:bg-gray-700">
            Contact
          </button>
        </div>

        {/* Mobile Menu Icon (Visible only on smaller screens) */}
        <div className="flex items-center space-x-4 md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu (Appears when the menu icon is clicked) */}
      {isMobileMenuOpen && (
        <div className="px-6 py-4 bg-gray-800 md:hidden">
          <ul className="space-y-4">
            <li className="text-white hover:text-gray-400">Technology</li>
            <li className="text-white hover:text-gray-400">Services</li>
            <li className="text-white hover:text-gray-400">Career</li>
            <li className="text-white hover:text-gray-400">About</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

