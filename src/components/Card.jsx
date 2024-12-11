import usePokemon from "../utils/usePokemon";

export default function Card({ pokiId, score, setScore, tapped, setTapped }) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokiId}`;
  // console.log(url);
  const response = usePokemon(url);

  const handlePokiTap = (pokiId) => {
    // console.log("tapped poki " + pokiId);

    if (tapped.includes(pokiId)) {
      setScore(0);
      setTapped([]);
    } else {
      const newTapped = [...tapped, pokiId];
      setTapped(newTapped);
      setScore((score) => {
        return score + 1;
      });
    }
  };

  if (response.loading) return "loading";
  if (response.error) return <h2 className="text-red-600">{response.error}</h2>;

  return (
    <div
      className="flex cursor-pointer flex-col items-center gap-4 rounded-lg border bg-[#444444] p-4 transition-transform duration-300 hover:scale-105 active:scale-95"
      onClick={() => handlePokiTap(pokiId)}
    >
      <img
        className="rounded-lg border bg-[#333333]"
        src={response.data.image}
        alt="pokemon"
        width={180}
      />
      <p className="text-md w-full break-words rounded-lg border bg-[#333333] p-1 px-2 font-bold capitalize sm:text-lg md:text-xl lg:text-2xl">
        {response.data.name}
      </p>
    </div>
  );
}
