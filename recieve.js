var mamref = database.ref('/mamma');
var papref = database.ref('/papa');
var rajref = database.ref('/raja');

function recieve(){
    if(person == "mam"){
        mammaa();
    }
    if(person == "papa"){
        papaa();
    }
    if(person == "raja"){
        raa();
    }

}
function er(){
}
function changep(p){
    
    document.getElementById('pa').value = p.val();
}
function changer(r){
    document.getElementById('ra').value = r.val();
    
}
function changem(m){
    
    document.getElementById('ma').value = m.val();
}

function mammaa(){
    papref.on("value",changep,er);
    rajref.on("value",changer,er);
}
function papaa(){
    mamref.on("value",changem,er);
    rajref.on("value",changer,er);
}
function raa(){
    papref.on("value",changep,er);
    mamref.on("value",changem,er);
}