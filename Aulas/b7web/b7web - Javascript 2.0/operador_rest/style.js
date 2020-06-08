function adicionar(nomes, ...outrosNomes){
    let novosNomes = [
        ...nomes,
        ...outrosNomes
    ];

    return novosNomes;
}

let nomes = ["Antonio", "Maria", "José", "Everton"];
let outros = adicionar(nomes, "Vinicíus", "Leonardo", "João");
console.log(outros);