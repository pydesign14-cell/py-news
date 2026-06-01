/* MOBILE MENU */

const menuBtn = document.querySelector(".mobile-menu-btn");
const navbar = document.querySelector(".navbar");

/* SAAT TOMBOL DIKLIK */

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

/* STICKY NAVBAR SCROLL EFFECT */

window.addEventListener("scroll", function(){

    if(window.scrollY > 50){
        navbar.classList.add("scrolled");
    }else{
        navbar.classList.remove("scrolled");
    }

});
