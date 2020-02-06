



function hide(){
    document.getElementById('note_elev_wrapper').classList.add("hide");
    document.querySelector('body').style.gridTemplateColumns="auto";
}

function show(){
    document.getElementById('note_elev_wrapper').classList.remove("hide");
    document.querySelector('body').style.gridTemplateColumns="50% auto";
}