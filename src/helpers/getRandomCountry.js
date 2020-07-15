const allCountries = {
  AD: "Andorra",
  AF: "Afghanistan",
  AG: "Antigua and Barbuda",
  AI: "Anguilla",
  AL: "Albania",
  AM: "Armenia",
};

/*write a function that generates a random country*/

function getRandomCountry(countryData) {
  const arrayLength = Object.values(countryData).length;
  const randomCountry = Object.values(countryData)[
    Math.floor(Math.random() * arrayLength)
  ];
  return randomCountry;
}

/* get three random countries from data */

function getMultiCountries(countryData) {
  let arrayLength = Object.values(countryData).length;
  let A = Object.values(countryData)[
    Math.floor(Math.random() * arrayLength)
  ].toString();
  let B = Object.values(countryData)[
    Math.floor(Math.random() * arrayLength)
  ].toString();
  let C = Object.values(countryData)[
    Math.floor(Math.random() * arrayLength)
  ].toString();
  if (A === B || A === C || B === C) {
    return getMultiCountries(countryData);
  }
  return [A, B, C];
}
