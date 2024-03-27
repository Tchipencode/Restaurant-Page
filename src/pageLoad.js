import Img1 from './images/eru2.jpeg';
import Img2 from './images/koki.jpeg';
import Img3 from './images/taro.jpeg';
import Logo from './images/logo.png';
import Img4 from './images/Mask group.png';
import Dish from './images/dish.png';
import Person1 from './images/person-1.png';
import Person2 from './images/person-2.jpg';
import Person3 from './images/person-3.jpg';
import Person4 from './images/person-4.jpg';
import Stars from './images/Stars.png';



export default function pageContent(){
   const content= document.querySelector("#content");
   const header=document.querySelector("header");
   const nav=document.querySelector("nav");

   const logo= document.createElement("img");
   header.appendChild(logo);
   logo.src=Logo;
   header.prepend(logo);


   const btnBook=document.createElement("button");
   btnBook.classList.add("btnBook");
   header.appendChild(btnBook);
   btnBook.textContent="Book a table";

   const firstDiv=document.createElement("div");
   firstDiv.classList.add("firstDiv");
   content.appendChild(firstDiv);

   const homeTitle= document.createElement("div");
   homeTitle.classList.add("home-title");
   firstDiv.appendChild(homeTitle);

   const title=document.createElement("h3");
   title.textContent= "Welcome to the famous Tchipen Restaurant";
   homeTitle.appendChild(title);

   const para=document.createElement("p");
   para.textContent=" We provide you the best tropical food. we are restaurant that bring you to a new experience of food";
   homeTitle.appendChild(para);

   const command=document.createElement("div");
   command.classList.add("btnCommand");
   homeTitle.appendChild(command);

   const btnMenu=document.createElement("button");
   btnMenu.setAttribute("id","btnMenu");
   command.appendChild(btnMenu);
   btnMenu.textContent="Menu";
   const btnSubBook= document.createElement("button");
   btnSubBook.setAttribute("id","btnSubBook");
   command.appendChild(btnSubBook);
   btnSubBook.textContent="Book a table";

   // const plate=document.createElement("img");
   // plate.setAttribute("id","plate");
   // plate.src=Dish;
   // firstDiv.appendChild(plate);
   


   const homePic= document.createElement("div");
   firstDiv.appendChild(homePic);

   const maskGroup= document.createElement("img");
   homePic.appendChild(maskGroup);
   maskGroup.src=Img4;

   const secondDiv= document.createElement("div");
   secondDiv.classList.add("secondDiv");
   content.appendChild(secondDiv);

   // const info=document.createElement("div");
   // info.classList.add("info");
   // secondDiv.appendChild(info);

   const hourOpen=document.createElement("div");
   hourOpen.classList.add("hourOpen");
   secondDiv.appendChild(hourOpen);
   hourOpen.textContent="our open hours"
   const paraOne=document.createElement("p");
   hourOpen.appendChild(paraOne);
   paraOne.textContent=" Monday: close"
   const paraTwo=document.createElement("p");
   hourOpen.appendChild(paraTwo);
   paraTwo.textContent=" Tuesday: 08H - 22H"
   
   const address=document.createElement("div");
   address.classList.add("address");
   secondDiv.appendChild(address);
   address.textContent=" Our location"
   const location=document.createElement("p");
   address.appendChild(location);
   location.textContent=" 123 rue Foch, Douala, Cameroun"

   const thirdDiv=document.createElement("div");
   thirdDiv.classList.add("thirdDiv");
   content.appendChild(thirdDiv);
   
   const dishTitle=document.createElement("p");
   thirdDiv.appendChild(dishTitle);
   dishTitle.textContent="Our Special Dishes";
   dishTitle.setAttribute("id", "dishTitle");

   const dishDiv=document.createElement("div");
   thirdDiv.appendChild(dishDiv);
   dishDiv.classList.add("dishDiv");

   const firstDishes=document.createElement("div");
   firstDishes.classList.add("firstDishes");
   dishDiv.appendChild(firstDishes);
   const myImgOne= document.createElement("img");
   firstDishes.appendChild(myImgOne);
   myImgOne.src=Img1;
   myImgOne.setAttribute("id", "my-img-one");
   const dishDesc1=document.createElement("p");
   firstDishes.appendChild(dishDesc1);
   dishDesc1.textContent="Eru is a dish from Cameroon";

   const secondDishes=document.createElement("div");
   secondDishes.classList.add("secondDishes");
   dishDiv.appendChild(secondDishes);
   const myImgTwo= document.createElement("img");
   secondDishes.appendChild(myImgTwo);
   myImgTwo.src=Img2;
   myImgTwo.setAttribute("id", "my-img-two");
   const dishDesc2=document.createElement("p");
   secondDishes.appendChild(dishDesc2);
   dishDesc2.textContent="Koki is a dish from cameroon";

   const thirdDishes=document.createElement("div");
   thirdDishes.classList.add("thirdDishes");
   dishDiv.appendChild(thirdDishes);
   const myImgThree= document.createElement("img");
   thirdDishes.appendChild(myImgThree);
   myImgThree.src=Img3;
   myImgThree.setAttribute("id", "my-img-three");
   const dishDesc3=document.createElement("p");
   thirdDishes.appendChild(dishDesc3);
   dishDesc3.textContent="Taro is an dish from cameroon";

   const fourthDiv=document.createElement("div");
   fourthDiv.classList.add("fourthDiv");
   content.appendChild(fourthDiv);

   const feedTitle=document.createElement("div");
   fourthDiv.appendChild(feedTitle);
   feedTitle.classList.add("feedTitle");

   const feedback=document.createElement("div");
   fourthDiv.appendChild(feedback);
   feedback.classList.add("feedback");

   const firstFeed=document.createElement("div");
   feedback.appendChild(firstFeed);
   firstFeed.classList.add("firstFeed");
   const person1=document.createElement("div");
   person1.classList.add("person1");
   firstFeed.appendChild(person1);
   const persImgOne= document.createElement("img");
   persImgOne.setAttribute("id", "persImgOne")
   person1.appendChild(persImgOne);
   persImgOne.src=Person1;
   const stars1= document.createElement("img");
   person1.appendChild(stars1);
   stars1.src=Stars;
   const textDiv1=document.createElement("div");
   textDiv1.classList.add("textDiv1");
   firstFeed.appendChild(textDiv1);
   textDiv1.textContent= "This is an awesome restaurant that i recommend to every one in this city. Lorem ipsum dolor sit amet consectetur adipisicing elit. At cum ut aspernatur aut voluptatibus recusandae corrupti blanditiis! Perferendis facilis, dignissimos voluptate suscipit ipsam et, magnam consectetur nam, reiciendis explicabo dolores?";

   const secondFeed=document.createElement("div");
   feedback.appendChild(secondFeed);
   secondFeed.classList.add("secondFeed");
   const person2=document.createElement("div");
   person2.classList.add("person2");
   secondFeed.appendChild(person2);
   const persImgTwo= document.createElement("img");
   persImgTwo.setAttribute("id", "persImgTwo")
   person2.appendChild(persImgTwo);
   persImgTwo.src=Person2;
   const stars2= document.createElement("img");
   person2.appendChild(stars2);
   stars2.src=Stars;
   const textDiv2=document.createElement("div");
   textDiv2.classList.add("textDiv2");
   secondFeed.appendChild(textDiv2);
   textDiv2.textContent= "This is an awesome restaurant that i recommend to every one in this city. Lorem ipsum dolor sit amet consectetur adipisicing elit. At cum ut aspernatur aut voluptatibus recusandae corrupti blanditiis! Perferendis facilis, dignissimos voluptate suscipit ipsam et, magnam consectetur nam, reiciendis explicabo dolores?";

   const thirdFeed=document.createElement("div");
   feedback.appendChild(thirdFeed);
   thirdFeed.classList.add("thirdFeed");
   const person3=document.createElement("div");
   person3.classList.add("person3");
   thirdFeed.appendChild(person3);
   const persImgThree= document.createElement("img");
   persImgThree.setAttribute("id", "persImgThree")
   person3.appendChild(persImgThree);
   persImgThree.src=Person3;
   const stars3= document.createElement("img");
   person3.appendChild(stars3);
   stars3.src=Stars;
   const textDiv3=document.createElement("div");
   textDiv3.classList.add("textDiv3");
   thirdFeed.appendChild(textDiv3);
   textDiv3.textContent= "This is an awesome restaurant that i recommend to every one in this city. Lorem ipsum dolor sit amet consectetur adipisicing elit. At cum ut aspernatur aut voluptatibus recusandae corrupti blanditiis! Perferendis facilis, dignissimos voluptate suscipit ipsam et, magnam consectetur nam, reiciendis explicabo dolores?";

   const footer=document.createElement("div");
   footer.classList.add("footer");
   document.body.appendChild(footer);
   footer.textContent="created by TchipenCode"

   return ( title, hourOpen, address, feedback, thirdDiv, fourthDiv, footer);



}