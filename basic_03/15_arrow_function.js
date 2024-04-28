// this keywork 

const user ={
    username : "dhhiraj",
    price: 999,


    welcomeMessage: function(){ // this means current const which means the scope 
        console.log(`${this.username}, welcome to the website`);
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "hariom"
// user.welcomeMessage()

// console.log(this)



// we cant use this in funcation 
// function chai(){
//     let username =" dhiraj"
//     console.log(this.username);
// }

// chai()


// const chai = function (){
//     let username ="dhiraj"
//     console.log(this.username)
// }


//arror function 

// const chai = () => {
//     let usernam = "dhiraj";
//     console.log(this)
// }
// chai()


// arrow function () => {}

// const addtwo = (num1 , num2) => {
//     return num1 + num2
// }

// console.log(addtwo(3,4))

const addtwo = (num1 , num2) => num1 + num2 //implesite return which means there is onliny one lne of return 
const addtwo1 = (num1 , num2) =>( num1 + num2 )// {} if useed {} so have to write return

const addtwo3 = (num1, num2) => {username: "hitest"}
// output will be undefined 

const addtwo4 = (num1, num2) => ({username: " dhirja "})
// output will be username:" dhiraj " to proint the object we  need to user ()


console.log(addtwo1(3,4))

