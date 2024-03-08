const setup = () => {
	// registeer click event listener bij button
	let btnVoegToe = document.getElementById("btnVoegToe");
	btnVoegToe.addEventListener("click", voegToe);
}

const voegToe = () => {
	// Lees de tekst uit het textveld en voeg nieuw <li> element toe
	let txtInput = document.getElementById("txtInput");
	let lstEntries = document.getElementById("lstEntries");
	let tekst = txtInput.value;
	lstEntries.innerHTML += "<li>"+tekst+"</li>";
}

window.addEventListener('load',setup);


/** oef Arrays: Familie leden**/
// const familieleden = ['Tom','Lies','Dirk','Danny','Katrien'];
// console.log(familieleden.length);
// console.log(familieleden[0],familieleden[2],familieleden[4]);
//
// const voegNaamToe = () => {
// 	let resultaat = window.prompt();
// 	familieleden.push(resultaat);
// }
// familieleden.join();












