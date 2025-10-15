import { useState } from "react";
import "../styles/game.css";

export default function Game({ challengesArray }) {
  const [randomChallenge, setRandomChallenge] = useState(
    "press the Draw button to get a challenge"
  );

  function drawNewChallenge() {
    if (challengesArray.length === 0) {
      setRandomChallenge(
        "No categories selected, choose one in the Categories tab"
      );
      return;
    }
    const randomIndex = Math.floor(Math.random() * challengesArray.length);
    setRandomChallenge(challengesArray[randomIndex]);
    console.log(challengesArray);
  }

  return (
    <div className="game-space">
      <div className="game-card">{randomChallenge}</div>
      <button className="draw-button" onClick={drawNewChallenge}>
        Draw
      </button>
    </div>
  );
}
