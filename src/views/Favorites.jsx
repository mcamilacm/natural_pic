import React, { useContext } from "react";
import { PostsContext } from "../context/PostsContext";
import Grid from "../components/Grid";

const Favorites = () => {
  const { posts } = useContext(PostsContext);
  const likedPosts = posts.filter(({ liked = false }) => liked);
  return (
    <div>
      <h2>Favorites</h2>
      <div className="favorite_container">
        {likedPosts.length > 0 ? (
          <Grid postsData={likedPosts} />
        ) : (
          <p>No le has dado like a nada</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
