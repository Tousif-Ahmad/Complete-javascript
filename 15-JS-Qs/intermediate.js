// q16. difference between parseInt and Number.
// console.log(parseInt("123.432"));
// console.log(Number("123.432"));

// console.log(parseInt("123.432px"));
// console.log(Number("123.432px"));

// q17. why does 0.1 + 0.2 !== 0.3
// console.log(0.1 + 0.2 === 0.3);
// console.log(0.1 + 0.2);

// q18. Explain floating point precision in javascript.
// the above question is the answer .

// q19. how would you handle high precision decimal math in js.
// let sum = 0.1 + 0.2;
// console.log(sum.toFixed(4), typeof sum);

// q20. what is difference between slice and splice .


// q21.create a function that reverse each word of a given sentence. e.g sam to mas
// let userName = "mai hon sam";
// let finalResult = userName.split(" ").map((word)=>{
//     return word.split("").reverse().join("")
// }).join(" ")
// console.log(finalResult);

// q21. in an array of numbers and strings, add those numbers which are not strings.
// let arr = [1,2,3,"4","5","6", "sam", "uffexx"];

// let finalResult = arr.reduce((acc, prevVal)=>{
//     if (typeof prevVal === "number"){
//         return acc + prevVal;
//     }
//     return acc;
// }, 0)
// console.log(finalResult);


// q22. How would you check if a number is an integer.
// we use Number isInteger(val)

// let num = 10;
// let num2 = "10";
// let num3 = 12.3;

// console.log(Number.isInteger(num));
// console.log(Number.isInteger(num2));
// console.log(Number.isInteger(num3));

// q23. write a js function that reverse a number.
// function reverseNumber(num){
//     let arr = Number(num.toString().split("").reverse().join(""));
//     console.log(arr);
// }
// reverseNumber(10)

// q24. write a js function that returns a passed string with letters in 
// alphabetical orders.
// function alphabeticalOrder(str){
//     // console.log(str.split("").sort().join(""));

// }
// alphabeticalOrder("sam khan");

// q25. capitalize first letter 
// function capitalizeFirstLetter(str){
//     let finalResult = str.split(' ').map((word)=>{
//         // console.log(word);
//         return word.charAt(0).toUpperCase() + word.slice(1);
//     })
//     return finalResult.join(" ");
// }

// let result = capitalizeFirstLetter("sam khan");
// console.log(result);

// q27. write a js function to get the first element of an array. passing a parameter n
// will return n elements of an array.
// let arr = [1,2,3,4,5];
// function getFirstElem(arr, n){
//     if (!n){
//         return arr[0]
//     }
//     else if (n > arr.length){
//         return "array me itne elements to nhii he";
//     }
//     else{
//         return arr.slice(0, n)
//     }
// } 
// let result = getFirstElem(arr, 3);
// console.log(result);

// q28. write a js function to get the number of occurences of each letter 
// in specified string.

// function numberOfOccurence(str){
//     let obj = {};
//     str.split('').forEach(letter => {
//         if (obj.hasOwnProperty(letter)){
//             obj[letter]++;
//         }else{
//             obj[letter] = 1;
//         }
//     });
//     let entries = Object.entries(obj);
//     entries.forEach((entry)=>{
//         console.log(`${entry[0]} apka ${entry[1]} baar aya he..`);
//     })
// }
// numberOfOccurence("manas");

// q29. write a js program to find the most frequent item of an array.


// q30. write a program to shuffle an array.
let arr = [1,2,3,4,5];
for (let ind in arr){
    let randomIndex = Math.floor(Math.random() * arr.length);
    // let temp = arr[ind];
    // arr[ind] = arr[randomIndex];
    // arr[randomIndex] = temp;
    [arr[randomIndex], arr[ind]] = [arr[ind], arr[randomIndex]]

}
console.log(arr);