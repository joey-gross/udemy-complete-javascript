'use strict';

// Strict mode helps find bugs that normally wouldn't be detected 

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :)');

//const interface = 'Audio'; // interface reserved word
//const private = 534; // private reserved word
//const if = 23; // can't use if because it's already a statement 

// Functions 
// Functions are lines of code we can use over and over again in our code

function logger() {
    console.log('My name is Jonas');
}

// It's called invoking, running, calling the function
logger(); // We can use this function as many times as we want
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice; //result of executing function
}

// calling function 
// the values are called arguments
// We can call this function whenever we want with different "Arguments"

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//Function declaration

function calcAge1(birthYear) {
    return 2037 - birthYear;
}

// call, invoke, excecute 

const age1 = calcAge1(1991);
console.log(age1);

//A function without a name is an "anonymous" function 


//Function expression 
const calcAge2 = function (birthYear) {
    return 2037 - birthYear
}

const age2 = calcAge2(1991);

console.log(age1, age2);