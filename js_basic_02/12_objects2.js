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

const obj3 = {obj1, obj2}
console.log(obj3);