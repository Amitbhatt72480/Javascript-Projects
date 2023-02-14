const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing.`,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "Steak Dinner",
    category: "dinner",
    price: 36.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard dercats migas everyday carry squid paedge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const btns = document.querySelectorAll(".filter-btn");
const section = document.querySelector("#section");

window.addEventListener("DOMContentLoaded", ()=> {
    displayItems(menu)
});

btns.forEach(function (btn){
  btn.addEventListener("click", (e)=>{
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter((menuItem)=>{
          if (menuItem.category === category){
            return menuItem;
          }
      });
      if(category === "all"){
        displayItems(menu);
      }
      else{
        displayItems(menuCategory);
      }
  });
});


function displayItems(menuItems){
  let displayMenu = menuItems.map((item)=>{
    return `<div class="section grid grid-cols-2 space-x-3 pb-10 md:pb-2">
    <div class="">
      <img class="md:w-60 md:h-44 w-48 h-48 object-cover shadow-md border-4 border-[#c5ad29] rounded-xl" src="${item.img}" alt="img">
    </div>
    <div class="space-y-5">
      <h1 class="border-b-2 text-xl font-bold" >${item.title} <span class="text-[#b19a12] block">${item.price}</span></h1>
      <p class="text-xs md:text-sm">${item.desc}</p>
    </div>
  </div>`;
});
displayMenu = displayMenu.join("");
section.innerHTML = displayMenu;
}