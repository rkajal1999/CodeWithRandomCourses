let MyUL = document.getElementById('my-ul');
let Li = document.querySelector('li');
let anc = document.querySelector('#myAnchor');
let body = document.querySelector('body');

let btn = document.getElementById('btn');

body.addEventListener("click",function (e) {
    e.stopPropagation()
    console.log("Body is Clicked");
},false)

btn.addEventListener("click" , function(e){
    console.log("Button is clicked");
   
} , true)


MyUL.addEventListener("click", function (e) {
    e.stopPropagation();
    console.log("UL is clicked");
},false)

Li.addEventListener("click" , function(e){
    e.stopPropagation();
    console.log("Li is clicked");
  
},false)

anc.addEventListener("click" , function(e){
    e.preventDefault()
    // e.stopPropagation();
    console.log("a is clicked");
  
},false)

// anc.addEventListener("click" , function(e){
    
//     console.log("a is clicked");
  
// },false)