$(".js-price").each(function () {
	IMask(this, {
		mask: Number,
		min: 0,
		thousandsSeparator: " ",
	});
});

$(".js-phone").each(function () {
	IMask(this, {
		mask: "+{7}(000)000-00-00",
	});
});
