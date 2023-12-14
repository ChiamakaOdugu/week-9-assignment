#   Number 1.
 
<!-- Define an array -->
 
An array is a list that can hold more than one element usually denoted by square brackets []. e.g [1, 2, 3]
 
Different Data types in an array
strings
numbers
booleans etc
 
<!-- methods of an array-->
They include:
  
i. Array pop() : This removes the last element from an array e.g
 const num = [1, 2, 3] ;
 let array = num.pop() ; <!-- to remove 3 from the array -->

 ii. Array length: This method helps to return the length (size) of an array
const foods = ["rice", "beans", "yam"];
let size = foods.length; 
 
3. Array shift() : This removes the first array element and       "shifts" all other elements to a lower index.
 const alphabet = ['a', 'b', 'c'] ;
 let array = alphabet.shift( 'a' ) ; <!-- 'a'will be removed from the array -->


 
#   Number 2.
 <!-- definition of function -->
function is a block of code designed to perform a particular task , it must start with "function" followed by names. The names can be in theform of letters,numbers,and so on. followed by a bracket which ca contain parameters.

 <!-- Example -->
 
function message () {
    return `Hi people.`;
}
console.log(world ());
 
 
#   Number 3.
# Definition of Control Flow
 
Control flows are block of codes that can be executed
if certain conditions are not met. 
 
i. If/else statements :This executes a block of code if a specified condition is true. If the condition is false, another block of code can be executed. e.g
 
const color  = 'red';
 
if (color === 'red') {
  console.log("Yeah!");
} else {
  console.log("Yeeh!");
}
ii. switch statements : Switch statements are used to run a block of code in response to an expression or variable's value.
 
iii. loops : Loops are used to run a code block several times in response to a certain condition.
There are several types of loops
 For loops and while loops are the two primary forms of loops in JavaScript.
 
#   Number 4.
<!-- Basics of JavaScript -->
 
A function declaration can be used to create a function. 
For example:
 
function plate () {} <!-- plate is the declaration -->
 
Global variables are those variables that are declared outside of a function.
 Reason being that they can be assigned to variables and attributes, returned from functions, and passed to other functions, functions in JavaScript are first-class objects.