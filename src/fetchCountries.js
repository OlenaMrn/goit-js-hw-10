const API_URL = 'https://restcountries.com/v2/';
const FIELDS = 'name,capital,population,flags,languages';

function fetchCountries(name) {
  const url = `https://restcountries.com/v2/name/${name}?fields=name,capital,population,flags,languages`;
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error('Country not found');
    }
    return response.json();
    
  });
}

export { fetchCountries };
