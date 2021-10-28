'use strict';
/*
function loging() {
    console.log(`hello welcome to the js fundamental part-2`);
}

loging();
loging();
loging();
loging();

FUCTIONS

function fruitJuice(apples, orenges){
    let juice = `Your juice made with ${apples} apples and ${orenges} orenges.`;
    return juice;
}
const apple = Number(prompt('Enter ammout of apples you want in your juice'));
const orenge = Number(prompt('Enter ammout of orenge you want in your juice'));

let appleJuice = fruitJuice(apple, orenge);
alert(appleJuice);

FUCTIONS EXPRESSIONS

function calcAge1 (birthYear) {
    return 2021-birthYear;
}
const age1 = calcAge1(2000);
alert(`You are ${age1} year old`);

var calcAge2 = function (birthYear) {
    return 2021-birthYear;
}
var age2 = calcAge2(1999);
alert(`ram is ${age2} year old`)

ARROW FUCTIONS

var calcAge3 = birthYear => 2021-birthYear;
var age3 = calcAge3(1999);
alert(`ram is ${age3} year old`);

var yearsUntilRetirement = (birthYear, firstName) => {
    var age = 2021 - birthYear;
    var retirement = 60 - age;
    return `${firstName} retires in ${retirement} years`;
}

alert(yearsUntilRetirement (2000 , 'Kapish'));
alert(yearsUntilRetirement (2002 , 'Ravish'));


Functions Calling Other Functions

var cutFruitPieces = function (fruit) {
    return fruit * 2
}

function fruitJuice(apples, orenges){
    var applePieces = cutFruitPieces(apple);
    var orengePieces = cutFruitPieces(orenge);
    let juice = `Your juice made with ${applePieces} apple pieces and ${orengePieces} orenge pieces.`;
    return juice;
}
const apple = Number(prompt('Enter ammout of apples you want in your juice'));
const orenge = Number(prompt('Enter ammout of orenge you want in your juice'));

let firutJuices = fruitJuice(apple, orenge);
alert(firutJuices);


 var calcAge = function (birthYear) {
     return 2021 - birthYear;
 }

const yearsUntilRetirement = function (birthYear, firstName) {
    var age = calcAge(birthYear);
    var retirement = 60 - age;
    if (retirement >= 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    }
    else {
        console.log(`${firstName} retired allready 🎉🥳`);
        return -1;
    }
    
}
console.log(yearsUntilRetirement (1951 , 'Kapish'));
console.log(yearsUntilRetirement (2002 , 'Ravish'));


// Test DAta 1

const calcAverage = (a,b,c) => (a + b + c) / 3; 

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

console.log(scoreDolphins);
console.log(scoreKoalas);

let checkWinner = function(avgDolphins, avgKoalas) {
    if(avgDolphins >= 2* avgKoalas){
        alert(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`)
    }else if (avgKoalas >= 2* avgDolphins){
        alert(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`)
    }else {
        console.log(`No one wins trophy`)
    }
}

checkWinner(scoreDolphins,scoreKoalas)

checkWinner(250,600);

// Test DAta 2

scoreDolphins = calcAverage(85,54,41);
scoreKoalas = calcAverage(23,34,27);
console.log(scoreDolphins,scoreKoalas);
checkWinner(scoreDolphins,scoreKoalas);


// ARray Tip Calculater

let calcTip = function(bill) {
    return bill >= 50 &&  bill <= 300 ? bill*0.15 : bill* 0.2;
}

let bills = [125,555,44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
let totals = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]];
console.log(bills, tips, totals);



// Object section

let kapish = {
    firstName : 'Kapish',
    lastName : 'Sharma',
    age : '21',
    job : 'ui/ux DEvloper',
    location : 'india',
    instaGram : 'kapishsharma_2411',
    friends : ['alpha', 'beta', 'gama']
};
// console.log(kapish);

let interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job,friends, location and instaGram');
// alert(kapish[interestedIn]);

if(kapish[interestedIn]) {
    alert(kapish[interestedIn]);
}else {
    alert(`you selected a wrong option, Choose between firstName, lastName, age, job, friends,location and instaGram`);
}

let about = (`${kapish.firstName} has ${kapish.friends.length} friends and best friend name is ${kapish.friends[0]}😎😎🤗`);
console.log(about);


// challenge

// OUTPUT = Kapish sharma is a 21-year's old UI/UX Devloper and he have a/no driver's license.

const kapish = {
    firstName : 'Kapish',
    lastName : 'Sharma',
    height:174,
    birthYear : 2000,
    job : 'UI/UX Devloper',
    location : 'india',
    instaGram : 'kapishsharma_2411',
    friends : ['alpha', 'beta', 'gama'],
    hasDriversLicens:true,
    calcAge: function () {
        this.age = 2021 - this.birthYear;
        return this.age;
      },
    aboutMe: function () {
        return `${this.firstName} ${this.lastName} is a ${this.calcAge()}-year's old ${this.job} and he has ${this.hasDriversLicens ? 'a' : 'no'} driver's license.`
    }
};

consol.log(kapish.aboutMe());


// coding challenge #3

const mark = {
    fullName : 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI : function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}
const john = {
    fullName : 'jhon Smith',
    mass: 92,
    height: 1.6,
    calcBMI : function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}
mark.calcBMI();
john.calcBMI();
console.log(mark.calcBMI() , john.calcBMI());

console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi) {
    alert(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`);
} else if (john.bmi > mark.bmi) {
    alert(`${john.fullName}'s BMI (${john.bmi}) is higher then ${mark.fullName}'s BMI (${mark.bmi})`);
}

// ///////////LOOP

///////////////////
//////forloop/////
/////////////////

for(let rep = 1 ; rep <= 50 ; rep ++) {
    console.log(`hello world ${rep} 🌎`);
}


///////////////////////////////////////
// Looping Arrays, Breaking and Continuing
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
  ];

let types = [];
for(let i = 0; i < jonas.length; i++){
    console.log(jonas[i], typeof jonas[i]);
    types.push(jonas[i]);
}
console.log(types);

let year = [1996, 1985, 2000, 2002]
let age = []

for(let i = 0; i < year.length; i ++) {
    age.push(2021 - year[i]);
    console.log(age[i]);
}

for(let i = 0; i < jonas.length; i ++) {
    if(typeof jonas[i] !== 'string') continue;
    console.log(jonas[i],typeof jonas[i])
}

for(let i = 0; i < jonas.length; i ++) {
    if(typeof jonas[i] === 'number') break;
    console.log(jonas[i],typeof jonas[i])
}


// backword loop

const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
  ];

  for(let i = jonas.length - 1; i >= 0; i --) {
      console.log(i, jonas[i], typeof jonas[i]);
}


for(let exercise = 1; exercise < 4; exercise++) {
    console.log(`----------strating Excercise ${exercise}`);

    for(let rep = 1; rep < 6; rep++){
        console.log(`Exercise ${exercise}: lefting weight reptition ${rep} 🏋️‍♂️`);
    }
}

// While LOOp
let exercise = 1;
while(exercise < 4) {
    console.log(`----------strating Excercise ${exercise}`);
    exercise++;
}



let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end...');
}

*/

// coding challange #4
const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52,]

const tips = []
const totals = []

for(let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i]+ tips[i]);
}
// console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));

