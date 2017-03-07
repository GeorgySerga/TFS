function check() {
    var firstString = prompt('Enter the first string').toLowerCase();
    var secondString = prompt('Enter the second string').toLowerCase();

    var sortedFirstString = firstString.split('').sort().join('');
    var sortedSecondString = secondString.split('').sort().join('');

    (sortedFirstString === sortedSecondString) ? alert('Yes') : alert('No');
}