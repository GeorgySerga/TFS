function convert() {
    var numberToConvert = Number(prompt('Enter the number'));
    isBrokenNumber(numberToConvert) ?
            alert('Wrong number, try one more time') :
            decimalToBinary(numberToConvert, '');

    function isBrokenNumber(n) {
        return isNaN(n) || !isFinite(n) || n < 0 || !Number.isInteger(n);
    }

    function decimalToBinary(decimal, binary) {
        if (decimal > 0) {
            var remainder = decimal % 2;
            decimalToBinary(Math.floor(decimal / 2), remainder + binary);
        } else {
            alert(binary ? binary : 0);
        }
    }
}