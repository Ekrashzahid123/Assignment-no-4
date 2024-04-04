//1.Declare a variable named greeting with the string value "Hello, World!" and print it.
let greeting: string;
greeting = "Hello, World!";
console.log("The First output is as:", greeting);
//2.Define two variables with integer values and calculate their sum, difference, product, and quotient.
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
//3.Swap the values of two variables without using a third variable
console.log("The Number1 Before Swaping is as:", number1);
console.log("The Number2 before Swaping is as:", number2);
number1 = number1 + number2;
number2 = number1 - number2;
number1 = number1 - number2;
console.log("The Number1 After Swaping is as:", number1);
console.log("The Number2 After Swaping is as:", number2);
// 4.This applies to TypeScript. Create a string variable and try changing its type.
//let message:string;
//message=10;  //error can,t assign string a number 10
//5.Use the modulus operator to find the remainder of two numbers.
let modulus: number;
modulus = number2 % number1; //number1=20,number2=10
console.log("The Modolus of two number is as", modulus);
//6.Increment a variable's value by 1 using two different methods.
let counter = 0;
console.log("Before the Counter is incremented", counter);
counter++; //first method
console.log("First method After the Counter is incremented", counter); //counter is 1 here
let counter2 = counter + 1; //second method   1+1=2
console.log("Second method to increment the counter", counter2);
//7.Given three boolean variables, write expressions for AND, OR, and NOT gates.
let a:boolean=true;
let b:boolean=false;
let c:boolean=true;
//let resultAND = a && b && c; // Output: false
//let resultOR = a || b || c; // Output: true
//let resultNOT = !a; // Output: false


//8.Show examples of using compound assignment operators.
let marks1 = 76;

// Using += operator to add 10 to marks
marks1 += 10; // marks = marks + 10;

// Using -= operator to subtract 5 from marks
marks1 -= 5;  // marks = marks - 5;

// Using *= operator to multiply marks by 2
marks1 *= 2;  // marks = marks * 2;

// Using /= operator to divide marks by 4
marks1 /= 4;  // marks = marks / 4;

console.log("Final marks:", marks1);

//9.Write a program to check if a number is even or odd.
let num: number = 10; //check num is even or odd
let count = 0;
if (num % 2 == 0) {
  count++;
}
if (count == 1) {
  console.log("The Given Number is Even", num);
} else {
  console.log("The Given Number is Odd", num);
}
//10.Check if a person is eligible to vote.
let person_age = 18;
if (person_age >= 18) {
  console.log("The Respective person is Eligible to vote");
} else {
  console.log("The Respective Person is not Eligible to vote");
}
//11.Assign a grade based on a numerical score.
let marks = 76;

if (marks >= 80 && marks <= 100) {
  console.log("Your Grade is A");
} else if (marks >= 60 && marks < 80) {
  console.log("Your Grade is B+");
} else if (marks >= 50 && marks < 60) {
  console.log("Your Grade is B");
} else if (marks >= 0 && marks < 50) {
  console.log("Your Grade is F");
} else {
  console.log("Invalid marks entered.");
}

// 12.Find the maximum of three numbers.
let no1 = 10;
let no2 = 90;
let no3 = 30;

if (no1 >= no2 && no1 >= no3) {
  console.log("The Maximum number is as:", no1);
} else if (no2 >= no1 && no2 >= no3) {
  console.log("The Maximum number is as:", no2);
} else if (no3 >= no1 && no3 >= no2) {
  console.log("The Maximum number is as:", no3);
}
//13.Check if a given year is a leap year.
let leap_year = 2024;
let count2: number = 0;
if (leap_year % 4 == 0) {
  count2++;
}
if (count2 > 0) {
  console.log("The Given year is leap year:", leap_year);
} else {
  console.log("The Given year is not leap year:", leap_year);
}
//14.Formula
//(32°F − 32) × 5/9
// Write a program that converts temperature from Fahrenheit to Celsius.
let temperature: number = 37;
let celsius: number;
celsius = ((temperature - 32) * 5) / 9;
console.log("The Temperature in celsius is as:", celsius);
// 15.Check if a number is positive, negative, or zero.
let number_to_check = -10;
if (number_to_check < 0) {
  console.log("The Number is Negative", number_to_check);
} else if (number_to_check > 0) {
  console.log("The Number is Positive", number_to_check);
} else {
  console.log("The number is zero", number_to_check);
}
//16.Write a program that prints the multiplication table of a given number up to 10.
let table = 10;
console.log("The Table of 10 is as:");
for (let i = 1; i <= 10; i++) {
  console.log(`${table} x ${i} = ${table * i}`);
}
