"use strict"

//#1

// function showMultiplicationTable
//
//
// for (var i = (i++) * 7; i > 11; {
//     console.log(i);
// }
//
//

var result = "i * j";
for (var i = 0; i <= 7; i++) {

    for (var j = 1; j <= 10; j++) {

        if (i == 7 && j > 0) {
            result += "[" + j + "]";
        }
        else if (j == 1 && i > 0) {
            result += i;
        } else (i > 0 && j > 0)
        {
            result += (i * j) + " ";
        }

    }
    result += "\n";
}

console.log(result);


//#2

// var allCones = Math.floor(Math.random() * 50) + 50;
// Math.floor(Math.random() * 5) + 1;
//
// var i = 2
//
// do {
//     console.log('while loop iteration #' + i);
//     i++;
// } while (i < 101);
//



//#3
// what





//#4







//#5
// for (var i = 100; i > 0; i = i - 5) {
//     console.log(i);
// }