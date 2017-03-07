function check() {
    var firstString = prompt('Enter the first string');
    var secondString = prompt('Enter the second string');
    var marker = false;

    if (firstString.length !== secondString.length) {
    marker = true;
    }

    var charsCount = {};
    for (var i = 0; i < firstString.length; i++) {
    charsCount[firstString[i]] = charsCount[firstString[i]] !== undefined ? charsCount[firstString[i]] + 1 : 1;
    charsCount[secondString[i]] = charsCount[secondString[i]] !== undefined ? charsCount[secondString[i]] - 1 : -1;
    }

    for (var char in charsCount) {
        if (charsCount[char] !== 0) {
        marker = true;
        break;
    }
    }

    if (marker) {
    alert('No');
    } else {
    alert('Yes');
    }
}