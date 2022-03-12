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
    let finalPosts = Posts.filter((p) => p.id !== id);
    setPosts(finalPosts);
    return;
  };
  // Return the user object and auth methods
  return {
    Posts,
    getpostByid,
    deletepostByid,
  };
};

export default useProvideData;
