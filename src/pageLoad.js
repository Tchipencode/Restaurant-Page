export default function pageContent(){
   

   const title=document.createElement("h3");
   // content.appendChild(title);

   const hourOpen=document.createElement("div");
   // content.appendChild(hourOpen);
   
   const address=document.createElement("div");
   // content.appendChild(address);

   const partners=document.createElement("div");
   // content.appendChild(partners);

   const bestPlates=document.createElement("div");
   bestPlates.classList.add("best-plates")
   // content.appendChild(bestPlates);

   const footer=document.createElement("div");
   footer.classList.add("footer");
   // content.appendChild(footer);

   return ( title, hourOpen, address, partners, bestPlates, footer);



}