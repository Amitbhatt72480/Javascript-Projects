const btn = document.getElementById("btn");
const cross = document.getElementById("cross");
const target = document.getElementById("target");

btn.addEventListener("click", function(){
	target.classList.toggle("hidden");
});

cross.addEventListener("click", function(){
	target.classList.add("hidden");
})