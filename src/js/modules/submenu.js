let timer = null;
let $activePanel = $();

function closePanel() {
	$activePanel.removeClass("active");
}

$(".js-submenu-item").on("mouseenter", function () {
	clearTimeout(timer);
	closePanel();
	const target = $(this).data("submenu");
	if (!target) return;
	$activePanel = $("#" + target);
	$activePanel.addClass("active");
});

$(".js-submenu-item").on("mouseleave", function () {
	timer = setTimeout(closePanel, 200);
});

$(".js-submenu").on("mouseenter", function () {
	clearTimeout(timer);
});

$(".js-submenu").on("mouseleave", function () {
	closePanel();
});
