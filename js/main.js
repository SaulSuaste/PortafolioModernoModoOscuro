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


// ============ Habilidades ==========================
const skillsContent = document.getElementsByClassName("skills__content");
const skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills(){
    let itemClass = this.parentNode.className;

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = "skills__content skills__close";
    }if(itemClass === "skills__content skills__close"){
        this.parentNode.className = "skills__content skills__open"
    }
}

skillsHeader.forEach(element=>{
    element.addEventListener("click", toggleSkills)
});

// ============ Pestañas de aptitudes ==========================
const tabs = document.querySelectorAll("[data-target]");
const tabContents = document.querySelectorAll("[data-content]");

tabs.forEach(tab =>{
    tab.addEventListener("click", ()=>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabCon =>{
            tabCon.classList.remove("qualification__active")
        })
        target.classList.add("qualification__active")

        tabs.forEach(tab =>{
            tab.classList.remove("qualification__active")
        })
        tab.classList.add("qualification__active")

    });
    
});


// ============ Services modal ==========================
const modalViews = document.querySelectorAll(".services__modal");
const modalBtns = document.querySelectorAll(".services__button");
const modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function(modalClick){
    modalViews[modalClick].classList.add("active-modal");
}

modalBtns.forEach((modalBtn, i) =>{
    modalBtn.addEventListener("click", ()=>{
        modal(i)
    })
})

modalCloses.forEach((modalClose) =>{
    modalClose.addEventListener("click", ()=>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove("active-modal")
        })
    })
})











