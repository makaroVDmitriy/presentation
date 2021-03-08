$(function () {

	/* burger */
	let navBurger = document.querySelector('.nav__burger');
	navBurger.addEventListener('click', function () {
		navBurger.classList.toggle('open');
	})
	/* burger */

	/* slider */
	$('.slider').slick({
		centerMode: true,
		arrows: false,
		centerPadding: '60px',
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '50px',
					slidesToShow: 3,
					swipe: true,
					touchMove: true,
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerPadding: '80px',
					slidesToShow: 1,
					swipe: true,
					touchMouve: true,
				}
			}
		]
	});
	/* slider */


});