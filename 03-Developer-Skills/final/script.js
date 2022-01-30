// Remember, we're gonna use strict mode in all scripts now!
'use strict';

///////////////////////////////////////
// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."
/*
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
calcTempAplitude([3, 7, 4, 1, 8]);
// max = 3 (no - continue)
// max = 7 (yes)
// max = 4 (no, back to 7)
const amplitude = calcTempAplitude(temperatures);
console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

const calcTempAplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
calcTempAplitude([3, 7, 4, 1, 8]);
// max = 3 (no - continue)
// max = 7 (yes)
// max = 4 (no, back to 7)
const amplitudeNew = calcTempAplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);

// Finding Bugs
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // C) FIX
    // value: Number(prompt('Degrees celcius:')),
  };
  // B) FIND
  // console.log(measurement);
  console.table(measurement);

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY
console.log(measureKelvin());

const calcTempAplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeBug);
*/
// Coding Challenge #1

// PROBLEM 1:
// We need to display a string of given temperatures in celcius from the thermometer in consecutive days.

// 1) Understanding the problem
// - How do we write a function to print the forecast?
// - What is the array 'arr' purpose?

// 2) Breaking up into sub-problems
// - Create the data arry with temps
// - Write the function
// - Print to the console

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 9, 4];

const printFunction = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += ` ${arr[i]}C in ${i + 1} days ...`;
  }
  console.log('...' + str);
};

printFunction(data1);
printFunction(data2);
