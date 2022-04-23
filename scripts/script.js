var container = document.querySelector('.nav');


document.querySelector(".menu-btn__icon").addEventListener("click", show_menu); 
document.querySelector(".nav__icon").addEventListener("click", hide_menu);

function show_menu(e){
    container.classList.toggle("show");
    document.querySelector(".nav__close").style.display = "block";
    e.stopPropagation();
}

function hide_menu(){
    container.classList.remove("show");
    document.querySelector(".nav__close").style.display = "none";
}

//hide menu when click outside metodo #1
// document.addEventListener('click', (event) => {
//     const withinBoundaries = event.composedPath().includes(container)
  
//     if (withinBoundaries && container.classList.contains("show")) {
//         return;
//     } 
//     else if(!withinBoundaries && container.classList.contains("show")){
//         container.classList.remove("show");
//         document.querySelector(".nav__close").style.display = "none";
//     }
//   });

//hide menu when click outside metodo #2
document.addEventListener("click", function(event) {
const isClosest = event.target.closest(".nav");
    
if (!isClosest && container.classList.contains("show")) {
    container.classList.remove("show");
    document.querySelector(".nav__close").style.display = "none";
}
});




