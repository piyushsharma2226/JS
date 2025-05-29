let score = "33";
console.log(typeof score); //string

let newScore = Number(score);
console.log(typeof newScore); //number
console.log(newScore); //33

//--------------------------------------

let age = "33abc";
console.log(typeof age);//string

let newAge = Number(age);
console.log(typeof newAge);//number
console.log(newAge);//NaN

//--------------------------------------

let value = null;
console.log(typeof value);//Object

let newValue = Number(value);
console.log(typeof newValue);//number
console.log(newValue);//0

//--------------------------------------

let marks = undefined;
console.log(typeof marks);//undefined

let newMarks = Number(marks);
console.log(typeof newMarks);//number
console.log(newMarks);//NaN

//--------------------------------------

let isPossible = true;
console.log(typeof isPossible);//boolean

let newIsPossible = Number(isPossible);
console.log(typeof newIsPossible);//number
console.log(newIsPossible);//1

//---------------------------------------

let isFollow = false;
console.log(typeof isFollow);//boolean

let newIsFollow = Number(isFollow);
console.log(typeof newIsFollow);//number
console.log(newIsFollow);//0

//----------------------------------------

let loggedIn = 1;
console.log(typeof loggedIn);//number

let newLoggedIn = Boolean(loggedIn);
console.log(typeof newLoggedIn);//boolean
console.log(newLoggedIn);//true

//-----------------------------------------

let someNumber = 38;
console.log(typeof someNumber);//number

let newSomeNumber = String(someNumber);
console.log(typeof newSomeNumber);//string
console.log(newSomeNumber);//38

/*************************OPERATIONS************************ */

let val = 3;
let negValue = -val;
console.log(negValue); // -3

/*

console.log(2+2);//4
console.log(2-2);//0
console.log(2*2);//4
console.log(2/2);//1
console.log(2**2);//4
console.log(2%2);//0

*/

let str1 = "Piyush";
let str2 = " Sharma";

let str3 = str1+str2;
console.log(str3); //Piyush Sharma

//-------------------------------------

console.log("1" + 2); // 12
console.log(1 + "2"); // 12

console.log("1" + 2 + 2); //122
console.log(2 + 2 + "1"); //41

//-------------POST-INCREMENT AND PRE-INCREMENT-------------------------

let gameCounter = 100;
gameval = gameCounter++; // postincrement
console.log(gameval); // 100
console.log(gameCounter);// 101


let num = 200;
numval = ++num; // preincrement
console.log(numval); // 201
console.log(Number) // 201



