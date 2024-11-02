"use client";

import React, { useState } from "react";
import "./Header.css";
import Link from "next/link";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full z-10 bg-slate-50 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] shadow-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://kobait.in/wp-content/uploads/2024/07/Untitled-design-22.png"
            className="h-12 w-44"
            alt="Logo"
          />
        </a>
        <button
          onClick={toggleMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center rounded-lg md:hidden hover:bg-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-200"
          aria-controls="navbar-solid-bg"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isMenuOpen ? "mobile-menu-open h-70" : "mobile-menu-closed"
          } w-full md:block md:w-auto transition-all duration-300 ease-in-out`}
          id="navbar-solid-bg"
        >
          <ul className="flex flex-col justify-center h-70 items-center font-medium mt-4 rounded-lg bg-pink-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 text-[#000]  my-1 text-xl rounded hover:bg-pink-100 md:hover:bg-transparent md:border-0 md:hover:text-[#ff0000] md:p-0"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block py-2 px-3 text-[#000] my-1 text-xl rounded hover:bg-pink-100 md:hover:bg-transparent md:border-0 md:hover:text-[#ff0000] md:p-0"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="block py-2 px-3 text-[#000] my-1 text-xl rounded hover:bg-pink-100 md:hover:bg-transparent md:border-0 md:hover:text-[#ff0000] md:p-0"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="block py-2 px-3 text-[#000] my-1 text-xl rounded hover:bg-pink-100 md:hover:bg-transparent md:border-0 md:hover:text-[#ff0000] md:p-0"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="block py-2 px-3 text-[#000] my-1 text-xl rounded hover:bg-pink-100 md:hover:bg-transparent md:border-0 md:hover:text-[#ff0000] md:p-0"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
