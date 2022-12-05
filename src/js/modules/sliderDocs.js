function markSlides($slides, nextSlide) {
	const indexes = [
		nextSlide - 2,
		nextSlide - 1,
		nextSlide + 1,
		nextSlide + 2,
	];

	$slides.removeClass("zoom-0 zoom-1 zoom-2 zoom-3");

	indexes.forEach((index, zoomId) => {
		$slides
			.filter(`[data-slick-index="${index}"]`)
			.addClass(`zoom-${zoomId}`);
	});
}

$(".slider-docs").each(function () {
	const $root = $(this);

	$root
		.find(".slider-docs__row")
		.on("init", function (event, slick) {
			markSlides($root.find(".slick-slide"), slick.currentSlide);
		})
		.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
			markSlides($root.find(".slick-slide"), nextSlide);
		})
		.slick({
			dots: true,
			infinite: true,
			autoplay: false,
			prevArrow: $root.find(".slider-docs__prev"),
			nextArrow: $root.find(".slider-docs__next"),
			appendDots: $root.find(".slider-docs__dots"),
			slidesToShow: 3,
			centerMode: true,
			centerPadding: "20rem",
			responsive: [
				{
					breakpoint: 900,
					settings: {
						slidesToShow: 1,
					},
				},
				{
					breakpoint: 500,
					settings: {
						slidesToShow: 1,
						centerPadding: 0,
					},
				},
			],
		});
});
