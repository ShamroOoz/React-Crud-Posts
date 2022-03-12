import React from "react";
import { UserIcon, ArrowRightIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const Post = ({ value: { id, title, summary } }) => {
  return (
    <div className="p-4 md:w-1/2">
      <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
            <UserIcon className="w-5 h-5" />
          </div>
          <h2 className="text-gray-900 text-lg title-font font-medium">
            {title}
          </h2>
        </div>
        <div className="flex-grow">
          <p className="leading-relaxed text-base ">{summary}</p>
          <Link
            to={`posts/${id}`}
            className="mt-3 text-indigo-500 inline-flex items-center "
          >
            Learn More
            <ArrowRightIcon className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
