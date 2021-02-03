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

//New function

var honkHorn = function(){
    return "anonymouse beep beep";
}

console.log(honkHorn());



