console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return `Hello ${name}!`;
}
// Remember to call the function to test
console.log(helloName('Jake'));
console.log(helloName('Mike'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  // return firstNumber + secondNumber;
  return(firstNumber + secondNumber);
}
console.log(addNumbers(-3,-7))

// 4. Function to multiply three numbers & return the result
function multiplyThree(x, y, z){
  return(x * y * z)
}
console.log(multiplyThree(2,5,11))
console.log(multiplyThree(-23,-1,.5))

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return "True";
  }
    return "False";
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
  if (array.length <= 0){
    return "undefined";
  }
  return array[array.length - 1]
}
console.log(getLast([]))
console.log(getLast([3,6,2]))
// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
for (let i = 0; i < array.length; i++){
  if ( array[i] == value )
    return "True";
  }
  return "False";
}
console.log(find(2,[2,3,6]))

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
if (string.charAt(0) == letter){
  return "true";
}
  return "false"
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );
console.log( 'isFirstLetter - should say True', isFirstLetter('J', 'JavaScript') );

// 9. Function to return the sum of all numbers in an array
function sumAll( array ) {
  let sum = 0
  for (let i=0; i<array.length; i++){
    sum += array[i]
  }

  // TODO: loop to add items
  return sum;
}
console.log(sumAll([3,7,8]))
// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPos( array){
  for (let i=0; i<array.length; i++){
    if (array[i] >= 0){
      return array;
    }
    return array=[]
    }
}
console.log(allPos([-3, 7, 4]))
console.log(allPos([3, 7, 4]))

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
// CodeWars uses queue? starts at 8 and goes down, 6 should be good maybe 7


// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

function addBinary(a=0,b=0) {
  let nonBinary = (a + b);
  return (nonBinary >>> 0).toString(2);
}
console.log(addBinary(234,2))