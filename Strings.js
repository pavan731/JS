//Strings

//


// let s="javascript"
// console.log(s[0])  //j
// console.log(s[-1])  //undefined // negative values will not work for index
// console.log(s[10])  // undefined
// console.log(s.length);   // no of elements

//Strings Methods
//StringName.method()
// let s ="Ee sala cup namde"
//charAt (i)  // it returns the character at that index
// console.log(s.charAt(10))

// let j = s.charAt(20)
// console.log(typeof(j))
// console.log();
// let k = console.log
// console.log(k)


//charAt method always returns string as an output



let s = "ee sala cup namde"
//indexOf
console.log(s.indexOf("e"))  //1
console.log(s.indexOf("e",2))  //16

let p ="cup namde"
console.log(p.indexOf("e",-1))

//lastindexOf
console.log(s.lastIndexOf("e"))

//substring //start index,end index(excluded)

let s2 =s.substring(0,4)        //it will not include end index ends with 3
console.log(s2)

//toUppercase toLowercase
console.log(s.toLowerCase())
console.log(s.toUpperCase())

let s3 = 'edited'
//palindrome
function palindrome(w)
{
    let w1 =""
    for(let i=w.length-1;i>=0;i--)
    {
       w1+= w[i] 
    }
    if(w==w1)
    {
        console.log("palindrome")
    }
    else{
        console.log("not a palindrome")
    }
}

palindrome("gadag")