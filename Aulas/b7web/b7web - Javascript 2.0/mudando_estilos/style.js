function toggle(id) {
    var element = document.getElementById(id);

    if(element){
        var display = element.style.display;
    
        if(display == "none"){
            element.style.display = "block";
            document.getElementById('btn-function').innerHTML = "Ocultar Número";
        }else{
            document.getElementById('btn-function').innerHTML = "Mostrar Número";
            element.style.display = "none";
        }
    }
}

let carro = {
    nome: "Fiat",
    modelo: "Pálio",
    valor: "12.500.00",
    ligar: function(){
        this.ligado = true;
        console.log("RÃÃÃÃÃÃÃNTANTANTANTANTANTUTURURUTUTURUTU");
    },
    acelerar: function(){
        if(this.ligado == true){
            console.log("VRUM! VRUM!");
        }
    }
}

carro.ligar();
carro.acelerar();


    
