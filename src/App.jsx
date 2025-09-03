import "./styles/app.css";

import Header from "./components/header.jsx";
import Game from "./components/game.jsx";
import Footer from "./components/footer.jsx";

function App() {
  return (
    <div className="app">
      <Header />
      <Game />
      <Footer />
    </div>
  );
}

export default App;
