/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleMovies` variable below to gain access 
  to an array of movies.

  Keep in mind that your functions must still have and use a parameter for accepting all movies.
*/
const exampleMovies = require("./movies");
// Do not change the line above.

/**
 * getAllMovieTitles()
 * -----------------------------
 * Returns all of titles from an array of movies. If the inputted `movies` array is empty, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are movie titles.
 *
 * EXAMPLE:
 *  getAllMovieTitles(movies);
 *  //> [
      "Toy Story 4",
      "Inside Out",
      "Coco",
      "Incredibles 2",
      "Moana",
      "How to Train Your Dragon",
      "Paddington",
      "The Lion King",
      "Fantasia",
      "James and the Giant Peach",
    ];
 */
function getAllMovieTitles(movies) {
  //1. set up a movieTitle array to hold all movie titles.
  let movieTitle = [];
  //2. loop through movies array given to access each object.
  for (const movie of movies) {
    //3. push title of each object in the movies array to movieTitle array that I setup in step.
    movieTitle.push(movie.title);
  }

  //4. return movieTitle array. if full should contain all titles if empty will return empty movieTitle array.
  return movieTitle;
}

/**
 * getHighestMetascore()
 * -----------------------------
 * Returns the highest `metascore` among all movies. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The highest `metascore` of all movies.
 *
 * EXAMPLE:
 *  getHighestMetascore(movies);
 *  //> 96
 */
function getHighestMetascore(movies) {
  //0. check if movies array is emptyand reasigne 0 to metascore if it is,
  if (movies.length === 0) {
    return 0;
  }
  //1. set up a metascore variable to hold the highest score and set it to equal the score of index 0 movies array, convet to Number.
  let Highest = Number(movies[0].metascore);

  //2. set loop through movies array given to access each object.
  for (const movie of movies) {
    //3. use a conditional to check if each object score is higher the current metascore variable.
    if (Number(movie.metascore) > Highest) {
      //4. if higher asign it to metascore variable.
      Highest = Number(movie.metascore);
    }
  }
  //6. return metascore variable
  return Highest;
}

/**
 * getAverageIMDBRating()
 * -----------------------------
 * Averages all of the IMDB ratings from all movies and returns it, as a number. If the inputted `movies` array is empty, return `0`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {number} The average IMDB rating across all movies.
 *
 * EXAMPLE:
 *  getAverageIMDBRating(movies);
 *  //> 7.76
 */
function getAverageIMDBRating(movies) {
  //1. chech if movies array is empty and return 0 if it is.
  if (movies.length === 0) {
    return 0;
  }
  //2. set up a total variable to = 0 .
  let total = 0;
  //2. loop through movies array given to access each objects ibm rating.
  for (const movie of movies) {
    //4. Attarat ibm rating to converted to number to get total.
    total += Number(movie.imdbRating);
  }
  //5. total = total divide by movies arry length
  total = total / movies.length;

  //6. return total tofixed 2 and in number format.

  return Number(total.toFixed(2));
}

/**
 * countByRating()
 * -----------------------------
 * Returns an object where the keys are movie ratings and the values are the number of movies in the array with that rating. If the inputted `movies` array
 * is empty, return `{}`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {Object} An object where keys are movie ratings (e.g. "PG") and the values are how many movies in the array have that rating (e.g. 7).
 *
 * EXAMPLE:
 *  countByRating(movies);
 *  //> { G: 3, PG: 7 }
 */
function countByRating(movies) {
  //0. check if movies array is empty and return 0 to if it is,
  if (movies.length === 0) {
    return {};
  }
  //1. set up a ratingsObject variable and have it = {}.
  const ratingsObject = {};

  //2. set loop through movies array given to access each object.
  for (const movie of movies) {
    //3. creat a key Variable and assign it the rattings.
    const key = movie.rated;
    //4. if key is found in the ratingsObject, ratingsObject will = ratingsObject + 1 else ratingsObject = 1.
    if (key in ratingsObject) {
      ratingsObject[key]++;
    } else {
      ratingsObject[key] = 1;
    }
  }
  //6. return ratingsObject variable.
  return ratingsObject;
}

/**
 * findById()
 * -----------------------------
 * Returns a movie object from an array of objects based on the ID. If the inputted `movies` array is empty or the ID does not match any movie, return `null`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} id - A unique `imdbID`.
 * @returns {Object|null} The movie object with the matching `imdbID`.
 *
 * EXAMPLE:
 *  findById(movies, "tt1979376");
 *  //> {
      // Toy Story 4
    };
 */
function findById(movies, id) {
  // 1. loop through each connected room id and extract corresponding name
  for (const movie of movies) {
    // 2. find movie with imdbID matching input id
    if (movie.imdbID === id) {
      //3. return movie object with the matching `imdbID`
      return movie;
    }
    //4. return null if movie with imdbID is not found
  }
  return null;
}

/**
 * filterByGenre()
 * -----------------------------
 * Returns all movie objects with a matching genre. Case-insensitive. If the inputted `movies` array is empty or no movies match the inputted `genre`, return `[]`.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} genre - The genre of a movie. (e.g. "Fantasy")
 * @returns {Object[]} An array of movies where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Mystery");
 *  //> [
      {
        // Coco
      }
    ]
 *
 * EXAMPLE:
 *  filterByGenre(movies, "Horror")
 *  //> []
 */
function filterByGenre(movies, genre) {
  // 0. creat a foundGener variable that equals to empty array.
  const foundGener = [];
  // 1. takes care of Case-insensitive.
  const lowercase = genre.substring(0, 1).toUpperCase() + genre.substring(1).toLowerCase();
  // 2. loop through movies.
  for (const movie of movies) {
    // 3. find movie with genre matching input genre
    if (movie.genre.includes(lowercase)) {
      // 4. store movie object in foundGener
      foundGener.push(movie);
    }
  }
  // 5. if no no movie found with matching gener return empty array will be empty
  return foundGener;
}
/**
 * getAllMoviesReleasedAtOrBeforeYear()
 * -----------------------------
 * Returns all movie objects with a `released` year equal to or less than the given year.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of movies where the `released` year is equal to or less than the inputted year.
 *
 * EXAMPLE:
 *  getAllMoviesReleasedAtOrBeforeYear(movies, 2000);
 *  //> [
      {
        // The Lion King
      },
      {
        // Fantasia
      },
      {
        // James and the Giant Peach
      }
    ];
 */
function getAllMoviesReleasedAtOrBeforeYear(movies, year) {
  // 0. creat a movieRelease variable that equals to empty array.
  // 1. loop through movies array
  // 1. use slice and number to access onlt the year in released.
  // 3. check if released` year is equal to or less than the given year
  // 4. store movie object in movieRelease array
  // 5. if  no movie found with matching or less then the inputed year return empty array  else return obj.
}

/**
 * getBiggestBoxOfficeMovie()
 * -----------------------------
 * Returns the name of the movie with the highest `boxOffice` amount.
 * @param {Object[]} movies - An array of movies. See the `movies.js` file for an example of this array.
 * @returns {string} The name of the movie that made the most money at the box office.
 *
 * EXAMPLE:
 *  getBiggestBoxOfficeMovie(movies);
 *  //> "Incredibles 2"
 */
function getBiggestBoxOfficeMovie() {}

// Do not change anything below this line.
module.exports = {
  getAllMovieTitles,
  getHighestMetascore,
  getAverageIMDBRating,
  countByRating,
  findById,
  filterByGenre,
  getAllMoviesReleasedAtOrBeforeYear,
  getBiggestBoxOfficeMovie,
};
