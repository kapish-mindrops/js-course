'use strict';
/*
const bookings = [];
const creatBooking = function (
  flightName,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightName,
    numPassengers,
    price,
  };
  bookings.push(booking);
  console.log(booking);
};

document.querySelector('.button').addEventListener('click', function () {
  const flightName = document.getElementById('fname').value;
  const numPassengers = document.getElementById('nop').value;
  creatBooking(flightName, numPassengers);
  alert(`your booking has been confirmed`);
});

document.querySelector('.button').addEventListener('click', function () {
  setTimeout(function () {
    window.location.reload();
  });
});

creatBooking('ab123');
creatBooking('AB420', 3, 450);


const flightName = 'IN999';
const kapish = {
  name: 'kapish sharma',
  passport: 123456789,
};

const checkIn = function (flightNumber, passenger) {
  flightNumber = 'IN963';
  passenger.name = 'Mr ' + passenger.name;
  if (passenger.passport === 123456789) {
    alert('CheckIN');
  } else {
    alert('Wrong passport');
  }
};
checkIn(flightName, kapish);
console.log(flightName);
console.log(kapish);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};
newPassport(kapish);
checkIn(flightName, kapish);


// Functions Returning Functions

// const greet = function (greating) {
//   return function (name) {
//     console.log(`${greating} ${name}`);
//   };
// };

// arrow function

const greet = greating => {
  return name => console.log(`${greating} ${name}`);
};
greet('hello')('kapish');

const greetArr = greating => name => console.log(`${greating} ${name}`);
greetArr('Hi')('Kapish');
*/

// call method

const airindia = {
  airline: 'air india',
  iatacode: 'AI',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked seat on ${this.airline} fight ${this.iatacode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iatacode}${flightNum}`, name });
  },
};
airindia.book(784, 'kapish sharma');
console.log(airindia);

const indigo = {
  airline: 'indigo',
  iatacode: 'IG',
  bookings: [],
}
const book = airindia.book;

book.call(indigo, 108, 'kapish');
console.log(indigo);

const spicejet = {
  airline: 'spicejet',
  iatacode: 'spice',
  bookings: [],
}
book.call(spicejet, 456, 'jonas')
const details = [284, 'Martha']
console.log(spicejet);
book.call(spicejet, ...details)

// bind method
const bookAi = book.bind(airindia);
const bookIn = book.bind(indigo);
const bookSpice = book.bind(spicejet);

bookAi(48, 'sarha williams')
bookIn(45, 'stev williams')
bookSpice(46, 'jonas')

// with Event Listener
airindia.plane = 300;
airindia.buyPlane = function () {
  console.log(this);
  this.plane++;
  // console.log(this.plane);
}
document.querySelector('.buy').addEventListener('click', airindia.buyPlane.bind(airindia));


const addTax = (rate, value) => value + value * rate
console.log(addTax(.1, 400));
const addVAT = addTax.bind(null, .1)
console.log(addVAT(200));

console.log(addVAT(addTax, 100));