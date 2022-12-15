$(".digits__item").hover(function () {
	$(this).closest(".digits").find(".digits__item").removeClass("active");
	$(this).addClass("active");
});
