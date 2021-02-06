console.log("Its time for some conditionals!!");
//
// var myName = "Sam" //change name to Kenneth , won't get message b/c name is not Sam
//
// if(myName === "Sam"){
//
//     console.log("Hey my name is Same, too!");
// }

//This is an if Statement
// var myAge = 22; //change age to 13 can still make a social media account
//
// var requiredAge = 13;
//
// if(myAge => requiredAge){
//     console.log("You can make a Social Media Account.");
// }

//This is an if/else Statement
var myAge= 10;
var requiredAge=13;

if(myAge >= requiredAge) {
    console.log("you can make a Social Medial Account!");
}   else {
    console.log("You are not old enough to make an account!");
}

var monthsSinceOilChange = 3;

var minNumberOfMonthsForOilChange = 6; //change oil every 6 months

// if(monthsSinceOilChange < minNumberOfMonthsForOilChange) {
//     console.log("You don't need an oil change you got one " + monthsSinceOilChange + "months");
// }else {
//     console.log("Hey if you like your engine you should get an oil change");
//
// }

//new command
var favoriteColor = "blue";

if(favoriteColor === "red" || favoriteColor === "blue"){
    console.log("Hey my favorite color is red too!")
} else if(favoriteColor == "blue"){
    console.log("Hey blue my second most favorite color!");
}else{
    console.log("We don't have the same favorite colors: (");
}

//optional solution
var favoriteColor = "cyan";

var secondFavColor = "blue"; //additonal condition added, added line

if (favoriteColor === "red"){

    if (secondFavColor === "blue"{ //added line
        console.log("We have all the favorite colors in common!"); //added line
    }else{
        console.log("We don't have the same favorite colors"); //added line
    }

if(favoriteColor === "red" || favoriteColor === "blue"){
    console.log("Hey that's my favorite color too!")
    //or
    //console.log("Hey " + favoriteColor + " that's my favorite color too!");

}else{
    console.log("We don't have the same favorite colors :(");
}

//This is an if/else statement

if(myAge >= requiredAge){
    console.log("you can make a Social media Account!");
}else {
    console.log("You're not old enough to make an account!");
}
//Ternary Operator
    (myAge >= requiredAge)? console.log("You can make a Social Media Account!") : console.log()

var areYouOldEnough = (myAge >= requiredAge) ? "Yes, You are old enough" : "You can make a Social Media Account!") /alternate

    //Switch statement used for multiple if/else statements //at the end of every case a break is required
    //copied from curriculum on Conditionals
switch(pizzaPreference){
    case "pineapple and hot sauce":
        alert("What a coincidence, that's my favorite!");
        break;
    case "cheese":
        alert("Just plain cheese? Okay...");
        break;
    default:
        alert(pizzaPreference + " isn't my favorite, but let's order some!");
        break;
}

}
//this is where the cases are checking against
//switch conditionals differ cases check if they are equal to what is in parenthesis

// switch(value checked against){
//     case(what the case will check against);
//         Your code to be executed will go here...
//         break;
//  default is the "else" equivalent
//  default:
// Your code will run here if all other cases fail. 
// }

favoriteColor = "Grey"

switch (favoriteColor){
    case "purple:"
        console.log("Hey my favorite color is purple too!");
        break;
    case "blue:"
        console.log("Hey my favorite color blue too!");
        break;
    case "green:"
        console.log("Hey my favorite color is green too!");
        break;
    case "red:"
        console.log("Hey my favorite color is red too!");
        break;
    default:
        console.log("Sorry " + favoriteColor + " is not one of my favorite colors");
        break;
}