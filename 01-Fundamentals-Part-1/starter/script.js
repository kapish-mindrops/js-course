// let js = "amazing";
// if (js === "amazing") alert("javaScript is fun");
// console.log(45 + 56 + 10 - 30);

/*************************
coding challenge #1 & #2
*************************/

/*const massMark = 78;
const massJhon = 92;
const heightMark = 1.69;
const heightJhon = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJhon = massJhon / (heightJhon * heightJhon);
console.log(BMIJhon, BMIMark);

if (BMIMark > BMIJhon) {
  alert("Mark's BMI is higher than John's!");
} else {
  alert("Jhon's BMI is higher than Mark's!");
}

const firstName = "kapish";
const job = "UI/UX devloper 💻";
const birthYear = "2000";
const year = "2021";

const kapish = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(kapish);
*/

// const hasDriverLicense= true; //A
// const hasGoodVision = true; //B
// const isTired = false;  //C 

// console.log (hasDriverLicense && hasGoodVision);
// console.log (hasDriverLicense || hasGoodVision);
// console.log (!hasDriverLicense);

// if (hasDriverLicense && hasGoodVision && !isTired) {
//   console.log('kapish can drive');
// }else {
//   console.log('someone else can try ...');
// }


/*******************
coding challenge #3
********************/

// const scoreDolphins = (96 + 108+ 89) / 3;
// const scoreKoalas = (88 + 91+ 110) / 3;
// console.log(scoreDolphins, scoreKoalas); 

// if (scoreDolphins >scoreKoalas) {
//   console.log('Team Dolphin win the trophy 🏆');
// }else if (scoreDolphins<scoreKoalas) {
//   console.log('Team Koalas win the trophy 🏆');
// }else if (scoreDolphins === scoreKoalas) {
//   console.log('No one win the trophy 😫');
// }

// const scoreDolphins = (97 + 112 + 80) / 3;
// const scoreKoalas = (109 + 95 + 50) / 3;
// console.log(scoreDolphins, scoreKoalas); 

// if (scoreDolphins >scoreKoalas && scoreDolphins >= 100) {
//   console.log('Team Dolphin win the trophy 🏆');
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//   console.log('Koalas win the trophy 🏆');
// } else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
//   console.log('Both win the trophy!');
// } else {
//   console.log('No one wins the trophy 😭');
// }


/*******************
  switch Statement
********************/
// let day = prompt('Enter a Day');

// switch (day) {
//   case 'monday':
//   console.log('Lorem ipsum dolor sit amet consectetur');
//   break;
//   case 'tuesday':
//   case 'wednesday':
//     console.log('adipisicing elit. Ratione');
//       break;
//   case 'thursday':
//     console.log('adipisicing elit. Ratione');
//       break;
//   case 'friday':
//     console.log('adipisicing elit. Ratione');
//       break;
//   case 'saturday':
//   case 'sunday':
//     console.log('Enjoy');
//       break;
//   default:
//       console.log('not a valid day!!');
// }


/**********************
  Coding Challenge #4
***********************/

const bill = Number(prompt('Enter your bill value to caluculate tip'));
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);