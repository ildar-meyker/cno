const $buttons = $(".js-burger");

$(".js-burger").on("click", function () {
	$("body").toggleClass("burger__locked");
	$("#burger").toggleClass("active");
	$buttons.toggleClass("active");
});
