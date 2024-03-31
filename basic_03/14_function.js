//function is used to store the code in packet and we can call it multiple times 

// console.log("H");
// console.log("I");
// console.log("T");

//creating a function 

function sayMyname (){
    
console.log("H");
console.log("I");
console.log("T");

}

//sayMyname() //function call and excicution 

// function addTwoNumbers(num1, num2){ // parameters
//    console.log(num1 + num2);

// }

function addTwoNumbers(num1, num2){ // parameters
    // console.log(num1 + num2);
    // let result = num1 + num2
    // return result 
    // console.log(dhiaj); // unreachable code as it is return after return
    
    return num1 + num2;  // it wil save the space
 }

const result = addTwoNumbers(2,5) // argument

console.log(result);

