let nav = document.querySelector(".wrapper-main-nav");
let navGrey = document.querySelector(".wrapper-main-nav-mobile");
let burger = document.querySelector(".burger-menu")
let mainLogo = document.querySelectorAll(".main-logo");
let arrFromLogo = Array.from(mainLogo);
let navLinks = document.querySelectorAll(".link");
let navLinksArr = Array.from(navLinks);
let phoneLogo = document.querySelector(".phone-logo2");


window.addEventListener('scroll', () => {

    if (document.documentElement.scrollTop > 84) {

        nav.style.background = '#fff';
        burger.src = "./assets/images/burger-menu-grey.png";
        navGrey.style.background = "#fff";
        phoneLogo.src = "./assets/images/tel.svg";
        navLinksArr.forEach(link => link.classList.add("link-after"));
        arrFromLogo.forEach(logo => logo.src = "./assets/images/dominos-logo.png")

    } else {

        nav.style.background = 'transparent';
        navGrey.style.background = "transparent";
        burger.src = "./assets/images/burger-menu.png";
        phoneLogo.src = "./assets/images/phone.png";
        navLinksArr.forEach(link => link.classList.remove("link-after"));
        arrFromLogo.forEach(logo => logo.src = "./assets/images/Logo-white-2.png")
        
    }
})


setTimeout(() => {

    let transparant = document.querySelector(".transparant");
    
    transparant.style.display = "none";

}, 3000);