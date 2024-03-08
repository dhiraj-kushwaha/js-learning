const name1 = "dhiraj";
const letterCount = 6

// console.log(name1 + letterCount);

console.log(`hello dhiraj kushwaha ${name1} and number of letters are ${letterCount}`);

const name2 = new String ('dhirajkushwaha')

// console.log(name2[0]);
// console.log(name2.length);
// console.log(name2.toUpperCase());
// console.log(name2.charAt(3));
// console.log(name2.indexOf('h'));
// console.log(name2.length);

// const newstring = name2.substring(0,5);// start form 0 and goes to n-1
// console.log(newstring)

// const newstring2= name2.slice(-13, 4)//in slice we can also use -negative value to start with reverse 
// console.log(newstring2); 



// *****************trim************** is used to remove the spaces  

const trimSpace= "    dhirajj  jkds dfaf"
const newstring3= trimSpace.trim()

console.log(newstring3)

const trimU = "   diraj  jsdf  "
console.log(trimU.trim())

// replace is used to replace 

const url ="www.google.com"
console.log(url.replace('google','yahoo'))

// include

console.log(url.includes('google'))

//split use to sparate 

const splitTry = "dhiraj-dj-jd"
console.log(splitTry.split('-'));