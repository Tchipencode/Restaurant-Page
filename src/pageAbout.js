import Img4 from './images/Mask group.png';

const content= document.querySelector("#content");

export default function displayAbout(){
   const content= document.querySelector("#content");
   const about= document.createElement("div");
   content.appendChild(about);
   about.classList.add("about");

   const aboutText= document.createElement("div");
   aboutText.classList.add("aboutText");
   about.appendChild(aboutText);

   const aboutPic=document.createElement("div");
   about.appendChild(aboutPic);
   aboutPic.classList.add("aboutPic");
   const aboutImg= document.createElement("img");
   aboutPic.appendChild(aboutImg);
   aboutImg.src=Img4;

   const aboutTitle= document.createElement("h3");
   aboutText.appendChild(aboutTitle);
   aboutTitle.setAttribute("id", "aboutTitle");

   const aboutPara= document.createElement("p");
   aboutText.appendChild(aboutPara);
   aboutPara.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. At cum ut aspernatur aut voluptatibus recusandae corrupti blanditiis! Perferendis facilis, dignissimos voluptate suscipit ipsam et, magnam consectetur nam, reiciendis explicabo dolores?";

}