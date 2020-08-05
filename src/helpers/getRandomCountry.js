/*write a function that generates a random country*/

const getRandomCountry = (countryData, used) => {
  let arrayLength = Object.values(countryData).length;
  let randomCountry = Object.values(countryData)[
    Math.floor(Math.random() * arrayLength)
  ].toString();

  if (used.includes(randomCountry)) {
    return getRandomCountry(countryData, used);
  }

  return randomCountry;
};

export default getRandomCountry;


