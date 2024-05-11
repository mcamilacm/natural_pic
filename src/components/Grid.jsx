import React, { useContext } from "react";
import { PostsContext } from "../context/PostsContext";
import { FaHeart } from "react-icons/fa";

const Grid = ({ postsData = [] }) => {
  const { posts, setPosts } = useContext(PostsContext);

  const AddFavorite = (id) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === id) {
        return {
          ...post,
          liked: !post.liked,
        };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  return (
    <div className="grid_container">
      {postsData.map(
        ({ id = "", photographer = "", url = "", liked = false }) => (
          <div className="Card">
            <h1>{id}</h1>
            <p>Photographer: {photographer}</p>
            <img src={url} alt={id} />
            <FaHeart
              className={liked ? "heart like" : "heart"} // Aplica la clase "liked" cuando el post está marcado como favorito
              onClick={() => AddFavorite(id)}
            />
          </div>
        )
      )}
    </div>
  );
};

export default Grid;
