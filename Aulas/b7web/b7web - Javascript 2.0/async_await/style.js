
async function requesitar(){
    const url = "https://alunos.b7web.com.br/api/ping";
    const params = {
        method: 'GET',
        body: JSON.stringify({
            nome: 'Leandro',
            idade: 38
        })
    };

    let resposta = await fetch(url, params);
    let json = await resposta.json();


}

requesitar();