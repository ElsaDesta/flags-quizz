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
  let arrayLength = Object.values(countryData).length;
  let randomCountry = Object.values(countryData)[
    Math.floor(Math.random() * arrayLength)
  ];
  console.log(randomCountry);

  return randomCountry;
}

console.log(getRandomCountry(allCountries));
