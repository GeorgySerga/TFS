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
  }
}

console.log(sum(1)(3)(2)()); // 6