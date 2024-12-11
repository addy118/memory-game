import { useEffect, useState } from "react";
import Card from "./Card";

export default function Game({ count, score, setScore, tapped, setTapped }) {
  const [pokiIds, setPokiIds] = useState([]);

  useEffect(() => {
    if (tapped.length === 0) {
      const cards = Array.from({ length: count }, (_, i) => {
        return Math.floor(Math.random() * 1000 * Date.now()) % 1000;
      });
      setPokiIds(cards);
    }
  }, [tapped]);

  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-4">
      {pokiIds.map((pokiId, i) => {
        // console.log(i);
        return (
          <Card
            key={i}
            pokiId={pokiId}
            score={score}
            setScore={setScore}
            tapped={tapped}
            setTapped={setTapped}
            pokiIds={pokiIds}
            setPokiIds={setPokiIds}
          />
        );
      })}
    </div>
  );
}
