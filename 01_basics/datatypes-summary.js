/* PRIMITIVE DATATYPES 

 (7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt)

*/

//--------------------------------------------------------------------

/* (NON-PRIMITIVE)REFERENCE TYPES

(Array, Objects, Functions)

*/

//--------------------------------------------------------------------

/* NOTE : JavaScript is dynamic (No need to declare data type of a variable) */

//--------------------------------------------------------------------

/* PRIMITIVE DATATYPES */

const score = 100; //number
const scoreValue = 100.3; //number

const isLoggedIn = false; //boolean
const outsideTemp = null; //null

let userEmail; //undefined

//------------------------------------------------------------------

const id = Symbol('123'); // symbol (Uniquely identify)
const anotherId = Symbol('123'); //symbol( Uniquely identify)

console.log(id===anotherId); //False

//------------------------------------------------------------------

const bigNumber = 34353654665434535n; // BigInt



//------------------------------------------------------------------
//------------------------------------------------------------------
//------------------------------------------------------------------


/* NON-PRIMITIVE DATATYPES */

//ARRAY
const heroes = ["Spiderman","Ironman","Hulk","Thor","Caiptain America"]; // Array

//--------------------------------------------------------------------------------

//OBJECT

let myObj = {

    name:"Piyush",//key of Object
    age:22, //key of Object
};

//--------------------------------------------------------------------------------

//FUNCTIONS

const myFunction = function(){
    console.log("Hello Piyush");
}

//--------------------------------------------------------------------------------






