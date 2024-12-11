import { useEffect, useState } from "react";

export default function Score() {
  const [score, setScore] = useState(0);
  let highscore = score;

  return (
    <div className="flex flex-col items-start">
      <p>Score: {score}</p>
      <p>Highscore: {highscore}</p>
    </div>
  );
}
