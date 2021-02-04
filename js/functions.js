"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

function sayHello(name) {
    return "Hello, " + name + "!";
}

console.log(sayHello("John")); //to see the results of a function surroound with console.log



//initial setup draft #1:
// var name = 'Val';
//
// function sayHello(name) {
//     console.log("Hello, " + name + "!");
// }
// sayHello(name);

//Review in main room :
// function sayHello(name){
//  return "Hello, + name";
}

//console.log(sayHello + "John")

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

var helloMessage = sayHello("Samuel"); //calling the function again with a different message

console.log(helloMessage);



// function sayHello(name);
//
// var helloMessage = sayHello(name);
// console.log("Hello, " + helloMessage);
//
// //function sayHello

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */


var = myName = sayHello("Samuel"); //use function above

console.log(sayHello(myName)); //pass variable into a function to pass that string


//
// var myName = 'Val';
// sayHello(myName);
// console.log("Hello, " + myName);


// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);



/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 *
 *
 *
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

function isTwo(number){
    return 2 === number; //can replace number with 1,2,3, check 2 === 1 (returns false), 2 === 2, 2 === 3 in console

}
 var IsthisTwo = isTwo(random);

or console.log(isTwo(random));

//in console check
//isTwo(2)  pass a number in the parameter
//true


// function isTwo(x){
//    If x >= 2;
//    return "true";
//    else "false"
//
// }



/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

function calculateTip(tipPercentage, billTotal){
    var tip = billTotal * tipPercentage;
    return tip;
}

//check in console with calculateTip(.10, 100) returns 10 = $10.00

function calculateTip(tipPercentage, billTotal) {  //alternate expression
    return billTotal * tipPercentage; //alternate calculation
}

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */




/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */