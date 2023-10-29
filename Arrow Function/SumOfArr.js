const numberArray = [1, 2, 3, 4, 5, 5];

const sum = numberArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log("Sum of numbers in the array:", sum);
