$(document).ready(function() {

    $(window).scroll(function() {
        if(this.scrollY > 20) {
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');
        }
    });

    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPauser:false,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            },
        }
    })

});

const menu = document.querySelector('.navbar .menu');
const menuBtn = document.querySelector('.menu-btn');
menu.setAttribute('name', false);

menuBtn.addEventListener('click', function() {
    let boleano = menu.getAttribute('name')

    if(boleano == 'false' | false) {
        menu.style.left = 0;
        menu.setAttribute('name', true)
        return;
    }

    if(boleano === 'true' | true) {
        menu.style.left = '-100%'
        menu.setAttribute('name', false)
        return;
    }

});

