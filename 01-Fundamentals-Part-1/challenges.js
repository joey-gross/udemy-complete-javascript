// Coding Challege #1

// My code
/*
let marksMass = "78";
let johnsMass = "95";
let marksHeight = "1.69";
let johnsHeight = "1.95"

let marksBmi = marksMass / marksHeight ** 2
console.log(marksBmi);

let johnsBmi = johnsMass / johnsHeight ** 2
console.log(johnsBmi);

let markHigherBMI = marksBmi >= johnsBmi;
console.log(markHigherBMI)


// Correct code
const massMark = 78; // used const because he knew values wouldn't change throughout the program
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);
*/

// Coding Challege #2

const massMark = 78; // used const because he knew values wouldn't change throughout the program
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);

// My code
if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}

// Coding Challege #3

/*const totalDolphins = (96 + 108 + 89);
console.log(totalDolphins);

const totalKoalas = (88 + 91 + 110);
console.log(totalKoalas);


const averageDolphins = (totalDolphins / 3);
const averageKoalas = (totalKoalas / 3);
console.log(averageDolphins);
console.log(averageKoalas);

if (averageDolphins > averageKoalas) {
    console.log('Dolphins are the winner!');
} else if (averageKoalas > averageDolphins) {
    console.log('Koalas are the winner!');
} else if (averageDolphins === averageKoalas) {
    console.log('It was a draw');
}
*/

// Bonus 1
/*
const scoreDolphins = (97 + 112 + 101) / 3;

const scoreKoalas = (109 + 95 + 106) / 3;

console.log(scoreDolphins, scoreKoalas);


if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log('Dolphins are the winner!');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log('Koalas are the winner!');
} else if (scoreDolphins === scoreKoalas && scoreKoalas >= 100 && scoreDolphins >= 100) {
    console.log('It was a draw');
} else {
    console.log('No one wins the trophy');
}
*/
//Coding Challenge #4

const bill = 275;

const tip = bill >= 50 && bill <= 300 ? (bill * 15 / 100) : (bill * 20 / 100);


console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);