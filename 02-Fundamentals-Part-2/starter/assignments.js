'use strict';

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