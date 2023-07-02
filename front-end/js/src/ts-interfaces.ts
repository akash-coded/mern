interface Movie {
  title: string;
  lengthMinutes: number;
  production?: string;
}

// let movie: Movie = {
//   title: "The Godfather",
//   lengthMinutes: 175,
// };

let movies: Movie[] = [
  {
    title: "American History X",
    lengthMinutes: 119,
    production: "USA",
  },
  {
    title: "Sherlock Holmes",
    lengthMinutes: 128,
  },
  {
    title: "Scent of a Woman",
    lengthMinutes: 157,
  },
];

function compareMovieLengths(x: Movie, y: Movie): number {
  return Math.sign(y.lengthMinutes - x.lengthMinutes);
}

// console.log(compareMovieLengths(movies[0], movies[1]));

movies.sort(compareMovieLengths);
// console.log(movies);

let longestMovie = movies[0];
console.log(longestMovie.title);
