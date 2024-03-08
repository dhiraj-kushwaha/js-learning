let scrore = "fds"

// console.log(typeof(scrore));
// console.log(typeof scrore);

let valueInNumber = Number(scrore)
// console.log(typeof valueInNumber);

let dhikd = "trying null"

// let scrore1 = null
// console.log(typeof scrore1);

//conversion notes-
/*"33" = 33
"33adsd" = NaN (not a number ) this happens when we try to convert not a pure no. into the no. like 333abc
true =1, false = 0*/

let isloggedIn = 0

let booleanIsLoggedIn = Boolean (isloggedIn)
// console.log(booleanIsLoggedIn)

let somestring = 33
let stringno = String(somestring)
// console.log(typeof stringno);


//*********************Operations  */

let value =4
let negvalue= -value
console.log(negvalue);
 
// console.log(2+2);
// console.log(2*2);
// console.log(2**3); // 2 to the power 3
// console.log(2%3);

let str1 = "hello"
let str2 = "dhiraj"

let str3 = str1 + str2;

console.log(str3)

console.log("1"+3);// in this case it will marge the 2 values
console.log("1"+3+2);// in this case also it will marge the values one by one
console.log(1+"3");// in this case also it will marge the values
console.log(1+3+"1");// but in this case it will add the fast 2 values and then marge the last value

// this is why it is imp to write clean code and also properly should give the breakats ()

console.log((3+2) * 5 % 2)
