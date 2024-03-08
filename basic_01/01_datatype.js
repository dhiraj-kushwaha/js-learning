"use strict";// treat all js code as newer version

console.log(3+3);

let name= "dhiraj" //string= ""
let age= 133 // int no, => 2 to power 53
// let isloggedIn = flase //boolean = true or false
//null is also a datatype and standalone value
// undefined= 
// symbol = unique

//object 
console.log(typeof null);//object
console.log(typeof undefined);// undefined

// summary of data type

/* // 2 type of datatype 1 is primitive & non primitive which are divided on the basis of how they are stored in the memory and 
also how they are being acessed.

primivite data types= number, string, boolean, null, undifined , symbol and bigInt
non primitive data types are array , objects and funcations 

Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

*/

const score = 100;
const playerName= "hjddsf"
const ifUserloggin = false;
const skills= null;
let userEmail ; 
const bigNumber= 65454545n;
const UserID = Symbol('444');

console.log(typeof( bigNumber));

// non - primitive datatype arary, objects, funcations

const heros = ["saktiman", "Naagraj"];
let objs= {
    name: "dhirraj",
    Ummar: 566,
}

console.log(objs);

//funcations
const myfunction= function(){
    console.log("hello world")
}

console.log(myfunction);