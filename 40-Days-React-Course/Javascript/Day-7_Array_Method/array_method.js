// let arr = ['suraj' , 'kumar' , 'Jha']
 
// // Push()

// arr.push("Hello","World")

// console.log(arr);


// POP()

// let numbers = [1,2,3,4,5,6,7,8,9,]
// numbers.pop()
// console.log(numbers);


// let numbers = [1,2,3,4,5,6,7,8,9]
// let value = numbers.pop()
// console.log(value);

// toString 

// let numbers = [1,2,3,4,5,6,7,8,9]
// numbers.toString()         // It Doesn't modify original array
// console.log(numbers)
// let r = numbers.toString()
// console.log(r);
// console.log(numbers.toString())

// let numbers = [1,2,3,4,5,6,7,8,9]
// console.log(numbers.join("~"))

//  Shift   removes the first element from an array and returns the removed element

// let heros = ["Thor","Ironman","Captain America","Hulk"]
// let removedHero = heros.shift();
// console.log(removedHero);
// console.log(heros)

// UnShift   --- The unshift() method modifies the original array and returns the new length of the array.

// let foodItems = ["Burger","Pizza","Sandwich"];
// let r = foodItems.unshift("56789")
// console.log(r)
// console.log(foodItems)

// Slice   ----  

// let fruits = ["Apple","Banana","Mango","Orange","Pineapple","Grapes"]
// let r = fruits.slice(2)
// console.log(r);
// console.log(fruits)


// Splice() - Changes the content of an array by removing or replcing existing elements and/or adding new element   (Adding element , Replacing element)

// let toys = ["Car","Bike","Plane","Train","Track"]
// // toys.splice(1,3)

// // toys.splice(2,1,"Motor","Van")
// toys.splice(2,2,"Motor","Van")
// console.log(toys)


// const add =(a,b)=>{
//     return a+b
// }
// const subs =(a,b)=>{
//     return a-b
// }
// const calculator = (num1,num2,operator)=>{
//     return operator(num1,num2)
// }
// console.log(calculator(5,6,add))
// console.log(calculator(5,6,subs))

// array = [1,2,3,4,5,6,7,8]

// array.forEach(function(element , index , array) {
//     console.log(element,index,array)
// });

// array = [1,2,3,4,5,6,7,8]

// array.forEach(function(element) {
//     console.log(element * 2)
// });

// let r = array.forEach(function(element) {
//     return element * 2
// });
// console.log("r",r)

// console.log(array.forEach(function(element) {
//     console.log( element * 2)
// }))


// let r = array.map(function(element,index,array){
//     return element*2
// })

// console.log(r)
// console.log(array)


// array = [1,2,3,4,5,6,7,8,9,10,"5"]

// let r = array.filter(function(element){
//     return element % 2 === 0           // return only those which are true 
// })
// console.log(r);
// console.log(array)


//  let numbers=[1,2,3,4,5,6,7]
//  numbers.reduce(function (prev,curValue,curIndex,arr) {
//     console.log(prev,curValue,curIndex,arr)   
//  })

// let fruits = ["Apple" , "Mango" , "Orange"]

// fruits.reduce(function (prev,curValue,curIndex,arr) {
//     console.log(prev,curValue,curIndex,arr);
// },"Grapes")


let marks = [90,70,80,60]

// marks.reduce(function (prev,curr) {
//     console.log(prev);
// },0)

// let r = marks.reduce(function (prev,curr) {
//     console.log("prv value is ", prev , "cur value is",curr);
//     return prev+curr;
// },0)
// console.log(r);

let toys = ["Car","Bike","Plane","Train","Track"]

toys.splice(2,0,"Motor")
console.log(toys);