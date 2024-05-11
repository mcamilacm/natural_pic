import React, { useContext } from "react";
import Grid from "../components/Grid";
import { PostsContext } from "../context/PostsContext";

const Home = () => {
  const { posts } = useContext(PostsContext);

  return posts.length > 0 ? <Grid postsData={posts} /> : null;
};

export default Home;
