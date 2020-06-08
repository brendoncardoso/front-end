/*let array1 = [1, 2, 3, 4];

let outros = [...array1, 5, 6, 7, 8];
console.log(outros);*/

let pessoa = {
    nome: "Rodrigo",
    sobrenome: "Santos",
    idade: 34
}

let concatPessoa = {
    ...pessoa,
    civil: "Solteiro",
    cargo: "Programador",
    país: "Brasil"
}


function getCargo({cargo}){
    return `${cargo}`;
}


function addNewPessoa(item) {
    let novaInfo = {
        ...item,
        civil: "Casado",
        cargo: "Programador",
        país: "Portugal"
    }

    return novaInfo;
}

console.log(addNewPessoa({nome: "Carlos", sobrenome: "Oliveira"}));
