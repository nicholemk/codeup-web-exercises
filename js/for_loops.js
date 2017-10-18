"use strict"

//#1 multiplication table done


function showMultiplicationTable(number){
    for (var i = 1; i <= 10; i++) {
        console.log(number + " x " + i + " = " + number * i);
    }
}

showMultiplicationTable(7);
showMultiplicationTable(8);
// showMultiplicationTable(9);


//#2 20-200 done
// what

for (var i = 1; i <= 10; i++) {

    var random = Math.floor((Math.random()*180)+20);

    if (i % 2 === 0) {
        console.log(random + " is even");
    }
    else {
        console.log(random + " is odd");
    }
}

//#3 diamond done


// for (var i = 0; i <= 9; i++){
//
//     var a = "";
//     // console.log("");
//
//     for (var j = 0; j < i; j++){
//
//         var a = a + "" + i
//         // console.log();
//     }
//
//     console.log(a)
// }


//* diamond*




// #4 100 countdown done
// for (var i = 100; i > 0; i = i - 5) {
//     console.log(i);
// }