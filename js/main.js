// WOW.js
new WOW().init();

//mCustomScrollbar
$(".vehicles__list").mCustomScrollbar({
    theme: "dark",
  });
  function move(value) {
    $("#vehicle-list").mCustomScrollbar("scrollTo", value, {
      scrollEasing: "easeOut",
    });
  }
  $(".vehicles__nav ul li a").click(function () {
    if ($(this).attr("id") === "cars") {
      move("#cars-nav");
    } else if ($(this).attr("id") === "suvs") {
      move("#suvs-nav");
    } else if ($(this).attr("id") === "minivan") {
      move("#minivan-nav");
    } else if ($(this).attr("id") === "environmental") {
      move("#environmental-nav");
    } else if ($(this).attr("id") === "future") {
      move("#future-nav");
    }
  });


//Swiper  
var mySwiper = new Swiper(".swiper-container", {
        // Optional parameters
        direction: "horizontal",
        loop: false,

        // If we need pagination
        pagination: {
          el: ".swiper-pagination",
        },

        // Navigation arrows
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        // And if we need scrollbar
        // scrollbar: {
        //   el: ".swiper-scrollbar",
        // },
      });

//Header
document.querySelector('.vehicles__nav').addEventListener('click', function (e) {
    var item = e.target;
    if (item.matches('a')) {
        removeActive();
        item.parentElement.classList.add('active');
    }
});

function removeActive() {
    var allTag = Array.from(document.querySelectorAll('.vehicles__nav ul li'));
    allTag.forEach(cur => cur.classList.remove('active'));
}

//Show hide vehicles
var vehicles = document.querySelector('.vehicles');
var vehiclesLink = document.querySelector('.vehicles-link');
var vehiclesClose = document.querySelector('.vehicles__close');
var shoppingLink = document.querySelector('.shopping-link');
var vehiclesNav = document.querySelector('.vehicles__nav');
var vehiclesList = document.querySelector('.vehicles__list');

var allLink = [vehiclesLink, shoppingLink];
function removeAllLinkExcept(x = '') {
    allLink.filter(cur => cur !== x).forEach(function (cur) {
        cur.classList.remove('active');
    });
}

vehiclesLink.addEventListener('click', function () {
    if (vehicles.className === 'vehicles hide-vehicles') {
        //show
        vehicles.classList.remove('hide-vehicles');
        removeAllLinkExcept(vehiclesLink);
        vehiclesLink.classList.add('active');
        vehiclesNav.className = 'vehicles__nav animate__animated animate__fadeInDown';
        vehiclesList.className = 'vehicles__list animate__animated animate__fadeInUp';
    } else {
        //hide
        hideVehicles();
    }
});

shoppingLink.addEventListener('click', function () {
    if(shoppingLink.classList.contains('active')){
        shoppingLink.classList.remove('active');
    }else{
        hideVehicles();
        shoppingLink.classList.add('active');
    }
});

vehiclesClose.addEventListener('click', hideVehicles);

function hideVehicles() {
    vehiclesNav.className = 'vehicles__nav animate__animated animate__fadeOutUp';
    vehiclesList.className = 'vehicles__list animate__animated animate__fadeOutDown';
    setTimeout(function () {
        vehicles.classList.add('hide-vehicles');
    }, 300);
    removeAllLinkExcept();
}

//Our vehicles
var indicatorArr = Array.from(document.querySelectorAll('.carousel-indicators-config li'));
console.log(indicatorArr);
function removeAllActiveIndicator(indicatorArr){
    indicatorArr.forEach(cur => cur.classList.remove('active'));
}
document.querySelector('.carousel-indicators-config').addEventListener('click', function(e){
     if(e.target.matches('li')){
         var item = e.target;
         removeAllActiveIndicator(indicatorArr);
         item.classList.add('active');
     }
});


//carousel xs
$('.indicators-xs-header').click(function(){
    $('.carousel-indicators-xs ol').slideToggle();
    $('.carousel-indicators-xs').toggleClass('toggle');
});

var indicatorArrXs = Array.from(document.querySelectorAll('.carousel-indicators-xs ol li'));
$('.carousel-indicators-xs ol li').click(function(){
    var text = $(this).text();
    removeAllActiveIndicator(indicatorArrXs);
    $('.carousel-indicators-xs h1 span').text = text;
    $('.carousel-indicators-xs').toggleClass('toggle');
    $('.carousel-indicators-xs ol').slideToggle();
});


document.querySelector('.carousel-indicators-xs ol').addEventListener('click', function(e){
    if(e.target.matches('li')){
        var item = e.target;
        
        item.classList.add('active');
        document.querySelector('.carousel-indicators-xs h1 span').innerHTML = item.textContent;
    }
});


//Footer dropdown
$('.footer-content .footer-detail-dropdown').click(function(){
    $(this).parent('.footer-detail').children('ul').slideToggle();
});

$(window).resize(function(){
    var h = $(this).outerWidth();
    if(h >= 769){
        $('.footer-content .footer-detail ul').slideDown();
    }
});