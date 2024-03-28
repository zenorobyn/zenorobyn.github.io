const setup = () => {
    let tekst = document.querySelector("p");
    let element = document.createTextNode("Goob Job!");
    tekst.replaceWith(element);
}
window.addEventListener("load", setup);