import './css/styles.css';

import debounce from 'lodash.debounce';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from './fetchCountries.js';

const DEBOUNCE_DELAY = 300;
const inputRef = document.querySelector('#search-box');
const countriesListRef = document.querySelector('.country-list');
console.log(countriesListRef);

inputRef.addEventListener('input', debounce(createCountryList, DEBOUNCE_DELAY));

// fetchCountries(name)
//   .then(country => {
//     console.log(country);
//   })
//   .catch(error => {
//     console.log = console.error();
//   });





function createCountryList(countriesArray) {
  const inputValue = inputRef.value;
  return fetchCountries(inputValue).then(countries => {
    console.log(countries);
    let listMarkup = countries
      .map(
        element => `<div class="list-box"><li class="country-item"><img src="${element.flags.svg}" alt="${element.name.official}" width="40" height="20" /> 
            <p>${element.name}</p>
            </li></div>`
      )
      .join('');

    countriesListRef.innerHTML = listMarkup;
    return listMarkup;
  });
}



function createCountryCard() {
  const inputValue = inputRef.value;
  return fetchCountries(inputValue).then(countries => {
    console.log(countries);
    let listMarkup = countries
      .map(
        element => `<div class="card-box"><img src="${
          element.flags.svg
        }" alt="${element.name}" width="60" height="40" /><h2>${
          element.name
        }</h2>
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

    countriesListRef.innerHTML = listMarkup;
    return listMarkup;
  });
}

function onInputSubmit() {}
