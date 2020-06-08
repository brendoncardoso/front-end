let pessoa = {
    nome: "Leandro",
    sobrenome: "Silva",
    idade: 23,
    social: {
        facebook: "facebook.com/leandrosilva",
        instagram: {
            url: "instagram.com/leandrossssilva",
            seguindo: 100,
            seguidores: 200
        },
        twiiter: "twitter.com/leandrosilva"
    },
    nomeCompleto: function(){
        let nomeCompeto = `${this.nome} ${this.sobrenome}`;
        console.log(nomeCompeto);
    }
}

function getInstagram({social: {instagram:{url, seguindo, seguidores}}}){
    return `${url} ${seguindo} ${seguidores}`;
}

console.log(getInstagram(pessoa));

/*let {nome, sobrenome, social:{instagram:{url}}} = pessoa;
console.log(nome, sobrenome, url);*/


/*let {nome, sobrenome, idade = 0} = pessoa;
console.log(nome, sobrenome, idade);*/

