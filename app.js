/* Imports */
import { fetchCars, fetchDrugs, fetchMovies } from './fetch-utils.js';
import { renderCars, renderDrugs, renderMovie } from './render-utils.js';

/* Get DOM Elements */
const moviesContainer = document.getElementById('movie-list');
const drugsContainer = document.getElementById('drugs-list');
const carsContainer = document.getElementById('cars-list');
const usersContainer = document.getElementById('users-list');

/* Events */
window.addEventListener('load', async () => {
    const movies = await fetchMovies();

    for (let movie of movies) {
        const movieEl = renderMovie(movie);
        moviesContainer.append(movieEl);
    }
});


window.addEventListener('load', async () => {
    const drugs = await fetchDrugs();

    for (let drug of drugs) {
        const drugsEl = renderDrugs(drug);
        drugsContainer.append(drugsEl);
    }
});

window.addEventListener('load', async () => {
    const cars = await fetchCars();

    for (let car of cars) {
        const carsEl = renderCars(car);
        carsContainer.append(carsEl);
    }
});
/* Get DOM Elements */

/* State */

/* Events */


/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
