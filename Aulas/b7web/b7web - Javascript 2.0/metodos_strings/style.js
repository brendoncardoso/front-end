var nome = "Brendon Cardoso Carvalho";
console.log(nome);

function getNumeroNome(e){
    let nomeChecked = e;
    if(e){
        let resultado = nome.indexOf(nomeChecked);
        console.log(resultado);
    }
}

function getString(x, y){
    let resultado = nome.substr(x, y);
    console.log(resultado);
}