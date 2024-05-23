// POP UP Box

// let MyAlert = alert('This is an alert box');

// console.log(MyAlert)

// let Confirm = confirm('Do You want to continue')

// console.log(Confirm)

// let Prompt = prompt('Enter Your Name')

// console.log(Prompt)


///      Condition     //////

// let UserAge = prompt('Enter Your Age');

// if(UserAge>=18){
//     console.log("You are eligible for Vote");
// }
// else if(UserAge==16){
//     console.log("You are 16 year old");
// }
// else{
//     console.log("You are not eligble for Vote");
// }

// Switch-Case

// let FastFood = "Burger";

// switch(FastFood){
//     case "Pizza":
//     console.log("You have selected Burger");
//     break;
//     case "Burger":
//     console.log("You have selected Burger");
//     break;
//     default:
//     console.log("You hve selected something else");
//     break;
// }

////         Ternary Operator    ////

// let UserAge = 18;

// let Message = UserAge>=18 ? "You are eliglbe for Vote" : "You are not eligble for vote";

// console.log(Message)


// let FruitName = "Apple"

// let Message = FruitName==="Apple" ? "This is Apple" : "This is not Apple";

// console.log(Message)
debugger
const add =(a,b)=>{
    return a+b
}
const subs =(a,b)=>{
    return a-b
}
const calculator = (num1,num2,operator)=>{
    return operator(num1,num2)
}
console.log(calculator(5,6,add))
console.log(calculator(5,6,subs))