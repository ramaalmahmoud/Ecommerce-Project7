
/*==============================
    zoom js
==============================*/
function zoom(e){
    var zoomer = e.currentTarget;
    e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
    e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
    x = offsetX/zoomer.offsetWidth*100
    y = offsetY/zoomer.offsetHeight*100
    zoomer.style.backgroundPosition = x + '% ' + y + '%';
}

/*==============================
    popup js
==============================*/
$(window).on('load',function(){
    var popup = localStorage.getItem('popup_value');
    if(popup != 1){
        $('#news-letter-modal').modal('show');
    }

    /*==============================
        pre-loader js
    ==============================*/

    $('.preloader').delay(100).fadeOut('fast');
});

(function($) {
    "use strict";
    /*==============================
        sticky header js
    ==============================*/
    var lastScrollTop = 0;
    $(document).on("scroll",function() {
        var scroll = $(this).scrollTop();
        if (scroll > lastScrollTop) {
            $('.header-area').addClass('sticky-down');
            $('.header-area').removeClass('sticky-up');
        } 
        else {
            if (lastScrollTop <= 100) {
                $('.header-area').removeClass('sticky');
                $('.header-area').removeClass('sticky-down');
                $('.header-area').removeClass('sticky-up');
            } 
            else {
                $('.header-area').addClass('sticky');
                $('.header-area').removeClass('sticky-down');
                $('.header-area').addClass('sticky-up');
            }
        }
        lastScrollTop = scroll;
    });

    /*==============================
        currency js
    ==============================*/
    $('.local-currency a.currency-title-lg').on('click', function () {
        if($('#menu-currency').hasClass('active')) {
            $('#menu-currency').removeClass("active");
            $(this).removeClass("active");
        }
        else {
            $('#menu-currency').addClass("active");
            $(this).addClass("active");
        }
    });

    /*==============================
        menu js
    ==============================*/
    $('button.toggler-button').on('click', function () {
        $('#menu-toggle').addClass("active");
        $('.screen-bg').addClass("active");
    });
    $('button.close-menu').on('click', function () {
        $('#menu-toggle').removeClass("active");
        $('.screen-bg').removeClass("active");
    });

    /*==============================
        filter js
    ==============================*/
    $('button.filter-button').on('click', function () {
        $('.filter-sidebar').addClass("active");
        $('.screen-bg').addClass("active");
    });
    $('button.close-filter-sidebar').on('click', function () {
        $('.filter-sidebar').removeClass("active");
        $('.screen-bg').removeClass("active");
    });

    /*==============================
        cart js
    ==============================*/
    $('a.cart-count').on('click', function () {
        $('.mini-cart').addClass("active");
        $('body').addClass("hidden");
        $('.screen-bg').addClass("active");
    });
    $('button.cart-close').on('click', function () {
        $('.mini-cart').removeClass("active");
        $('body').removeClass("hidden");
        $('.screen-bg').removeClass("active");
    });
    $('.add-to-cart').on('click', function () { 
        $('.mini-cart').addClass("active");
        $('.screen-bg').addClass("active");
    });

    /*==============================
        screen-bg js
    ==============================*/
    $('.screen-bg').on('click', function () {
        $('#menu-toggle').removeClass("active");
        $('.filter-sidebar').removeClass("active");
        $('.mini-cart').removeClass("active");
        $(this).removeClass("active");
        $('body').removeClass("hidden");
    });

    /*==============================
        read-agree js
    ==============================*/
    $('label.box-area, .read-agree').on('click', function () {
        if($('.cust-checkbox, .create-checkbox').is(':checked')) {
            $('.checkout, .create').removeClass('disabled');
        }
        else {
            $('.checkout, .create').addClass('disabled');
        }
    });

    /*==============================
        home-slider js
    ==============================*/
    $('#home-slider').owlCarousel({
        loop: false,
        items: 1,
        rewind: true,
        fade: true,
        nav: false,
        navText : ['<i class="bi bi-arrow-left-short"></i>','<i class="bi bi-arrow-right-short"></i>'],
        dots: false,
        animateOut: 'fadeOut',
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true
            },
            479: {
                items: 1,
                nav: false,
                dots: true
            },
            540: {
                items: 1,
                nav: false,
                dots: true
            },
            768: {
                items: 1
            },
            979: {
                items: 1
            },
            1199: {
                items: 1
            }
        }
    });
    
    /*==============================
        product js
    ==============================*/
    var swiper = new Swiper('.swiper#special-category', {
        rewind: true,
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        grid: {
            rows: 2,
            fill: 'row' | 'column'
        },
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    /*==============================
        testimonial js
    ==============================*/
    var swiper = new Swiper('.swiper#testimonial-slider', {
        rewind: true,
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        grid: {
            rows: 2,
            fill: 'row' | 'column'
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        }
    });

    /*==============================
        deal js
    ==============================*/
    var swiper = new Swiper('.swiper#deal-slider-template', {
        rewind: true,
        slidesPerView: 2,
        spaceBetween: 30,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        grid: {
            rows: 1,
            fill: 'row' | 'column'
        },
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });


    /*==============================
        deal js
    ==============================*/
    if ($('#day1').length) {
        var deadline1 = new Date("december 30, 2026 23:59:59").getTime();
        var x = setInterval(function() {
            var currentTime = new Date().getTime();
            var t = deadline1 - currentTime;
            var days = Math.floor(t / (1000 * 60 * 60 * 24));
            var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
            var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((t % (1000 * 60)) / 1000);
            document.getElementById("day1").innerHTML = days ;
            document.getElementById("hrs1").innerHTML = hours;
            document.getElementById("min1").innerHTML = minutes;
            document.getElementById("sec1").innerHTML = seconds;
            if (t < 0) {
                clearInterval(x);
                document.getElementById("day1").innerHTML = '0';
                document.getElementById("hrs1").innerHTML = '0';
                document.getElementById("min1").innerHTML = '0' ;
                document.getElementById("sec1").innerHTML = '0';
            }
        }, 1000);
    }

    if ($('#day2').length) {
        var deadline1 = new Date("december 30, 2027 23:59:59").getTime();
        var x = setInterval(function() {
            var currentTime = new Date().getTime();
            var t = deadline1 - currentTime;
            var days = Math.floor(t / (1000 * 60 * 60 * 24));
            var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
            var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((t % (1000 * 60)) / 1000);
            document.getElementById("day2").innerHTML = days ;
            document.getElementById("hrs2").innerHTML = hours;
            document.getElementById("min2").innerHTML = minutes;
            document.getElementById("sec2").innerHTML = seconds;
            if (t < 0) {
                clearInterval(x);
                document.getElementById("day2").innerHTML = '0';
                document.getElementById("hrs2").innerHTML = '0';
                document.getElementById("min2").innerHTML = '0' ;
                document.getElementById("sec2").innerHTML = '0';
            }
        }, 1000);
    }

    if ($('#day3').length) {
        var deadline1 = new Date("december 30, 2028 23:59:59").getTime();
        var x = setInterval(function() {
            var currentTime = new Date().getTime();
            var t = deadline1 - currentTime;
            var days = Math.floor(t / (1000 * 60 * 60 * 24));
            var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
            var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((t % (1000 * 60)) / 1000);
            document.getElementById("day3").innerHTML = days ;
            document.getElementById("hrs3").innerHTML = hours;
            document.getElementById("min3").innerHTML = minutes;
            document.getElementById("sec3").innerHTML = seconds;
            if (t < 0) {
                clearInterval(x);
                document.getElementById("day3").innerHTML = '0';
                document.getElementById("hrs3").innerHTML = '0';
                document.getElementById("min3").innerHTML = '0' ;
                document.getElementById("sec3").innerHTML = '0';
            }
        }, 1000);
    }

    if ($('#day4').length) {
        var deadline1 = new Date("december 30, 2029 23:59:59").getTime();
        var x = setInterval(function() {
            var currentTime = new Date().getTime();
            var t = deadline1 - currentTime;
            var days = Math.floor(t / (1000 * 60 * 60 * 24));
            var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
            var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((t % (1000 * 60)) / 1000);
            document.getElementById("day4").innerHTML = days ;
            document.getElementById("hrs4").innerHTML = hours;
            document.getElementById("min4").innerHTML = minutes;
            document.getElementById("sec4").innerHTML = seconds;
            if (t < 0) {
                clearInterval(x);
                document.getElementById("day4").innerHTML = '0';
                document.getElementById("hrs4").innerHTML = '0';
                document.getElementById("min4").innerHTML = '0' ;
                document.getElementById("sec4").innerHTML = '0';
            }
        }, 1000);
    }

    if ($('#day5').length) {
        var deadline1 = new Date("december 30, 2025 23:59:59").getTime();
        var x = setInterval(function() {
            var currentTime = new Date().getTime();
            var t = deadline1 - currentTime;
            var days = Math.floor(t / (1000 * 60 * 60 * 24));
            var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
            var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((t % (1000 * 60)) / 1000);
            document.getElementById("day5").innerHTML = days ;
            document.getElementById("hrs5").innerHTML = hours;
            document.getElementById("min5").innerHTML = minutes;
            document.getElementById("sec5").innerHTML = seconds;
            if (t < 0) {
                clearInterval(x);
                document.getElementById("day5").innerHTML = '0';
                document.getElementById("hrs5").innerHTML = '0';
                document.getElementById("min5").innerHTML = '0' ;
                document.getElementById("sec5").innerHTML = '0';
            }
        }, 1000);
    }

    /*==============================
        blog-slider js
    ==============================*/
    var swiper = new Swiper('.swiper#blog-template', {
        slidesPerView: 2,
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        loop: true,
        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 12
            },
            360: {
                slidesPerView: 1,
                spaceBetween: 12
            },
            540: {
                slidesPerView: 1,
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 2,
                spaceBetween: 30
            }
        }
    });

    /*============================== 
        quickview js
    ==============================*/
    var galleryThumbs = new Swiper(".gallery-thumbs", {
        loop: true,
        spaceBetween: 15,
        slidesPerView: 3,
        thumbs: {
            swiper: galleryTop,
        },
    });
    var galleryTop = new Swiper(".gallery-top", {
        loop: true,
        spaceBetween: 15,
        navigation: {
            nextEl: ".quick-next",
            prevEl: ".quick-prev",
        },
        thumbs: {
            swiper: galleryThumbs,
        },
    }); 

    /*========================================== 
        minus and plus btn js
    ==========================================*/
    $('.dec').on("click",function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });

    $('.inc').on("click",function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    /*==============================
        back-to-top js
    ==============================*/
    $(window).on("scroll",function() {
        if ($(this).scrollTop() > 600) {
            $('#top').addClass('show');
        } 
        else {
            $('#top').removeClass('show');
        }
    });

    $('#top').on("click",function() {
        $("html, body").animate({ scrollTop: 0 }, 0);
        return false;
    }); 
})(jQuery);