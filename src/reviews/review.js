// local reviews data
const reviews = [
	{
	  id: 1,
	  name: 'Susan Smith',
	  job: 'Web Developer',
	  img: 'https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg',
	  text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
	},
	{
	  id: 2,
	  name: 'Anna Johnson',
	  job: 'Web Designer',
	  img: 'https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg',
	  text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
	},
	{
	  id: 3,
	  name: 'Peter Jones',
	  job: 'Intern',
	  img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
	  text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag Disrupt glossier gastropub .',
	},
	{
	  id: 4,
	  name: 'Bill Anderson',
	  job: 'The Boss',
	  img: 'https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg',
	  text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
	},
  ];
  
const image = document.getElementById("image");
const author = document.getElementById("name");
const job = document.getElementById("job");
const jobtext = document.getElementById("job-text");
const leftbtn = document.getElementById("leftbtn");
const rightbtn = document.getElementById("rightbtn");
const random = document.getElementById("random");

let currentItem = 0;
window.addEventListener("DOMContentLoaded", function(){
	showPerson(currentItem);
});

function showPerson(person){
	const item = reviews[person];
	image.src = item.img;
	author.textContent = item.name;
	job.textContent = item.job;
	jobtext.textContent = item.text;
}

rightbtn.addEventListener("click", function(){
	currentItem += 1;
	if (currentItem >= reviews.length){
		currentItem = 0;
	}
	showPerson(currentItem);

})

leftbtn.addEventListener("click", function(){
	currentItem -= 1;
	if (currentItem < 0){
		currentItem = reviews.length - 1;
	}
	showPerson(currentItem);
})

random.addEventListener("click", function(){
	const num = Math.floor(Math.random() * reviews.length);
	showPerson(num);
})