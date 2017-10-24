
let elem = document.getElementsByClassName('square');


function changeColor() {
setTimeinterval( randomColor(), 1000);
elem.style.background-color = randomColor();
}

function randomColor() {

let randomRed = Math.floor(Math.random() * 255);
let randomGreen = Math.floor(Math.random() * 255);
let randomBlue = Math.floor(Math.random() * 255);
//create the string that is the ‘new color’
let new_color = "rgb("+randomRed","+randomGreen+","+randomBlue+")";
return new_color;
}
