function validar() {
    var numero = document.getElementById("numero").value;

    if(numero.length > 2){
        alert("Você digitou mais de 2 algorísmos.")
        return false;
    }else{
        alert("Formulário Enviado com Sucesso!");
        return true;
    }
}