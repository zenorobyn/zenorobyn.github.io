const setup = () => {
    // deze code wordt pas uitgevoerd als de pagina volledig is ingeladen
    //var test = prompt("Gemeente");
    var test = "";
    var gemeentes = document.getElementById("gemeentes");
    while(!(test === "stop")){
        //gemeentes.innerHTML += "<option value=" + test + ">" + test + "</option>";
        test = prompt("Geef een gemeente in");
        let li = document.createElement("li");
        li.innerHTML = test;
        gemeentes.appendChild(li);
    }
}

window.addEventListener("load", setup);