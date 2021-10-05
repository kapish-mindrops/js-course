// let js = "amazing";
// if (js === "amazing") alert("javaScript is fun");
// console.log(45 + 56 + 10 - 30);

const massMark = 78;
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
