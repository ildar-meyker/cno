$(".js-date").each(function () {
	const picker = new easepick.create({
		element: this,
		css: [
			"https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.0/dist/index.css",
			"css/easepick-custom.min.css",
		],
		lang: "ru-RU",
		plugins: ["AmpPlugin"],
		format: "DD.MM.YYYY",
		zIndex: 100,
		AmpPlugin: {
			dropdown: {
				months: true,
				years: true,
			},
			darkMode: false,
		},
	});
});
