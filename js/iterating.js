(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    var names = ["Nichole", "Luke", "Abby", "Pao"];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log(names.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    for(var i = 0; i < names.length; i++) {
        console.log("The name at " + i + "is " names[i]);
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    names.forEach(function(element) {

    });

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */


    //first
    function first(arr) {
        return arr[0];
    }

    console.log(first([1, 2, 3, 4, 5]));


    //second
    function first(arr) {
        return arr[1];
    }

    console.log(first([1, 2, 3, 4, 5]));


    //third
    function first(arr) {
        return arr[2];
    }

    console.log(first([1, 2, 3, 4, 5]));


    //fourth
    function first(arr) {
        return arr[3];
    }

    console.log(first([1, 2, 3, 4, 5]));



    //--------------------- arrays review answers -----------

    //5 Write a for loop that console logs each element in the array.
    // Refactor your code to use a foreach loop. How are they different?

    var myArray = [1, 2, 3, 4, 5];

    for (var i = 0; i < myArray.length; i++) {
        console.log(i + shapes[i]);
    }


    myArray.forEach(function(element, index, array) {

    })




    //5 Using split and join to complete the following:

// TODO: convert myPhoneNumber to an array that contains the area code, the
// first three digits and the last four numbers in the phone number
//
// TODO: convert the array back to a string the contains the phone number with
// the groups of numbers separated by dashes
//
// console log throughout to check your work

    var myPhoneNumber = '210.867.5309';

    console.log('210.867.5309')




})();

