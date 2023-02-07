// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay


const btn = document.querySelector(".btn");
const closebtn = document.querySelector(".close-btn");
const main = document.getElementById("main");

btn.addEventListener("click", function (){
	main.classList.toggle("open-modal");
});

closebtn.addEventListener("click", function(){
	main.classList.remove("open-modal");
});