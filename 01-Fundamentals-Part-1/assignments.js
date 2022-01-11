const country = "United States";
const continent = "North America";
let populationUnitedStates = "350";
//populationUnitedStates += 1;

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

/*const description =
    country +
    ' is in ' +
    continent +
    ', and its ' +
    populationUnitedStates +
    ' million people speak ' +
    language;

console.log(description);
*/

const description = `${country} is in ${continent}, and its ${populationUnitedStates} million people speak ${language}`

console.log(description);

if (populationUnitedStates > 33) {
    console.log(`United States population is above average`);
} else {
    console.log(`United states population is ${33 - populationUnitedStates} million below average`);
}

// Type conversion and coercion
// predict the results 

'9' - '5'; // 4 
'19' - '13' + '17'; // 617
'19' - '13' + 17; // 23
'123' < 57; // false
5 + 6 + '4' + 9 - 4 - 2; // 1143


// Equality Operators == vs. ===

const numNeighbors = Number(prompt("How many neighbor countries does your country have?"));

if (numNeighbors === 1) {
    console.log('Only 1 Border!');
} else if (numNeighbors > 1) {
    console.log('More than 1 border');
} else {
    console.log('No borders');
}

