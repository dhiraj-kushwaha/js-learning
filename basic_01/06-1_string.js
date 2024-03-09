const name1 ='dhiraj';
const letterCount = 6;

// console.log(name1+letterCount);

// console.log(`hello dhiraj kushwaha ${name1} and number of letters are ${letterCount}` )

//prototype methods in string


 const name2 = new String ('dhirajkushwaha')
// console.log(name2.length)
// console.log(name2.toUpperCase())
// console.log(name2.indexOf('h'));

const newstring = name2.substring(0,5)
// console.log(newstring)

const newstring2 = name2.slice(-11,6);
// console.log(newstring2)

//------------trim----------

const trimSpace="            dhiraj jkajij hhs"
const newString3 = trimSpace.trim()
console.log(newString3)

const trimU = "   diraj  jsdf  "
console.log(trimU.trim())

const url ="www.google.com"
// console.log(url.replace('google','pronhub'))
// console.log(url.includes('google'))

//split use to sparate 

const splitTry = "dhiraj*dj-jd"
console.log(splitTry.split('*'));