// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// console.log("hello");

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`${data1[0]}ºC in, ${data1[1]}ºC in, ${data1[2]}ºC`);

let printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < data2.length; i++) {
    str += `${arr[i]}ºC in ${i + 1} Days ...`;
  }
  console.log("..." + str);
};
printForecast(data2);
