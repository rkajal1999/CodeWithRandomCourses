// template strings : 

// const firstName = 'Kajal';
// const lastName = 'Kumari';
// const age = `30`;

// let fullname = firstName + " " +lastName;

// fullname = `${firstName} ${lastName} is very great person and her age is ${age} `
// let phrase = "this is kajal from this side \n age  23 "
// phrase = `this is kajal
// wertyj
// dfghjk
// sdfghj
// `

// console.log(phrase);


//   *** Rest and Spread Operator


// Rest 

// function AddThreeNums(a,b,c) {
//     return a + b + c;
// }
// let result = AddThreeNums(10,20,30)
// console.log(result);

// function AddNumbers(...numbers) {
//     return numbers.reduce((sum , number)=> sum + number , 0)
// }

// let res = AddNumbers(10,20,30,40,50,60,70,80,90,100)
// console.log(`Result is ${res}`);


// function FruitBasket(...fruits) {
//     console.log(fruits);
// }5

// function FruitBasket() {
//     console.log(arguments);
// }

// FruitBasket('Apple', 'Banana', 'Mango', 'Orange', 'Grapes', 'Pineapple', 'Papaya', 'Guava', 'Kiwi', 'Watermelon', 'Muskmelon', 'Pomegranate', 'Strawberry', 'Blueberry', 'Raspberry')

// Spread  operator 


let FruitsEmojis = ['🍎', '🍌', '🥭', '🍊', '🍇' ,['🍔']]     // nested array mever make shallow copy its change in actual array


let VegetablesEmojis=['🥦', '🥕', '🥒', '🌽', '🥬']

let foodItems = [...FruitsEmojis , ...VegetablesEmojis]

foodItems[5][0]='🍟'

console.log(FruitsEmojis);
console.log(foodItems);


foodItems[0]='🍐'
console.log('papaya',foodItems);
console.log('papaya',FruitsEmojis);
// console.log(foodItems);

// console.log(...FruitsEmojis , ...VegetablesEmojis);