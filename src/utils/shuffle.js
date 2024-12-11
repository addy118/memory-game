export default function shuffle(arr) {
  const array = [...arr];
  let currentIndex = array.length;

  // while there remain elements to shuffle
  while (currentIndex != 0) {
    // pick a remaining element
    let randomIndex = Math.floor(Math.random() * currentIndex);

    // decrement
    currentIndex--;

    // swap it with the current element
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

const arr = [1, 2, 3, 4, 5];
const shuffled = shuffle(arr);
console.log(arr);
console.log(shuffled);
