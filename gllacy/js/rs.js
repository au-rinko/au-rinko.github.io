var slider = document.getElementById('range_slider');
var price_high = document.querySelector('.price-high');
var price_low = document.querySelector('.price-low');
var price = [price_low, price_high];

if(slider){
    noUiSlider.create(slider, {
        start: [100, 500],
        connect: true,
        step: 10,
        range: {
            'min': [100],
            'max': [500]
        }
    });
}

slider.noUiSlider.on('update', function(values, handle){
    price[handle].innerHTML = Math.round(values[handle]);
})