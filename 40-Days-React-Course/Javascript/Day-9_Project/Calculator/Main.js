// console.log("Hello");

const display = document.getElementById('display')

// console.log(display);

function appendToDisplay(value) {
    display.value += value
}

function clearDisplay(value) {
    display.value=''
}

function calculate(value) {
    if(display.value==="")
        {
            alert("Please Enter a value")
        }
        let result = eval(display.value)
        display.value=(result)
}

eval("console.log(91+22)")