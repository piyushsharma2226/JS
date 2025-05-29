console.log(2>1);//true
console.log(2>=1);//true
console.log(2<1);//false
console.log(2==1);//false
console.log(2!=1);//true

console.log("2" > 1); //true (automatically converted string to number)
console.log("02" > 1); //true (automatically converted string to number)

console.log(null>0); //false
console.log(null==0); //false
console.log(null>=0);  //true
/* The reason is that an equality check == and comparisons > < >= <= work differently.
 Comparison convert null to a number, treating it as 0. That is why {null>=0} is true and {null>0} is false.
 */

 console.log(undefined ==0); // false
 console.log(undefined > 0); // false
 console.log(undefined < 0); // false
 console.log(undefined <= 0); // false

/* === */ 
// Strict check
/* === "It check datatypes also" */

console.log("2" === 2); // false



 