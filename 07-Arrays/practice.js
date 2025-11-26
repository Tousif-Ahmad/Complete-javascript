// q1
// let marks = [20,30,40,50,60];
// first approach 
// let average = (marks[0] + marks[1] + marks[2] + marks[3] + marks[4])/5;

// second approach 
// let averageMarks = marks.reduce((acc, prev)=>{
//     return acc + prev / marks.length;
// }, 0)
// console.log(averageMarks);

// q2. 
// let arr = new Array(20).fill(0);
// console.log(arr);

// q3.
// const heroes = ["ironman", "captain", "black widow", "wanda", "hulk", "black panther"];
// heroes.unshift("Thor");
// heroes.push("Spiderman");
// heroes.splice(3, 1, "Hawkeye");
// let bool = heroes.includes("captain");
// console.log(bool);
// console.log(heroes);

// q4. 
// let str = "122";
// let arr = str.split("");
// let reversed = arr.slice().reverse().join("");
// if (str === reversed){
//     console.log("it's a palindrome");
// }
// else{
//     console.log("Not a palindrome..");
// }

// q5. 
// let arr = new Array(25).fill(0);
// arr.forEach((elem, index)=>{
//     arr[index] = index + 1;
// })
// console.log(arr);


// q6..
// let str = "sam";
// console.log(Array.isArray(str));

// let test = {
//     name : "ali",

// };
// console.log(Array.from(test));


// let a = "sam";
// let b = 8;
// let c = {
//     name : "uffexx",
// }
// let d = [1,2,3]

// console.log(Array.of(a,b,c,d));

// q7...........
// let str = "hello how are you";
// let newStr = str.split(" ").map((elem)=>{
//     return elem.charAt(0).toUpperCase() + elem.slice(1);
// })
// let finalArr = newStr.join(" ");
// console.log(finalArr);


// const users = [
//     ["alice", 25],
//     ["sam", 22],
//     ["ufffexx", 20],
// ]


// let arr2 = users.map(([name, age])=>{
//     return {name, age}
// })
// console.log(arr2);
