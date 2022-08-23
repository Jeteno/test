var header = $("#header");
var scrollChange = 1;
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= scrollChange) {
        header.addClass('header__up');
    } 
    else {
      header.removeClass("header__up");
   }
});

var element = document.getElementById('social');
window.addEventListener('scroll', function () {
   if (window.scrollY > 600) {
        element.classList.add("social__up");
    } else {
        element.classList.remove("social__up");
    }
});

$( ".page" ).on( "click", function(e){
    $('#menu__body').removeClass('_active')
} ) 

$( ".menu__icon" ).on( "click", function(e){
    $('#menu__body').addClass('_active')
} ) 





