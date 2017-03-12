var firstArray = [1, 3, 5, 2, 3, 9, 7, 1];
var secondArray = [4, 5, 6, 6, 2];
var duplicateObject = {};
var collisions = [];

// O(n)
for (var i = 0; i < firstArray.length; i++) {
    duplicateObject[firstArray[i]] = 1;
}
// O(n)
for (var i = 0; i < secondArray.length; i++) {
    if (duplicateObject[secondArray[i]]) {
        duplicateObject[secondArray[i]] = 2;
    }
}

// O(n)
for (var number in duplicateObject) {
    if (duplicateObject[number] === 2) {
        collisions.push(number);
    }
}

console.log(collisions); // ["2", "5"]