
var body =  document.querySelector("body");
var bg_black =  document.querySelector(".bg-black");
var index =  document.querySelector(".index");
var popup = document.querySelector(".popup");
var Name = document.querySelector("#username");
var closebtn = document.querySelector(".close-btn");
var fb_button = document.querySelector(".feedback_button");

var loginbtn = document.querySelector(".login");
var header_logwindow = document.querySelector(".header-logwindow");
var loginForm = document.querySelector(".header-logwindow form");
var email = document.querySelector("[name=email]");
var pass = document.querySelector("[name=pass]");
var slide = document.querySelectorAll(".slide");
var slider_btn = document.querySelectorAll(".slider-buttons button");
var del_btn = document.querySelectorAll(".delete-btn");

var pagenation = document.querySelector(".pagenation");
var test = document.querySelectorAll(".product-list-item:nth-child(4n+1) a");
var lastproduct = document.querySelector(".product-list-item:last-child a");


lastproduct.addEventListener("mouseover", function(evt) {
    if(lastproduct === test[test.length-1]){
        evt.preventDefault();
        test[test.length-1].style= "position: relative;";
        pagenation.style= "margin-top: -15px;";
    }
});

lastproduct.addEventListener("mouseout", function(evt) {
    if(lastproduct === test[test.length-1]){
        evt.preventDefault();
        test[test.length-1].style= "position: relative;";
        pagenation.style= "margin-top: 48px;";
    }
});

lastproduct.addEventListener("focus", function(evt) {
    if(lastproduct === test[test.length-1]){
        evt.preventDefault();
        test[test.length-1].style= "position: relative;";
        pagenation.style= "margin-top: -15px;";
    }
});

lastproduct.addEventListener("blur", function(evt) {
    if(lastproduct === test[test.length-1]){
        evt.preventDefault();
        test[test.length-1].style= "position: relative;";
        pagenation.style= "margin-top: 48px;";
    }
});

//форма входа

loginbtn.addEventListener("mouseover", function(){
    email.focus();
    header_logwindow.classList.remove("form-error");
});

loginbtn.addEventListener("click", function(){
    email.focus();
});

loginForm.addEventListener("submit", function(evt){
    if(!email.value || !pass.value){
        evt.preventDefault();
        header_logwindow.classList.remove("form-error");
        header_logwindow.offsetWidth =  header_logwindow.offsetWidth;
        header_logwindow.classList.add("form-error");
    }
    
})

//форма обратной связи

fb_button.addEventListener("click", function(evt){
    evt.preventDefault();
    popup.classList.add("visible");
    bg_black.classList.remove("invisible");
    Name.focus();
});

bg_black.addEventListener("click", function(evt){
    evt.preventDefault();
    var visible = bg_black.classList.contains("invisible");
    if(!visible){
        popup.classList.remove("visible");
        bg_black.classList.add("invisible");
    }
});

window.addEventListener("keydown", function(evt){
    if(evt.keyCode === 27){
        evt.preventDefault();
        var visible = bg_black.classList.contains("invisible");
            if(!visible){
            popup.classList.remove("visible");
            bg_black.classList.add("invisible");
        }
    }
});

closebtn.addEventListener("click", function(evt){
    evt.preventDefault();
    popup.classList.remove("visible");
    bg_black.classList.add("invisible");
})

//слайдер

slider_btn[0].addEventListener("click", function(evt){
    evt.preventDefault();
    for(var i = 1; i < slider_btn.length; i++){
        slide[i].classList.add("inactive-slide");
        slider_btn[i].classList.remove("active-button");
        slider_btn[i].classList.add("inactive-button");
        body.style.backgroundColor = "#849d8f";
        index.classList.add("bg0");
        index.classList.remove("bg2");
        index.classList.remove("bg1");
    }
    slider_btn[0].classList.add("active-button");
    slide[0].classList.remove("inactive-slide");
});

slider_btn[1].addEventListener("click", function(evt){
    evt.preventDefault();
    for(var i = 0; i < slider_btn.length; i++){
        slide[i].classList.add("inactive-slide");
        slider_btn[i].classList.remove("active-button");
        slider_btn[i].classList.add("inactive-button");
        body.style.backgroundColor = "#8996a6";
        index.classList.add("bg1");
        index.classList.remove("bg0");
        index.classList.remove("bg2");
    }
    slider_btn[1].classList.add("active-button");
    slide[1].classList.remove("inactive-slide");
});

slider_btn[2].addEventListener("click", function(evt){
    evt.preventDefault();
    for(var i = 0; i < slider_btn.length; i++){
        slide[i].classList.add("inactive-slide");
        slider_btn[i].classList.remove("active-button");
        slider_btn[i].classList.add("inactive-button");
        body.style.backgroundColor = "#9d8b84";
        index.classList.add("bg2");
        index.classList.remove("bg1");
        index.classList.remove("bg0");
    }
    slider_btn[2].classList.add("active-button");
    slide[2].classList.remove("inactive-slide");
});





// del_btn.addEventListener("click", function(evt){
//     evt.preventDefault();
//     this.classList.add("invisible");
// })

