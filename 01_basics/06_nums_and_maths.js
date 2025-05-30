const score = 400;
console.log(score); // output : 400


const balance = new Number(100);
console.log(balance); // Output ([Number: 100])

console.log(balance.toString()); // converted into String
console.log(typeof balance); // Object

console.log(balance.toString().length); // 3
console.log(balance.toFixed(2)) // Output:100.00

const otherNumber = 23.8966;
console.log(otherNumber.toPrecision(3)); // Output: 23.9
console.log(typeof otherNumber); // number


const hundreds = 1000000;
console.log(hundreds.toLocaleString()); // Output:1,000,000 (Give commas between the number)


/*++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++*/
  

console.log(Math); // putting this in browser we can get many methods of maths

console.log(Math.abs(-4)); //Output:4 (absolute value)
console.log(Math.abs(4));  //Output:4

console.log(Math.round(4.3)); //Output : 4
console.log(Math.round(4.6)); //Output : 5

console.log(Math.min(4,3,5,6)); // 3
console.log(Math.max(5,6,7,8)); // 8

//-------------------------------------------------------------------------------

console.log(Math.random()); // Always give us value between 0 and 1

console.log((Math.random()*10)+1);
console.log((Math.random()*10)+1);

const min = 10;
const max = 20;

// Math.random()*(max-min +1);
console.log(Math.floor(Math.random()*(max-min +1)) + min);



