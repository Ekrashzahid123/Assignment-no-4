"use strict";
//Declare a variable named greeting with the string value "Hello, World!" and print it.
let greeting;
greeting = "Hello, World!";
console.log("The First output is as:", greeting);
//Define two variables with integer values and calculate their sum, difference, product, and quotient.
let number1 = 20;
let number2 = 10;
let sum, difference, product, quotient; //for storing the answer
sum = number1 + number2; //sum
console.log("The Sum of Two number is as:", sum);
difference = number1 - number2; //difference
console.log("The Difference between two number is as:", difference);
product = number1 * number2;
console.log("The Product of two number is as:", product);
quotient = number1 / number2;
console.log("The Quotient is as:", quotient);
//Swap the values of two variables without using a third variable
console.log("The Number1 Before Swaping is as:", number1);
console.log("The Number2 before Swaping is as:", number2);
number1 = number1 + number2;
number2 = number1 - number2;
number1 = number1 - number2;
console.log("The Number1 After Swaping is as:", number1);
console.log("The Number2 After Swaping is as:", number2);
// This applies to TypeScript. Create a string variable and try changing its type.
//let message:string;
//message=10;  //error can,t assign string a number 10
//Use the modulus operator to find the remainder of two numbers.
let modulus;
modulus = number2 % number1; //number1=20,number2=10
console.log("The Modolus of two number is as", modulus);
//Increment a variable's value by 1 using two different methods.
let counter = 0;
console.log("Before the Counter is incremented", counter);
counter++; //first method
console.log("First method After the Counter is incremented", counter); //counter is 1 here
let counter2 = counter + 1; //second method   1+1=2
console.log("Second method to increment the counter", counter2);
//Given three boolean variables, write expressions for AND, OR, and NOT gates.
//Show examples of using compound assignment operators.
//Write a program to check if a number is even or odd.
let num = 10; //check num is even or odd
let count = 0;
if (num % 2 == 0) {
    count++;
}
if (count == 1) {
    console.log("The Given Number is Even", num);
}
else {
    console.log("The Given Number is Odd", num);
}
//Check if a person is eligible to vote.
let person_age = 18;
if (person_age >= 18) {
    console.log("The Respective person is Eligible to vote");
}
else {
    console.log("The Respective Person is not Eligible to vote");
}
