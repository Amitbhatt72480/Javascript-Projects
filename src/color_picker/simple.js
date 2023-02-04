const colors = ['green', 'blue', 'yellow', 'pink', 'mediumpurple', 'moccasin', 'lightpink','lightseagreen', 'lemonchiffon', 'greenyellow', 'deepskyblue', 'red', 'gray', 'cyan', 'teal'];


const btn = document.getElementById("button");
const color = document.getElementById("color");
const target = document.getElementById("target");



btn.addEventListener("click", function(event){
	const random = randomNumber();
	target.style.backgroundColor = colors[random];
	color.textContent = colors[random];
});


function randomNumber(){
	return Math.floor(Math.random() * colors.length);
}