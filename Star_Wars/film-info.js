import { rendalPage } from './main.js';
export function render(data) {
  const appContainer = document.getElementById('app');
  const buttonBack = document.createElement('button');
  const container = document.createElement('div');
  const header = document.createElement('h1');
  const episode = document.createElement('h3');
  const director = document.createElement('h5');
  const producer = document.createElement('h5');
  const cardText = document.createElement('p');
  const wrapper = document.createElement('div');
  const wrapperPlanets = document.createElement('div');
  const planetsHeader = document.createElement('h3');
  const wrapperSpecies = document.createElement('div');
  const speciesHeader = document.createElement('h3');
  const wrapperStarships = document.createElement('div');
  const starshipsHeader = document.createElement('h3');
  const wrappercharacters = document.createElement('div');
  const wrappercharactersHeader = document.createElement('h3');

  let planetslist;
  let specieslist;
  let starshipslist;

  container.classList.add('container', 'text-center', 'text-black');
  header.classList.add('m-3');
  cardText.classList.add('card-text', 'm-3');
  wrapper.classList.add(
    'd-flex',
    'justify-content-around',
    'flex-wrap',
    'py-2',
  );
  wrappercharacters.append(wrappercharactersHeader);
  buttonBack.classList.add('btn', 'mt-3', 'ms-3', 'btn-outline-secondary');
  buttonBack.textContent = 'Back to episodes';
  header.textContent = data.title;
  episode.textContent = `Episode ${letter(data.episode_id)}`;
  director.textContent = `Director ${data.director} `;
  producer.textContent = `Producer ${data.producer}`;
  cardText.textContent = data.opening_crawl;
  planetsHeader.textContent = 'Planets';
  speciesHeader.textContent = 'Species';
  starshipsHeader.textContent = 'Starships';
  wrappercharactersHeader.textContent = 'Characters';

  document.body.style.transition = '2s';
  const a = [0, 'url(./img/1999.jpg)', 'url(./img/2002.jpg)', 'url(./img/2005.jpg)', 'url(./img/1977.jpg)', 'url(./img/1980.jpg)', 'url(./img/1983.jpg)'];
  appContainer.style.backgroundImage = a[data.episode_id];

  wrapperPlanets.append(planetsHeader);
  wrapperSpecies.append(speciesHeader);
  wrapperStarships.append(starshipsHeader);
  wrapper.append(wrapperStarships, wrapperPlanets, wrapperSpecies);

  details(data.planets, planetslist, wrapperPlanets);
  details(data.species, specieslist, wrapperSpecies);
  details(data.starships, starshipslist, wrapperStarships);
  details(data.characters, starshipslist, wrappercharacters);

  appContainer.append(buttonBack);
  container.append(
    header,
    episode,
    director,
    producer,
    cardText,
    wrapper,
    wrappercharacters,
  );

  buttonBack.addEventListener('click', (e) => {
    e.preventDefault();
    window.history.back();
    rendalPage(
      './general-info.js',
      'https://swapi.dev/api/films',
      'https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css'
    );
  });
  return container;
}

let arNum = [1, 2, 3, 4, 5, 6];
let romNum = ['I', 'II', 'III', 'IV', 'V', 'VI'];

function letter(text) {
  let n = arNum.length - 1;
  let rezult = "";

  while (text > 0) {

    if (text >= arNum[n]) {
      rezult += romNum[n];
      text -= arNum[n];
    } else n--;
  };
  return rezult;
};


function details(options, optionslist, wrapperoptions) {
  if (options) {
    options.forEach((option) => {
      fetch(option)
        .then((res) => res.json())
        .then((data) => {
          optionslist = document.createElement('span');
          optionslist.classList.add('p-2');
          optionslist.textContent = `  ${data.name} `;
          wrapperoptions.classList.add('m-2');
          wrapperoptions.append(optionslist);
        });
    });
  };
};
