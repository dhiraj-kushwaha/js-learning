const score= 444

console.log(score)

const balance = new Number(888)
console.log(balance);

console.log(balance.toString().length)
console.log(balance.toFixed(1))//used to add .00 in end

const otherNumber= 123.8966
console.log(otherNumber.toPrecision(3));//value is given to the before . value

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))

// ---------------Maths----------------
// console.log(Math)

console.log(Math.abs(-4)); // is used to convert a nagive value into possitive          
console.log(Math.round(4.6)); // will return a roundoff value
console.log(Math.ceil(4.2)) // will return a greater than large value 
console.log(Math.floor(4.6)); // Will return a smaller round of value
console.log(Math.min(4,5,2,9)) // will help you to get the minimum out of those
console.log(Math.max(4,5,2,5,6,)) // will help you to get the maximum out of those

console.log(Math.random())
console.log((Math.random()*100) +1 )
console.log(Math.floor(Math.random()*10)+1)

const min=20
const max=40
// +++++++++++++formula to get random no. between min and max

console.log(Math.floor(Math.random()*(max - min + 1 )) + min)