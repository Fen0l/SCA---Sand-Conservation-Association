/*!
 * Spectrum v1.2.0 (http://themes.startbootstrap.com/spectrum-v1.2.0)
 * Copyright 2013-2015 Start Bootstrap Themes
 * To use this theme you must have a license purchased at WrapBootstrap (https://wrapbootstrap.com)
 */
 
// Functions to run on document ready

function timeRemaining(id_planeto){
    var tps = parseFloat(document.getElementById('planeto_tps_'+id_planeto).value);
    var TimeConnecte = parseInt(document.getElementById('planeto_TimeConnecte_'+id_planeto).value);
    var secsSinceNewYears = parseInt(document.getElementById('planeto_secsSinceNewYears_'+id_planeto).value);
    var NbSecondesConnecte = new Date().getTime() - TimeConnecte;
    var secsSince = secsSinceNewYears + NbSecondesConnecte;
    
    document.getElementById('afficherStat'+id_planeto).innerHTML = string((secsSince * tps /1000)/1000)+' tons';
    document.getElementById('Connecte'+id_planeto).innerHTML = string(NbSecondesConnecte * tps /1000)+' kg';
    console.log(NbSecondesConnecte);
    setTimeout("timeRemaining("+id_planeto+")", 100);
}

function string(number){
    var tempnum;

    tempnum = Math.round(number) + "";

    if(tempnum.length >3){
        tempnum = tempnum.substring(0,tempnum.length-3) + " " + tempnum.substring(tempnum.length - 3, 99);
    }
    if(tempnum.length >7){
        tempnum = tempnum.substring(0,tempnum.length-7) + " " + tempnum.substring(tempnum.length - 7, 99);
    }
    if(tempnum.length >11){
        tempnum = tempnum.substring(0,tempnum.length-11) + " " + tempnum.substring(tempnum.length - 11, 99);
    }

    switch (tempnum.length) {
        case 11 :
            tempnum = "  " + tempnum;
            break;
        case 10 :
            tempnum = "   " + tempnum;
            break;
        case 9 :
            tempnum = "    " + tempnum;
            break;
        case 8 :
            tempnum = "      " + tempnum;
            break;
        case 6 :
            tempnum = "       " + tempnum;
            break;
        case 5 :
            tempnum = "        " + tempnum;
            break;
        case 3 :
            tempnum = "          " + tempnum;
            break;
        case 2 :
            tempnum = "           " + tempnum;
            break;
        case 1 :
            tempnum = "            " + tempnum;
            break;
    }
    return tempnum;
}

jQuery(document).ready(function() {
    // Find Mobile Devices
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    // Initialize Stellar.js Parallax
    if (!isMobile.any()) {
        $(window).stellar({
            horizontalScrolling: false,
            verticalOffset: 0,
            horizontalOffset: 0,
            hideDistantElements: false
        });
    }

    // Activates the Bootstrap Carousel for the Intro Header Options
    $('.carousel').carousel({
        interval: 8000,
        pause: "false",
    })

    // Activates Owl Carousel Sliders
    $("#about-1-carousel, #services-1-carousel").owlCarousel({

        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3]

    });

    $("#about-3-carousel").owlCarousel({

        items: 1,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [979, 3]

    });

    $("#clients-carousel").owlCarousel({

        items: 5,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3]

    });

    $("#portfolio-2-carousel").owlCarousel({

        singleItem: true,
        navigation: true,
        navigationText: [
            "<i class='fa fa-chevron-left'></i>",
            "<i class='fa fa-chevron-right'></i>"
        ],
        slideSpeed: 400

    });

    $("#project-details-carousel").owlCarousel({

        navigation: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        navigationText: [
            "<i class='fa fa-angle-left'></i> Prev",
            "Next <i class='fa fa-angle-right'></i>"
        ],

    });

    // Activates FitVids jQuery Plugin
    $(".container").fitVids();

    // Activates Magnific Popup jQuery Plugin
    $('.gallery-item').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        type: 'iframe',
    });

    // Floating label Headings for the Contact Form
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });


    var TimeConnecte = new Date();
    var newyears = new Date(TimeConnecte.getFullYear(), 0, 1, 0, 0, 0).getTime();
    TimeConnecte = new Date().getTime();
    var secsSinceNewYears = TimeConnecte - newyears;
    document.getElementById('planeto_TimeConnecte_1710').value = TimeConnecte;
    document.getElementById('planeto_secsSinceNewYears_1710').value = secsSinceNewYears;
    timeRemaining(1710);

});

// Functions to run on window load
$(window).load(function() {
    // init Isotope
    var $container = $('.isotope').isotope({
        itemSelector: '.portfolio-item'
    });
    $('#filters').on('click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $container.isotope({
            filter: filterValue
        });
    });
    // change is-checked class on buttons
    $('#filters').each(function(i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'button', function() {
            $buttonGroup.find('.active').removeClass('active');
            $(this).addClass('active');
        });
    });

});
