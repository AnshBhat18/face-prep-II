
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddRecipe from "./pages/AddRecipe";
import Favorites from "./pages/Favorites";
import RecipeDetails from "./pages/RecipeDetails";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/add-recipe" element={<AddRecipe />} />
      <Route path="/recipe/:id" element={<RecipeDetails />} />
      <Route
        path="*"
        element={
          <div className="simple-page">
            <h1>404 - Page not found</h1>
            <a href="/">Go Home</a>
          </div>
        }
      />
    </Routes>
  );
}

export default App;