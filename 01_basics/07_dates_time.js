let myDate = new Date();
console.log(myDate.toString());

console.log(myDate.toISOString());
console.log(myDate.toJSON());

console.log(myDate.toLocaleString()); // 5/30/2025, 6:48:26 AM

console.log(typeof myDate); //Object

//---------------------------------------------------------------

let myCreatedDate = new Date(2023, 0, 23, 5, 3); // Month started with zero(0) in JS
console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023

//----------------------------------------------------------------

let createdDATE = new Date("23-01-14"); // Invalid date
console.log(createdDATE.toLocaleString());

let newCreatedDATE = new Date("01-14-2023");
console.log(newCreatedDATE.toLocaleString()); // 1/14/2023, 12:00:00 AM

//------------------------------------------------------------------


let myTimeStamp = Date.now();
// console.log(myTimeStamp); // 1748588195815
// console.log(newCreatedDATE.getTime()); // 1673654400000


//-------------------------------------------------------------------


// converted in milivsecond
console.log(Math.floor(Date.now()/1000));

//-------------------------------------------------------------------

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());  // 4 (May) because month start from 0 in js
console.log(myDate.getDay()); //  5 (Friday)

//--------------------------------------------------------------------

newDate.toLocaleString(' default',{
    weekday: "long",
});
