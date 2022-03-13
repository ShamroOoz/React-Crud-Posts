import React, { useState, useReducer } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDataContext } from "Context/GlobalProvider";
import { format } from "date-fns";
import { formReducer, generateId } from "Reducer/PostReducer";

const CreatePost = () => {
  let location = useLocation();
  const navigate = useNavigate();
  const { createNewpost, updatepost } = useDataContext();
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useReducer(
    formReducer,
    location.state ? location.state.value : {}
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      const datetime = format(new Date(), "MMMM dd, yyyy pp");
      location.state
        ? updatepost({
            ...formData,
            id: location.state.value.id,
            datetime,
          })
        : createNewpost({ ...formData, id: generateId(), datetime });
      setFormData({
        reset: true,
      });
      navigate("/", { replace: true });
    }, 3000);
  };

  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  return (
    <section className="text-gray-600 body-font relative ">
      <div className="container px-5 py-17 mx-auto flex flex-wrap justify-center">
        <div className=" md:w-4/5  bg-white flex flex-col  w-full md:py-8 ">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Create New Post
          </h2>
          {submitting && <div className=" p-4 text-red-500">LOADING......</div>}
          <form onSubmit={handleSubmit}>
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
                value={formData.title || ""}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="summary"
                className="leading-7 text-sm text-gray-600"
              >
                Summery
              </label>
              <input
                type="text"
                id="summary"
                name="summary"
                value={formData.summary || ""}
                onChange={handleChange}
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
                value={formData.body || ""}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <div className="flex justify-between">
              <button
                type="submit"
                disabled={submitting}
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                {location?.state ? "Update" : "Create"}
              </button>
              <Link
                to={"/"}
                type="submit"
                disabled={submitting}
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
