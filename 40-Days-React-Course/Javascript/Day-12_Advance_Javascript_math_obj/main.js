let UserData = {
    name : 'Kajal',
    age : 23,
    profession : "SE I",
    isActive : true
}

// Object.keys()

// let keys = Object.keys(UserData)
// console.log(keys);

// Object.values()

// let keys = Object.values(UserData)
// console.log(keys);

// Object.entries()

// let keys = Object.entries(UserData)
// console.log(keys);

// Object .assign

// let obj1 = {
//     CourseName : 'Javascript',
//     price : 500,
// }

// let obj2 = {
//     teacherName : 'Suraj',
//     age : 50
// }
// // obj3 = {}
// console.log(Object.assign(obj1 , obj2));

//  Object.hasOwnProperty()

// console.log(UserData.hasOwnProperty("name")); 


// let myObj = {
//     name: 'Rahul',
//     age: 23,
//     isActive: trueW
// }

// let myNewObj = new myObj
// let currentDate = new Date();

// console.log(currentDate);


// *Arguments

// let specificDate = new Date("2020-03-25")

// console.log(specificDate);


// *year, month, day, hour, minute, second, and millisecond values.

// let specificDate = new Date(2024 , 0 , 5 , 10 , 20 , 30 ,999 )

// console.log(specificDate);


// *getDate()

// let currentDate = new Date();
// console.log(currentDate.getDate())

// *getMonth()

// let currentDate = new Date();
// console.log(currentDate.getMonth())

// *getFullYear()

// let currentDate = new Date();
// console.log(currentDate.getFullYear())



// Settings Date

// *setDate(day)
// let currentDate = new Date();

// currentDate.setDate(15)

// console.log(currentDate.getDate())

// *setMonth(month)

// let currentDate = new Date();

// currentDate.setMonth(1)

// console.log(currentDate.getMonth())

// *setFullYear(year)

// let currentDate = new Date()

// currentDate.setFullYear(2022)

// console.log(currentDate.getFullYear())


// Formatting functions

let currentDate = new Date()

// console.log(currentDate.toDateString())

// console.log(currentDate.toTimeString())

// console.log(currentDate.toLocaleString("en-IN",{
//     weekday: "long",
//     year: "numeric",
//     month: "numeric",
//     day: "numeric",
//     hour: "numeric",
//     minute: "numeric",
// }))

console.log(currentDate.toISOString())