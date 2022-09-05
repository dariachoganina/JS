'use strict';

const numberOfFilms = +prompt('Скільки фільмів ви вже подивились?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const a = prompt('Один з останніх фільмів який ви дивились', ''),
		b = prompt('Яку оцінку поставив би йому?', ''),
		c = prompt('Один з останніх фільмів який ви дивились', ''),
		d = prompt('Яку оцінку поставив би йому?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);