import './styles.css';
import displayHome from './pageHome.js';
import displayMenu from './pageMenu.js';
import displayAbout from './pageAbout.js';
import Logo from './images/logo.png';

createHeader()
displayHome();

function createHeader(){
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

   const footer=document.createElement("div");
   footer.classList.add("footer");
   document.body.appendChild(footer);

   const footerul=document.createElement("ul");
   footer.appendChild(footerul);

   const footerli1=document.createElement("li");
   footerul.appendChild(footerli1);
   footerli1.textContent="Created by TchipenCode";

   const footerli2=document.createElement("li");
   footerul.appendChild(footerli2);
   const link1=document.createElement("a");
   footerli2.appendChild(link1);
   link1.textContent="Home design by Isaac Donkoh on Figma";
   link1.href="https://www.figma.com/file/frF7JGEyMKouKPNU1skLE1/Restaurant-website-Landing-Page-Design-(Community)?type=design&node-id=1-3&mode=design&t=Ib6Uc0I2c9aDnMEp-0";

   const footerli3=document.createElement("li");
   footerul.appendChild(footerli3);
   const link2=document.createElement("a");
   footerli3.appendChild(link2);
   link2.textContent="Menu design by: Mehrab Bozorgi on Figma";
   link2.href="https://www.figma.com/file/bLEhYjxIBojVGhXEvszGqR/Restaurant-Website-(Community)?type=design&node-id=1-432&mode=design&t=BFpYgZL7vjTr3WX1-0";
   
   const footerli4=document.createElement("li");
   footerul.appendChild(footerli4);
   const link3=document.createElement("a");
   footerli4.appendChild(link3);
   link3.textContent="Credit photo: freepik";
   link3.href="https://fr.freepik.com/user/downloads?page=1&type=regular";
   return(header, footer);
}

function clear(){
   const content=document.querySelector("#content");
   const home= document.querySelector(".home");
   const menu= document.querySelector(".menu");
   const about= document.querySelector(".about");
   if(home){
      content.removeChild(home);
   }
   else if (menu){
      content.removeChild(menu);
   }
   else{
      content.removeChild(about);
   }   
}


const btnHome=document.querySelector("#btnHome");
btnHome.addEventListener("click", ()=>{
   clear();
   displayHome();
});

const btnMenu=document.querySelector("#btnMenu");
btnMenu.addEventListener("click", ()=>{
   clear();
   displayMenu();
});

const btnAbout=document.querySelector("#btnAbout");
btnAbout.addEventListener("click", ()=>{
   clear();
   displayAbout();
});

