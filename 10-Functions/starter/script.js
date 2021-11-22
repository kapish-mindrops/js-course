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

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate
  }
}
const addVAT2 = addTaxRate(0.23)
console.log(addVAT(100));
console.log(addVAT(23));
*/

///////////////////////////////////////
// Coding Challenge #1

/*
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)

  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
*/
/*
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(prompt(
      `${this.question}\n${this.options.join('\n')}\n(Write option number)`
    ));

    // typeof answer === 'number' && answer < this.answers.length && answer != 0 || alert(`select correct option`) && this.answers[answer]++;
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    console.log(answer);
    this.displayResults('string')
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
      // display a string like "Poll results are 13, 2, 4, 1".
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  }
};
document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string')
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string')
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] },)


///////////////////////////
// closuer

const secureBooking = function () {
  let passengerCount = 0

  return function () {
    passengerCount++
    console.log(`${passengerCount} pasengers`);
  }
}

const booker = secureBooking();

// booker()
// booker()
// booker()
// booker()


(function () {
  const header = document.querySelector('h1')
  header.style.color = 'red'

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue'
  });

})();
*/