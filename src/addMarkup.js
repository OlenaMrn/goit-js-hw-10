
// import markup from './markup.js';
// // import { countriesListRef, countryCardRef } from'./refs.js';

// // const DEBOUNCE_DELAY = 300;
// // const inputRef = document.querySelector('#search-box');
// const countriesListRef = document.querySelector('.country-list');
// const countryCardRef = document.querySelector('.country-info');


// //додає в розмітку картку каріни або список краін

// function createMarkup(countries) {
//   if (countries.length === 1) {
//   countriesListRef.innerHTML = '';
//     return markup.createCountryCard(countries);
//   } else if (countries.length > 1 && countries.length < 10) {
//     countriesListRef.innerHTML = '';
//     return markup.createCountryList(countries);
//   } else {
//     return Notify.info(
//       'Too many matches found. Please enter a more specific name.'
//     );
//     return;
//   }
// }


// //очищає розмітку при очищені інпуту
// function clearMarkup() {
//   countriesListRef.innerHTML = '';
//   countryCardRef.innerHTML = '';
// }


// export default {createMarkup, clearMarkup}