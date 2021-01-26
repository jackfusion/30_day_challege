/*
there are two types of data types primitive and non-primitive.
Primitive are number, strings, booleans, null, undefined and non-primitive are objects, functions, arrays.

Primitive data types are immutable(non-modifiable), meaning it can't be change.
*/

let word = 'Javascript';

word[0] = 'Y';

console.log(word);

/*
primitive data types are compared by their vales.
*/

let numOne = 3;
let numTwo = 3;

console.log(numOne == numTwo); //true

let js = 'Javascript';
let py = 'python';

console.log(js == py); //false

let lighton = true; 
let lightoff = false;

console.log(lighton == lightoff); // false

/*non-primitive data types are mutable(modifiable)*/

let nums = [1, 2, 3]; // array
nums[0] = 10; // changes a value in an array

console.log(nums); // [10, 2, 3]
/*
non-primitive data types can't be compared by their vales. Rule of thumb is not to compare non-primitive data types.
*/
let numbers = [1, 2, 3];

console.log(nums == numbers); // false

let userOne = {
  name:'Ken',
  role:'Programmer',
  country:'Canada'
};

let userTwo = {
  name:'Ken',
  role:'Programmer',
  country:'Canada'
};

console.log(userOne == userTwo); // false
let nums1 = [1, 2, 3];
let numbers1 = nums1;

console.log(nums1 == numbers1); //true

// number are integers examples:

let age = 39;
const gravity = 9.81; // we use cost for non-changeing values, gravitational constant in m/s2
let mass = 72; // mass in kilograms
const PI = 3.14; // pi a geometrical constant

//more examples
const boilingPoint = 100; // temperature in oC, boiling point of water which is a constant
const bodytemp = 37; // oC average human body temperature, which is a constant

console.log(age, gravity, mass, PI, boilingPoint, bodytemp);

const PI1 =  Math.PI;
console.log(PI1); // 3.141592653589793

// Rounding to the closest number
// if above 0.5 up, if less then 0.5 round down

console.log(Math.round(PI)); // 3 to round values to the nearest number
console.log(Math.round(9.81)); // 10
console.log(Math.floor(PI)); // 3 round down
console.log(Math.ceil(PI)); // 4 round up
console.log(Math.min(-5, 3, 20, 4, 5, 19)); // -5 returns the minimum value
console.log(Math.max(-5, 3, 20, 4, 5, 19)); // 20, returns the maxium value
const randNum = Math.random(); // creates random number between 0 to 0.999999
console.log(randNum);
const num = Math.floor(Math.random () * 11); // creates a random number between 0 to 10
console.log("Random Number: " + num);

// absolute value
console.log(Math.abs(-10)); //10

// square value
console.log(Math.sqrt(100)); // 10

console.log(Math.sqrt(2)); // 1.4142135623730951

// Power
console.log(Math.pow(3, 2));  // 9

console.log(Math.E); //2.718

//logerithm
// returns the natural logerithm with base E of x, Math.log(x)
console.log(Math.log(2));  // 0.6931471805599453
console.log(Math.log(10));  // 2.302585092994046

// Trigonometry

console.log(Math.sin(0));
console.log(Math.sin(60));

console.log(Math.cos(0));
console.log(Math.cos(60));