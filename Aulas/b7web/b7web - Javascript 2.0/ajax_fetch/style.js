const url = "https://alunos.b7web.com.br/api/ping";
const params = {
    method: 'GET',
    body: JSON.stringify({
        nome: 'João',
        idade: 17
    })
};

fetch(url, params)
    .then((resposta) => resposta.json())
    .then((json) => {
        console.log(json);
    })