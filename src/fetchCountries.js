const API_URL = 'https://restcountries.com/v2/';
const FIELDS = 'name,capital,population,flags,languages';

function fetchCountries(name) {
  const url = `${API_URL}name/${name}?fields=${FIELDS}`;
    
  return fetch(url).then(response => {
    return response.json();
  });
}
  // .then(country => {
  //   console.log(country);
  // })
  // .catch(error => {
  //   console.log = console.error();
  // });



export { fetchCountries };
