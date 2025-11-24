// SORTING  IN ARRAY 
// let nums = [10, 5, 1];
// nums.sort((a,b)=>{
//     return a - b;
// });
// console.log(nums);


// ---------------------------- ARRAY ITERATION METHODS ---------------------

// MAP =>
// let arr = [5, 6, 14, 20, 1];
// let mappedArr= arr.map((elem, index, ar)=>{
//     console.log(elem, index, ar);
//     return elem * 2;
// })
// console.log("Original array", arr);
// console.log(mappedArr);

// FOREACH 
// let arr = [5, 6, 14, 20, 1];
// arr.forEach((elem)=>{
//     console.log(elem * 2);
// })
// console.log(arr);


// FILTER 
// let arr = [2,1,4,3,6];
// let filteredArr = arr.filter((elem)=>{
//     return elem % 2 === 0;
// })
// console.log(filteredArr);

// REDUCE //
let arr = [1,2,5,9,10];
let sum = arr.reduce((acc, prevVal)=>{
    return acc + prevVal;
}, 0)
console.log(sum);
