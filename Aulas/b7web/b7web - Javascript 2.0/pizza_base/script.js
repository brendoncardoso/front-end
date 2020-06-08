let quantidade = 1;
let cart = [];
let modalCart = 0;

pizzaJson.map((item, index) => {
    //CLONANDO A CLASSE DE PIZZA-ITEM COM A QUANTIDADE DE INDEX DO ARRAY pizzaJson
    let modelo = document.querySelector('.models .pizza-item').cloneNode(true);
    modelo.setAttribute('data-key', index);

    //PEGANDO TUDO DO CLASSE PIZZA-ITEM E ACRESCENTANDO NO PIZZA-AREA
    document.querySelector('.pizza-area').append(modelo);

    //COLOCANDO OS ITENS NAS CLASSES DENTRO DE PIZZA-ITEM

    modelo.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    modelo.querySelector('.pizza-item--name').innerHTML = item.name;
    modelo.querySelector('.pizza-item--desc').innerHTML = item.description;
    modelo.querySelector('.pizza-item--img img').src = item.img;

    modelo.querySelector('a').addEventListener("click", function(e){
        quantidade = 1;

        e.preventDefault();
        let getAttributePizza = e.target.closest('.pizza-item').getAttribute('data-key');
        modalCart = getAttributePizza;
        let pizzaWindowArea = document.querySelector('.pizzaWindowArea')
        pizzaWindowArea.style.opacity = 0;
        pizzaWindowArea.style.display = "flex";
        document.querySelector('.pizzaInfo--size.selected').classList.remove('selected');
        setTimeout(()=>{
            pizzaWindowArea.style.opacity = 1;
            pizzaWindowArea.querySelector('.pizzaWindowBody .pizzaBig img').src = pizzaJson[getAttributePizza].img;
            let pizzaInfo = document.querySelector('.pizzaWindowBody .pizzaInfo');
            pizzaInfo.querySelector('h1').innerHTML = pizzaJson[getAttributePizza].name;
            pizzaInfo.querySelector('.pizzaInfo--desc').innerHTML = pizzaJson[getAttributePizza].description;
            pizzaInfo.querySelector('.pizzaInfo--price .pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[getAttributePizza].price.toFixed(2)}`;

            document.querySelectorAll('.pizzaInfo--size').forEach((sizes, sizesIndex) =>{
                if(sizesIndex == 2){
                    sizes.classList.add('selected');
                }
                sizes.querySelector('span').innerHTML = pizzaJson[getAttributePizza].sizes[sizesIndex];
            })

            document.querySelector('.pizzaInfo--qt').innerHTML = quantidade;

        }, 300);
    });    
})

document.querySelector('.pizzaInfo--qtmais').addEventListener('click', () => {
    quantidade++;
    document.querySelector('.pizzaInfo--qt').innerHTML = quantidade;
});

document.querySelector('.pizzaInfo--qtmenos').addEventListener('click', () => {
    if(quantidade > 1){
        quantidade--;
        document.querySelector('.pizzaInfo--qt').innerHTML = quantidade;
    }
});

function closeModal(){
    document.querySelector('.pizzaWindowArea').style.opacity = 0;
    setTimeout(() => {
        document.querySelector('.pizzaWindowArea').style.display = "none";
    }, 300);
}

document.querySelectorAll('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach(array => {
    array.addEventListener("click", closeModal);
});

document.querySelectorAll('.pizzaInfo--size').forEach((array, indexArray)=>{
    array.addEventListener('click', () => {
        document.querySelector('.pizzaInfo--size.selected').classList.remove('selected');
        array.classList.add('selected');
    });
})

document.querySelector('.pizzaInfo--addButton').addEventListener('click', (e) => {
    e.preventDefault;

    let id = pizzaJson[modalCart].id;
    let sizes = parseInt(document.querySelector('.pizzaInfo--qt').innerHTML);
    let tamanho_escolhido = document.querySelector('.pizzaInfo--size.selected').getAttribute('data-key');
    let price = pizzaJson[modalCart].price.toFixed(2);
    let identifier = pizzaJson[modalCart].id+"@"+tamanho_escolhido;

    let key = cart.findIndex((item =>{
        return item.identifier == identifier;
    }));


    if(key > -1){
        cart[key].qt += sizes;
    }else{
        cart.push({
            identifier: identifier,
            id : id,
            tamanho : tamanho_escolhido,
            qt: sizes
        });
    }
    closeModal();
    abrirCart();
});

function abrirCart(){
    document.querySelector('aside').classList.add('show');

    for(let i in cart){
        let cartItem = document.querySelector('.models .cart--item').cloneNode(true);    
        let arrayCart = pizzaJson.find((item) => {
            return item.id == cart[i].id;
        });        

        switch(parseInt(cart[i].tamanho)) {
            case 0:
                pizzaTamanho = "P";
              break;
            case 1:
                pizzaTamanho = "M";
              break;
            case 2:
                pizzaTamanho = "G";
              break;
            default:
          }
        document.querySelector('.cart--item img').src = arrayCart.img;
        document.querySelector('.cart--item-nome').innerHTML = `${arrayCart.name} (${pizzaTamanho})`;       
        document.querySelector('.cart--item--qt').innerHTML = cart[i].qt;
        document.querySelector('.cart').append(cartItem);
    };
    
}

