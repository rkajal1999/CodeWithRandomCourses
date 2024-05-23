function checkPalindrome(params) {
    const inputText = document.getElementById('inputText').value.toLowerCase();
    // console.log(inputText)
    const reverseText = inputText.split("").reverse().join("")    // ---chaining
    console.log(reverseText);
    document.getElementById("reverseText").innerHTML=reverseText

    if(inputText === reverseText)
        {


            document.getElementById("result").innerHTML=  'Yes, It is Palindrome'
        }
    else
    {
        document.getElementById("result").innerHTML='No, It is not Palindrome'
    }

}

// let name='kajal'
//  let sep = name.split("").reverse().join('')
//  console.log(sep)