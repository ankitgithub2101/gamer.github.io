let menu = document.querySelector('#mobile-menu')
let menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click',function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
})

// let preloader = document.querySelector(".preloader");
// let preloaderDuration = 1500;

// let hidePreloader = () => {
//     setTimeout(() => {
//         preloader.classList.add("hide");
//     }, preloaderDuration);
// }

// window.addEventListener("load", hidePreloader);