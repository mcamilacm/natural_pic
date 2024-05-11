import React, { createContext, useState, useEffect } from "react";
import photosData from "../../public/photos.json";

export const PostsContext = createContext();

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const { photos = [] } = { ...photosData};
    setPosts(photos);
  }, []);
  const contextValue = { posts, setPosts };
  return (
    <PostsContext.Provider value={contextValue}>
      {children}
    </PostsContext.Provider>
  );
};

export default PostProvider;
