
const target = document.getElementById("value");
let count = 0;

const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn){
	btn.addEventListener("click", function(e){
		const styles = e.currentTarget.classList;
		if (styles.contains("increase")){
			count += 1;
		}
		else if(styles.contains("decrease")){
			count -= 1;

		}else{
			count = 0;
		}
		if(count > 0){
			target.style.color = "green";
		}
		else if(count < 0){
			target.style.color = "red";
		}
		else{
			target.style.color = "black";
		}
		target.textContent = count;
	})
})