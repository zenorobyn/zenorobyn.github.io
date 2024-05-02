const setup = () => {
    document.getElementById("btnSave").addEventListener("click", saveSettings);
    document.getElementById("btnShow").addEventListener("click", showSettings);
};



const saveSettings = () => {
    let settings = {}; /* leeg object*/
    let settingsJSON;

    // bouw settings object op basis van ingevulde gegevens
    // eigenlijk zouden we hier ook inputvalidering moeten doen
    settings.age = parseInt(document.getElementById("pagSettings-numAge").value);
    settings.weight = parseInt(document.getElementById("pagSettings-numWeight").value);
    settings.budget = parseInt(document.getElementById("pagSettings-numBudget").value);

    // bewaar settings als JSON string in local storage
    settingsJSON = JSON.stringify(settings);
    localStorage.setItem("VIVES.be.settingsPerson", settingsJSON); //hier schrijf je de storage weg
};

const showSettings = () => {
    let settings;
    let settingsJSON = localStorage.getItem("VIVES.be.settingsPerson"); //begin met domeinnaam deze is uniek en hier neemt hij de data

    // Maak een leeg settings object, of bouw het op basis
    // van de settings JSON string in local storage
    if (settingsJSON == undefined) { //hier wordt gekeken of het object bestaat
        settings = {
            age: 0,
            weight: 0,
            budget: 0
        };
    } else {
        settings = JSON.parse(settingsJSON); //terug parsen naar een javascript object
    }

    // vul de invoervelden met de settings-waarden
    document.getElementById("pagSettings-numAge").value = settings.age;
    document.getElementById("pagSettings-numWeight").value = settings.weight; //hier worden waarden opgehaald met de value's
    document.getElementById("pagSettings-numBudget").value = settings.budget;
};

window.addEventListener("load", setup);