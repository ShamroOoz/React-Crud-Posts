import React from "react";
import Post from "Pages/Post";
import { Data } from "Assests/Data";

const Home = () => {
  return (
    <section className="text-gray-600 body-font sm:mb-24 mb-40">
      <div className="container px-5 mt-8 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
            THE LATEST
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            The 2022 Cool Contest is officially OPEN for entries.
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {Data.length ? (
            Data?.map((value) => <Post key={value.id} value={value} />)
          ) : (
            <div className="text-lg text-red-400">Nothing to display....</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
