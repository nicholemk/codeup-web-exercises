"use strict"

// Basic function writing practice:
//
//     1) Make a function called returnTwo() that returns the number 2 when called
// ---Test this function with console.log(returnTwo())

// function name(input){
//     return (output);
// }
//
// console.log name(output)


// function returnTwo() {
//     return 2;
// }
//
// console.log(returnTwo());

//
//     2) Make a function called returnName() that returns the string of your name
// ---Test this function with console.log(returnName())

// function returnName() {
//     return "Nichole";
// }
//
// console.log(returnName());

//
//     3) Make a function called addThree() which takes in a number input and returns the number plus 3. Remember to define a parameter.
// ---Test this function with console.log(addThree(5))

// function addThree(number) {
//     return number + 3;
// }
//
// console.log(addThree(5));

//
//     4) Make a function called sayString() which returns the string input passed in.
// ---Test this function with console.log(sayString())

// function sayString(strInput) {
//     return strInput;
// }
//
// console.log(sayString("Hello"));

//
//     5) Make a function called sayHowdy() which console.logs the string “Howdy!”
//     ---Test this function by directly calling sayHowdy()
// ---Remember this function does not need a defined return value

// function sayHowdy() {
//     console.log("Howdy");
// }
//
// sayHowdy();


// Write a function called `identity(input)` that takes in an argument called input and returns that input.

// function identity(input) {
//     return identity();
// }
//
// console.log(identity("nichole"));

//     Write a function called `getRandomNumber(min, max)` that returns a random number between min and max values sent to that funciton call.

// function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
//
// console.log(getRandomNumber(0, 10));

//     Write a function called `first(input)` that returns the first character in the provided string.

// function firstLetter() {
//     return "Codeup";
// }
//
//     var returnValue = firstLetter(" " + "Codeup");
//     console.log(returnValue)

//     Write a fuction called `last(input)` that returns the last character of a string

// function last() {
//         return
// }
//
//     var
//     console.log()

// Write a function called `rest(input)` that returns everything but the first character of a string.



//     Write a function called `reverse(input)` that takes a string and returns it reversed.

// function reverseString(str) {
//     return str;
// }
// reverseString("hello");
// console.log(reverseString("Hello Codeup"));
//
// //     Write a function called `isNumeric(input)` that takes an input and returns a boolean if the input is numeric.
//
// function isNumeric() {

}

//     Write a function called `count(input)` that takes in a string and returns the number of characters.



//     Write a function called `add(a, b)` that returns the sum of a and b



// Write a function called `subtract(a, b)` that return the difference between the two inputs.



//     Write `multiply(a, b)` function that returns the product



// Write a divide(numerator, denominator) function that returns a divided by b



// Write a remainder(number, divisor) function that returns the remainder left over when dividing `number` by the `divisor`



// Write the function `square(a)` that takes in a number and returns the number multiplied by itself.



// # Super Duper Gold-Star Bonus



// Write a function called sumOfSquares(a, b) that uses only your add() function and your square function and not + or * operators



// Write a function called doMath(operator, a, b) that takes 3 parameters. The first parameter is the name of the math function you want to apply. a and b are the two numbers to run that function on.


//------------------------------------------------------------------- 10/30


// ================================= OBJECTS WARM UP
//
// In pairs, solve the following problems...
//
// ---- EXERCISE 1
// 1. Write a function, deactivateMembers()
// to take in the following array of objects as an input:

    var members = [
        {
            joined: 2009,
            name: "John",
            activeMember: true
        },
        {
            joined: 2011,
            name: "Sally",
            activeMember: true
        },
        {
            joined: 2013,
            name: "John",
            activeMember: true
        },
    ];

function deactivateMembers(members) {
    arrayMembers.forEach(function (element, index, array){
        element.activeMember = false;
        element.dateDeactivated = "2017";
    });

    return arrayMembers;
};
deactivateMembers(members);




//---------------

function deactivateMEmbers(arrayOfMemberObjects) {
    arrayOfMemberObjects.forEach(function(memberObject){
        console.log(memberObject);
    });
    return arrayOfMemberObjects;

}
deactivateMembers(members);

// The function should return an output of the same array of objects with all activeMember properties set to false
// and contain an additional property of dateDeactivated set to 2017.
//
















// ---- EXERCISE 2
// 1. Define an object, "canOfSoda", using dot syntax to add and assign the following properties:
//
//     - a property of isEmpty assigned a boolean value of false
// - a property of isOpen assigned a boolean value of false
// - a method of open() which sets the isOpen to true if the property is false when the method is initially called
// - a method of pourOut() which sets the isEmpty to true if the isEmpty property is false and the isOpen is true
//
// 2. Define the above object again using object literal syntax.
//



var canOfSoda = new Object{};
canOfSoda.isEmpty = false;
canOfSoda.isOpen = false;
canOfSoda =


if {
    canOfSoda
}


//     BONUS
// 3. Create an array call cansOfSoda containing of 3 canOfSoda objects with the same properties and values as described above.
//     The objects should be named, canOfSoda1, canOfSoda2, canOfSoda3.
//
// 4. Iterate over the cansOfSoda array and open() and pourOut() each canOfSoda object
//
// 5. Console log the cansOfSoda array to check if the methods worked correctly.

