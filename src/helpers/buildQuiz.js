// import getMultiCountries from "./getMultiCountries";
// import getRandomCountry from "./getRandomCountry";
// import shuffle from "./shuffle";
// import getCountryios from "./getCountryios";
// import allCountries from "../API/countries.json";

const { default: getMultiCountries } = require("./getMultiCountries");


// const buildQuiz =(allCountries, used) => {
//   let randomCountry = getRandomCountry(allCountries, used);
//   console.log(randomCountry);

//   let randomChoices = getMultiCountries(allCountries);

//   let allOptions = shuffle([randomCountry, ...randomChoices]);

//   let ios = getCountryios(allCountries, randomCountry);
//   return randomCountry, randomChoices, allOptions, ios
// }

// export default buildQuiz

// question = async () => {
//     const {used} = this.props;
//     try {
//         const randomCountry = await getRandomCountry(allCountries, used);
//         let question = randomCountry
//         return question
//     }catch(err) {
//         console.log(err)
//         return 'something went wrong'
//     }
// }

// choices = async (allCountries) => {
//     try {
//         const randomChoices = await getMultiCountries(allCountries);
//         let choices = randomChoices
//         return choices

//     } catch(err){
//         console.log(err)
//     }

// }

// buildQuiz = async (allCountries) => {
//     try {
//       const { used } = this.props;
//       const randomCountry = await getRandomCountry(allCountries, used);
//       this.setState({ quiz: randomCountry });


//       const randomChoices = await getMultiCountries(allCountries);

//       const allOptions = await shuffle([randomCountry, ...randomChoices]);
//       this.setState({ options: allOptions });


//       const ios = await getCountryios(allCountries, randomCountry);
//       const image = await getSvg(ios);

//     } catch (err) {
//       console.log(err);
//     }
//   };
