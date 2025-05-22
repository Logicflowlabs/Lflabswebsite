import React from 'react';
import andingimg from '../assets/andingimg.png';

const LandingCardSec = () => {
  return (
    <div className="flex flex-col items-center justify-between max-w-6xl p-6 mx-auto transition-transform duration-300 ease-in-out bg-white rounded-lg shadow-lg md:flex-row hover:shadow-xl">
      {/* Content Section */}
      <div className="flex-1 pr-8 mb-6 md:mb-0 md:pr-16">
        <h1 className="mb-4 text-3xl font-semibold text-gray-800 sm:text-4xl">Welcome to LogicFlowLabs!</h1>
        <p className="mb-6 text-base leading-relaxed text-gray-600 sm:text-lg">
         We specialize in IT Consulting, Managed Services, and Software Development, with a focus on key platforms like SAP, Microsoft, and Salesforce. Our team is equipped with highly skilled professionals who possess deep expertise in these areas, ensuring that we provide the right knowledge and support to our clients exactly when they need it. At LogicFlowLabs, we are committed to delivering tailored solutions that drive success and foster long-term partnerships. Let us help you navigate the complexities of technology with confidence and efficiency.
        </p>
        <button className="px-6 py-3 text-lg font-medium text-white transition-colors bg-black rounded-lg hover:bg-gray-600">
          Get Started
        </button>
      </div>

      {/* Image Section */}
      <div className="flex-shrink-0 w-full mt-6 md:w-1/2 md:mt-0">
        <img src={andingimg} alt="Landing" className="w-full h-auto rounded-lg"/>
      </div>
    </div>
  );
};

export default LandingCardSec;
