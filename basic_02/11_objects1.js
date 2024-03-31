// if obj is created in const so it will be a singleton
//obj . create


const mySym = Symbol("myKey")
const jsUser = {
    name: "dhiraj",
    phone:4562,  // key and value pair  where --name -- is key and --dhiraj- -- is the value
    age: 19,
    email:"dhiarha@gmail.com",
    [mySym] : "mykkeyinsymbol",
    isLoggedIn : false,
    lastLoginday : ["monday","saturday"]
}
// whhat if we have to declare a symbol and use it as a key in a object goto line 4 and 17,18
// console.log(jsUser.name)
// console.log(jsUser["name"])
// console.log(jsUser[mySym])
// console.log(typeof (jsUser[mySym]))

//--- Object.freeze(jsUser)      //use to freze the object so no changes canbe made
jsUser.email = "gooogle@gmail.copm"
console.log(jsUser["email"])
console.log(jsUser)


jsUser.greeting = function(){
    console.log(`hello js user, ${this.name}`)
}

console.log(jsUser.greeting())


