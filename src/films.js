// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map((movie) => movie.director);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter((movie) => movie.director === director);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let movies = array.filter((movie) => movie.director === director);
  let scores = movies.map((movie) => movie.score);
  let average = scores.reduce((a, b) => (a + b) / scores.length);
  return average;
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  let titles = array.map((movie) => movie.title);
  return titles.sort().splice(0, 20);
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let sorted = [...array].sort((a, b) => {
    return a.year !== b.year ? a.year - b.year : a.title.localeCompare(b.title);
  });
  return sorted;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  let categories = array.filter((movie) =>
    movie.genre.some((c) => c === category)
  );
  if (categories.length === 0) {
    return 0;
  }
  let result = categories.reduce((total, current) => total + current.score, 0);
  console.log(result / categories.length);
  return result / categories.length;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  let movies = array.map((movie) => {
    let duration = movie.duration.split(' ');
    let total =
      duration.length === 2
        ? parseInt(duration[0]) * 60 + parseInt(duration[1])
        : parseInt(duration[0]) * 60;
    return { ...movie, duration: total };
  });
  return movies;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  let films = array.filter((film) => film.year === year);
  let sorted = films.sort((a, b) => b.score - a.score);
  return [sorted[0]];
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
