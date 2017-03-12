function bind(baseFunction, context) {
    return function() {
        return baseFunction.apply(context);
    };
}

var user = {
   uname: 'Вася',
   greet: function () {
       return this.uname + ' приветствует Вас!';
   }
};

var user2 = {
   uname: 'Даша'
};

var testuser = bind(user.greet, user);
var testuser2 = bind(user.greet, user2);

console.log(testuser()); // Вася приветствует Вас!
console.log(testuser2()); // Даша приветствует Вас!