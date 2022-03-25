$(function() {
	$('.design-slider').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 2000,
        variableWidth: true,
        appendDots: '.slick-nav',
        appendArrows: '.slick-nav',
        prevArrow:
            '<img class="arrow arrow-left" src="images/slider-arrow-left.svg" alt="arrow">',
        nextArrow:
            '<img class="arrow arrow-right" src="images/slider-arrow-right.svg" alt="arrow">',
        // responsive: [
        //     {
        //         breakpoint: 361,
        //         settings: {
        //             variableWidth: false,
        //             slidesToShow: 1,
        //         },
        //         breakpoint: 891,
        //         settings: {
        //             vertical: false,
        //             slidesToShow: 3,
        //             arrows: false,
        //             dots: true,
        //         },
        //         breakpoint: 461,
        //         settings: {
        //             vertical: false,
        //             slidesToShow: 1,
        //             arrows: false,
        //             dots: true,
        //         },
        //     },
        // ],
    });

    $('.nav__btn').on('click', function () {
        $('.nav__btn').toggleClass('active');
        // $('.header__logo').toggleClass('--active');
        // $('.header__inner-left').toggleClass('--active');
        // $('.inner-right__content').toggleClass('--active');
        // $('.header__inner-right').toggleClass('--active');
        // $('.header__nav').toggleClass('--active');
        // $('.header__nav-list').toggleClass('--active');
        $([
            '.header__logo', 
            '.header__inner-left', 
            '.inner-right__content',
            '.header__inner-right',
            '.header__nav',
            '.header__nav-list'    
        ].join(',')).each(function() {
            $(this).toggleClass('--active');
        })
    });
})