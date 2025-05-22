import React from 'react';
import csutsnt from '../assets/csutsnt.png';

const Cards = () => {
  return (
    <div className="mt-8 text-center">
      {/* Heading for the Cards */}
      <h2 className="mb-6 text-3xl font-semibold">Our Services</h2>

      {/* Container for the cards */}
      <div className="max-w-6xl px-4 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-6 sm:flex-row sm:space-x-6 sm:space-y-0">
          {/* Consulting Card */}
          <div className="w-full max-w-xs p-6 bg-white rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              <img
                src={csutsnt}
                alt="Consulting"
                className="w-16 h-16"
              />
            </div>
            <h3 className="text-xl font-semibold text-center">Consulting</h3>
            <p className="mt-2 text-center text-gray-600">
              We offer expert consulting services to help you grow your business.
            </p>
          </div>

          {/* Technology Card */}
          <div className="w-full max-w-xs p-6 bg-white rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              <img
                src="path_to_technology_icon.png" // Replace with your actual icon path or URL
                alt="Technology"
                className="w-16 h-16"
              />
            </div>
            <h3 className="text-xl font-semibold text-center">Technology</h3>
            <p className="mt-2 text-center text-gray-600">
              Innovative technology solutions to streamline your operations.
            </p>
          </div>

          {/* Services Card */}
          <div className="w-full max-w-xs p-6 bg-white rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              <img
                src="path_to_services_icon.png" // Replace with your actual icon path or URL
                alt="Services"
                className="w-16 h-16"
              />
            </div>
            <h3 className="text-xl font-semibold text-center">Services</h3>
            <p className="mt-2 text-center text-gray-600">
              Professional services tailored to meet your unique needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
