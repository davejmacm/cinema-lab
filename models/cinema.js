const Cinema = function (films = []) {
  this.films = films;
};

Cinema.prototype.filmTitles = function () {
  return this.films.map((film) => {
    return film.title;
  });
};

Cinema.prototype.filmFindByGenre = function (genre) {
  return this.films.filter((film) => {
    return film.genre === genre;
  });
};

Cinema.prototype.filmFindByTitle = function (title) {
  return this.films.find((film) => {
    return film.title === title;
  });
};

Cinema.prototype.filmFindByYear = function (year) {
  return this.films.some((film) => {
    return film.year === year;
  });
};

Cinema.prototype.checkFilmLength = function (length) {
  return this.films.every((film) => {
    return film.length > length;
  });
};

Cinema.prototype.totalRunTime = function () {
  const filmTime = this.films.map((film) => {
    return film.length;
  });

  const total = filmTime.reduce((runningTotal, time) => {
    return runningTotal + time;
  }, 0);
  return total;
};

Cinema.prototype.filmsByProperty = function (property, value) {
  return this.films.filter((film) => {
    return film[property] === value;
  });
};

module.exports = Cinema;
