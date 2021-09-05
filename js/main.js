// ============ Mostar y ocultar menu ================
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// ============ Mostar menu ==========================
// Validar si existe constante
if(navToggle){
    navToggle.addEventListener("click", ()=>{
        navMenu.classList.add("show-menu")
    })
}

// ============ Ocultar menu ==========================
// Validar si existe constante
if(navClose){
    navClose.addEventListener("click", ()=>{
        navMenu.classList.remove("show-menu")
    })
}

// ============ Eliminar menu mobile ==========================
const navLink = document.querySelectorAll(".nav__link");

function linkAction(){
    const navMenu = document.getElementById("nav-menu");
    // Cuando se de click en los nav__link se elimina la clase mostrar menu
    navMenu.classList.remove("show-menu");
}
navLink.forEach(link => link.addEventListener("click",linkAction));