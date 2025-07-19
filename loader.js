"use strict";

const loader = document.querySelector(".loader");

window.addEventListener("load", () => {
  setTimeout(() => {
    loader.classList.add("hide");
    document.querySelector("body").removeChild(loader);
  }, 2000); 
});
