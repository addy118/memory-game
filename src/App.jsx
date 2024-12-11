import { useState } from "react";
import "./App.css";
import Game from "./components/Game";
import Header from "./components/Header";

function App() {
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);
  const [tapped, setTapped] = useState([]);

  return (
    <div className="flex flex-col gap-2">
      <Header
        score={score}
        highscore={highscore}
        setHighscore={setHighscore}
      />
      <Game
        count={12}
        score={score}
        setScore={setScore}
        tapped={tapped}
        setTapped={setTapped}
      />
    </div>
  );
}

export default App;
