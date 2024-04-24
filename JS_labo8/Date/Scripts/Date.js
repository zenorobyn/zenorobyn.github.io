const setup = () => {

    let start = new Date();  //system date
    console.log(start);

    //dag van de week
    console.log( (start.getDay()));

    //maand
    console.log(start.getMonth()+1);

    //Jaar
    console.log (start.getFullYear());

    //Dag
    console.log(start.getDate());

    //volledige datum weergeven
    console.log(start.getDate()+"-"+(start.getMonth()+1)+"-"+(start.getFullYear()+" "+(start.getHours()+":"+start.getMinutes()+":"+start.getSeconds())))

    let datum = new Date (2023, 0, 1);
    console.log(datum)

    let geboortedatum = new Date(2000, 3, 3);
    let verschil = Math.round((new Date() - geboortedatum)/86400000);
    console.log(verschil);

    let event = new Date();

    console.log("toString " + event.toString());


    console.log("toISOString " + event.toISOString());

    console.log("toDateString " + event.toDateString());

    console.log("toTimeString " + event.toTimeString());



}
window.addEventListener("load", setup);