// // array

 const myArr =[0,1,2,3,4,5] // string can also be stored in array, can be mix of variable

// console.log(myArr[1]); //when

// const myHeors = ["shaktiman"]
// const myArr2 = new Array(1,23,56,5,44)

// // methods

// // myArr2.push(77)
// // myArr2.push(69)
// // myArr2.pop()

// // myArr2.unshift(9)
// // myArr2.shift()

// console.log(myArr.includes(9))
// console.log(myArr2.indexOf(23))


// console.log(myArr2);

// const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);


//slice, splice

console.log("A", myArr)

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B", myArr)

// splice mannupalate the original array but slice dont 
const myn2 = myArr.splice(1,3)
console.log("c", myArr)
console.log(myn2);
