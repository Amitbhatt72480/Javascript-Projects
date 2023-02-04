
const hexbtn = document.getElementById("hexbutton");
const hexcolor = document.getElementById("hexcolor");
const hextarget = document.getElementById("hextarget");


hexbtn.addEventListener("click", function(){
	console.log("clicked")
	const randomColor = Math.floor(Math.random()*16777215).toString(16);
	hextarget.style.backgroundColor = "#" + randomColor;
	hexcolor.textContent = "#" + randomColor;
});
