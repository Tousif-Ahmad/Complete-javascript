// q1.
// const person = {
//     name : "Sam",
//     age : 23,
//     city : "chitral",

// }

// person.email = "sam@gmail.com";
// delete person.city;
// for (let item in person){
//     console.log(item , person[item]);
// }

// q2.

// const obj = {
//     firstName : "tousif",
//     middlename : "ahmad",
//     lastName : "khan"
// }

// function fullName(obj){
//     let values = Object.values(obj);
//     return values.join(" ")
// }
// console.log(fullName(obj));

// q3. 
// const obj = {
//     firstName : "tousif",
//     middlename : "ahmad",
//     lastName : "khan"
// }

// function noOfprop(obj){
//     let keys = Object.values(obj);
//     return keys.length;
// }
// console.log(noOfprop(obj));


// q4..
// const users = [
//     {name : "Alice", role : "admin"},
//     {name : "Bob", role : "user"},
//     {name : "charlie", role : "admin"},
//     {name : "sam", role : "admin"},
//     {name : "uffexx", role : "admin"}
// ]

// let filteredUsers = users.filter((item)=>{
//     return item.role === "admin"
// })
// let finalArray = filteredUsers.map(user=>{
//     return user.name;
// })
// console.log(finalArray);

// q5..
// const products = [
//     {id : 1, name : "Iphone 14"},
//     {id : 2, name : "samsung galaxy"},
//     {id : 3, name : "Google Pixel"},
// ]

// function searchProducts(products, keywords){
//     let filteredArray = products.filter((item)=>{
//         return item.name.toLowerCase().includes(keywords.toLowerCase());
//     })
//     return filteredArray;
// }
// let result = searchProducts(products, "phone");
// console.log(result);

// q6..
// const comments = [
//     {postId : 1, text : "great post"},
//     {postId : 2, text : "Thanks"},
//     {postId : 1, text : "very helpful"},
// ]

// function groupedPost(comments){
//     let groupedComments = {};
//     comments.forEach((obj)=>{
//         if (groupedComments.hasOwnProperty(obj.postId)){
//             groupedComments[obj.postId].push(obj.text)
//         }
//         else{
//             groupedComments[obj.postId] = [obj.text];
//         }
//     })
//     console.log(groupedComments);
// }
// groupedPost(comments)

// q7..
const params = {
    search : "laptop",
    page : 2,
    sort : "asc",
}

function createurl(params){
    console.log(`${params.search}&${params.page}&${params.sort}`);
}
createurl(params)