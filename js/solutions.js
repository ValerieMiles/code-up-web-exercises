function isTrue(input){
    return input === true;
}
console.log(isTrue(true));
console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(null));


function isFalse(value){
    return value === false;
}
console.log(isFalse(false));

function not(input){
    return !input; //using not operator to flip input
}

console.log(not(false));
console.log(not(0));
console.log(not("");
console.log(not(true));


function addOne(input){
    return parseFloat(input) + 1;
}

console.log(addOne(0));
console.log(addOne("banana")); //return NaN + 1 returns NaN (will absorb any  math next to it)


function isEven(input){
    return parseFloat( input) % 2 === 0;
}
console.log(isEven(2));
console.log(isEven(-8));
console.log(isEven("42"));
console.log(isEven(1));



function isIdentical(input1, input2){
    return input1 === input2;
}

console.log(isIdentical(3,3 ));


function isEqual(input1, input2){
    return input1 == input2;
}


function or(input1, input2){
    return input1 || input2;
}



funciton and(input1, input2){
    return input1 && input2;
}

function concat(input1, input2){
    return input1 + "" + input2; //skips any math
}

function isBoolean(value){
    return value === false || value === true;
}