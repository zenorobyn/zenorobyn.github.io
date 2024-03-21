const setup = () => {
    trigrams();
}

const trigrams = () => {
    let originalString = "onoorbaar";
    let firstThreeChars = originalString.substr(0, 3);
    let secondThreeChars = originalString.substr(1, 3);
    let ThirdThreeChars = originalString.substr(2, 3);
    console.log(firstThreeChars);
    console.log(secondThreeChars);
    console.log(ThirdThreeChars);
}
window.addEventListener("load", setup);