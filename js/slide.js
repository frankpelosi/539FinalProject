console.log('slide load');


// entries for all c2, entry for single within viewport
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        // if in viewport adding show styled class - default .c2 is hidden to make transition
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
        // else clause loops animation if user scrolls back up 
        else {
            entry.target.classList.remove('show');
        }
    })
})

//assigned to c2 class elements
const hiddenElements = document.querySelectorAll('.c2');
hiddenElements.forEach((el) => observer.observe(el));
