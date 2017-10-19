"use strict"

// #1 done
var i = 1

while (i < 65536) {
    i *= 2
    console.log(i);
}


//Ryan's exercise
var number = 2

do {
    console.log(number);

    number = number * 2;

} while(number <= 65536);


//#2 ice cream

var allCones = Math.floor(Math.random() * 50) + 50;

do {
    var conesOrdered = Math.floor(Math.random() * 5) + 1;

    if(conesOrdered <= allCones) {
        console.log("The customer ordered " + conesOrdered + " number of cones.");
        allCones = allCones - conesOrdered;
        console.log("I sold " + conesOrdered + " number of cones.");
        console.log("My inventory is " + allCones);
    } else {
        console.log("Next customer, please");
    }
} while(allCones > 0);


// Fizz Buzz
for (var i = 1; i <= 100; i++) {
    var f = i % 3 == 0, b = i % 5 == 0;
    console.log(f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i);
}