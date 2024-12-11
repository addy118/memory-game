import Card from "./Card";

export default function Game({ count, score, setScore, tapped, setTapped }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-4">
      {Array.from({ length: count }, (_, i) => {
        // console.log(i);
        return (
          <Card
            key={i}
            pokiId={i + 1}
            score={score}
            setScore={setScore}
            tapped={tapped}
            setTapped={setTapped}
          />
        );
      })}
    </div>
  );
}
