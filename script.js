var headertop = document.querySelector(".header__top");
var familyphoto = document.querySelector(".header__main-image"); // Main Family photo
var headerparagrah = document.querySelector(".header__main-paragraph"); // Header Paragraph
var headerpatternLeft = document.querySelector(".header__main-pattern--left");
var headerpatternRight = document.querySelector(".header__main-pattern--right");

var findoutpattern = document.querySelector(".findout_pattern");

var footerpattern = document.querySelector(".footer__container-image")

var mobilenav = document.querySelector(".nav__mobile");
var checkbox = document.querySelector(".mobile_checkbox");

var flag = false;


var mobileResultioncheck = function (size) {
    if(window.screen.width < size)
        return true;
    else
        return false;
}

var Replaceimage = function (element,img) {
    element.src = img ;
}

var checkbox_positionfixed = function () {
    console.log(flag);

    if(!flag) {

    setTimeout(function() {
        document.querySelector(".header__main-container").classList.add("toggle_display");
        document.querySelector(".were_different").classList.add("toggle_display");
        document.querySelector(".findout").classList.add("toggle_display");
        document.querySelector(".footer__container").classList.add("toggle_display");
    }, 1000); }

    if(flag) {
        document.querySelector(".header__main-container").classList.remove("toggle_display");
        document.querySelector(".were_different").classList.remove("toggle_display");
        document.querySelector(".findout").classList.remove("toggle_display");
        document.querySelector(".footer__container").classList.remove("toggle_display");
    }

    flag = !flag;

    console.log(flag);

}

var main = function () {

    if(mobileResultioncheck(500)) {

    //mobilenav.style.display = "block";
    headerparagrah.innerHTML = "Get your life insurance coverage easier and <br> faster. We blend our expertise and <br> technology to help you find the plan that's <br> right for you. Ensure you and your loved <br> ones are protected" ;
    
    Replaceimage(familyphoto, './images/image-intro-mobile.jpg')
    Replaceimage(headerpatternLeft, './images/bg-pattern-intro-left-mobile.svg')
    Replaceimage(headerpatternRight, './images/bg-pattern-intro-right-mobile.svg')
    Replaceimage(findoutpattern, './images/bg-pattern-how-we-work-mobile.svg')
    Replaceimage(footerpattern, "./images/bg-pattern-footer-mobile.svg")

    }
}

main();

checkbox.addEventListener('change', checkbox_positionfixed);


