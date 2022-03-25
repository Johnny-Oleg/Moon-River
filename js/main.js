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
        responsive: [
            {
                breakpoint: 891,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                    dots: true,
                },
                breakpoint: 461,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true,
                },
                breakpoint: 361,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1,
                },
            },
        ],
    });

    $('.nav__btn').on('click', function () {
        $('.nav__btn').toggleClass('active');

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