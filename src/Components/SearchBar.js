import React from "react";
import { SearchIcon, ArrowRightIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  let navigate = useNavigate();
  return (
    <div className=" container mx-auto  p-3 flex justify-between items-center flex-wrap">
      <div>
        <button
          onClick={() => navigate("posts/createpost")}
          className="inline-flex jus items-center hover:bg-gray-100 hover:text-gray-600 border-0 py-1 px-3 focus:outline-none bg-indigo-500 text-white rounded text-base mt-4 md:mt-0"
        >
          Create New Post
          <ArrowRightIcon className="w-4 h-4 ml-1 cursor-pointer" />
        </button>
      </div>

      <div className="pt-2 relative text-gray-600">
        <input
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder="Search"
        />
        <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
          <SearchIcon className="text-gray-600 h-4 w-4 fill-current cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
