function someFunctionNoParameters(){  //Class Notes over Functions

    return alert("Hello there, Marco!")
}

// someFunctionsNoParameters()
//function does not have to have a parameter

function someFunctionWithParameter(name){
//inside of here - we tell our function to do some stuff
    return alert("Hello there, " + name);
}
var myName = "Kenneth";
someFunctionNoParameters(myName);
//someFuncitonNoParameter() returns 'Undefined'
//a function that returns a value >> assign that value to a variable

function increment(num){ // implementation of //blueprint - parameter = expectation
    return num + 1;
}
//returns a value of 2
//increment(num: 1);

//var result = increment(num: 1);

//returns a value of 2
//console.log(result);

var four = increment(num: 3); //action / implementation of expectation
var five = increment(increment(num: 3));
var six = increment(increment(increment(num: 3)));

//If I write a new function below: will I be able to pass our increment function inside of it?

function multiplyByTwo(num){
    return num * 2;
}

console.log(multiplyByTwo(increment(num 1)));

//Anonymous Functions (Comment Out Lines Above) [when passed to a parent function aka 'callback function']


function honkHorn(){
    return "beep beep"
}

//New function no identifier, no name

var honkHorn = function(){
    return "anonymouse beep beep";
}

console.log(honkHorn());


//Can move line item 54 all the way to the top of code - hoist declaration to top called scope
//takes place before execution

//git branch practice

//Setting a default parameter

function sayHello(name){
    return alert("Hello there, " + name);
}

sayHello(name "John")


var myName = "Shan"; //works with variables too

function sayHello(name = myName){
    return alert("Hello there, " + name);
}

sayHello("Kenyon") //overriding our default

function sayHello(name)
//incomplete

var globalVar = "globalVar : Look, I'm global" //declare a global variable

//stepping inside a function

function scopeExample(){
    globalVar = "globalVar: "I'm inside of the function"
    var LocalVar = "LocalVar: Look, I'm local!";
    alert(localVar);
    alert(globalVar);//not passing as an argument; pulled into function
}

alert(globalVar);
alert(localVar) //outside back in the global scope doesn't see it, seen inside the function only
scopeExample()//call scopeExamaple

//IFFE - The first way to put your code behind a gateway

    var iffeVar = "I'm out in the open - I hope nothing bad happens!";
    (function (){
        //where our JS code exists - use 'local scope' to deny accessibility
        }