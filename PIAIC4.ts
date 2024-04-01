//Declare a variable named greeting with the string value "Hello, World!" and print it.
let greeting: string;
greeting = "Hello, World!";
console.log("The First output is as:", greeting);
//Define two variables with integer values and calculate their sum, difference, product, and quotient.
let number1: number = 20;
let number2: number = 10;
let sum, difference, product, quotient: number; //for storing the answer
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
let modulus: number;
modulus = number2 % number1; //number1=20,number2=10
console.log("The Modolus of two number is as", modulus);
