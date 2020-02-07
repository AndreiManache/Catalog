


function hide(){
    document.getElementById('note_elev_wrapper').classList.add("hide");
    document.querySelector('body').style.gridTemplateColumns="auto";
}

function show(str){

    document.getElementById('note_elev_wrapper').classList.remove("hide");
    document.querySelector('body').style.gridTemplateColumns="50% auto";
    document.querySelector("#note_elev_wrapper h1").innerText = str;


}

class Elev{
    constructor(nume){
        this.nume=nume;
        this.note=[];
    }
}

class Catalog{
    constructor(){
        this.elevi=[];

    }

    addElev(str){
        var elev = new Elev(str);
        this.elevi.push(elev);
    }

    veziNote(){

    }
}
var catalog = new Catalog();


function onClickAddElev(e){
e.preventDefault()

    var elev = document.querySelector("#numeElev").value;
    catalog.addElev(elev);
    drawElevi()
}

function onClickVeziNote(){

}


function drawElevi(){
    var str = "";

    for(let i=0; i<catalog.elevi.length ; i++){
        var elev = catalog.elevi[i];
        str+=`
        <tr>
            <td>${elev.nume}</td>
            <td></td>
            <td><button class="btnNote" onclick="show(${elev.nume})">Detalii</button></td>
        </tr>
        `
    }
    document.querySelector("#tabel tbody").innerHTML = str;
}