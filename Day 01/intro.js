console.log(typeof 'Welcome to 30 Days of Javascript.'); // string
console.log(typeof 5); //number
console.log(typeof true); //boolean
console.log(typeof null); // object type
console.log(typeof undefined); // undefined

/* - for a variable that changes at different time we use let
   - for a variable that does not change we use const
   - Var is not recommended to be used because it is error prone and has lots of leaks. ( Add more when at that section. )*/

// - variables don't start wil numbers or have any spaces in them and don't have special characters except $ and _
// - varibale names use camelCase convertion meaning start with and lower case letter and any other words start with a captial.

// examples of declared variables

let firstName = 'Ken'; // first name of a person
let lastName = 'DeWitt'; // last name of a person
let country = 'Canada'; // country
let city = 'Winnipeg'; // City
let age = 39; // age in years
let isMarried = true; // marriage status
console.log(firstName, lastName, country, city, age, isMarried);

//declare variables with number values

const gravity = 9.81 // earth gravity in m/s2
const boilingPoint = 100 // water boiling point, temprature in oC
const PI = 3.14 // geometrical constant

console.log(gravity, boilingPoint, PI);

// varibles can also be declared in one line seperated by a comma
let name = 'Ken', job = 'Programmer', live = 'Winnipeg';
console.log(name, job, live);

// comments can make code readable
// Welcome to 30 Days of Javascript
/*
  Comments can make code readable,
  easy to reuse and informative
*/