"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["pageLoad"],{

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pageContent)
/* harmony export */ });
function pageContent(){
   const content= document.querySelector("#content");

   const title=document.createElement("h3");
   title.textContent= "Welcome to the famous Tchipen Restaurant"
   content.appendChild(title);

   const hourOpen=document.createElement("div");
   content.appendChild(hourOpen);
   
   const address=document.createElement("div");
   content.appendChild(address);

   const partners=document.createElement("div");
   content.appendChild(partners);

   const bestPlates=document.createElement("div");
   bestPlates.classList.add("best-plates")
   content.appendChild(bestPlates);

   const footer=document.createElement("div");
   footer.classList.add("footer");
   content.appendChild(footer);

   return ( title, hourOpen, address, partners, bestPlates, footer);



}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/pageLoad.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZUxvYWQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUlBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2VMb2FkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhZ2VDb250ZW50KCl7XG4gICBjb25zdCBjb250ZW50PSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgIGNvbnN0IHRpdGxlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgIHRpdGxlLnRleHRDb250ZW50PSBcIldlbGNvbWUgdG8gdGhlIGZhbW91cyBUY2hpcGVuIFJlc3RhdXJhbnRcIlxuICAgY29udGVudC5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgIGNvbnN0IGhvdXJPcGVuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICBjb250ZW50LmFwcGVuZENoaWxkKGhvdXJPcGVuKTtcbiAgIFxuICAgY29uc3QgYWRkcmVzcz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgY29udGVudC5hcHBlbmRDaGlsZChhZGRyZXNzKTtcblxuICAgY29uc3QgcGFydG5lcnM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGFydG5lcnMpO1xuXG4gICBjb25zdCBiZXN0UGxhdGVzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICBiZXN0UGxhdGVzLmNsYXNzTGlzdC5hZGQoXCJiZXN0LXBsYXRlc1wiKVxuICAgY29udGVudC5hcHBlbmRDaGlsZChiZXN0UGxhdGVzKTtcblxuICAgY29uc3QgZm9vdGVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICBmb290ZXIuY2xhc3NMaXN0LmFkZChcImZvb3RlclwiKTtcbiAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcblxuICAgcmV0dXJuICggdGl0bGUsIGhvdXJPcGVuLCBhZGRyZXNzLCBwYXJ0bmVycywgYmVzdFBsYXRlcywgZm9vdGVyKTtcblxuXG5cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=