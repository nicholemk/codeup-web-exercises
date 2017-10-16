"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 *  > sayHello("codeup") // returns "Hello, codeup!"
 */

function sayHello(name) {
    return "Hello, " + name;
}

var returnValue = sayHello("Nichole!");
console.log(returnValue);
alert(returnValue);

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

// var helloMessage = sayHello("Ryan");
// console.log(helloMessage);

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */


// var myName = prompt("Welcome to the site! What is your name?");
// var greeting = sayHello(myName);
// console.log(greeting);
//
//
// // Don't modify the following line, it generates a random number between 1 and 3
// // and stores it in a variable named random
// var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 *  > isTwo(1) // returns false
 *  > isTwo(2) // returns true
 *  > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as an argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result every time you refresh the page if you are using the random
 * number)
 */

    function isTwo(number) {
        var output = number == 2;
        return output;
}
    var num = prompt("Enter number");

    console.log(isTwo(num));


/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Example:
 * > calculateTip(0.20, $20) // returns 4
 */

    function calculateTip(tip, bill) {
    return tip * bill;
}

console.log("on a $20 lunch with a 20% tip" + " $" + calculateTip(0.2, 20));
console.log("on a $40 lunch with a 15% tip" + " $" + calculateTip(0.15, 40));

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

var dinnerTotal = prompt("How much was your dinner?");
var tipPercent = prompt("What percentage would you like to tip?");

console.log("on a " + dinnerTotal + " bill with a " + tipPercent + " tip, the tip we should leave is " + calculateTip(tipPercent, dinnerTotal));

