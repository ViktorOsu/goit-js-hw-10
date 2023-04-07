const BASE_URL = 'https://restcountries.com/v3.1';

export function fetchContriesByName(countryName) {
  // const searchParams = new URLSearchParams({
  //   fields: name,
  //   capital,
  //   population,
  //   flags,
  //   languages,
  // });

  return fetch(
    `${BASE_URL}/name/${countryName}?fields=name,capital,population,flags,languages`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      return data;
    })
    .catch(err => [console.log(err)]);
}
