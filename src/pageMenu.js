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
   // const card=document.createElement("div");
   // menu.appendChild(card);
   // card.classList.add("card");
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



// export default function menuContent(){
//    const content= document.querySelector("#content");

//    const card1=document.createElement("div");
//    content.appendChild(card1);
//    card1.classList.add("card1")
//    const card1Title=document.createElement("div");
//    card1.appendChild(card1Title);
//    const card1h4= document.createElement("h4");
//    card1Title.appendChild(card1h4);
//    card1h4.textContent="Steak with tomato";
//    const card1para=document.createElement("p");
//    card1Title.appendChild(card1para);
//    card1para.textContent="Salisbury Steak is made with ground beef that has been shaped into patties, while Swiss Steak is made with actual steak. For Swiss Steak, the beef is rolled or pounded and then braised in a";
//    const card1price=document.createElement("div");
//    card1.appendChild(card1price);
//    const card1PriceText= document.createElement("p");
//    card1price.appendChild(card1PriceText);
//    card1PriceText.textContent="5 000 FCFA";
//    const card1PriceStar=document.createElement("img");
//    card1price.appendChild(card1PriceStar);
//    card1PriceStar.src=Star;
//    const card1PriceNote= document.createElement("p");
//    card1price.appendChild(card1PriceNote);
//    card1PriceNote.textContent="4.9"

//    const card1Dish=document.createElement("div");
//    card1.appendChild(card1Dish);
//    const card1Pic= document.createElement("img");
//    card1Dish.appendChild(card1Pic);
//    card1Pic.setAttribute("id", "card1Pic");
//    card1Pic.src=Pic1;

//    return(content, card1);

// }
