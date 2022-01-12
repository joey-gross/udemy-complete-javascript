'use strict';
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