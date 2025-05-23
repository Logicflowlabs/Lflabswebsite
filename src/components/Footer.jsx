import React from 'react';
// import Logiclogoimg from '../assets/Logiclogimg.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import logo from '../assets/logicflowlogo.jpeg';
 
const Footer = () => {

  const handlecopy = async () => {
    try {
      await navigator.clipboard.writeText('info@logicflowlabs.com');
      alert('Email copied');
    } catch (error) {
      console.error('Failed to copy email', error);
    }
  };

  const handlePhone = async () => {
    try {
      await navigator.clipboard.writeText('+91 8431508013');
      alert('Phone number copied');
    } catch (error) {
      console.error('Failed to copy phone number', error);
    }
  };

  return (
    <footer className="py-8 text-white bg-gray-800">
      <div className="container px-4 mx-auto"> {/* Changed px-6 to px-4 for reduced side padding */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <img src={logo} alt="Logo" />
            {/* <h1 className='text-xl text-white'>LogicFlowLabs </h1> */}
            <p className="text-lg">
              We provide top-notch <br /> services to help <br /> your business grow. <br /> Explore our offerings <br /> and connect with us!
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="mb-4 text-xl font-semibold text-center md:text-left">Links</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li className="hover:text-gray-400">About</li>
              <li className="hover:text-gray-400">Careers</li>
              <li className="hover:text-gray-400">Services</li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="mb-4 text-xl font-semibold text-center md:text-left">Reach Us</h3>
            <div className="flex justify-center mt-4 space-x-6 md:justify-start md:mt-0">
              <LinkedInIcon className="hover:text-gray-400" onClick={() => window.open('')} />
              <EmailIcon className="hover:text-gray-400"  onClick={handlecopy}/>
              <PhoneIcon className="hover:text-gray-400" onClick={handlePhone} />
            </div>
          </div>

          {/* Address Section (New Column) */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="mb-4 text-xl font-semibold text-center md:text-left">Address</h3>
            <p className="text-center md:text-left">
              3341 Janapriya Sai <br /> Dharshan Apartment<br />
              Seeghehalli<br />
              Bengaluru, India 560067
            </p>
          </div>
        </div>

        <div className="mt-8 text-sm text-center text-gray-400">
          <p>Copyright &copy; 2023 LogicFlow Labs. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

