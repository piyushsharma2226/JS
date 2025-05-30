const name = "Piyush";
const repoCount = 50;

// console.log(name + repoCount + "value");

/* We should use backtics */

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // String Interpolation

//-------------------------------------------------------------------------

// Another way to declare String

let gameName = new String ('Pikachu');

//------------------------------------------------------------------------

console.log(gameName[0]); // char at index

console.log(gameName.__proto__); // prototype

console.log(gameName.length); // find the length of value

console.log(gameName.toUpperCase) // convert value in uppercase

console.log(gameName.charAt(3)); // find the char at invidual index

console.log(gameName.indexOf('k')); // find the index of individual char

const newString = gameName.substring(0, 4); // give us char between 0 and 4 (but 4 not included)
console.log(newString);

const anotherString = gameName.slice(0, 4); // (output: pika) but in slice we can use negative sign also
console.log(anotherString);

const newStringOne = "   Piyush  ";
console.log(newStringOne.trim()); // remove white space

const url = "http://piyush.com/hitesh%20sharma";
console.log(url.replace('%20', '_')); // remove and add something in place of removal

console.log(url.includes('piyush')); // find that 'piyush' is present or not

// Split

console.log(gameName.split('_'));
