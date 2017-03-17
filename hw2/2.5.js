/*
Напишите функцию sum, вычисляющую суммы подобным образом:

sum(1)(2)( ) // 3
sum(1)(2)(3)( ) // 6
*/

function sum(number) {
  var preSum = number;
  return function plus(number) {
    if (number === undefined) {
      return preSum;
    }
    preSum += number;
    return plus;
  };
}

function sum2(number) {
  var numbers = [number];
  return function plus(number) {
    if (number === undefined) {
      return numbers.reduce(function(previousResult, currentNumber) {
        return previousResult + currentNumber;
      });
    }
    numbers.push(number);
    return plus;
  };
}

var sum3 = firstNumber =>
  secondNumber =>
    secondNumber !== undefined ?
      sum(firstNumber + secondNumber) : firstNumber;

console.log(sum(1)(3)(2)()); // 6
console.log(sum2(1)(3)(2)()); // 6
console.log(sum3(1)(3)(2)()); // 6
