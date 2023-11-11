var menu_btn = document.querySelector(".page-nav__toggle");
var menu = document.querySelector(".page-nav");
var page_main = document.querySelector(".page-main--program");

menu_btn.addEventListener("click", function(evt){
  evt.preventDefault();
  if(menu.classList.contains("page-nav--closed")){
    menu.classList.remove("page-nav--closed");
    menu.classList.add("page-nav--opened");
    page_main.style.border = 'none';
  }
  else{
    menu.classList.remove("page-nav--opened");
    menu.classList.add("page-nav--closed");
    page_main.style.borderTop = '1px solid #d9d9d9';
  }
});

let buttonBefore = document.querySelector(".example__button--before");
let buttonAfter = document.querySelector(".example__button--after");
let imgBefore = document.querySelector(".example__image--before");
let imgAfter = document.querySelector(".example__image--after");
let windowWidth = window.innerWidth;

buttonBefore.addEventListener("click", function(evt){
  evt.preventDefault();
  if(windowWidth <= "767"){
    imgAfter.style.zIndex = "-1";
    imgBefore.style.zIndex = "1";
  }
  imgBefore.style.opacity = "1";
  imgAfter.style.opacity = "0";
});

buttonAfter.addEventListener("click", function(evt){
  evt.preventDefault();
  if(windowWidth <= "767"){
    imgAfter.style.zIndex = "1";
    imgBefore.style.zIndex = "-1";
  }
  imgBefore.style.opacity = "0";
  imgAfter.style.opacity = "1";

});
