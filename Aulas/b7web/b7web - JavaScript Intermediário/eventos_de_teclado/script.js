/*function apertouTecla() {
    console.log("Você apertou uma tecla!");
}

function soltouTecla() {
    console.log("Soltou a tecla");
}

function pressionouTecla() {
    console.log("Você está pressionando a tecla de número: "+event.keyCode);
}*/

function apertouTecla() {
    if(event.shiftKey == true && event.keyCode == 69){
        console.log("Você apertou SHIF+E. E o número é: "+event.keyCode);
    }
}



