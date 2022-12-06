$(document).on("click", ".js-open-popup", function (e) {
	e.preventDefault();
	const target = $(e.currentTarget).attr("href");
	$(target).addClass("active");
});

$(document).on("click", ".js-close-popup", function (e) {
	e.preventDefault();
	$(e.currentTarget).closest(".popup").removeClass("active");
});
