const setup = () => {
    let txtTekst=document.getElementById("txtTekst");
    let tekst=txtTekst.value;
    let txtZoekTekst=document.getElementById("txtZoekTekst");
    let zoekTekst=txtZoekTekst.value;
    let txtAantal=document.getElementById("txtAantal");

    txtAantal.textContent=telVoorkomens(tekst, zoekTekst);
};

const telVoorkomens = (tekst, zoekTekst) => {
    let result=0;
    let idx=tekst.indexOf(zoekTekst);
    while (idx!=-1) {
        result++;
        idx=tekst.indexOf(zoekTekst, idx+zoekTekst.length);
    }
    return result;
};
if (getal == 0)

window.addEventListener("load", setup);