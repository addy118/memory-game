import { useEffect, useState } from "react";

function usePokemon(url) {
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          if (res.status === 404) {
            throw new Error("Not Found");
          }
          throw new Error("Bad Request");
        }
        return res.json();
      })
      .then((res) => {
        const { id, name, sprites } = res;
        const image = sprites.other["official-artwork"]["front_default"];
        const cleanData = { id, name, image };
        setData(cleanData);
        // console.log(cleanData);
        return cleanData;
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { data, error, loading };
}

export default usePokemon;
