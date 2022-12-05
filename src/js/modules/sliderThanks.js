$(".slider-thanks").each(function () {
	const $root = $(this);

	new Swiper($root.find(".swiper")[0], {
		loop: true,
		effect: "coverflow",
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: "auto",
		coverflowEffect: {
			rotate: 0,
			stretch: -100,
			depth: 200,
			modifier: 1,
			slideShadows: false,
		},
		pagination: {
			el: $root.find(".swiper-pagination")[0],
			clickable: true,
		},
		navigation: {
			nextEl: $root.find(".slider-thanks__next")[0],
			prevEl: $root.find(".slider-thanks__prev")[0],
		},
	});
});
