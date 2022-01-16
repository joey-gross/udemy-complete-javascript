/*
function describeCountry(country, population, capitalCity) {
    const demographics = `${country} has ${population} million people and its capital city is ${capitalCity}.`;
    return demographics;
}

const unitedStatesInfo = describeCountry('US', 350, 'Topeka')
console.log(unitedStatesInfo);

const canadaInfo = describeCountry('Canada', 300, 'Quebec')
console.log(canadaInfo);

const mexicoInfo = describeCountry('Mexico', 300, 'Mexico City')
console.log(mexicoInfo);


//Lecture: Function Declarations vs Expressions

//Function delcaration

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

//call

const unitedStatesPopulations = percentageOfWorld1(350);
const chinaPopulations = percentageOfWorld1(200);
const mexicoPopulations = percentageOfWorld1(150);

console.log(unitedStatesPopulations, chinaPopulations, mexicoPopulations);

//Function expression

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}

//call

const CanadaPopulations = percentageOfWorld1(350);
const italyPopulations = percentageOfWorld1(200);
const spainPopulations = percentageOfWorld1(150);

console.log(CanadaPopulations, italyPopulations, spainPopulations);

//Arrow function

const percentageOfWorld3 = population => (population / 7900) * 100;

//call

const russiaPopulations = percentageOfWorld3(350);
const brazilPopulations = percentageOfWorld3(200);
const germanyPopulations = percentageOfWorld3(150);

console.log(russiaPopulations, brazilPopulations, germanyPopulations);
*/

//Functions calling other functions 
/*
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const describePopulation = function (country, population) {
    const percentage = percentageOfWorld1(population);
    const description = `${country} has ${population} million people, which is about ${percentage}% of the world.`;
    console.log(description);
}

describePopulation('US', 10);
describePopulation('China', 400);
describePopulation('Portugal', 500);
*/

//Introduction to Arrays
/*
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const populations = [350, 200, 150, 90];
console.log(populations.length === 4);

const percentage1 = percentageOfWorld1(populations[0]);
const percentage2 = percentageOfWorld1(populations[1]);
const percentage3 = percentageOfWorld1(populations[2]);
const percentage4 = percentageOfWorld1(populations[populations.length - 1]);
console.log(percentage1, percentage2, percentage3, percentage4);

const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[populations.length - 1])]
console.log(percentages);


// Basic Array Operations (Methods)

const neighbors = ['Germany', 'Italy', 'Spain'];
const newNeighbor = neighbors.push('England');
console.log(neighbors);
neighbors.pop();
console.log(neighbors);

if (!neighbors.includes('Germany')) {
    console.log('Probably not a central European country');
}

neighbors[neighbors.indexOf('Italy')] = 'Republic of Italy';// Searches for 'Italy' then replaces it's name
console.log(neighbors);


//Introduction to Objects

const myCountry = {
    country: 'United States',
    capital: 'Washington',
    language: 'English',
    population: 400,
    neighbors: ['Mexico', 'Canada'],

    describe: function () {
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbors.length} neighboring countries and a capital called ${this.capital}.`);
    },

    checkIsland: function () {
        this.isIsland = this.neighbors.length === 0 ? true : false;
    }
}

console.log(`${myCountry.country} has ${myCountry.population + 2} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighboring countries and a capital called ${myCountry.capital}`);

myCountry.population += 2;
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry.population);

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);

//Iteration: the for loop

for (let vote = 1; vote <= 50; vote++) {
    console.log(`Voter number ${vote} is currently voting`);
}
*/
//Looping arrays, Breaking and Continuing
/*
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const populations = [350, 200, 150, 90];

const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
    const perc = percentageOfWorld1(populations[i]);
    percentages2.push(perc);
}

console.log(populations, percentages2);

//Looping backwards and Loops in Loops

const listOfNeighbors = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden'],
    ['Russia']
]

for (let i = 0; i < listOfNeighbors.length; i++)
    for (let y = 0; y < listOfNeighbors[i].length; y++)
        console.log(`Neighbor: ${listOfNeighbors[i][y]}`);

*/
// The While Loop

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const populations = [350, 200, 150, 90];

const percentages3 = [];
let i = 0;
while (i < populations.length) {
    const perc = percentageOfWorld1(populations[i]);
    percentages3.push(perc);
    i++;
}

console.log(percentages3);