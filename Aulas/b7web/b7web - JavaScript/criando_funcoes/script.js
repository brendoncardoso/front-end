function mudarNome(nome, idade){
    var nome_atual = document.getElementById("nome_atual");
    var sobrenome = prompt("Qual seu sobrenome?");

    nome_atual.innerHTML = "Seu nome é: "+nome+". E seu sobrenome é: "+sobrenome+".";
}

