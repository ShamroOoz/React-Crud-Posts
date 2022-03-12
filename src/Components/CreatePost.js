import React from "react";
import { Link } from "react-router-dom";

const CreatePost = () => {
  return (
    <section className="text-gray-600 body-font relative ">
      <div className="container px-5 py-17 mx-auto flex flex-wrap justify-center">
        <div className=" md:w-4/5  bg-white flex flex-col  w-full md:py-8 ">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Create New Post
          </h2>
          <form>
            <div className="relative mb-4">
              <label
                htmlFor="title"
                className="leading-7 text-sm text-gray-600"
              >
                Ttitle
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="summery"
                className="leading-7 text-sm text-gray-600"
              >
                Summery
              </label>
              <input
                type="text"
                id="summery"
                name="summery"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="body" className="leading-7 text-sm text-gray-600">
                Body
              </label>
              <textarea
                id="body"
                name="body"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <div className="flex justify-between">
              <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Create
              </button>
              <Link
                to={"/"}
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Go Back
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CreatePost;
