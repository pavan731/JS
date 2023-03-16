console.log("hello world im here");

//variable Keywords
var a= 1000
var a="par"   //redeclared and reinitilaize
console.log(a+" "+a)

let b=" hey"
b= "hi"     //here we can only reinitialize can't redeclare

const c="bye"   // for const we cant reinitialize and cant re declare
console.log(a) 


var e= "hello"
console.log(e)

const d= true
console.log(d)

let f  //undefined
console.log(f)

//in java script we dont have default values

var g =10
var h="hello"
var i=(g-f)
console.log(i)          //Nan

//number, string,boolean,undefined

let j= true
console.log(typeof(a));     //(typeof) it is used to verify type of operator


//equality operator
let k=10
let l="10"
console.log(k==l)//true   (==) is used to compare the values
console.log(k===l)      //  false (===) is used to compare both values and data type
console.log(k!=l);   // false 
console.log(k!==l);  //true

// 13/03/2023
let y=25
let x=25
let z=27

if(y>x&&y>z){
    console.log(y)
}
else if(x>y&&x>z){
    console.log(x)
}
else{
    console.log(z)
}