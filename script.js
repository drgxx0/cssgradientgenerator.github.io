var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("#random");

var styleInfo = body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

 css.textContent = styleInfo

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomColor() {
	var letters = "1234567890ABCDEF";
	var col1= "#";
	var col2 = "#";
	for (var i = 0;i < 6; i++) {
		cl1 = col1 += letters[Math.floor(Math.random() * 16)]
	}
	for (var i = 0;i < 6; i++) {
		cl2 = col2 += letters[Math.floor(Math.random() * 16)]
	}
	color1.setAttribute("value", cl1);
	color2.setAttribute("value", cl2);

	setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", randomColor)

