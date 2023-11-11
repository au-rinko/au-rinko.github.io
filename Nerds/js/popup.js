var popup = document.querySelector(".popup-contact");
var link = document.querySelector(".contact-form");
var popupCloseBtn = document.querySelector(".popup-button");
var popupForm = document.querySelector(".popup-contact-form");

link.addEventListener("click", function(evt){
    evt.preventDefault();
    popup.classList.add("popup-shown");
    userName.focus();
});

popupCloseBtn.addEventListener("click", function(evt){
    evt.preventDefault();
    popup.classList.remove("popup-shown");
});

popupForm.addEventListener("submit", function(evt){
    if(!userName.value || !userEmail.value || !userMsg.value){
        evt.preventDefault();
        console.log("Заполните поля!");
    }
});
