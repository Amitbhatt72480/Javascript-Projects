const colors = ['green', 'blue', 'yellow', 'pink', 'mediumpurple', 'moccasin', 'lightpink','lightseagreen', 'lemonchiffon', 'greenyellow', 'deepskyblue', 'red', 'gray', 'cyan', 'teal'];

const btn = document.getElementById("mainbutton");
const color = document.getElementById("maincolor");
const target = document.getElementById("maintarget");

btn.addEventListener("click", function(){
	console.log("clicked")
	const randomColor = Math.floor(Math.random()*16777215).toString(16);
	const randcolor = Math.floor(Math.random() * colors.length);
	const temp = Math.floor(Math.random() * 2);
	if (temp == 1){
	target.style.backgroundColor = "#" + randomColor;
	color.textContent = "#" + randomColor;
	}
	else{
		target.style.backgroundColor = colors[randcolor];
		color.textContent = colors[randcolor];
	}
});