
// renders

export function renderMovie(movie) {
    const div = document.createElement('div');

    const h2 = document.createElement('h2');
    h2.textContent = movie.movie;

    const p = document.createElement('p');
    p.textContent = `${movie.movie} is a ${movie.genre}`;

    const ul = document.createElement('ul');
    for (let star of movie.stars) {
        const li = document.createElement('li');
        li.textContent = star;
        ul.append(li);
    }

    div.append(h2, p, ul);
    return div;
}

export function renderDrugs(drugs) {
    const div = document.createElement('div');

    const h2 = document.createElement('h2');
    h2.textContent = drugs.drug;

    const p = document.createElement('p');
    p.textContent = `${drugs.drug} is a drug made by ${drugs.company}`;

    const ul = document.createElement('ul');
    for (let effects of drugs.effects) {
        const li = document.createElement('li');
        li.textContent = effects;
        ul.append(li);
    }

    div.append(h2, p, ul);
    return div;
}

export function renderCars(cars) {
    const div = document.createElement('div');

    const h1 = document.createElement('h1');
    h1.textContent = cars.make;

    const h2 = document.createElement('h2');
    h2.textContent = cars.model;

    const h3 = document.createElement('h3');
    h3.textContent = cars.year;

    div.append(h1, h2, h3);
    return div;
}