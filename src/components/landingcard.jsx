import React from 'react';
// import sapimg2 from '../assets/sapimg2.jpg';
import landing3 from '../assets/landing3.png';

const LandingCard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="relative w-screen h-screen overflow-hidden transition duration-300 transform bg-cover shadow-lg hover:scale-105 my-8">
        <div className="absolute inset-0 opacity-50 bg-gradient-to-b from-black to-transparent"></div>
        <img
          src={landing3}
          alt="Landing"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 py-6 text-center text-white">
          <h1 className="mb-4 text-4xl font-semibold">Welcome to Our Website!</h1>
          <p className="mb-6 text-lg max-w-xl">
            Discover a world of possibilities with our amazing products and services.
            Join us now and experience innovation at its best!
          </p>
          <button className="px-8 py-3 text-lg font-semibold text-white transition duration-300 bg-red-500 rounded-md hover:bg-red-400">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingCard;
