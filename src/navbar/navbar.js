const btn = document.getElementById("btn");
const next = document.getElementById("next");
const main = document.getElementById("main");



btn.addEventListener("click", function(){
	
	if (next.classList.contains("hidden")){
		next.classList.remove("hidden");
		main.classList.remove("decoration");

	}
	else
	{
		next.classList.add("hidden");
		main.classList.add("decoration");
	}
})