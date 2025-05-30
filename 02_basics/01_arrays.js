/* Arrays */

const myArr = [0,1,2,3,4,5];
// JavaScript arrays are resizable

console.log(myArr[0]);

const myHeroes = ["Spider man", "Iron man", "Hulk", "Caiptain America", "Thor"];
 console.log(myHeroes[2]);

 //------------------------------------------------------------------------------

 // Another way to declare arrays

 const myArr2 = new Array(1,2,3,4,5);
 console.log(myArr2);
 console.log(myArr[3]);

 //-------------------------------------------------------------------------------

 /* METHODS IN ARRAYS */

 myArr.push(6);
 console.log(myArr); // add element in last
 myArr.push(7);
 console.log(myArr);
 
 //-------------------------------------------

 myArr.pop();
 console.log(myArr); // remove element from last

 //--------------------------------------------

 myArr.unshift(9);
 console.log(myArr); // add element in first

 //--------------------------------------------
 
 myArr.shift();
 console.log(myArr); // remove element from first

 //--------------------------------------------

 console.log(myArr.includes(9)); // ask questions
 //Output: False

 console.log(myArr.indexOf(9)); 
 //Output: -1

 //----------------------------------------------

 const newArr = myArr.join(); // removes square bracket

 console.log(myArr); // Output: [0,1,2,3,4,5,6]
 console.log(newArr);// Output: 0,1,2,3,4,5,6

 console.log(typeof myArr); // Object
 console.log(typeof newArr);// String

 //------------------------------------------------

 /* slice, splice */

 console.log("A", myArr); // [0,1,2,3,4,5,6]

 const myn1 = myArr.slice(1,3);
 console.log(myn1); // Output: [1,2]


 const myn2 = myArr.splice(1,3);
 console.log(myn2); // Output:[1,2,3]

 console.log("c", myArr); // Output:[0,4,5,6]

 //--------------------------------------------------