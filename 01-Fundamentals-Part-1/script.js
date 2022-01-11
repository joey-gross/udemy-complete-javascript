/*let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log('23');

// Variable name conventions
let firstName = "Matilda";
let first = 'jonas';
let firstNamePerson
let first_name_person
let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';


console.log(firstName);
console.log(firstName);
console.log(firstName);

console.log(myFirstJob);


let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

let age = 30;
age = 31;


const birthYear = 1991;


// example of math operators. use variable to define year to avoid changing in multiple places
const now = 2037
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// example of assignment operator
let x = 10 = 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
console.log(x)

// Comparison operators 
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

//  Operator precedence 
let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10  
console.log(x, y);

// Use parentheses () to make sure the operation is executed first 
const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge);


// Strings and template literals 

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);

// This is an example with backticks, a much easier way to write strings
const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

// Multi line string example 
console.log(`String
multiple
lines`);
*/

// Taking decisions: if / else statements
// Start with boolean variables

/*
const age = 15;

// Put the if condition inside (), if true, the code inside {} will be excecuted
// If the condition is false, code will execute else statement
if (age >= 18) {
    console.log('Sarah can start driving license');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
}
*/
// This structure is called a "if/else control structure"
/*if () {

} else {

}
*/
/*
const birthYear = 2012;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);

// Type conversion 
const inputYear = '1991';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

// Needs to start with capital S String
console.log(String(23));

// Type Coercion - whenever an operator is dealing with two values that have differnt types
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' * '2');

// the result of this is 10
// a string first
let n = '1' + 1; // 11
n = n - 1; // - 1
console.log(n); // = 10
*/

// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

// money is converted to 0, and 0 is a falsy value
const money = 0;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log('You should get a job!');
}

// height is undefined in this case, so it will exectue else
let height;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log("Height is UNDEFINED");
}

// don't confuse the assignment = to the comparison operator ===
const age = '18';
if (age === 18) {
    console.log('You just became an adult')
}

// === sctrict 
// == loose - this will perform type coercion (converts '18' string to 18 the number)

// always default to ===

if (age == 18) {
    console.log('You just became an adult')
}

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) { // '23' === 23
    console.log('Cool! 23 is an amazing number!')
} else if (favorite === 7) {
    console.log('7 is also a cool number');
} else {
    console.log('Number is not 23 or 7');
}

// !== is "different" so log 9, is different than 23, displays Why not the 23?
if (favorite !== 23) console.log('Why not the 23?');

const hasDriversLicense = true; // A
const hasGoodVision = false; // B

// && is the and operator, || is or operator 
console.log(hasDriversLicense && hasGoodVision); // && is the and operator
console.log(hasDriversLicense || hasGoodVision); // || is or operator 
console.log(!hasDriversLicense); // ! inverts, in this case true to false

// it will log else, because hasGoodVision is false
/*
if (hasDriversLicense && hasGoodVision) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...')
}
*/
const isTired = true; // C 
console.log(hasDriversLicense || hasGoodVision || isTired);

// !isTired is False because we inverted it (not is tired)
if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...')
}

// 26. The Switch Statement

const day = 'monday';

switch (day) {
    case 'monday': // day === 'monday', a strict comparison 
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break; // a break is to determine a stop, without it here it will log 'tuesday' as well
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday': // this will run both wednesday && thursday 
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday': // this will run both saturday && sunday (together it will log Enjoy the weekend)
    case 'sunday':
        console.log('Enjoy the weekend');
        break;
    default: // this will run if all the other cases fail
        console.log('Not a valid day');
}


// Coding challenge - write the same code above but as if statements 


if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || 'sunday') {
    console.log('Enjoy the weekend');
} else {
    console.log('Not a valid day');
}


// Statements & Expressions 

3 + 4
1991
true && false && !false //these are all expressions

if (23 > 10) {
    const str = '23 is bigger';
} //the 'if' is a statement / the string '23 is bigger' is also an expression and the whole line of code const str ='23 is bigger'; is a statement 

// Conditional operator 

const age = 23;

age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water'); //the ? is acting like an "if", the : is acting as the "else" if else in one line of code
//this will log I like to drink wine because age is 23

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine';
} else {
    drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);