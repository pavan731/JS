// // function sum(a,b)
// // {
// //     return (a+b)
// // }
// // console.log(sum(10,20))

// //arrow functions => The upgraded version of functions
// //syntax : it doest has function keyword

// // let sum =(a,b)=> a+b
// // {
// //     return a+b
// // }
// let sum =(a,b)=> a+b
// console.log(sum(10,30))      //40

// let square =(x) => x**2
// console.log(square(10))      //100

//callback functions
//==>argument will be another function

//Three types 1)map()  2)filter   3)reduce()

// let arr = [1,2,3,4,5]
// //square all the elements
// for(let i=0;i<= arr.length; i++)
// {
//     console.log(arr[i]**2)
// }

// //1) map() == it takes function as argument
// // it will return in same arry output
// // let a = [1,2,3]
// let result = arr.map((x)=>{
//     return x**2 
// })
// console.log(result)
//map it performs only operations
// let arr =[1,2,3,4,5]
// let result = arr.map((x)=>x>2)
// console.log(result)      //[ false, false, true, true, true ]


//2) filter() == it takes the callback function as an argument
        //  based on the condition it will filter the array elements

// let arr = [1,2,3,4,5]
// // let res = arr.filter((x)=>x>2)            //[ 3, 4, 5 ]
// //let res = arr.filter((x)=>x%2==0)       //[ 2, 4 ]
// //let res = arr.filter((x)=>x%2)              //[ 1, 3, 5 ]
// //when ever 1 is output it returns true if it is zero it returns false

// console.log(res)

// let arr =[1,2,3,4,5]
// let result = arr.filter((x)=>x>2)
// console.log(result)                 //[ 3, 4, 5 ]

//when ever we have multiple lines of code we use {}
//when ever we only single line of code no need braces


// 3)reduce ==> it is used to reduce the sum of the given values


// let arr = [1,2,3,4,5]

// let res = arr.reduce((sum,x)=>{
//     return sum += x
// },0)
// console.log(res)        //15

