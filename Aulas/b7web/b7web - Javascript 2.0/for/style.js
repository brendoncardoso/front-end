var carros = ['Fiat', 'Cedan', 'Wolksvagein', 'Pegout', 'Chevrolet'];
let i = 1;

texto = "<ul>";

for(i = 0; i < carros.length; i++){
    texto += "<li>";
        texto += carros[i]+"</br>";
    texto += "</li>";
}

texto += "</ul>";

document.getElementById('for').innerHTML = texto;