/*const setup = () => {
    document.getElementById("btnToon").addEventListener("click", zin)
}

const zin = () => {
    const str = "Gisteren zat de jongen op de stoep en at de helft van de appel\"";
    const replaceWords = str => {
        return str.split("het").reduce((acc, val, ind, arr) => {
            if(ind % 2 === 1){
                return acc;
            }
            acc += ((arr[ind+1] || "") + " " + val + " ");
            return acc;
        }, "");
    };
    console.log(replaceWords(str));
}*/

const vervangAlles = (bronTekst, oud, nieuw) => {
    let result = bronTekst;
    let idx=result.indexOf(oud);
    while (idx!=-1) {
        let voor=result.slice(0,idx);
        let na=result.slice(idx+oud.length, result.length);
        result=voor+nieuw+na;
        idx=result.indexOf(oud, idx+nieuw.length);
    }
    return result;
}

const setup = () => {
    let inputTekst = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    let outputTekst = vervangAlles(inputTekst, "de", "het");
    console.log(outputTekst)
}
window.addEventListener("load", setup);