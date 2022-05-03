'use strict';

// const bookings = [];

// const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {
//   // ES5 ways
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', undefined,5);

// const flight = 'LH234';
// const trenton = {
//   name: 'Trenton Conner',
//   passport: 2243433243,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 2243433243) {
//     alert('Check in');
//   } else {
//     alert('Wrong passport');
//   }
// };

// // // checkIn(flight,trenton);
// // console.log(flight);
// // console.log(trenton);

// // // is the same as doing...
// // const flightNum = flight;
// // const passenger = trenton;

// const newPassport = function(person) {
//   person.passport = Math.trunc(Math.random() * 10000000000);
// }

// newPassport(trenton);
// checkIn(flight, trenton);

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// //Higher
// const transformer = function (str, fn) {
//   console.log(`Original String: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best', upperFirstWord);
// transformer('JavaScript is the best', oneWord);

// JS uses callbacks all the time
// const high5 = function () {
//   console.log('hey');
// };
// document.body.addEventListener('click', high5);

// ['Trenton', 'Jonas', 'Adam'].forEach(high5);

// const greet = function(greeting) {
//   return function(name) {
//     console.log(`${greeting} ${name}`);
//   }
// }

// const greeterHey = greet('Hey');
// greeterHey('Trenton');
// greeterHey('Steven');

// greet('Hello')('Trenton');

// const greet = greeting => name => {
// console.log(`${greeting} ${name}`);
// }

// greet('Hello')('Trenton');

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   booking: [],
//   book: function (flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.booking.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, 'Trenton Conner');
// lufthansa.book(635, 'John Smith');
// console.log(lufthansa);

// const eurowings = {
//   airline: 'Eurowing',
//   iataCode: 'EW',
//   booking: [],
// };

// const book = lufthansa.book;

// // Does not work
// // book(23, 'Sarah Williams');

// // call method
// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   booking: [],
// };

// book.call(swiss, 583, 'Mary Cooper');
// console.log(swiss);

// // Apply method
// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);

// // Bind method

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, 'Steven Willams');

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Trenton Conner');
// bookEW23('Martha Copper');

// // With Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function() {
//     console.log(this);

//     this.planes++;
//     console.log(this.planes);
// }
// lufthansa.buyPlane();

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // Partial application

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// // addVAT = value => value + value * 0.23;

// console.log(addVAT(100));
// console.log(addVAT(23));

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option.
 This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
         'What is your favourite programming language?'
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value 
  AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g 
    answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 
    'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is,
    using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 
'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

// const runOnce = function () {
//   console.log(`This will never run again`);
// };
// runOnce();

// // IIFE
// (function () {
//   console.log(`This will never run again`);
//   const isPrivate = 23;
// })();

// (() => console.log(`This will never run again`))();

// {
//     const isPrivate = 23;
//     var notPrivate = 23;
// }
// // // Doesn't work
// // console.log(isPrivate);
// console.log(notPrivate);

// const plane = function() {
//     console.log(`Hello Trenton`);
// }

// const plane2 = function() {
//     console.log(`Hello my name is bob`);
// }

// // Wrong
// // (plane.document.querySelector('.buy').addEventListener('click'), 5)

// // Right
// // Can't have anything in the function as I know of.
// document.querySelector('.buy').addEventListener('click', function() {
//     console.log(`hello Trenton`);
// });

// // just like using this but already have the function type out
// document.querySelector('.buy').addEventListener('click', plane);
// document.querySelector('.buy').addEventListener('click', plane2);

// const optionOne = 23;
// const optionTwo = 33;

// if(optionOne === optionTwo) {
//     console.log('Equal');
// } else if (optionOne != optionTwo) {
//     console.log('not Eqaul');
// }

// const arr = '23 24 25';
// const splitArr = arr.split(" ");
// console.log(splitArr);

// document.querySelector('.buy').addEventListener('click', function () {
//   const inputOne = document.querySelector('.inputOne').value;
//   const inputTwo = document.querySelector('.inputTwo').value;

// });

// // Just a sentence
// let text = "How are you doing today?";

// // splits the sentence "how", "are"...
// const myArray = text.split(" ");

// // takes the second word = are
// let word = myArray[1];

// // console.log(word);
// // console.log(myArray);

// // to show the init function
// function init() {
//   let name = 'loser'; // name is a local variable created by init
//   function displayName() {
//     // displayName() is the inner function, a closure
//     console.log(name); // use variable declared in the parent function
//   }
//   // name = 'loser'; // change the name to loser

//   if(name ===  'winner') {
//     displayName();
//   } else if (name === 'loser') {
//     displayName();
//   }
// }
// init();

// function makeFunc() {
//   var name = 'Mozilla';
//   function displayName() {
//     alert(name);
//   }
//   return displayName;
// }

// // myFunc is equal to displayName
var myFunc = makeFunc();
myFunc();

function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

// add5 and add10 is equal to the y function
var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12


