import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-10 bg-[#c4e0e2] px-6 py-10 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          
          <div>
            <h2 className="font-serif text-xl font-bold">GREENMIND</h2>
            <p className="mt-5 text-sm leading-5 text-gray-500">
              We help you find <br /> your dream plant
            </p>
            <div className="mt-5 flex gap-4">
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-400 hover:bg-gray-100 transition-colors" aria-label="Facebook">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-400 hover:bg-gray-100 transition-colors" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-400 hover:bg-gray-100 transition-colors" aria-label="Twitter">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold">Information</h3>
            <ul className="mt-5 space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Product</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold">Company</h3>
            <ul className="mt-5 space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:underline">Community</a></li>
              <li><a href="#" className="hover:underline">Career</a></li>
              <li><a href="#" className="hover:underline">Our story</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold">Contact</h3>
            <ul className="mt-5 space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:underline">Getting Started</a></li>
              <li><a href="#" className="hover:underline">Pricing</a></li>
              <li><a href="#" className="hover:underline">Resources</a></li>
            </ul>
          </div>

        </div>

        <div className="mt-14 border-t border-gray-300 pt-5 text-sm text-gray-500 flex flex-col md:flex-row justify-between gap-4">
          <p>{currentYear} all Right Reserved GREENMIND</p>
          <a href="#" className="hover:underline">Terms of use</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
