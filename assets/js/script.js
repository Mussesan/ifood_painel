$(document).ready(function(){
    $('.melhores-restaurantes').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        nav:true,
        dots: false,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
            },
            1000:{
                items:5
            }
        }
    })
    
})

$(document).ready(function(){
    $('.outdoor-cards').owlCarousel({
        loop:false,
        margin:10,
        responsiveClass:true,
        nav:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3
            }
        }
    })
    
})

$(document).ready(function(){
    $('.melhores-mercados').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        nav:true,
        dots: false,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
            },
            1000:{
                items:5
            }
        }
    })
    
})