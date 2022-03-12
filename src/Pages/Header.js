import React from "react";
import { AnnotationIcon, ArrowRightIcon } from "@heroicons/react/solid";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          to="/"
        >
          <AnnotationIcon className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" />

          <span className="ml-3 text-xl">React Blog Post</span>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <NavLink className="mr-5 hover:text-gray-900" to="/">
            Home
          </NavLink>
          <NavLink className="mr-5 hover:text-gray-900" to="about">
            About
          </NavLink>
          <NavLink className="mr-5 hover:text-gray-900" to="contact">
            Contact
          </NavLink>
        </nav>
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Login
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </button>
      </div>
    </header>
  );
};

export default Header;
