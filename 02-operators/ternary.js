// TERNARY OPERATOR 
// (condition ? execute if condition is true : execute if condition if false)

// let age = 23;
// let result = age >= 23 ? "you can vote" : "you can't vote";
// console.log(result);

// challenge 2 
// let age = 23;
// let message = age >= 18 ? "Eligible for booking" : "Not eligible for booking";
// console.log(message);

// challenge 3
// let userName = "sam";
// let password = "sam321";

// let message = userName && password ? "login successful" : "Both fields are required";
// console.log(message); 


// TRUTHY VS FALSY VALUES 
// falsy => false, null, undefined , 0, -0 0n, "", NAN
// truthy => anything which is not truthy.

// let result = ("" && "sam") ? "statement1" : "statement2";
// console.log(result);



// SHORT CIRCUITING 
// let ans = "" || undefined || "sam" || null;
// console.log(ans);

// let ans = "ali" && undefined && "sam" && null;
// console.log(ans);



// NULLISH COALESCING => returns the right hand value only if the left is null or undefined.
// let result = "" ?? "sam";
// console.log(result); 


// let result = undefined ?? "sam";
// console.log(result); 