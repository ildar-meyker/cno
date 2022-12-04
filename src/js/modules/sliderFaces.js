$(".slider-faces").each(function () {
	$(this)
		.find(".slider-faces__list")
		.slick({
			dots: true,
			infinite: false,
			autoplay: false,
			prevArrow: $(this).find(".slider-faces__prev"),
			nextArrow: $(this).find(".slider-faces__next"),
			appendDots: $(this).find(".slider-faces__dots"),
			slidesToShow: 4,
			responsive: [
				{
					breakpoint: 900,
					settings: {
						slidesToShow: 3,
					},
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
					},
				},
				{
					breakpoint: 400,
					settings: {
						slidesToShow: 1,
					},
				},
			],
		});
});
