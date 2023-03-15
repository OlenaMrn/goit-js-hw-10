
// const countriesListRef = document.querySelector('.country-list');

//робить список краін кількістю від 2 до 10
// function createCountryList(countries) {
//   let listMarkup = countries
//     .map(
//       element => `<div class="list-box"><li class="country-item"><img src="${element.flags.svg}" alt="${element.name.official}" width="40" height="20" />
//           <p>${element.name}</p>
//           </li></div>`
//     )
//     .join('');

//   countriesListRef.innerHTML = listMarkup;
//   return listMarkup;
// }

//робить картку однієі краіни
// function createCountryCard(countries) {
//   let countryMarkup = countries
//     .map(
//       element => `<div class="card-box"><img src="${element.flags.svg}" alt="${
//         element.name
//       }" width="60" height="40" /><h2>${element.name}</h2>
//         <ul class="info">
//         <li><h3>Capital:</h3><span>${element.capital}</span></li>
//         <li><h3>Population:</h3><span>${element.population}</span></li>
//         <li><h3>Languages:</h3><p>${element.languages
//           .map(language => language.name)
//           .join(', ')}</p>
//         </ul>
                 
//       </div>`
//     )
//     .join('');

//   countriesListRef.innerHTML = countryMarkup;
//   return countryMarkup;
// }

// export default { createCountryList, createCountryCard };
