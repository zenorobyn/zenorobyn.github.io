const create = () => {
let p = document.createElement("p");
let t = document.createTextNode("This is a paragraph");
para.appendChild(t);
document.getElementById("myDIV")
    .appendChild(para);
}

const setup = () => {
    document.getElementById("btnCreate")
        .addEventListener("click", create);
}


window.addEventListener("load", setup);