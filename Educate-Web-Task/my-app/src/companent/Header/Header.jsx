import React, { useState } from "react";
import { Link } from "react-router";
import image from "../../assets/Frame 1.png";
import { DownOutlined, MenuOutlined, CloseOutlined } from "@ant-design/icons";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#F9E0AE] border-b border-slate-200 dark:border-neutral-800 dark:bg-neutral-900 sticky top-0 z-50 font-sans">
      <nav
        className="flex py-4 px-6 md:px-12 max-w-7xl mx-auto items-center justify-between gap-4 w-full"
        aria-label="Main navigation"
      >
        <Link to="/" className="flex items-center z-50">
          <img
            src={image}
            alt="Educare Logo"
            className="h-9 w-auto object-contain"
          />
        </Link>

        <ul className="hidden lg:flex flex-row items-center gap-8 font-bold text-sm text-slate-800 dark:text-neutral-200 mx-auto">
          <li>
            <Link
              to="/"
              className="hover:text-orange-700 transition duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-orange-700 transition duration-200"
            >
              About
            </Link>
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:text-orange-700 dark:hover:text-orange-400 transition duration-200">
            <Link
              to="/courses"
              className="hover:text-orange-700 transition duration-200"
            >
              Courses
            </Link>
            <DownOutlined className="text-xs transform translate-y-0.5" />
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:text-orange-700 dark:hover:text-orange-400 transition duration-200">
            <Link
              to="/blog"
              className="hover:text-orange-700 transition duration-200"
            >
              Blog
            </Link>
            <DownOutlined className="text-xs transform translate-y-0.5" />
          </li>
        </ul>

        <button className="hidden lg:block bg-[#C14E1F] text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#a33f17] transition active:scale-95 shadow-sm">
          Contact us
        </button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-xl text-slate-800 dark:text-neutral-200 z-50 focus:outline-none p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <CloseOutlined /> : <MenuOutlined />}
        </button>

        <div
          className={`fixed inset-0 bg-[#F9E0AE] dark:bg-neutral-900 z-40 flex flex-col items-center justify-center transition-all duration-300 gap-8 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"} lg:hidden`}
        >
          <ul className="flex flex-col items-center gap-6 text-xl font-bold text-slate-800 dark:text-neutral-200">
            <li>
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="hover:text-orange-700 transition duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="hover:text-orange-700 transition duration-200"
              >
                About
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <Link
                to="/courses"
                onClick={() => setIsOpen(false)}
                className="hover:text-orange-700 transition duration-200"
              >
                Courses
              </Link>
              <DownOutlined className="text-sm" />
            </li>
            <li className="flex items-center gap-2">
              <Link
                to="/blog"
                onClick={() => setIsOpen(false)}
                className="hover:text-orange-700 transition duration-200"
              >
                Blog
              </Link>
              <DownOutlined className="text-sm" />
            </li>
          </ul>

          <button
            onClick={() => setIsOpen(false)}
            className="bg-[#C14E1F] text-white px-8 py-3 rounded-xl text-base font-semibold hover:bg-[#a33f17] transition w-4/5 max-w-xs shadow-md"
          >
            Contact us
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
