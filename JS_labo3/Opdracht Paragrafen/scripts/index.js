const setup = () => {
	// deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
	let test = document.getElementsByClassName("belangrijk");
	let i;
	for(i=0;i < test.length;i++){
		test[i].classList.add("opvallend");
	}
}

window.addEventListener("load", setup);