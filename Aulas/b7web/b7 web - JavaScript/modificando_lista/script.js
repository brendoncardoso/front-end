function acrescentarIngrediente() {
    var ing = document.getElementById("ingrediente").value;
    var list = document.getElementById("lista").innerHTML;

    list = list + "<li>"+ing+"</li>";

    document.getElementById("lista").innerHTML = list;
}