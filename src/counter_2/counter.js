
const target = document.getElementById("value");
const incbtn = document.getElementById("increase");
const decbtn = document.getElementById("decrease");
const resbtn = document.getElementById("reset");


incbtn.addEventListener("click", function(){
	temp = parseInt(target.textContent);
	target.textContent = temp + 1;
	if (parseInt(target.textContent) > 0){
		target.style.color = "green";
	}
	if (parseInt(target.textContent) == 0){
		target.style.color = "black";
	}
})

decbtn.addEventListener("click", function(){
	temp = parseInt(target.textContent);
	target.textContent = temp - 1;
	if (parseInt(target.textContent) < 0){
		target.style.color = "red";
	}
	if (parseInt(target.textContent) == 0){
		target.style.color = "black";
	}
})

resbtn.addEventListener("click", function(){
	target.textContent = 0;
	target.style.color = "black";
})

