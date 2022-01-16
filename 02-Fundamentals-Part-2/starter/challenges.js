// Section 2 : Challenge 1


/*
const calcAverage = (a, b, c) => (a + b + c) / 3;

// Test 1
let dolphinsScore = calcAverage(44, 23, 71);
let koalasScore = calcAverage(65, 54, 49);
console.log(dolphinsScore, koalasScore);


const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins...');
    }
}

checkWinner(dolphinsScore, koalasScore);


// Test 2
dolphinsScore = calcAverage(85, 54, 41);
koalasScore = calcAverage(23, 34, 27);
console.log(dolphinsScore, koalasScore);
checkWinner(dolphinsScore, koalasScore);


// Section 2 : Challenge 2

const bills = [125, 555, 44];

const calcTip = bills => bills >= 50 && bills <= 300 ? (bills * 15 / 100) : (bills * 20 / 100);

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])];

// Bonus
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);

// Section 2 : Challenge 3

const marksInfo = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    },
}




const johnsInfo = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    },
}

marksInfo.calcBMI();
johnsInfo.calcBMI();

console.log(marksInfo.bmi, johnsInfo.bmi);

if (johnsInfo.bmi > marksInfo.bmi) {
    console.log(`${johnsInfo.fullName}'s BMI (${johnsInfo.bmi}) is higher than ${marksInfo.fullName} (${marksInfo.bmi})!`)
} else {
    console.log(`${marksInfo.fullName}'s BMI (${marksInfo.bmi}) is higher than ${johnsInfo.fullName} (${johnsInfo.bmi})!`)
}
*/
// Section 2 : Challenge 4

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

const calcTip = bills => bills >= 50 && bills <= 300 ? (bills * 15 / 100) : (bills * 20 / 100);

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tip);
}

console.log(tips, totals);



const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));


