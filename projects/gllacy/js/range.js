var rangeInput = document.querySelectorAll(".range-input input");
var progress = document.querySelector(".range-line");

var priceGap = 100;

rangeInput.forEach(input => {
  input.addEventListener("input", function(e){
    var minValue = parseInt(rangeInput[0].value);
    var maxValue = parseInt(rangeInput[1].value);

    if(maxValue - minValue < priceGap){
        if(e.target.className === "range-min"){
            rangeInput[0].value = maxValue - priceGap;
        }
        else{
            rangeInput[1].value = minValue + priceGap;
        }
        
    }
    else{
        progress.style.left = (minValue / rangeInput[0].max) * 100 + "%";
        progress.style.right = 100 - (maxValue / rangeInput[1].max) * 100 + "%";
    }

   
  });
});
