function barToggle(e){
    var getElement = document.getElementById(e);
    
    if(getElement){
        var width_bar = getElement.clientWidth;
        if(width_bar == 0){
            getElement.style.width = "200px";
        }else{
            getElement.style.width = "0px";
        }
    }       
}