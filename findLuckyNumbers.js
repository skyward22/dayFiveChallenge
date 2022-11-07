// Given a number, n, return an array containing n unique random numbers between 1-10, inclusive. (That is, do not repeat any numbers in the returned list.)

// You can trust that this function will never be called with n < 0 or n > 10.
// For example:

// luckyNumbers(2)
// // returns (3, 7)
// luckyNumbers(6)
// // returns (1, 7, 9, 6, 5, 2)

const uniqueNumbers = (n) => {
  let possibleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let luckyNumbers = [];
  for (let i = 0; i < n; i++) {
    let x = Math.floor(Math.random() * possibleNumbers.length);
    luckyNumbers.push(possibleNumbers[x]);
    // possibleNumbers.splice(x, 1);
  }
  return luckyNumbers;
};
console.log(uniqueNumbers(5));
