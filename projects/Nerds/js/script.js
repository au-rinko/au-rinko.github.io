
var userName = document.querySelector("[name=user-name]");
var userEmail = document.querySelector("[name=user-email]");
var userMsg = document.querySelector("[name=user-message]");
var sliderBtns = document.querySelectorAll(".slide-button");
var slides = document.querySelectorAll(".slide-item");

sliderBtns[0].addEventListener("click", function(evt){
    evt.preventDefault();
    this.classList.add("active");
    slides[0].classList.add("active");
    for(var i = 1; i < sliderBtns.length; i++){
        slides[i].classList.remove("active");
        sliderBtns[i].classList.remove("active");
    }
});

sliderBtns[1].addEventListener("click", function(evt){
    evt.preventDefault();
    this.classList.add("active");
    slides[1].classList.add("active");
    for(var i = 0; i < sliderBtns.length; i+=2){
        slides[i].classList.remove("active");
        sliderBtns[i].classList.remove("active");
    }
});

sliderBtns[2].addEventListener("click", function(evt){
    evt.preventDefault();
    this.classList.add("active");
    slides[2].classList.add("active");
    for(var i = 0; i < sliderBtns.length-1; i++){
        slides[i].classList.remove("active");
        sliderBtns[i].classList.remove("active");
    }
});


