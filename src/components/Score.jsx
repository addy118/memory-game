import { useEffect, useState } from "react";

export default function Score({ score, highscore, setHighscore }) {
  useEffect(() => {
    if (score > highscore) {
      setHighscore(score);
    }
  }, [score, highscore]);

  return (
    <div className="flex flex-col items-start">
      <p>Score: {score}</p>
      <p>Highscore: {highscore}</p>
    </div>
  );
}
