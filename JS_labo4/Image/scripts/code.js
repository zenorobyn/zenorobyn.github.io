const setup = () => {
    document.getElementById("imgPhoto")
  .addEventListener("mouseover", change);
}

const change = () => {
    let photo=document.getElementById("imgPhoto");
    photo.src="./Image/cat-551554_640.jpg";
    photo.alt="cat";
    photo.className="sizePhoto";

    document.getElementById("txtText").innerHTML = "School of Cats"
}
window.addEventListener("load", setup);