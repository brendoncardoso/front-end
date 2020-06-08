function fazer(){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve("Resposta: Ok!");
            document.querySelector('.resposta').innerHTML = "Resposta: Ok!";
        }, 3000);
    });
    return promise;
}

fazer().then((resposta) => {
    console.log(resposta);
});

 