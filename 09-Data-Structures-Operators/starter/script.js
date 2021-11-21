'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(40);
  console.log(output);
}

// const checkMiddleSeat = function (seat) {
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') {
//     console.log(`you got middel seat`);
//   } else {
//     console.log(`you are lucky`);
//   }
// };
// checkMiddleSeat('555B');
// checkMiddleSeat('555C');
// checkMiddleSeat('555E');

// const announcement = `all pasengers are requested to come on bording door no.23 bording door no.23!`;
// console.log(announcement.replaceAll('door', 'gate'));

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✨'.repeat(i + 1)}`);
  }
});

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // openingHours: {
  //   [weekdays[3]]: {
  //     open: 12,
  //     close: 22,
  //   },
  //   [weekdays[4]]: {
  //     open: 11,
  //     close: 23,
  //   },
  //   [weekdays[5]]: {
  //     open: 0, // Open 24 hours
  //     close: 24,
  //   },
  // },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ address, starterIndex = 1, mainIndex = 2, time }) {
    // alert(
    //   `order recived! your ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd to ${address} at ${time}`
    // );
    console.log(
      `order recived! your ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd to ${address} at ${time}`
    );
  },

  // ES6 enhanced object litrel
  // openingHours,
  // order(starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },

  // orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
  //   console.log(
  //     `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
  //   );
  // },

  // orderPasta(ing1, ing2, ing3) {
  //   console.log(
  //     `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
  //   );
  // },

  // orderPizza(mainIngredient, ...otherIngredients) {
  //   console.log(mainIngredient);
  //   console.log(otherIngredients);
  // },
};

// destrcting objects

// destrcting arrays

// const [first, , second] = restaurant.categories;
// console.log(first, second);

// let [main, , secondary] = restaurant.categories;
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// console.log(restaurant.order(2, 0));

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // nested Array
// const nested = [45, 68, [75, 68]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // default values
// const [p = 1, q = 2, r = 3] = [48, 75];
// console.log(p, q, r);

// restaurant.orderDelivery({
//   address: prompt(`Enter Your Address`),
//   time: prompt(`Enter time of delivery`),
//   mainIndex: Number(prompt(`Enter index number`)),
//   starterIndex: Number(prompt(`Enter index number`)),
// });
/*
restaurant.orderDelivery({
  address: '1274/87',
  time: '5:30 PM',
  mainIndex: 2,
  starterIndex: 2,
});

const { name, categories, openingHours } = restaurant;
console.log(name, categories, openingHours);

const {
  name: restaurantName,
  categories: tags,
  openingHours: hours,
} = restaurant;
console.log(restaurantName, hours, tags);

// default values

const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);

// mutating variabels
let a = 123;
let b = 654;

const obj = { a: 23, b: 85, c: 6 };
({ a, b } = obj);
console.log(a, b);

// nested object

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/

// coding chlalleg game

// coding challenge 1

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// coding challeng answer

// // 1.
// const [players1, players2] = game.players;
// console.log(players1, players2);
// // 2.
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);
// // 3.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
// // 4.
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);
// // 5.
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// // 6.
// const printGoals = function (...players) {
//   console.log(`${players.length} goals were scored`);
// };
// printGoals(...game.scored);
// // 7.
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');

////////////////
// for-of loop
// loop arrays
////////////////
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// // for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}:${el}`);
// }

// loop objects

// property key
// const properties = Object.keys(openingHours);
// let openStr = `we are open ${properties.length} days :`;

// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// // property value
// for (const value of Object.values(openingHours)) {
//   console.log(value);
// }

// // entire object

// for (const [key, { open, close }] of Object.entries(openingHours)) {
//   console.log(`on ${key} we are open at ${open} and close at ${close}`);
// }

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

// coding challeng #2
// 1.
// for (const [printGoals, player] of game.scored.entries()) {
//   console.log(`Goal ${printGoals + 1}: ${player}`);
// }

// // 2.
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) average += odd;
// average /= odds.length;
// console.log(average);

// // 3.
// for (const [team, chance] of Object.entries(game.odds)) {
//   const str = team === 'x' ? 'draw' : `victory${game[team]}`;
//   console.log(`odd of ${str} ${chance}`);
// }
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(player);

// //////////////
//////maps
////////////////

// const question = new Map([
//   ['question', 'what is the best programing language in the world'],
//   [1, 'c'],
//   [2, 'java'],
//   [3, 'javaScript'],
//   ['correct', 3],
//   [true, 'correct'],
//   [false, 'try agian'],
// ]);

// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') {
//     console.log(`Answer ${key}: ${value}`);
//   }
// }

// let answer = Number(prompt(`Enter your answer`));
// // console.log(question.get(question.get('correct') === answer));
// console.log(answer);
// // alert(question.get(question.get('correct') === answer));

// const correctAns =
//   answer === question.get('correct') ? 'correct💥' : 'try agian';
// console.log(correctAns);

// const questionArray = Array.from(question);
// console.log(questionArray);

// coding challenge #3
///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀


const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1.
const newArray = gameEvents.values();
console.log(newArray);

const newSet = new Set(...[newArray]);
console.log(newSet);

// 2.
gameEvents.delete(64);
console.log(gameEvents);

// 3.
const time = [...gameEvents.keys()].pop();
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);
// 4.
for (const [min, events] of gameEvents) {
  const half = min <= 45 ? 'First' : 'Second';
  console.log(`[${half} Half]: ${events}`);
}
*/
