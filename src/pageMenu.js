import Pic1 from './images/pic1.png'
import Star from './images/star.png'
import Pic2 from './images/pic2.png'
import Pic3 from './images/pic3.png'
import Pic4 from './images/pic4.png'

const cards=[
   { 
     "name": "Steak with tomato",
     "description": "Salisbury Steak is made with ground beef that has been shaped into patties, while Swiss Steak is made with actual steak. For Swiss Steak, the beef is rolled or pounded and then braised in a",
     "picture": Pic1,
     "amount": "5000 FCFA",
     "starPic": Star,
     "starRate": "4.9",
   },
   { 
      "name": "Salmon Salad",
      "description": "Salisbury Steak is made with ground beef that has been shaped into patties, while Swiss Steak is made with actual steak. For Swiss Steak, the beef is rolled or pounded and then braised in a",
      "picture": Pic2,
      "amount": "8000 FCFA",
      "starPic": Star,
      "starRate": "4.6",
    },
    { 
      "name": "Chicken Salad",
      "description": "Salisbury Steak is made with ground beef that has been shaped into patties, while Swiss Steak is made with actual steak. For Swiss Steak, the beef is rolled or pounded and then braised in a",
      "picture": Pic3,
      "amount": "5000 FCFA",
      "starPic": Star,
      "starRate": "4.7",
    },
    { 
      "name": "Steak with potato",
      "description": "Salisbury Steak is made with ground beef that has been shaped into patties, while Swiss Steak is made with actual steak. For Swiss Steak, the beef is rolled or pounded and then braised in a",
      "picture": Pic4,
      "amount": "10 000 FCFA",
      "starPic": Star,
      "starRate": "4.8",
    },
]
export default function displayMenu(){
   const content=document.querySelector("#content");
   const menu=document.createElement("div");
   content.appendChild(menu);
   menu.classList.add("menu");
   cards.forEach(obj=>{
      createItem(obj, menu);
   });
   return (content, menu);
}

function createItem(obj, parent){
   const card=document.createElement("div");
   card.classList.add("card");
   const titleDiv=document.createElement("div");
   card.appendChild(titleDiv);

   const dishName=document.createElement("h3");
   titleDiv.appendChild(dishName);
   dishName.textContent=obj.name;
   dishName.setAttribute("id", "dishName");

   const dishDescription=document.createElement("p");
   titleDiv.appendChild(dishDescription);
   dishDescription.textContent=obj.description;
   dishDescription.setAttribute("id", "dishDescription");

   const dishPic=document.createElement("div");
   card.appendChild(dishPic);
   dishPic.classList.add("dishPic");

   const picture=document.createElement("img");
   dishPic.appendChild(picture);
   picture.setAttribute("id", "picture");
   picture.src=obj.picture;

   const priceDiv=document.createElement("div");
   card.appendChild(priceDiv);
   priceDiv.classList.add("priceDiv");
   const dishPrice=document.createElement("p")
   priceDiv.appendChild(dishPrice);
   dishPrice.textContent=obj.amount;
   dishPrice.setAttribute("id", "dishPrice");

   const starRate=document.createElement("p");
   priceDiv.appendChild(starRate);
   starRate.setAttribute("id", "starRate");
   starRate.textContent=obj.starRate;
   const star=document.createElement("img");
   priceDiv.appendChild(star);
   star.src=obj.starPic;

   parent.appendChild(card);
   return (card);

}

