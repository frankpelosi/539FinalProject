 const buttons = document.querySelectorAll("[data-carousel-button]")
 console.log('carousel load');

 buttons.forEach(button => {
    button.addEventListener('click',() => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button
            // Path to slide carousel
            .closest("[data-carousel]")
            .querySelector("[data-slides]")

            // now select from children slides

        const activeSlide = slides.querySelector("[data-active]")

            // build array for button loop
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        // add active slide based on newIndex

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
 }) 