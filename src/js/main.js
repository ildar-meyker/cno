import "../../node_modules/bootstrap/js/dist/util";
import "../../node_modules/bootstrap/js/dist/collapse";

const picker = new easepick.create({
	element: document.getElementById("calendar"),
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
