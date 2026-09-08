import React from 'react';
import { Link } from 'react-router'; 
import image from '../../assets/Frame 1.png';
import { FiTwitter, FiLinkedin, FiFacebook, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-[#F9E0AE] pt-16 pb-8 px-4 md:px-8 text-[#534B42]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 sm:gap-x-8 items-start">
          
          <div className="flex items-center pt-2">
            <Link to="/">
              <img src={image} alt="Educare Logo" className="h-10 w-auto object-contain" />
            </Link>
          </div>

          <div>
            <h3 className="text-black font-bold text-base mb-6">Follow us</h3>
            <div className="flex items-center space-x-4">
              <a href="#" className="p-2 border border-[#00000080] rounded-full ">
                <FiTwitter className="text-lg text-[#00000080]" />
              </a>
              <a href="#" className="p-2 border border-[#00000080] rounded-full ">
                <FiLinkedin className="text-lg text-[#00000080]" />
              </a>
              <a href="#" className="p-2 border border-[#00000080] rounded-full ">
                <FiFacebook className="text-lg text-[#00000080]" />
              </a>
              <a href="#" className="p-2">
                <FiInstagram className="text-3xl text-[#00000080]" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-black font-bold text-base mb-6">Useful Links</h3>
            <ul className="space-y-4 text-sm list-disc pl-4 text-[#00000080]">
              <li>
                <Link to="/projects" className="hover:underline">Our Projects</Link>
              </li>
              <li>
                <Link to="/faqs" className="hover:underline">FAQ’s</Link>
              </li>
              <li>
                <Link to="/news" className="hover:underline">News and Updates</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-black font-bold text-base mb-6">Contacts</h3>
            <ul className="space-y-4 text-sm text-[#00000080]">
              <li>
                <p>Address : 4-5 Main road , Delhi</p>
              </li>
              <li>
                <p>Email : <a href="mailto:educare@gmail.com" className="hover:underline">educare@gmail.com</a></p>
              </li>
              <li>
                <p>Phone Number : <a href="tel:+914533433265" className="hover:underline">+91 4533433265</a></p>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 text-center text-sm flex items-center justify-center space-x-1">
          <span>&copy;</span>
          <span>All Copyrights reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
