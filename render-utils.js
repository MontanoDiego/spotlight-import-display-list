
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