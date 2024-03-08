var rood = 0;
var groen= 0;
var blauw = 0;

const setup = () => {
	let slidersR = document.getElementsByClassName("sliderR");
	let slidersG = document.getElementsByClassName("sliderG")
	let slidersB = document.getElementsByClassName("sliderB");
	// we moeten zowel op het input als het change event reageren,
	// zie http://stackoverflow.com/questions/18544890
	slidersR[0].addEventListener("change", updateR);
	slidersR[0].addEventListener("input", updateR);

	slidersG[0].addEventListener("change",updateG)
	slidersG[0].addEventListener("input",updateG)

	slidersB[0].addEventListener("change",updateB)
	slidersB[0].addEventListener("input",updateB)

	updateR();
	updateG();
	updateB();
}

const updateR = () => {
	//update kleur rood:
	let slidersR = document.getElementsByClassName("sliderR");
	let pRood = document.getElementById("pRood")
	rood=slidersR[0].value;
	pRood.innerHTML = "Rood: " + rood;
	//console.log("de waarde van de rode slider is momenteel : "+rood);
	update()
}

const updateG = () => {
	//update kleur groen:
	let slidersG = document.getElementsByClassName("sliderG");
	let pGroen = document.getElementById("pGroen")
	groen=slidersG[0].value;
	pGroen.innerHTML = "Groen: " + groen;
	//console.log("de waarde van de groene slider is momenteel : "+groen);
	update()
}

const updateB = () => {
	//update kleur blauw:
	let slidersB = document.getElementsByClassName("sliderB");
	let pBlauw = document.getElementById("pBlauw");
	blauw=slidersB[0].value;
	pBlauw.innerHTML = "Blauw: " + blauw;
	//console.log("de waarde van de blauwe slider is momenteel : "+blauw);
	update()
}

const update = () => {
	let color=document.getElementsByClassName("color");
	color[0].style.backgroundColor= "rgb("+rood+","+groen+","+blauw+")";
}

window.addEventListener("load", setup);