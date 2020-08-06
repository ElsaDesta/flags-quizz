// const GET_RANDOM_COUNTRY = "GET_RANDOM_COUNTRY";
// const allCountries = {
//   AD: "Andorra",
//   AF: "Afghanistan",
//   AG: "Antigua and Barbuda",
//   AI: "Anguilla",
//   AL: "Albania",
//   AM: "Armenia",
// };

// function getRandomCountry(countryData) {
//   const arrayLength = Object.values(countryData).length;
//   const randomCountry = Object.values(countryData)[
//     Math.floor(Math.random() * arrayLength)
//   ];
//   return { type: GET_RANDOM_COUNTRY, randomCountry };
// }
// console.log(getRandomCountry(allCountries));

// import { GET_RANDOM_COUNTRY, RESET_STORE } from "...";


// /* the reducers recives the current state & action

// */
// const selectedCountry = [];//(INITIAL STATE)
// export default function randomCountryReducer(state = selectedCountry, action) {
//   switch (action.type) {
//     case GET_RANDOM_COUNTRY:
//       state.filter((answer) => answer !== action.answer);
//       return [action.randomCountry, ...state];

//     case RESET_STORE:
//       return state;

//     default:
//       return state;
//   }
// }

