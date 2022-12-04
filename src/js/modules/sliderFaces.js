$(".slider-faces").each(function () {
	$(this)
		.find(".slider-faces__list")
		.slick({
			dots: true,
			infinite: false,
			prevArrow: $(this).find(".slider-faces__prev"),
			nextArrow: $(this).find(".slider-faces__next"),
			appendDots: $(this).find(".slider-faces__dots"),
			slidesToShow: 4,
		});
});
