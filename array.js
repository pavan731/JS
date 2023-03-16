//arrays

//arrays are called fiction of data which can be of different datatypes

//array methods
//syntax : arrayName.method()
//1) push =used to add the elements to the end of the array
//          we can add multiple elements
//2) pom = used to remove the last element of the array
//3) unshift = used to add a new elements to the beginning of array
           //     and pushes all the elements to the higher index
//4) Shift = used to remove the first element of the array and shifts
// all the other elements to the lower index
//5) Splice = used to add or remove elements from array from any index position
    //splice syntax : (start index,deleteindex,newElement..)


// it is heterogeneous collection data(any type)
//array length is not fixed

let a=[1,1,5,"hello",true]
console.log(a[0]);
a[3] = false // re-initialize
console.log(a[4]);  //undefinied
a[5] = 100 // adding a new element
console.log(a)


