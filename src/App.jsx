import { useState, useEffect } from "react";

import "./styles/app.css";

import Header from "./components/header.jsx";
import Game from "./components/game.jsx";
import Footer from "./components/footer.jsx";

import { categoriesMain } from "./data/categories.jsx";

function App() {
  const [categories, setCategories] = useState(() =>
    categoriesMain.map((category) => ({ ...category }))
  );
  const [challengesArray, setChallengesArray] = useState([]);

  useEffect(() => {
    const merged = [];
    categories.forEach((category) => {
      if (category.active) {
        merged.push(...category.challenges);
      }
    });
    setChallengesArray(merged);
  }, [categories]);

  return (
    <div className="app">
      <Header />
      <Game challengesArray={challengesArray} />
      <Footer categories={categories} setCategories={setCategories} />
    </div>
  );
}

export default App;
