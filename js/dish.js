console.log('dish load');

// defined variables

var carbonara = document.querySelector("#carbonara");
var cacio = document.querySelector('#cacio');
var pizzaBianca = document.querySelector('#pizza-bianca');
var romanTripe = document.querySelector('#roman-tripe');
var suppli = document.querySelector('#suppli'); 
var dishTitle = document.getElementById ('i1-dish-title')
var dishList = document.getElementsByClassName ('i1')

var dishWrapper = document.querySelector('#dish-wrapper')

var dishImageWrapper = document.querySelector('.dish-image-wrapper')


// default active state for carbonara on load

window.addEventListener("load", function(){
    console.log('carbonara loaded')
    // set initial image
    dishWrapper.style.backgroundImage = "url(images/restaurantimages/rome-dishes/carbonara.jpg";
    // set initial h3 dish name
    dishTitle.innerHTML = "Carbonara";
    // set initial title
    dishImageWrapper.title = "A plate of Carbonara."
    // set active li styling
    carbonara.classList.add('dish-active')
})




// click event listeners to change 1) image 2) H3 dish name 3) title 4) active state of li

cacio.addEventListener('click', function(){

    // change image 
    dishWrapper.style.backgroundImage = "url(images/restaurantimages/rome-dishes/cacio-e-pepe.jpg";
    //change H3 dish name
    dishTitle.innerHTML = "Cacio e Pepe";

    // change li active states
    cacio.classList.add('dish-active')

    carbonara.classList.remove('dish-active')
    pizzaBianca.classList.remove('dish-active')
    romanTripe.classList.remove('dish-active')
    suppli.classList.remove('dish-active')

    // change titles

    dishImageWrapper.title = "A plate of Cacio e Pepe."
})



// SAME PROCESS FOR SUBSEQUENT LIST ITEMS
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

