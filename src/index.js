import './css/styles.css';

const DEBOUNCE_DELAY = 300;

import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from './fetchCountries.js';

// import { addMarkup } from './addMarkup.js';
// import { inputRef } from './refs.js';



const inputRef = document.querySelector('#search-box');
const countriesListRef = document.querySelector('.country-list');
const countryCardRef = document.querySelector('.country-info');

inputRef.addEventListener('input', debounce(onSearchBox, DEBOUNCE_DELAY));

function onSearchBox(event) {
  event.preventDefault();
  let searchBox = event.target.value.trim();
  if (searchBox !== '') {
    return fetchCountries(searchBox)
      .then(data => {createMarkup (data)})
      .catch(error => {
        Notify.failure('Oops, there is no country with that name');
      });
  } else {
    clearMarkup();
    return;
  }
}





//робить список краін кількістю від 2 до 10

function createCountryList(countries) {
  let listMarkup = countries
    .map(
      element => `<div class="list-box"><li class="country-item"><img src="${element.flags.svg}" alt="${element.name.official}" width="40" height="20" />
          <p>${element.name}</p>
          </li></div>`
    )
    .join('');

  countriesListRef.innerHTML = listMarkup;
  return listMarkup;
}

// //робить картку однієі краіни
function createCountryCard(countries) {
  let countryMarkup = countries
    .map(
      element => `<div class="card-box"><img src="${element.flags.svg}" alt="${
        element.name
      }" width="60" height="40" /><h2>${element.name}</h2>
        <ul class="info">
        <li><h3>Capital:</h3><span>${element.capital}</span></li>
        <li><h3>Population:</h3><span>${element.population}</span></li>
        <li><h3>Languages:</h3><p>${element.languages
          .map(language => language.name)
          .join(', ')}</p>
        </ul>

      </div>`
    )
    .join('');

  countriesListRef.innerHTML = countryMarkup;
  return countryMarkup;
}

//додає в розмітку картку каріни або список краін

function createMarkup(countries) {
  if (countries.length === 1) {
    countriesListRef.innerHTML = '';
    return createCountryCard(countries);
  } else if (countries.length > 1 && countries.length < 10) {
    countriesListRef.innerHTML = '';
    return createCountryList(countries);
  } else {
    return Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
    return;
  }
}

//очищає розмітку при очищені інпуту
function clearMarkup() {
  countriesListRef.innerHTML = '';
  countryCardRef.innerHTML = '';
}
