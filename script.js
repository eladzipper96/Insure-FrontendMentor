var familyphoto = document.querySelector(".header__main-image"); // Main Family photo
var headerpatternLeft = document.querySelector(".header__main-pattern--left");
var headerpatternRight = document.querySelector(".header__main-pattern--right");
var headerparagrah = document.querySelector(".header__main-paragraph"); // Header Paragraph

var mobileResultioncheck = function (size) {
    if(window.screen.width < size)
        return true;
    else
        return false;
}

var Replaceimage = function (element,img) {
    element.src = img ;
}

var main = function () {
    headerparagrah.innerHTML = "Get your life insurance coverage easier and <br> faster. We blend our expertise and <br> technology to help you find the plan that's <br> right for you. Ensure you and your loved <br> ones are protected" ;
    
    Replaceimage(familyphoto, './images/image-intro-mobile.jpg')
    Replaceimage(headerpatternLeft, './images/bg-pattern-intro-left-mobile.svg')
    Replaceimage(headerpatternRight, './images/bg-pattern-intro-right-mobile.svg')
}

main();


