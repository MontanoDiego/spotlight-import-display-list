/* Imports */
import { fetchDrugs, fetchMovies } from './fetch-utils.js';
import { renderDrugs, renderMovie } from './render-utils.js';

/* Get DOM Elements */
const moviesContainer = document.getElementById('movie-list');
const drugsContainer = document.getElementById('drugs-list');

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


/* Get DOM Elements */

/* State */

/* Events */


/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
