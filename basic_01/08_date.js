// Date
// let myDate1= Date
// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleDateString())
//  console.log(myDate1);

// let myCreatedDate = new Date(2023, 0, 23, 5,45)
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate1 =  new Date ("2023-01-30")
// console.log(myCreatedDate1.toLocaleString());

// let myTimeStamp = Date.now()

// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())


// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getDay())
console.log(newDate.getMonth())

// `${newDate.getMonth()} and the time`
// important method

newDate.toLocaleString('default', {
    weekday:"long"
})