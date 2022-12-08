(() => {
	if ($("#gallery").length === 0) return;

	const lightbox = new PhotoSwipeLightbox({
		gallery: "#gallery",
		children: "a",
		pswpModule: PhotoSwipe,
	});

	lightbox.init();
})();
