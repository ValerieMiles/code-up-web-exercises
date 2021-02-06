"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */


function analyzeColor(color){
    var color = analyzeColor();
    if (analyzeColor === "blue") {
        console.log("Blue is the color of the sky!");
    } else if (analyzeColor === "red") ;
    console.log("Strawberries are red!");
} else { (analyzeColor === "cyan");
    console.log("I don't know anything about cyan");
}


// if (secondFavColor === "blue"{ //added line
//     console.log("We have all the favorite colors in common!"); //added line
// }else{
//     console.log("We don't have the same favorite colors"); //added line
}
// var analyzeColor = "blue";
//
// var analyzeColorTwo = "red";
//
// if (analyzeColor === "blue"){
//     console.log("Blue is the color of the sky!");
// } else if (analyzeColorTwo === "red"){
//     console.log("Strawberries are red!");
// }else{
//     console.log("We don't have any favorite colors.");
// }



// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(DiscountedPrice * TotalSpent){
    var calculatedTotal = billTotal
    //return applyDiscount (price * discountPercent);
}

var LuckyNumber = parseInt(prompt("Enter Your Lucky Number - Between 0 and 5!"));

If (LuckyNumber === 0){  // option can use an array here
    alert("Sorry no discount is available");
} else if (LuckyNumber === 1);
    alert("You'll get a 10% Discount");
    var totalBill1 = prompt("How much did you spend?");
    alert{"Your total bill with the 10% discount is: $ " + billTotal");
    else if (LuckyNumber === 2);
    alert("You'll get a 25 % Discount");{
        else if (LuckyNumber === 3);{
            alert("You'll get a 35% Discount");{
                else if (LuckyNumber === 4);{
                    alert("You'll get a 50% Discount");{
                        else if (LuckyNumber ===5);{
                            alert("Youll get all for free!");
                        }
                    }

                }
            }
        }

    }

}



var userInput1 = prompt("What is your hourly pay at Google?");

alert("This is my pay rate at Google: $" + userInput1 + " per hour.");

var userInputHoursWorkedGoogle = Number(prompt("How many hours did you work this week?"));

var totalpayGoogle = (userInput1 * 6);

alert("You have earned $ " + totalpayGoogle + " this week!");
var BrotherBearDaysRented = Number(prompt("How many days did you rent BrotherBear?"));

var HerculesDaysRented = Number(prompt("How many days did you rent Hercules?"));

var TotalDueMovieRentals = ((LittleMermaidDaysRented * 3) + (BrotherBearDaysRented * 3) + (HerculesDaysRented * 3))

alert("You owe a total of $ " + TotalDueMovieRentals + ".")



/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */