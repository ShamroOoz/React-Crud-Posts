import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDataContext } from "Context/GlobalProvider";

const Postview = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { getpostByid, deletepostByid } = useDataContext();

  const [postData, setpostData] = useState();

  useEffect(() => {
    let isActive = true;
    const fetchMyAPI = async () => {
      let response = await getpostByid(+id);
      setpostData(response);
    };
    isActive && fetchMyAPI();
    return () => (isActive = false);
  }, [getpostByid, id]);

  const deletepostListner = async () => {
    await deletepostByid(+id);
    navigate("/", { replace: true });
  };
  return (
    <section className="text-gray-600 body-font mb-32 sm:mb-3">
      <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {postData?.title}
          </h1>
          <p className="mb-8 leading-relaxed">{postData?.body}</p>
          <div className="flex justify-center">
            <button
              onClick={() => deletepostListner()}
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Delete
            </button>
            <button
              onClick={() => navigate(-1)}
              className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
            >
              Go Back
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
        </div>
      </div>
    </section>
  );
};

export default Postview;
