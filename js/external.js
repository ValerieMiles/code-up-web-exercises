
    console.log("Hello from external JavaScript");

    //use the alert function to give the user a window on top of their browser
    alert("Welcome to my Website!");

    //prompt the user for a string with the prompt function
    var userInput = prompt("What is your favorite color?");
    //we can concatenate string with the user input
    alert("Great, " + userInput + " Is my favorite color too!");

    //we can use the parseInt function to convert a string to an int (or also called a number)
    var littleMermaid = parseInt(prompt( "How many days have you had the Little Mermaid?"));

    var BrotherBear = parseInt(prompt( "How many days have you had the Brother Bear?"));

    var Hercules = parseInt(prompt( "How many days have you had the Hercules?"));

    //we can add all the values the use has given to see a total of how much is owed
    var totalOwed = (litteMermaid + BrotherBear + Hercules) * 3;

    alert("You owe BlockBuster " + totalOwed);



    var hoursWorkedForGoogle = Number(prompt( "How many hours did you work for Google?"));

    var hoursWorkedForAmazon = Number(prompt( "How many hours did you work for Amazon?"));

    var hoursWorkedForFacebook = Number(prompt( "How many hours did you work for Facebook?"));

    var totalFromGoogle = hoursWorkedForGoogle * 400;

    var totalFromAmazon = hoursWorkedForAmazon * 380;

    var totalFromFacebook = hoursWorkedForFacebook * 350;

    alert("You have made a total of $" + totalFromGoogle + totalFromAmazon + totalFromFacebook) + " this week!");






    var userInput1 = prompt("What is your hourly pay at Google?");
    alert("This is my pay rate at Google: " + userInput1 + " per hour.");
    var userInput2 = prompt("What is your hourly pay at Amazon?");
    alert("This is my pay rate at Amazon: " + userInput2 + " per hour.");
    var userInput3 = prompt("What is your hourly pay at Facebook?");
    alert("This is my pay rate at Facebook: " + userInput3 + " per hour.");










