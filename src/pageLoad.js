import img1 from './images/eru2.jpeg';
import img2 from './images/koki.jpeg';
import img3 from './images/taro.jpeg';

export default function pageContent(){
   const content= document.querySelector("#content");

   const homeTitle= document.createElement("div");
   homeTitle.classList.add("home-title");
   content.appendChild(homeTitle);

   const title=document.createElement("h3");
   title.textContent= "Welcome to the famous Tchipen Restaurant";
   homeTitle.appendChild(title);

   const homeCard= document.createElement("div");
   homeCard.classList.add("home-card");
   content.appendChild(homeCard);

   const info=document.createElement("div");
   info.classList.add("info");
   homeCard.appendChild(info);

   const hourOpen=document.createElement("div");
   hourOpen.classList.add("hour-open");
   info.appendChild(hourOpen);
   
   const address=document.createElement("div");
   address.classList.add("address");
   info.appendChild(address);

   const partners=document.createElement("div");
   partners.classList.add("partners");
   homeCard.appendChild(partners);

   const bestPlates=document.createElement("div");
   bestPlates.classList.add("best-plates");
   homeCard.appendChild(bestPlates);
   const myImgOne= document.createElement("img");
   bestPlates.appendChild(myImgOne);
   myImgOne.src=img1;
   myImgOne.setAttribute("id", "my-img-one");
   const myImgTwo= new Image();
   myImgTwo.src=img2;
   bestPlates.appendChild(myImgTwo);
   const myImgThree= new Image();
   myImgThree.src=img3;
   bestPlates.appendChild(myImgThree);

   const footer=document.createElement("div");
   footer.classList.add("footer");
   document.body.appendChild(footer);
   footer.textContent="created by TchipenCode"

   return ( title, hourOpen, address, partners, bestPlates, footer);



}