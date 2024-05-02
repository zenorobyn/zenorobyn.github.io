

const storeSliderValues = () => {
    let colors = {};
    let colorsJSON;

    colors.red = parseInt(document.getElementById("sldRed").value);
    colors.blue = parseInt(document.getElementById("sldBlue").value);
    colors.green = parseInt(document.getElementById("sldGreen").value);

    colorsJSON = JSON.stringify(colors);
    localStorage.setItem("colors.be.kleurtjeskiezen", colorsJSON);
};

const restoreSliderValues = () => {
    let colors;
    let colorsJSON = localStorage.getItem("colors.be.kleurtjeskiezen");

    if (colorsJSON == undefined) {
        colors = {
            red: 0,
            blue: 0,
            green: 0
        };
    } else {
        colors = JSON.parse(colorsJSON);
    }
    document.getElementById("sldBlue").value = colors.blue;
    document.getElementById("sldRed").value = colors.red;
    document.getElementById("sldGreen").value = colors.green;
};

const storeSwatches = () => {
    // bouw een array met kleurinfo objecten
    let rgbcolors = [];
    let swatches = document.getElementsByClassName("swatch");
    for (let i = 1; i < swatches.length; i++) {
        let rgb = {
            red: swatches[i].getAttribute("data-red"),
            blue: swatches[i].getAttribute("data-blue"),
            green: swatches[i].getAttribute("data-green")
        };
        rgbcolors.push(rgb);
    }
    let jsontext = JSON.stringify(rgbcolors);
    localStorage.setItem("colorpicker.swatches", jsontext);
};

const restoreSwatches = () => {
    let jsontext = localStorage.getItem("colorpicker.swatches");
    if (jsontext != null) {
        let swatch = JSON.parse(jsontext);
        for (let i = 0; i < swatch.length; i++) {
            let swatchElement = document.createElement("div");
            swatchElement.classList.add("swatch");
            swatchElement.setAttribute("data-red", swatch[i].red);
            swatchElement.setAttribute("data-green", swatch[i].green);
            swatchElement.setAttribute("data-blue", swatch[i].blue);

            swatchElement.style.backgroundColor = `rgb(${swatch[i].red}, ${swatch[i].green}, ${swatch[i].blue})`;
            document.getElementById("swatchComponents").appendChild(swatchElement);
        }
    }
};
