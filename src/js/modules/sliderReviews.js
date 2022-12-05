import { MatchHeight } from "js-match-height";

$(".slider-reviews").each(function () {
	$(this)
		.find(".slider-reviews__row")
		.slick({
			dots: true,
			infinite: false,
			autoplay: false,
			prevArrow: $(this).find(".slider-reviews__prev"),
			nextArrow: $(this).find(".slider-reviews__next"),
			appendDots: $(this).find(".slider-reviews__dots"),
			slidesToShow: 2.5,
			responsive: [
				{
					breakpoint: 900,
					settings: {
						slidesToShow: 1,
					},
				},
			],
		});
});

new MatchHeight(".slider-reviews__item__in");
