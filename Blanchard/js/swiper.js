var swiper1 = new Swiper('#slider1', {

	slidesPerView: 1,
	slidesPerColumn: 1,
	spaceBetween: 34,
	slidesPerGroup: 1,

	breakpoints: {

		1780: {
			slidesPerView: 3,
			slidesPerColumn: 2,
			spaceBetween: 50,
			slidesPerGroup: 3,
			observer: true,
		},

		1200: {
			slidesPerView: 2,
			slidesPerColumn: 2,
			spaceBetween: 34,
			slidesPerGroup: 2,
		},

		960: {
			slidesPerView: 2,
			slidesPerColumn: 2,
			spaceBetween: 34,
			slidesPerGroup: 2,
		},

		767: {
			slidesPerView: 2,
			slidesPerColumn: 2,
			spaceBetween: 34,
			slidesPerGroup: 2,
		},

		576: {
			slidesPerView: 1,
			slidesPerColumn: 1,
			slidesPerGroup: 1,
		},
	},

	navigation: {
		nextEl: '.button1-next.swiper-button-next',
		prevEl: '.button1-prev.swiper-button-prev',
	},

	pagination: {
		el: '.pagination1.swiper-pagination',
		clickable: true,
		type: 'fraction',
	},
});

var swiper2 = new Swiper('#slider2', {

	breakpoints: {

		1600: {
			slidesPerView: 3,
			slidesPerColumn: 1,
			slidesPerGroup: 3,
			spaceBetween: 55,
		},

		1200: {
			slidesPerView: 2,
			slidesPerColumn: 1,
			slidesPerGroup: 2,
			spaceBetween: 50,
		},

		960: {
			slidesPerView: 2,
			slidesPerColumn: 1,
			slidesPerGroup: 2,
			spaceBetween: 50,
		},

		767: {
			slidesPerView: 2,
			slidesPerColumn: 1,
			spaceBetween: 34,
			slidesPerGroup: 2,
		},
	},

	navigation: {
		nextEl: '.button2-next.swiper-button-next',
		prevEl: '.button2-prev.swiper-button-prev',
	},

	pagination: {
		el: '.pagination2.swiper-pagination',
		clickable: true,
		type: 'fraction',
	},
});

var swiper3 = new Swiper('#slider3', {

	slidesPerView: 1,
	slidesPerColumn: 1,
	spaceBetween: 34,
	slidesPerGroup: 1,

	breakpoints: {

		1780: {
			slidesPerView: 3,
			slidesPerColumn: 1,
			slidesPerGroup: 3,
			spaceBetween: 50,
		},

		1200: {
			slidesPerView: 2,
			slidesPerColumn: 1,
			slidesPerGroup: 2,
			spaceBetween: 50,
		},

		960: {
			slidesPerView: 2,
			slidesPerColumn: 1,
			slidesPerGroup: 2,
			spaceBetween: 50,
		},

		767: {
			slidesPerView: 1,
			slidesPerColumn: 1,
			spaceBetween: 34,
			slidesPerGroup: 1,
		}, 

	},

	navigation: {
		nextEl: '.button3-next.swiper-button-next',
		prevEl: '.button3-prev.swiper-button-prev',
	},
});

var swiper5 = new Swiper('#slider5', {
	slidesPerView: 1,
	spaceBetween: 10,

	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	effect: 'fade'
});
