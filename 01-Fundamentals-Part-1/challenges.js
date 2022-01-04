// Coding Challege #1

// My code
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
const markheightBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

