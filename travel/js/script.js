//бургер-меню

const navToggle = document.querySelector(".header-nav__toggle");
const headerNav = document.querySelector(".header-nav");
const mainNav = document.querySelector(".header-nav__list");

navToggle.addEventListener("click", function(evt){
    evt.preventDefault();
    if(headerNav.classList.contains("header-nav--closed")){
        headerNav.classList.remove("header-nav--closed");
        headerNav.classList.add("header-nav--opened");
    } else{
        headerNav.classList.remove("header-nav--opened");
        headerNav.classList.add("header-nav--closed");
    }
});

//слайдер

var sliderButton = document.querySelectorAll(".popular-destinations__button");
var slide = document.querySelectorAll(".popular-destinations__item");
var slidePrevArrow = document.querySelector(".popular-destinations__slider-arrow--previous");
var slideNextArrow = document.querySelector(".popular-destinations__slider-arrow--next");
let i = 0;

sliderButton[0].addEventListener("click", function(evt){
    evt.preventDefault();
    for(i = 0; i < sliderButton.length; i++){
        slide[i].classList.remove("popular-destinations__item--active");
        sliderButton[i].classList.remove("popular-destinations__button--active"); 
        if(i == 2){
            slide[i].style.order = 0;
        }else{
            slide[i].style.order = i + 1;
        }
    };
    sliderButton[0].classList.add("popular-destinations__button--active");
    slide[0].classList.add("popular-destinations__item--active");
});

sliderButton[1].addEventListener("click", function(evt){
    evt.preventDefault();
    for(i = 0; i < slide.length; i++){
        slide[i].classList.remove("popular-destinations__item--active");
        sliderButton[i].classList.remove("popular-destinations__button--active");
        slide[i].style.order = i;
    };
    sliderButton[1].classList.add("popular-destinations__button--active");
    slide[1].classList.add("popular-destinations__item--active");
});

sliderButton[2].addEventListener("click", function(evt){
    evt.preventDefault();
    for(i = 0; i < sliderButton.length; i++){
        slide[i].classList.remove("popular-destinations__item--active");
        sliderButton[i].classList.remove("popular-destinations__button--active");
        if(i == 0){
            slide[i].style.order = 2;
        }else{
            slide[i].style.order = i - 1;
        }
    };
    sliderButton[2].classList.add("popular-destinations__button--active");
    slide[2].classList.add("popular-destinations__item--active");
});

slidePrevArrow.addEventListener("click", function(evt){
    evt.preventDefault();
    for(i = 0; i < slide.length; i++){
        if(slide[i].classList.contains("popular-destinations__item--active") && i == 0){
            slide[i].classList.remove("popular-destinations__item--active");
            sliderButton[i].classList.remove("popular-destinations__button--active");
            slide[slide.length-1].classList.add("popular-destinations__item--active");
            sliderButton[slide.length-1].classList.add("popular-destinations__button--active");
            break;
        }else if(slide[i].classList.contains("popular-destinations__item--active") && i > 0){
            slide[i].classList.remove("popular-destinations__item--active");
            sliderButton[i].classList.remove("popular-destinations__button--active");
            slide[i-1].classList.add("popular-destinations__item--active");
            sliderButton[i-1].classList.add("popular-destinations__button--active");
            break;
        }
    }
});

slideNextArrow.addEventListener("click", function(evt){
    evt.preventDefault();
    for(i = 0; i < slide.length; i++){
        if(slide[i].classList.contains("popular-destinations__item--active") && i == 2){
            slide[i].classList.remove("popular-destinations__item--active");
            sliderButton[i].classList.remove("popular-destinations__button--active");
            slide[0].classList.add("popular-destinations__item--active");
            sliderButton[0].classList.add("popular-destinations__button--active");
            break;
        }else if(slide[i].classList.contains("popular-destinations__item--active") && i < 2){
            slide[i].classList.remove("popular-destinations__item--active");
            sliderButton[i].classList.remove("popular-destinations__button--active");
            slide[i+1].classList.add("popular-destinations__item--active");
            sliderButton[i+1].classList.add("popular-destinations__button--active");
            break;
        }
    }
});

//модальные окна

const bg_black =  document.querySelector(".bg-black");
const loginPopup = document.querySelector(".login-popup");
const signUpPopup = document.querySelector(".signup-popup");
const loginButton = document.querySelector(".login-button");
const loginButton1 = document.querySelector(".popup__link--login");
const signUpButton = document.querySelector(".popup__link--register");
const email = document.querySelector("#email");
const signEmail = document.querySelector("#sign-email");

loginButton1.addEventListener("click", function(evt){
    evt.preventDefault();
    signUpPopup.classList.add("invisible");
    openLoginPopup();
});

loginButton.addEventListener("click", function(evt){
    evt.preventDefault();
    openLoginPopup();
});

signUpButton.addEventListener("click", function(evt){
    evt.preventDefault();
    bg_black.classList.remove("invisible");
    loginPopup.classList.add("invisible");
    signUpPopup.classList.remove("invisible");
    signEmail.focus();
});

bg_black.addEventListener("click", function(evt){
    evt.preventDefault();
    closePopup();
});

window.addEventListener("keydown", function(evt){
    if(evt.keyCode === 27){
        evt.preventDefault();
        closePopup();
    }
});

var closePopup = function(){
    if(!bg_black.classList.contains("invisible")){
        bg_black.classList.add("invisible");
        signUpPopup.classList.add("invisible");
        loginPopup.classList.add("invisible");
    }
};

var openLoginPopup = function(){
    bg_black.classList.remove("invisible");
    loginPopup.classList.remove("invisible");
    email.focus();
};