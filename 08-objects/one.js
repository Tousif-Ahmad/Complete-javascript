// Objects => collection of key value pairs.
// const car = {
//     brand : "Mercedes",
//     color : "red",
//     maxSpeed : 180,
//     stop : ()=>{
//         console.log("Stopping the car...");
//     },
//     start : ()=>{
//         console.log("Started the car...");
//     }
// }

// let test = "Sam";
// console.log(car);
// // car.start();
// // car.stop();
// console.log(car["brand"]);
// console.log(car[test]);


// -----------------OBJECT CONSTRUCTOR -----------------------
// let obj = new Object({
//     name : "sam",
//     age : 23,
// })
// console.log(obj);

// -------------------- ACCESSING OBJECT ITEMS --------------------------
// const person = {
//     name : "sam",
//     age : 23,
// }
// person.name = "ufffexx";
// delete person["age"]
// console.log(person);

// const obj = {
//     name : "sam",
//     greet : function(){
//         console.log(`Hello i am ${this.name}`);
//         console.log(this);
//     }
// }
// obj.greet()


// ------------------- OBJECT METHODS -----------------------
// const obj = {
//     name : "sam",
//     age : 23,
// }
// let keys = Object.keys(obj);
// console.log(keys);

// let values = Object.values(obj);
// console.log(values);

// let entries = Object.entries(obj);
// console.log(entries);

// let obj2 = {};
// Object.assign(obj2, obj)
// console.log(obj2);

// Object.freeze(obj);
// obj.name = "ali";
// console.log(obj);


// Object.seal(obj);
// obj.name = "uffexx";
// obj.city = "chitral";
// delete obj.age;
// console.log(obj);

// console.log(obj.hasOwnProperty("name"));

// ----------------------------- DESTRUCTURING -----------------------
const obj = {
    name : "sam",
    age : 23,
}

let {name, age} = obj;
console.log(name)
console.log(age);;