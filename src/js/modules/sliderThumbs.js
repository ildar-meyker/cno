$(".slider-thumbs").each(function () {
	const $root = $(this);

	const swiper = new Swiper($root.find(".slider-thumbs__tape .swiper")[0], {
		slidesPerView: "auto",
		watchSlidesProgress: true,
		freeMode: true,
	});

	new Swiper($root.find(".slider-thumbs__main .swiper")[0], {
		thumbs: {
			swiper: swiper,
		},
		navigation: {
			nextEl: $root.find(".slider-thumbs__next")[0],
			prevEl: $root.find(".slider-thumbs__prev")[0],
		},
	});
});
