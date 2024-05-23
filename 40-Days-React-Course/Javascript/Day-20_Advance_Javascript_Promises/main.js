// *Creation of Promise
// let MyPromise = new Promise(()=>{
//     console.log("Hello World this is my Promise");
// })

// new Promise(() => {
//     console.log("Hello");
// })


// Promise States
// 1. Pending
// 2. Resolved
// 3. Rejected


// let MyPromise = new Promise((resolve, reject) => {
//     console.log("Hello World this is my Promise");
//     resolve()
// })
// // *Consuption of Promise

// // 1. then()
// // 2. catch()
// // 3. finally()~

// MyPromise.then(()=>{
//     console.log("My Promise Resolved");
// })


// Promise States
// 1. Pending
// 2. Resolved
// 3. Rejected


// let MyPromise = new Promise((resolve, reject) => {
//     console.log("Hello World this is my Promise");
//     // resolve()
//     reject()
// })
// // *Consuption of Promise

// // 1. then()
// // 2. catch()
// // 3. finally()~

// MyPromise.catch(()=>{
//     console.log("My Promise Reject");
// })



// Promise States
// 1. Pending
// 2. Resolved
// 3. Rejected


// let MyPromise = new Promise((resolve, reject) => {
//     console.log("Hello World this is my Promise");
//     // resolve("My Promise Resolved")
//     reject("Hello This is Reject")
// })
// // *Consuption of Promise

// // 1. then()
// // 2. catch()
// // 3. finally()~

// MyPromise.then((value)=>{
//     console.log(value);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log("I Will Always Run ");
// })



// let MyPromise = new Promise((resolve, reject) => {
//     resolve({name:"Kajal",age:23})
// })
// // *Consuption of Promise

// // 1. then()
// // 2. catch()
// // 3. finally()~

// MyPromise.then((value)=>{
//     console.log(value);
// })

// let age = 18

// let Age_Checker_Vote = new Promise((resolve , reject)=>{
//         if(age>18){
//             resolve("You can Vote");
//         }
//         else{
//             reject("You can't Vote")
//         }

// })

// Age_Checker_Vote.then((value)=>{
//     console.log(value);
// }).catch((error)=>{
//     console.log(error);
// })

fetch("https://api.github.com/users/Aestheticsuraj234")
.then((data)=>{
    return data.json()
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})