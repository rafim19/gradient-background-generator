var _ = require('lodash');

let array = [1, 2, 3, 4, 5, 6, 7];
console.log('answer:', _.without(array, 7));

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomColorsButton = document.querySelector(".random-colors");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 

	// console.log(color1.value, color2.value);
	css.textContent = body.style.background + ";";
}

function setRandomColors() {
	var randomColor1 = "#" + Math.floor(Math.random()*16777215).toString(16);
	var randomColor2 = "#" + Math.floor(Math.random()*16777215).toString(16);

	body.style.background = 
	"linear-gradient(to right, " 
	+ randomColor1
	+ ", " 
	+ randomColor2
	+ ")";

	// console.log(color1.value, color2.value);
	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomColorsButton.addEventListener("click", setRandomColors);