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

//var colors = ['blue', 'red', 'cyan', 'green', 'purple'];

//var color = colors[Math.floor(Math.random()*colors.length)];

function analyzeColor(color) {
    if (color === 'blue') {
        return "blue is the color of the sky.";

    } else if (color === 'red') {
        return "Strawberries are red.";//"Strawberries are " + color; alternate option/dynamic message

    } else if (color === 'cyan') {
        return "I don't know anything about cyan.";

    } else if (color === 'purple') { //added
        return "I don't know anything about " + color; //added

    } else {
        return "I don't know anything about that color.";
        //alternate option
        //return "I don't know anything about " + color;
    }
}

//alternate option
//var returnOfFunction = analyzeColor(color: "blue");//change color to "Rose Gold", "green"
//console.log(returnOfFunction);
//can use this instead of the code below

console.log(analyzeColor('blue'));
console.log(analyzeColor('red'));
console.log(analyzeColor('cyan'));
console.log(analyzeColor('green'));
console.log(analyzeColor('purple'));






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

function analyzeColor(color) {
    if (color === 'blue'){
        return "blue is the color of the sky.";

    } else if (color === 'red') {
        return "Strawberries are red.";

    } else if (color === 'cyan') {
        return "I don't know anything about cyan.";

    }else {
        return "I don't know anything about that color";
    }

}

console.log(randomColor);
console.log(analyzeColor(randomColor));




/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

function analyzeColor(color) {
    if (color === 'blue') {
        return "blue is the color of the sky.";

    } else if (color === 'red') {
        return "Strawberries are red.";//"Strawberries are " + color; alternate option/dynamic message

    } else if (color === 'cyan') {
        return "I don't know anything about cyan.";

    } else if (color === 'purple') { //added
        return "I don't know anything about " + color; //added

    } else {
        return "I don't know anything about that color.";
        //alternate option
        //return "I don't know anything about " + color;
    }
}

//alternate option
//var returnOfFunction = analyzeColor(color: "blue");//change color to "Rose Gold", "green"
//console.log(returnOfFunction);
//can use this instead of the code below

console.log(analyzeColor('blue'));
console.log(analyzeColor('red'));
console.log(analyzeColor('cyan'));
console.log(analyzeColor('green'));
console.log(analyzeColor('purple'));

//draft next question

function analyzeColor(color) {

    switch(color) {
        case 'blue':
            return "blue is the color of the sky.";
            break;  //note: since return is used, break is unreachable, any code below the return
        case 'red':
            return "Strawberries are red.";
            break;//not necessary to use the break since a return is used
        case 'cyan':
            return "I don't know anything about cyan.";
            break;
        default:
            return "I don't know anything about that color.";
    }
}


//or alert(analyzeColor(color_in); and omit var color_out line
//console.log(analyzeColor(randomColor));
//or alert(analyzeColor(prompt("Please select a color.))); can use w/o variable names

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

function analyzeColor(color) {

    switch(color) {
        case "blue":
            return "Blue is the color of the sky.";
            break;
        case "red":
            return "Strawberries are red.";
            break;
        case "cyan":
            return "I don't know anything about cyan.";
            break;
        default:
            return "I don't know anything about that color.";
    }
}
var color_in = prompt("Please select a color.");//alternate name userColor
var color_out = analyzeColor(color_in); //or message_out to show back to the user
alert(color_out);

//alternate option
//var userColor = prompt(message: "Give me a color.");
//alert(analyzeColor(userColor)); //instead of placing on an alert on a variable TEST!!!

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
var discounts = [0, 0.1, 0.25, 0.35, 0.5, 1];

function calculateTotal(luckyNumber, totalAmount) {
    //var discountPercentage = discounts[luckyNumber]; //evaluates index equivalent to discounts[4] = 0.5
    //var discountAmount = totalAmount * discountPercentage;
    //return totalAmount - discountAmount;
    return totalAmount - totalAmount * discounts[luckyNumber]; //discount based on [luckyNumber index]

}

//var discount = discounts[LuckyNumber];//discounts at index = discounts[4] = 0.5
//return totalAmount - (totalAmount * discount);

console.log(calculateTotal(4, 100));
console.log(calculateTotal(1, 30));
console.log(calculateTotal(0, 20));
console.log(calculateTotal(5, 1000));
//console.log(calculateTotal(4,100));//50 //run this as first part
//console.log(calculateTotal(1, 30));//27
//console.log(calculateTotal(0, 20));//20
//console.log(calculateTotal(5, 1000));//0


//luckyNumber = 4
//totalAmount = 100
//return totalAmount - totalAmount * discounts(luckyNumber)
//return 100 - 100 * discounts[4]
//return 100 - 100 * 0.5
//return 100 - 50
//return 50


