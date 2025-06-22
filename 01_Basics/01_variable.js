const accountId = 144553
let accountEmail = "ankan****@gmail.com"
// prefer not to use var because of issue in block scope and functional scope
var accountPassword = "12345"
accountCity = "Haora"

//undefined
let accountState;
// accountId = 2

accountEmail = "XXXXXXXXX";
accountPassword = "12894964146"
accountCity = "Delhi"
console.log(accountId);
//prints the variables in tabular form and converts it in array type like the first variable is at index 0 and the value is the value, stored in that variable 
console.table([accountId, accountEmail, accountPassword, accountCity])

