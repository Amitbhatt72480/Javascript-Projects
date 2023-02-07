const btn = document.getElementById("btn");
const main = document.getElementById("main");
const btn2 = document.getElementById("btn2");
const main2 = document.getElementById("main2");
const btn3 = document.getElementById("btn3");
const main3 = document.getElementById("main3");

function btncheck(){
	if(main.classList.contains("h-52")){
		main.classList.remove("h-52");
		main.classList.add("h-[5.40rem]", "truncate");
		btn.classList.add("text-green-500");
		btn.classList.remove("text-red-500");
		}
		else{
			main.classList.remove("h-[5.40rem]", "truncate");
			main.classList.add("h-52");
			btn.classList.remove("text-green-500");
			btn.classList.add("text-red-500");
			
		}
};
btn.addEventListener("click", function(){
	btncheck();
	if(main2.classList.contains("h-52")){
		main2.classList.remove("h-52");
		main2.classList.add("h-[5.40rem]", "truncate");
		btn2.classList.add("text-green-500");
		btn2.classList.remove("text-red-500");
		};
		if(main3.classList.contains("h-52")){
			main3.classList.remove("h-52");
			main3.classList.add("h-[5.40rem]", "truncate");
			btn3.classList.add("text-green-500");
			btn3.classList.remove("text-red-500");
			};
	
	
})


function btn2check(){
	if(main2.classList.contains("h-52")){
		main2.classList.remove("h-52");
		main2.classList.add("h-[5.40rem]", "truncate");
		btn2.classList.add("text-green-500");
		btn2.classList.remove("text-red-500");
		}
		else{
			main2.classList.remove("h-[5.40rem]", "truncate");
			main2.classList.add("h-52");
			btn2.classList.remove("text-green-500");
			btn2.classList.add("text-red-500");
		}
}

btn2.addEventListener("click", function(){
	btn2check();
	if(main3.classList.contains("h-52")){
		main3.classList.remove("h-52");
		main3.classList.add("h-[5.40rem]", "truncate");
		btn3.classList.add("text-green-500");
		btn3.classList.remove("text-red-500");
		}
		if(main.classList.contains("h-52")){
			main.classList.remove("h-52");
			main.classList.add("h-[5.40rem]", "truncate");
			btn.classList.add("text-green-500");
			btn.classList.remove("text-red-500");
			}
})




function btn3check(){
	if(main3.classList.contains("h-52")){
		main3.classList.remove("h-52");
		main3.classList.add("h-[5.40rem]", "truncate");
		btn3.classList.add("text-green-500");
		btn3.classList.remove("text-red-500");
		}
		else{
			main3.classList.remove("h-[5.40rem]", "truncate");
			main3.classList.add("h-52");
			btn3.classList.remove("text-green-500");
			btn3.classList.add("text-red-500");
		}
};
btn3.addEventListener("click", function(){
	btn3check();
	if(main.classList.contains("h-52")){
		main.classList.remove("h-52");
		main.classList.add("h-[5.40rem]", "truncate");
		btn.classList.add("text-green-500");
		btn.classList.remove("text-red-500");
		};
		if(main2.classList.contains("h-52")){
			main2.classList.remove("h-52");
			main2.classList.add("h-[5.40rem]", "truncate");
			btn2.classList.add("text-green-500");
			btn2.classList.remove("text-red-500");
			}
});