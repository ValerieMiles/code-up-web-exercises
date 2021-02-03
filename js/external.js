
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
    var totalOwed = ((littleMermaid + BrotherBear + Hercules) * 3);


    alert("You owe BlockBuster " + totalOwed);



    var hoursWorkedForGoogle = Number(prompt( "How many hours did you work for Google?"));

    var hoursWorkedForAmazon = Number(prompt( "How many hours did you work for Amazon?"));

    var hoursWorkedForFacebook = Number(prompt( "How many hours did you work for Facebook?"));

    var totalFromGoogle = hoursWorkedForGoogle * 400;

    var totalFromAmazon = hoursWorkedForAmazon * 380;

    var totalFromFacebook = hoursWorkedForFacebook * 350;

    var totalPay = (totalFromGoogle + totalFromFacebook + totalFromAmazon)

    alert("You have made a total of $" + totalPay + " this week!");





    //code for total pay per hour Amazon, Google & Facebook
    var userInput1 = prompt("What is your hourly pay at Google?");

    alert("This is my pay rate at Google: $" + userInput1 + " per hour.");

    var userInputHoursWorkedGoogle = Number(prompt("How many hours did you work this week?"));

    var totalpayGoogle = (userInput1 * 6);

    alert("You have earned $ " + totalpayGoogle + " this week!");

    var userInput2 = prompt("What is your hourly pay at Amazon?");

    alert("This is my pay rate at Amazon: $" + userInput2 + " per hour.");

    var userInputHoursWorkedAmazon = Number(prompt("How many hours did you work this week?"));

    var totalpayAmazon = (userInput2 * 4);

    alert("You have earned $ " + totalpayAmazon + " this week!");

    var userInput3 = prompt("What is your hourly pay at Facebook?");

    alert("This is my pay rate at Facebook: $" + userInput3 + " per hour.");

    var totalpayFacebook = (userInput3 * 10);

    alert("You have earned $ " + totalpayFacebook + " this week!");

    var  grandtotalfortheweek = (totalpayGoogle + totalpayAmazon + totalpayFacebook);






    // code for movie rentals total cost
    var LittleMermaidDaysRented = Number(prompt("How many days did you rent LittleMerMaid?"));

    var BrotherBearDaysRented = Number(prompt("How many days did you rent BrotherBear?"));

    var HerculesDaysRented = Number(prompt("How many days did you rent Hercules?"));

    var TotalDueMovieRentals = ((LittleMermaidDaysRented * 3) + (BrotherBearDaysRented * 3) + (HerculesDaysRented * 3))

    alert("You owe a total of $ " + TotalDueMovieRentals + ".")



    //Student Enrollment Eligibility
    var isclassfull = false;
    var scheduleopen = true;
    var classopen = true;
    var studentcanenroll = isclassfull && scheduleopen;
    alert("Student is eligible to enroll in class.");


    //Product Offer (Based on eligibility)
    var itemsbought = Number(prompt("How many items did you purchase?"));
    var confirmifofferexpired = prompt("Did the offer expire? " + " Answer 'Yes' or 'No''");
    var premiummember = prompt("Are you a Premium Member?");
    var applyoffer = itemsbought >= 2 && (confirmifofferexpired = "No");
    if (applyoffer == true) {
        alert("You qualify for the product offer");
    }else{
            alert("You do not qualify for this offer.")
    }







