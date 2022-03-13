import { useState } from "react";
import { Data } from "Assests/Data";

const useProvideData = () => {
  const [Posts, setPosts] = useState(Data);

  // Return the specifice post
  const getpostByid = async (id) => {
    return Posts.find((p) => p.id === id);
  };

  // delete the specifice post by id
  const deletepostByid = async (id) => {
    return setPosts((prev) => prev.filter((p) => p.id !== id));
  };

  // update the specifice post by id
  const updatepost = async (updatePost) => {
    return setPosts((prev) =>
      prev.map((post) => (post.id === updatePost.id ? { ...updatePost } : post))
    );
  };

  // delete the specifice post by id
  const createNewpost = async (postData) => {
    setPosts((prev) => [postData, ...prev]);
    return;
  };

  // Return the user object and auth methods
  return {
    Posts,
    getpostByid,
    deletepostByid,
    createNewpost,
    updatepost,
  };
};

export default useProvideData;
