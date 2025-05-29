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



