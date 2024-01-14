/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click',() =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click',() =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
// const navLink = document.querySelectorAll ('. nav_link')

// function linkAction () {
//      const navMenu = document.getElementById ('nav-menu')
//      navMenu.classList.remove ('show-menu')
// }
// navLink.forEach (n => n.addEventListener ('click', linkAction))

/*=============== SWIPER WACTHES ===============*/
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
    // effect: 'creative',
    // creaiveEffect:{
    //     prev:{
    //         translate:[-100, 0, -500],
    //         rotate:[0, 0, 15],
    //         opacity: 0
    //     },
    //     next:{
    //         translate:[100, 0, 100],
    //         rotate:[0, 0, -15],
    //         opacity: 0
    //     },
    // },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    //   dynamicBullets:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

/*=============== GSAP ANIMATION ===============*/
gsap.from('.home_img',1.5,{opacity:0,y:150,delay:.1})
gsap.from('.home_data',1.5,{opacity:0,x:-100,delay:.8})
gsap.from('.home_info',1.8,{opacity:0,y:-100,delay:1})