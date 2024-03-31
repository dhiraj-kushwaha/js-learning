// // // array

//  const myArr =[0,1,2,3,4,5] // string can also be stored in array, can be mix of variable
//  //made changes in arr changed in the mail file like heap 

// // console.log(myArr[1]); //when

// // const myHeors = ["shaktiman"]
// // const myArr2 = new Array(1,23,56,5,44)

// // // methods

// // // myArr2.push(77)
// // // myArr2.push(69)
// // // myArr2.pop()

// // // myArr2.unshift(9)
// // // myArr2.shift()

// // console.log(myArr.includes(9))
// // console.log(myArr2.indexOf(23))


// // console.log(myArr2);

// // const newArr = myArr.join()

// // console.log(myArr);
// // console.log(typeof newArr);


// //slice, splice

// console.log("A", myArr)

// const myn1 = myArr.slice(1,3)
// console.log(myn1);
// console.log("B", myArr)

// // splice mannupalate the original array but slice dont 
// const myn2 = myArr.splice(1,3)
// console.log("c", myArr)
// console.log(myn2);





// 09--3--2-34
const myArr = new Array(1,2,3,4)
const myArr1 = new Array(5,6,7,8)
console.log(myArr[0]);
// myArr.push(6)
// myArr.push(8)

// myArr.pop()// last value of arr will be removed

myArr.unshift(9)//add the value in starting
// myArr.shift()//remove that starting value'

// console.log(myArr)
// console.log(myArr.includes(9))
// console.log(myArr.indexOf(9))

// const newArr = myArr.join()//join also chnage the tyoe of arr from object to string
// console.log(typeof(myArr))
// console.log(typeof(newArr))

//slice ,splice
console.log("A",myArr)

const myn1 = myArr.slice(1,3) // it will pick the value starting for the starting index(1), and will go upto (n-1) to the end value.
console.log(myn1);
console.log("B",myArr) 

//difference between slice and splice is that slice works on n-1(n= end value)but splice works on the end value and splice also change the main arr.

const myn2 = myArr.splice(1,3)// it will pick the vlaue starting form the starting index(1) and will go to the end of the given value.
console.log(myn2);
console.log("C",myArr)













