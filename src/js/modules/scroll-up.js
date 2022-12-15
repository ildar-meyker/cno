import { debounce } from "debounce";

$("#scroll-up").on("click", function (e) {
	e.preventDefault();
	$("html, body").animate({ scrollTop: 0 });
});

$(window).on(
	"scroll",
	debounce(function () {
		$("#scroll-up").toggleClass(
			"active",
			$(window).scrollTop() > $(window).height() * 2
		);
	}, 200)
);
