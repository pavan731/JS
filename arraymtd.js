// //array methods

// //arrayName.method()

// let a =[1,2,3,4,5]
// //push(we can add more than 1 element)
// // a.push(100)
// // console.log(a)  //[ 1, 2, 3, 4, 5, 100 ]

// // //pop
// // a.pop() // removes the last element
// // console.log(a);  //[ 1, 2, 3, 4 ]

// //unshift
// // a.unshift("hello") //adds elements to the first index
// // console.log(a)  //[ 'hello', 1, 2, 3, 4, 5 ]

// //shift
// // a.shift()  // removes 1st element
// // console.log(a)

// //splice                //used remove elements
// // a.splice(1,2)          // syntax(from element,number of elements)
// // console.log(a)

// //to remove all the elements
// // a.splice(0,a.length)
// // console.log(a)              //  []

// //to add elements inbetween
// // a.splice(2,0,100,200)           //syntax(from element,no of elements to be deleted,values,values)
// // console.log(a)

// let b=[]
// // for(let i=a.length-1;i>=0;i--)
// // {
// //     b.push(a[i])
    
// // }
// // console.log(b)       //[ 5, 4, 3, 2, 1 ]

// for(let i=0; i<a.length;i++)
// {
//     b.unshift(a[i])
// }
// console.log(b)              //[ 5, 4, 3, 2, 1 ]




let a =[1,2,3,4,5,7]
let flag= false;
for(let i=0;i<a.length;i++)
{
    if(a[i]==7)
    {
        flag=true
    }
    else{
    flag=false
    }
    console.log(flag)
}







