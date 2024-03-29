import './styles.css';
import pageContent from './pageLoad.js';
import displayHeader from './pageLoad.js';
// import clear from './pageLoad.js';
// import menuContent from './pageMenu.js';
import displayMenu from './pageMenu.js';
import displayAbout from './pageAbout.js';

displayHeader();

// pageContent();




// menuContent();
// newContent= pageContent();
const content=document.querySelector("#content");

const btnHome=document.querySelector("#btnHome");
btnHome.addEventListener("click", ()=>{
   content.textContent="";
   pageContent();
});

const btnMenu=document.querySelector("#btnMenu");
btnMenu.addEventListener("click", ()=>{
content.textContent="";
   displayMenu();
});

const btnAbout=document.querySelector("#btnAbout");
btnAbout.addEventListener("click", ()=>{
content.textContent="";
   displayAbout();
});

