


function hide(){
    document.getElementById('note_elev_wrapper').classList.add("hide");
    document.querySelector('body').style.gridTemplateColumns="auto";
}

        class Elev{
                constructor(nume){
                    this.nume=nume;
                    this.note=[];
            }

            adaugaNota(nota){
                        this.note.push(nota);
                    }

                get medie(){
                    let sum = 0;
                    for(let i=0 ; i<this.note.length ; i++){
                        sum+= this.note[i];
                        }

                        if(this.note.length === 0){
                            return "";
                        }

                        return sum/this.note.length ;
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

                veziNote(idx){
                    let elev = this.elevi[idx]
                    this.elevAscultat = elev;
                }

                addNota(str){
                    this.elevAscultat.adaugaNota(str);
                }
            }

var catalog = new Catalog();


    function onClickAddElev(e){
        e.preventDefault()

            if(elev === ""){
             document.querySelector("#numeElev").classList.add("invalid");
            }
        
            var elev = document.querySelector("#numeElev").value;
            catalog.addElev(elev);
           
            drawElevi()
                
            document.querySelector("#numeElev").value = "";

        }


    function onClickVeziNote(idx){

            catalog.veziNote(idx);

            document.querySelector("#note_elev_wrapper h1").innerText = catalog.elevi[idx].nume;
            document.getElementById('note_elev_wrapper').classList.remove("hide");
            document.querySelector('body').style.gridTemplateColumns="50% auto";

            drawElevi();

        }

    function onClickAddNota(e){

        e.preventDefault();

        let nota = document.querySelector('.zone3 input').value;

        catalog.addNota(nota)

        drawNote();
        
    }


    function drawElevi(){
            var str = "";

            for(let i=0; i<catalog.elevi.length ; i++){
                var elev = catalog.elevi[i];
                str+=`
                <tr>
                    <td>${elev.nume}</td>
                    <td></td>
                    <td><button class="btnNote" onclick="onClickVeziNote(${i})">Detalii</button></td>
                </tr>
                `
            }
            document.querySelector("#tabel tbody").innerHTML = str;
        }


    function drawNote(){
        let note = catalog.elevAscultat.note;

        let str = ""
        
        for(let i=0; i < note.length ; i++){
            var nota = note[i];
            str+=`<tr><td>${nota}</td></tr>`

        }

        document.querySelector("#tabel2 tbody").innerHTML = str;
        
    }