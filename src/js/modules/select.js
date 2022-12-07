const elems = document.getElementsByClassName("js-select");

Array.from(elems).forEach((elem) => {
	NiceSelect.bind(elem);
});
