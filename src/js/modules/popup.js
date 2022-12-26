$(".js-open-popup").on("click", function (e) {
	e.preventDefault();
	const target = $(e.currentTarget).attr("href");
	$(target).addClass("active");
});

$(".js-close-popup").on("click", function (e) {
	e.preventDefault();
	$(e.currentTarget).closest(".popup").removeClass("active");
});
