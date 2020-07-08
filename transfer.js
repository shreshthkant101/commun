var message = "";
var inp;
var database = firebase.database();
var person;
var ok = "no";
function ch(n){
    if(n == "m"){
    document.getElementById('mam').style.display = "none";
    document.getElementById('pap').style.display = "none";
    document.getElementById('raj').style.display = "none";
    document.getElementById('int').style.display = "none";
    document.getElementById('ra').style.display = "block";
    document.getElementById('pa').style.display = "block";
    document.getElementById('in').style.display = "block";
    person = "mam";
    }
    if(n == "p"){
        document.getElementById('mam').style.display = "none";
        document.getElementById('pap').style.display = "none";
        document.getElementById('raj').style.display = "none";
        document.getElementById('int').style.display = "none";
        document.getElementById('ra').style.display = "block";
        document.getElementById('ma').style.display = "block";
        document.getElementById('in').style.display = "block";
        person = "papa";
    }
    if(n == "r"){
        document.getElementById('mam').style.display = "none";
        document.getElementById('pap').style.display = "none";
        document.getElementById('raj').style.display = "none";
        document.getElementById('int').style.display = "none";
        document.getElementById('pa').style.display = "block";
        document.getElementById('ma').style.display = "block";
        document.getElementById('in').style.display = "block";
        person = "raja";
    }
    ok = "yes";
}





function mamma(){
    database.ref('/').update({
        'mamma': message
    })
}
function papa(){
    database.ref('/').update({
        'papa': message
    })
}
function raja(){
    database.ref('/').update({
        'raja': message
    })
}
function subm(){
    message = document.getElementById('in').value;
    if(person == "mam"){
        mamma();
    }
    if(person == "papa"){
        papa();
    }
    if(person == "raja"){
        raja();
    }
    
    
}