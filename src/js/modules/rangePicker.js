(() => {
	const elem = document.getElementById("calendar");
	if (!elem) return;

	const picker = new easepick.create({
		element: elem,
		css: [
			"https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.0/dist/index.css",
			"css/easepick-custom.min.css",
		],
		inline: true,
		lang: "ru-RU",
		plugins: ["RangePlugin", "AmpPlugin"],
		RangePlugin: {
			tooltip: false,
		},
		AmpPlugin: {
			dropdown: {
				months: true,
				years: true,
			},
			darkMode: false,
		},
	});
})();
