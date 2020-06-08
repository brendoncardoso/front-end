/*function parar(){
    clearInterval(Interval);
}

function getTime(){
    var d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();

    var getTime = h+":"+m+":"+s;
    document.querySelector('.time').innerHTML = getTime;
}

getTime();
let Interval = setInterval(getTime, 1000);

function recomecar(){
    Interval = setInterval(getTime, 1000);
}*/

function rodar(){
    timer = setTimeout(function(){
        document.querySelector('.time').innerHTML = "Rodou 2s!";
    }, 2000);
}

function parar(){
    clearTimeout(timer);
}





