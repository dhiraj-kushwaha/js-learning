// singleton object
//const tinderUser = new object()/// singleton user
const tinderUser = {}// non singleton object

tinderUser.id = "i43re"
tinderUser.name = "dhiraj"
tinderUser.isloggIn= false
// console.log(tinderUser)

const regularUser ={ 
    email: "dhiraj@gmail.comm",
    fullname:{                       /// we can use multiple object into a object
        userfullname: {
            firstname: "dhirajj",
            lastname: "kushwaha"
        } 
    }
}



// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2: "jj"}
const obj2 = {3:"as", 4: "jdj"}
// to marge to object 

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign (obj1,obj2) // it will marge the given object in the (==) but we can do it in another way as well

const obj3 = Object.assign ({},obj1,obj2)// {} it works as target,it is not compalsory but it is good to user

const obj4 = {...obj1,...obj2} // it will also marge the object but it will spread the object and then marge it
console.log(obj4);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },{
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    }

]

users[1].email

console.log(tinderUser)
console.log(Object.keys(tinderUser))// use to get the alll key in a object and it datatype in array

console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty(isloggIn))
