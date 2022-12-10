//const { exit } = require('process');

var prompt = require('prompt-sync')();

var a = parseInt(prompt("Enter num 1 = "));
var b = parseInt(prompt("Enter num 2 = "));

//sum
console.log(a + " + " + b + " = " + (a+b) );

//sub
console.log(a + " - " + b + " = " + (a-b) );

//mul
console.log(a + " * " + b + " = " + (a*b) );

//division
console.log(a + " / " + b + " = " + (a/b) );

//modulous
console.log(a + " % " + b + " = " + (a%b) );

//largest
if(a>b)
{
    console.log("Largest no = " + a);
}
else{
    console.log("Largest no = " + b);
}





//console.log("Sum = " + c);