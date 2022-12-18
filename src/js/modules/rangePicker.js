$(".js-range-picker").each(function () {
	const startDate = $(this).data("start-date") || null;
	const endDate = $(this).data("end-date") || null;

	const picker = new easepick.create({
		element: this,
		css: [
			"https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.0/dist/index.css",
			"css/easepick-custom.min.css",
		],
		inline: true,
		lang: "ru-RU",
		plugins: ["RangePlugin", "AmpPlugin"],
		RangePlugin: {
			tooltip: false,
			startDate,
			endDate,
		},
		AmpPlugin: {
			dropdown: {
				months: true,
				years: true,
			},
			darkMode: false,
		},
	});
});
