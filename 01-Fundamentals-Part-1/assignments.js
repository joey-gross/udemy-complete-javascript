const country = "United States";
const continent = "North America";
let populationUnitedStates = "350";
populationUnitedStates += 1;

let populationFinland = "6,000,000";
console.log(populationUnitedStates >= populationFinland);

let populationAverageCountry = "33,000,000";
console.log(populationUnitedStates <= populationAverageCountry)


console.log(country);
console.log(continent);
console.log(populationUnitedStates);

const isIsland = true;
console.log(isIsland);
const language = "english";
console.log(typeof language);
console.log(typeof population);
console.log(typeof country);
console.log(typeof isIsland);

const description =
    country +
    ' is in ' +
    continent +
    ', and its ' +
    populationUnitedStates +
    ' million people speak ' +
    language;

console.log(description);