
const getMultiCountries = (countryData) =>{
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

  export default getMultiCountries;