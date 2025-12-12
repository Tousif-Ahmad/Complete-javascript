// q1. create a function that returns the last element of an array.
// let arr = ["sam", "rima", "aina", "uffexx"];

// function returnLastElem(arr){
//     return arr[arr.length-1]
// }
// let result = returnLastElem(arr);
// console.log(result);

// q2. find the combination of two arrays 
// let arr1 = [1,2,3,4];
// let arr2 = [5,6,7,8];
// // let arr3 = arr1.concat(arr2);
// let arr3 = [...arr1, ...arr2]
// console.log(arr3);

// q3. generate a random number between 1 and 18;
// function generateRadomNumber(){
//     let randomNum = Math.floor(Math.random() * 18) + 1;
//     console.log(randomNum);
// }
// generateRadomNumber();

// q4. create a function that takes an array containing both numbers and strings
// and returns a new array containing only the string values.

// let mixedArr = ["sam", "aina", 1,2,34,8, "10"];
// function returnOnlyStrings(arr){
//     let filteredArray = arr.filter((elem)=>{
//         return typeof elem === "string";
//     })
//     return filteredArray;
// }
// let ans = returnOnlyStrings(mixedArr);
// console.log(ans);

// q5. find the maximum number in an array 
// let nums = [1,2,3,4,5];
// function findMaxNumber(arr){
//     console.log(Math.max(...arr));
// }
// findMaxNumber(nums)
// Math.max(...arr)

// ------------ 2nd method -------
// let nums = [1,2,3,4,5];
// function findMaxNumber(arr){
//     let max = arr[0];
//     for (let i = 1; i<arr.length; i++){
//         if (arr[i] > max){
//             max = arr[i];
//         }
//     }
//     return max;
// }
// let result = findMaxNumber(nums);
// console.log(result);

// q6. write a function that returns the length of a given object (no of keys);
// let person = {
//     name : "sam",
//     age : 23,
//     city : "chitral"
// }

// function getKeysOfObject(obj){
//     let keys = Object.keys(obj);
//     return keys.length;
// }
// console.log(getKeysOfObject(person));

// q7. in an array of objects filter out those objects which have gender value male.
// let arr = [
//     {name : "Sam", gender : "female"},
//     {name : "ufffexx", gender : "male"},
//     {name : "asif", gender : "male"},
// ]

// let filteredArray = arr.filter((obj)=>{
//     return obj.gender === "male"
// })
// console.log(filteredArray);


// q8. give an array of strings, return new array where all strings are in uppercase.
// let arr = ["sam", "aina", "uffexx", "rima"];
// let mappedArray = arr.map((elem)=>{
//     return elem.toUpperCase();
// })
// console.log(mappedArray);

// q9. check if an object is empty (has no key);
// let person = {
//     name : "sam",
//     age : 22,
//     city : "chitral"
// }
// let keys = Object.keys(person);
// if (keys.length === 0){
//     console.log("it's an empty object");
// }
// else{
//     console.log("it's not an empty object");
// }

// q10. create an array of numbers and double each value using .map();
// let nums = [2,4,6,8];
// let doubleNumbers = nums.map((num)=>{
//     return num * 2;
// })
// console.log(doubleNumbers);

// q11. convert an array of strings into a single comma separated string.
// let strArr = ["sam","aina", "uffex"];
// console.log(strArr.join(","));

// q12. write a function to flatten a nested array (one level deep);
// let nestedArr = [1, [2,3], 4,];
// let flattenArr= nestedArr.flat();
// console.log(flattenArr);
// console.log(nestedArr);

// q13. write a function that checks if all elements in an array are numbers.
// let arr = ["sam", false, undefined, 1,2,3,4,"8"];
// let result = arr.every((elem)=>{
//     return typeof elem === "number"
// })
// console.log(result);

// q14. Build a simple isPrime function to check if a function is prime.
// function checkIsPrime(num){
//   if (num <= 1) return false; /* 0 and 1 are not prime */
//   if (num === 2) return true; /* 2 is prime */
//   if (num % 2 === 0) return false; /* even numbers greater than 2 are not prime */

//   for (let i = 3; i * i <= num; i+=2){
//     if (num % i === 0){
//         return false;
//     }
//   }
//   return true;
// }

// console.log(checkIsPrime(1));
// console.log(checkIsPrime(2));
// console.log(checkIsPrime(3));
// console.log(checkIsPrime(4));
// console.log(checkIsPrime(8));
// console.log(checkIsPrime(9));

// -------------------2nd approach-----------------------------------------------
function isPrime(num){
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++){
        if (num % i === 0){
            return false;
        }
    }
    return true;
}
console.log(isPrime(2));
console.log(isPrime(9));
console.log(isPrime(1));

// 15. create a function that removes duplicate values form an array.
// let arr = [1,2,3,2,5,3];
// function removeDuplicates(arr){
//     return [...new Set(arr)]
//     // return (new Set(arr));
// }
// console.log(removeDuplicates(arr));

// ------------------2nd approach----------------------
// function removeDuplicates(arr){
//     let result = [];
//     for (let i = 0; i<arr.length; i++){
//         if (!result.includes(arr[i])){
//             result.push(arr[i])
//         }
//     }
//     return result;
// }
// console.log(removeDuplicates(arr));