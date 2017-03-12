function convert() {
    try {
        var initialArray = JSON.parse(prompt('Enter valid array'));
    } catch (error) {
        alert('Array is not valid, please try again. Shuld look like [1, 2] or [[1,2], [3,4,5], [6]]');
        return;
    }
    var result = initialArray.reduce(function(prevValue, currentItem) {
        return prevValue.concat(currentItem);
    }, []);
    alert(JSON.stringify(result));
}