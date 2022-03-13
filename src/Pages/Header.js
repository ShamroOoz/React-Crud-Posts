import React from "react";
import { AnnotationIcon, ArrowRightIcon } from "@heroicons/react/solid";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useAuth } from "Context/AuthProvider";

const Header = () => {
  let navigate = useNavigate();
  const { user, signout } = useAuth();

  const isActive = ({ isActive }) =>
    [
      isActive ? "mr-5 hover:text-gray-500" : "mr-5 hover:text-indigo-500",
      isActive ? "text-indigo-500" : null,
    ]
      .filter(Boolean)
      .join(" ");

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
          <NavLink className={isActive} to="/">
            Home
          </NavLink>
          <NavLink className={isActive} to="about">
            About
          </NavLink>
          <NavLink className={isActive} to="contact">
            Contact
          </NavLink>
        </nav>

        {user ? (
          <>
            <NavLink className={isActive} to={`profile/${user?.username}`}>
              Profile
            </NavLink>
            <button
              onClick={() => signout(() => navigate("/"))}
              className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:text-white hover:bg-indigo-500 rounded text-base mt-4 md:mt-0"
            >
              Logout
              <ArrowRightIcon className="w-4 h-4 ml-1" />
            </button>
          </>
        ) : (
          <button
            onClick={() => navigate("login")}
            className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:text-white hover:bg-indigo-500 rounded text-base mt-4 md:mt-0"
          >
            Login
            <ArrowRightIcon className="w-4 h-4 ml-1" />
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
