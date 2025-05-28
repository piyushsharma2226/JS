const accountId = 144553;
let accountEmail = "piyushxrma222@google.com";
var accountPassword = 243456;
accountCity = "Delhi";
let accountState;

// accountId = 2;  (const can not be change)
console.log(accountId);

accountEmail = "piyush23@gmail.com";
accountPassword = 22343532;
console.log(accountEmail);
console.log(accountPassword);

/* Prefer not to use var
because of issue in block scope and functional scope */

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);