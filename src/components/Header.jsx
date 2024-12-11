import Score from "./Score";
import pokeBall from "../assets/pokeball.png";

export default function Header({ score, setHighscore, highscore }) {
  return (
    <>
      <h1 className="border-y-2 p-4 font-extrabold tracking-widest">
        <div className="flex items-center justify-around">
          <img src={pokeBall} alt="" width={55} />
          Memory Game
          <img src={pokeBall} alt="" width={55} />
        </div>
      </h1>
      <div className="flex items-center justify-between font-bold">
        <Score
          score={score}
          highscore={highscore}
          setHighscore={setHighscore}
        />
        <p>Don't tap the same pokémon again else you'll lose</p>
      </div>
    </>
  );
}