//Alternate option using the switch statement:
function calculateTotal(luckyNumber, totalAmount) {

    //var discount;

    switch (luckyNumber) {
        case 0:
            return totalAmount;
        case 1:
            var discount = (totalAmount * .1);// discount = (totalAmount * .1);
            return totalAmount - discount;
        case 2:
            var discount = (totalAmount * .25);
            return totalAmount - discount;
        case 3:
            var discount = (totalAmount * .35);
            return
        case 4:
            var discount = (totalAmount * .5);
            return
        case 5:
            var discount = (totalAmount * 1);
            return 0;
    }

}

console.log(calculateTotal(luckyNumber 3, totalAmount 90));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);

var discounts = [0, 0.1, 0.25, 0.35, 0.5, 1];

function calculateTotal(luckyNumber, totalAmount) {
    return totalAmount - totalAmount * discounts[luckyNumber];
}

var totalAmount = prompt("Please enter bill amount.");
var luckyNumber = Math.floor(Math.random() * 6);//selects random number between 0 and 5
//Math.random() selects a number between 0 and 1, Math.floor() rounds to a whole number
//There are 6 discounts listed in the array, starting position at 0
alert("Your lucky number is " + luckyNumber);
alert("Your bill before the discount is " + totalAmount);
alert("Your bill after the discount is " + calculateTotal(luckyNumber, totalAmount));
//alert(calculateTotal(LuckyNumber, totalAmount));

//console.log(luckNumber);
//console.log(calculateTotal)(luckyNumber, totalAmount));
//alert(calculateTotal(luckyNumber, totalAmount));

// function calculateTotal(DiscountedPrice * TotalSpent){
//     var calculatedTotal = billTotal
//     //return applyDiscount (price * discountPercent);
// }



//alternate solution
var luckyNumber = Math.floor(Math.random() * 6);

var usersTotalBill = Number(prompt("What was your total bill?"));

var discountedBill = calculateTotal(luckyNumber, usersTotalBill);

alert("Your lucky number was ", + luckyNumber);
alert("Your price before the discount was $" + usersTotalBill) + " However with the discount you only pay + discountedBill;




//
// var LuckyNumber = parseInt(prompt("Enter Your Lucky Number - Between 0 and 5!"));
//
// If (LuckyNumber === 0){  // option can use an array here
//     alert("Sorry no discount is available");
// } else if (LuckyNumber === 1);
//     alert("You'll get a 10% Discount");
//     var totalBill1 = prompt("How much did you spend?");
//     alert{"Your total bill with the 10% discount is: $ " + billTotal");
//     else if (LuckyNumber === 2);
//     alert("You'll get a 25 % Discount");{
//         else if (LuckyNumber === 3);{
//             alert("You'll get a 35% Discount");{
//                 else if (LuckyNumber === 4);{
//                     alert("You'll get a 50% Discount");{
//                         else if (LuckyNumber ===5);{
//                             alert("Youll get all for free!");
//                         }
//                     }
//
//                 }
//             }
//         }
//
//     }
//
// }
//
//
//
//


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

var enterNumber = confirm("Would you like to enter a number?");//Dialog box prompts user to select Ok || Cancel
//depending on what the user clicks on, evaluates to true or false
if (enterNumber){
    var number = prompt("Please enter a number.");
    //number = parseInt(number);

    if (isNaN(number)) {
        alert("That wasn't a number.");
    } else {
        if (number % 2 == 0) {
            alert("Your number is even.");
        } else {
            alert("Your number is odd.");
        }
        alert("Your number + 100 is " + (parseInt(number) + 100));//can remove parse(Int) here + (number + 100));

        if (number > 0) {
            alert("Your number is positive.");
        } else {
            alert("Your number is negative."); //an additional if statement could be applied here.
        }
    }
}


//alternate calculation
function doNumberStuff(someNumber) {
    if (someNumber % 2 == 0) {
        alert("Your number is even.");
    } else {
        alert("Your number is odd.");
    }
    alert("Your number + 100 is " + (someNumber + 100));//remove parse(Int) here + (number + 100));

    if (someNumber > 0) {
        alert("Your number is positive.");
    } else {
        alert("Your number is negative.");
    }
}

//alternate solution by TA

function isEven(userNumber)) { //incomplete
    return num % 2 === 0;

}

var userConfirmed = confirm("Would you like to enter a number?");//click ok variable is = true

if (userConfirmed) {
    // The user wants to play

    var userNumber = Number(prompt("Give me a number."));

    console.log(userNumber);

    console.log(typeof userNumber);

    if (!isNaN(userNumber));

    //if(!isNaN(userNumber)) {
        // can also use typeof
     if (typeof userNumber === "number"); {

     }

    if (userNumber % 2 === 0) {
        alert("Your number is Even.");
    } else {
        alert("Your number is Odd.");
    }
    alert("Your number plus 100 is " + (userNumber + 100));//adds two numbers then concatenate with string

    //ternary operator
    var numberPosOrNeg = (userNumber > 0) ? "positive" : "negative";

    alert("Your number is " + numberPosOrNeg + ".");

} else {
    alert("Hey, that is not a  number");

    alert("Your number is " + numberPosOrNeg + ".");

} else {
    // The user does not want to play
}


