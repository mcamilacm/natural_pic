import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Favorites from "./views/Favorites";
import Home from "./views/Home";

import PostsProvider from "./context/PostsContext";

const App = () => {
  return (
    <PostsProvider>
      <Navigation />
      <main className="container">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/favorites"
            element={<Favorites />}
          />
        </Routes>
      </main>
    </PostsProvider>
  );
};
export default App;
