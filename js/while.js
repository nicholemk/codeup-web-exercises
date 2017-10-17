"use strict"

// #1 done
// var i = 1
//
// while (i < 65536) {
//     i *= 2
//     console.log(i);
// }



//#2 ice cream

// var allCones = Math.floor(Math.random() * 50) + 50;
// Math.floor(Math.random() * 5) + 1
//
// var i = 2
//
// do {
//     console.log("Ice cream iteration " + i);
//     i++;
// } while (i <= 100);
//
//




for (var i = 1; i <= 5; i++) {

    var random = Math.floor((Math.random()*5)+1);

    if (i % 2 === 0) {
        console.log(random + " ... I only have 3 more cones");
    }
    else {
        console.log(random + " ... order up!");
    }
}
