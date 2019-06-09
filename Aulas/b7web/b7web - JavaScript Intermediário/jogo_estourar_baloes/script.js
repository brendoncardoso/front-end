function addBola() {
    var div = document.createElement("div");
    div.setAttribute("class", "bola");

    var p1 = Math.floor(Math.random() * 500);
    var p2 = Math.floor(Math.random() * 400);

    if(p1 > 50){
        var cor = "background-color: black";
    }
    if(p1 > 100){
        var cor = "background-color: red";
    }
    if(p1 > 150){
        var cor = "background-color: yellow";
    }
    if(p1 > 200){
        var cor = "background-color: blue";
    }
    if(p1 > 250){
        var cor = "background-color: green";
    }
    if(p1 > 300){
        var cor = "background-color: pink";
    }
    if(p1 > 350){
        var cor = "background-color: orange";
    } 
    if(p1 > 400){
        var cor = "background-color: purple";
    }
    if(p1 > 450){
        var cor = "background-color: brown";
    }
    if(p1 > 500){
        var cor = "background-color: grey";
    }

    div.setAttribute("style", "left:"+p1+"px; top:"+p2+"px;"+cor);
    div.setAttribute("onclick", "estourar(this)");
    document.body.appendChild(div);
}

function estourar(div) {
    document.body.removeChild(div);
}

function iniciar(){
    setInterval(addBola, 900);
}


