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
})
// $(function() {

// 	$('.design-slider').slick({
// 		infinite: true,
// 		slidesToShow: 5,
// 		slidesToScroll: 5,
// 		dots: true,
// 		prevArrow:
//       '<img class="arrow arrow-left" src="images/arrow-left.svg" alt="arrow">',
// 		nextArrow:
// 	 '<img class="arrow arrow-right" src="images/arrow-right.svg" alt="arrow">',
// 	});
// })
