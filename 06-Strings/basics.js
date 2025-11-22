// strings : 
// let firstName = "Tousif";
// let middleName = "Ahmad";
// let lastName = "Khn";

// let fullName = firstName + " " + middleName + " " + lastName;
// console.log(fullName);

// let fullName = `${firstName} ${middleName} ${lastName}`;
// console.log(fullName);

// console.log("My Name is " + firstName);
// console.log(`My Name is ${firstName}`);

// -------------------- STRING CONSTRUCTOR ----------------------------
// let str = new String("sam");
// console.log(str);

// ---------------- ESCAPE SEQUENCE -------------------------
// let str = "uffexx \nhow are you";
// console.log(str, str.length);

//<--------------------------  STRING ARE IMMUTABLE -------------------------->
// let str = "Hello World";
// console.log(str[0]);
// console.log(str[2]);
// str[0] = "s";
// console.log(str);

// for (let ch of str){
//     console.log(ch);
// }
// for (let ch in str){
//     console.log(ch);
// }


// property => kuch info de rha hota he e.g length kam nhii kr rha hota kuch bta rha hota he.
//  () nhii hota he..
// .
// method => kuch kam rha hota he aur isme () hote hain..

// -------------------- STRING METHODS ----------------------------
// let str = "    Hello";
// let upperCaseStr = str.toUpperCase();
// let lowerCaseStr = str.toLowerCase();
// let trimmedStr = str.trim();

// console.log(str, upperCaseStr, lowerCaseStr, trimmedStr);

// let firstName = "Tousif ";
// let middleName = "Ahmad ";
// let lastName = "Khn";

// let fullName = firstName.concat(middleName, lastName + " sam");
// console.log(fullName);

// let str = "I am a boy";
// let check = str.includes("boy");
// console.log(check);

// let str = "hello";
// let index = str.indexOf("h");
// console.log(index);

// let str = "hello";
// let checkChar = str.charAt(0);
// console.log(checkChar); 

// let str = "I am a boy";
// let replacedStr = str.replace("boy", "man");
// console.log(replacedStr);

// let str = "I am a boy and boy are ";
// let replacedStr = str.replaceAll("boy", "man");
// console.log(replacedStr);


// let userName = "@sam_khan";
// console.log(userName.slice(1));
// console.log(userName.slice(0,3));
// console.log(userName.substring(-1));

// let str = "Hello World";
// console.log(str.split(" "));
