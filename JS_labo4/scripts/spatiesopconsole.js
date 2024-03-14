const setup = () => {
    document.getElementById("btnSend")
        .addEventListener("click", change);
}
const change = () =>{
    let  word = document.getElementById("txtName").value;
    let  result = maakMetSpaties(word);
    console.log (result);
}

const maakMetSpaties=(inputText)=>{
    let result = "";
    for(let i = 0; i < inputText.length; i++) {
        result += inputText.charAt(i) + " ";
    }
    return result
}


window.addEventListener("load", setup);