const $buttons = $(".js-burger");

$(document).on("click", ".js-burger", function () {
	$("body").toggleClass("burger__locked");
	$("#burger").toggleClass("active");
	$buttons.toggleClass("active");
});
