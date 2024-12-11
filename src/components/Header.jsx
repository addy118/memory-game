import Score from "./Score";

export default function Header({ score, setHighscore, highscore }) {
  return (
    <>
      <h1 className="border-y-2 p-4 font-extrabold tracking-widest">
        Memory Game
      </h1>
      <div className="flex items-center justify-between font-bold">
        <Score
          score={score}
          highscore={highscore}
          setHighscore={setHighscore}
        />
        <p>Don't tap the same pokemon again else you'll lose</p>
      </div>
    </>
  );
}
