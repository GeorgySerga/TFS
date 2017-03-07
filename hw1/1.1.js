function check() {
    var firstString = prompt('Enter the first string').toLowerCase();
    var secondString = prompt('Enter the second string').toLowerCase();
    var marker = false;

    if (firstString.length !== secondString.length) {
        marker = true;
    }

    var sortedFirstString = firstString.split('').sort().join('');
    var sortedSecondString = secondString.split('').sort().join('');

    if (sortedFirstString !== sortedSecondString) {
        marker = true;
    }

    marker ? alert('No') : alert('Yes');
}