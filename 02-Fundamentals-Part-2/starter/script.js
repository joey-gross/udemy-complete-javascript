'use strict';
/*
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

//Arrow Functions

const calcAge3 = birthYear => 2037 - birthYear;

const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;'
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));

// Functions calling other functions

function cutFruitPieces(fruit) {
    return fruit * 4;
}


function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples); //A function within a function
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice; //result of executing function
}

console.log(fruitProcessor(2, 3));

//Function review

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired.`)
        return -1;
    }
    return retirement;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));

*/

/*
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

//1 way to structure array
const friends = ['Michael', 'Steven', 'Peter']
console.log(friends);

//2 way to struture array
const y = new Array(1991, 1984, 2008, 2020);//Use new keyword or won't work
console.log(y);

//arrays are 0 based, first element is always 0
console.log(friends[0]);//logs Michael
console.log(friends[2]);//logs Peter

console.log(friends.length);//logs number of elements in the array - 3
console.log(friends[friends.length - 1]);//you can put any expression inside the brackets, you cannot use statements 

friends[2] = 'Jay';//You can mutate arrays, even though they were made with const
console.log(friends);//This will replace the 2 element in the array

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);

// Exercise 
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/

//Basic Array Operations (Methods)
/*
//Add Elements
const friends = ['Michael', 'Steven', 'Peter']
const newLength = friends.push('Jay');//Push is a function, call function attached to friends "array"
console.log(friends);//We added 'Jay' to the arry with "push"
console.log(newLength);

friends.unshift('John');
console.log(friends);

//Remove Elements
friends.pop(); // Remove last element (Jay)
const popped = friends.pop(); // Removes Peter
console.log(friends);
console.log(popped);

friends.shift();
console.log(friends);

//Method that tells which position element is in the array
console.log(friends.indexOf('Steven'));// Steven is position 1
console.log(friends.indexOf('Bob'));

friends.push(23);
friends.push(43)
console.log(friends.includes('Steven')); // true
console.log(friends.includes('Bob')); // false
console.log(friends.includes(23)); // true
console.log(friends.includes('43')); // false, can't do type coercion 

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}

//Introduction to Objects
/*
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037-1991,
    'teacher',
    ['Michal', 'Peter', 'Steven']
];

// {} now define an object, we are naming the elements in the array now
// there are 5 keys with values, each key is a property. firstName = property and it's all wrapped in the object jonas 
// Object literal syntax 
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037-1991,
    job: 'teacher',
    friends: ['Michal', 'Peter', 'Steven']
};
*/
//Dot vs. Bracket Notaion 
//How do we retrieve data from an object?
/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michal', 'Peter', 'Steven']
};
console.log(jonas);

//Getting property from object

console.log(jonas.lastName);// the '.' is an operator that connects to the jonas object 
console.log(jonas['lastName']);// you can put any expression using this method

const nameKey = 'Name';//repeating part in firstName, lastName;
console.log(jonas['first' + nameKey]); // basically creates firstName
console.log(jonas['last' + nameKey]); // creates lastName

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');


if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);//[] will work here, it will log 'teacher' for job
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends')
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

// Challenge 
// "Jonas has 3 friends, and his best friend is called Michael"

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);
*/

//
/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher', //string value
    friends: ['Michal', 'Peter', 'Steven'], //array value 
    hasDriversLicense: true,// boolean value

    //calcAge: function (birthYear) {
    //    return 2037 - birthYear; //function value
    //}

    //calcAge: function () {
    //    return 2037 - this.birthYear;
    //}

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
};

// any function that is attached to an object is called a "Method"

console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

//Challenge
//"Jonas is a 46-year old teacher, and he has a driver's license"

console.log(jonas.getSummary());

//Iteration: The for loop
/*
/*
console.log('Lifting weights repetition 1');
console.log('Lifting weights repetition 2');
console.log('Lifting weights repetition 3');
console.log('Lifting weights repetition 4');
console.log('Lifting weights repetition 5');
console.log('Lifting weights repetition 6');
console.log('Lifting weights repetition 7');
console.log('Lifting weights repetition 8');
console.log('Lifting weights repetition 9');
console.log('Lifting weights repetition 10');
*/
/*
// for loop keeps running while condition is TRUE
// ++ increases value by 1
for (let rep = 1; rep <= 30; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}

//Looping arrays

const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michal', 'Peter', 'Steven']
];
const types = [];


//jonasArray.length is a way to dynamiclly tell it to loop through all the elements in the array without hardcoding a number 
for (let i = 0; i < jonasArray.length; i++) {
    // Reading from jonasArray array
    console.log(jonasArray[i], typeof jonasArray[i]);

    // Filling types array
    // types[i] = typeof jonasArray[i];
    types.push(typeof jonasArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];

// years is the array that contains birth years

const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);// this is calculating 1 by 1
}

console.log(ages);// logs 2037 - birthyear 

// continue and break 

// continue is to exit current iteration of loop and continue to the next one
// break is to terminate the whole loop

console.log('--- ONLY STRINGS ---')
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== 'string') continue;

    console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] === 'number') break;

    console.log(jonasArray[i], typeof jonasArray[i]);
}
*/

//Looping backwards and loops in loops
/*
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michal', 'Peter', 'Steven']
];

// 0, 1, ..., 4
//now we want to 4, 3, ..., 0

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

// create a loop inside a loop

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`----- Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifing weights repetition ${rep}`);
    }
}
*/

/*
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}
*/

//While is similar to for loop only structured differently
//we want to keep the looping running while rep <= 10
//It will run while the condition is true
let rep = 1;
while (rep <= 10) {
    console.log(`WHILE: Lifting weights repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

//If dice different from 6, it prints the loop again until we get a 6 and it stops
while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}