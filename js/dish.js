// default onload //


var carbonara = document.querySelector("#carbonara");
var cacio = document.querySelector('#cacio');
var pizzaBianca = document.querySelector('#pizza-bianca');
var romanTripe = document.querySelector('#roman-tripe');
var suppli = document.querySelector('#suppli'); 
var dishTitle = document.getElementById ('i1-dish-title')
var dishList = document.getElementsByClassName ('i1')

var dishWrapper = document.querySelector('#dish-wrapper')

var dishImageWrapper = document.querySelector('.dish-image-wrapper')

window.addEventListener("load", function(){
    console.log('test')
    dishWrapper.style.backgroundImage = "url(images/restaurantimages/rome-dishes/carbonara.jpg";
    dishTitle.innerHTML = "Carbonara";
    dishImageWrapper.title = "A plate of Carbonara."
    carbonara.classList.add('dish-active')
})


cacio.addEventListener('click', function(){
    dishWrapper.style.backgroundImage = "url(images/restaurantimages/rome-dishes/cacio-e-pepe.jpg";
    dishTitle.innerHTML = "Cacio e Pepe";


    cacio.classList.add('dish-active')

    carbonara.classList.remove('dish-active')
    pizzaBianca.classList.remove('dish-active')
    romanTripe.classList.remove('dish-active')
    suppli.classList.remove('dish-active')

    dishImageWrapper.title = "A plate of Cacio e Pepe."
})
carbonara.addEventListener('click', function(){
    dishWrapper.style.backgroundImage = "url(images/restaurantimages/rome-dishes/carbonara.jpg";
    dishTitle.innerHTML = "Carbonara";

    carbonara.classList.add('dish-active')

    cacio.classList.remove('dish-active')
    pizzaBianca.classList.remove('dish-active')
    romanTripe.classList.remove('dish-active')
    suppli.classList.remove('dish-active')

    dishImageWrapper.title = "A plate of Carbonara."

})
pizzaBianca.addEventListener('click', function(){
    dishWrapper.style.backgroundImage = "url(images/restaurantimages/rome-dishes/pizza-bianca.jpg";
    dishTitle.innerHTML = "Pizza Bianca";

    pizzaBianca.classList.add('dish-active')

    cacio.classList.remove('dish-active')
    carbonara.classList.remove('dish-active')
    romanTripe.classList.remove('dish-active')
    suppli.classList.remove('dish-active')

    dishImageWrapper.title = "A plate of white pizza being picked up."

})

romanTripe.addEventListener('click', function(){
    dishWrapper.style.backgroundImage = "url(images/restaurantimages/rome-dishes/roman-tripe.jpg";
    dishTitle.innerHTML = "Roman Tripe";

    romanTripe.classList.add('dish-active')

    cacio.classList.remove('dish-active')
    carbonara.classList.remove('dish-active')
    pizzaBianca.classList.remove('dish-active')
    suppli.classList.remove('dish-active')

    dishImageWrapper.title = "A bowl of Roman tripe."
})
suppli.addEventListener('click', function(){
    dishWrapper.style.backgroundImage = "url(images/restaurantimages/rome-dishes/suppli.jpg";
    dishTitle.innerHTML = "Suppli";

    suppli.classList.add('dish-active')

    cacio.classList.remove('dish-active')
    carbonara.classList.remove('dish-active')
    pizzaBianca.classList.remove('dish-active')
    romanTripe.classList.remove('dish-active')

    dishImageWrapper.title = "A plate of 2 suppli."
});

