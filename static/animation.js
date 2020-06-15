function setStyles(name, time) {
    let elementos = document.getElementsByClassName(name);
    console.log(elementos);
    setTimeout(function(){ 
        for (var i = 0; i < elementos.length; i++ ) {
            elementos[i].style.cssText = "opacity: 1;transform: scale(1);";
        }
    }, time);
}

setStyles('python', 1500);
setStyles('django', 3000);
setStyles('flask', 2500);
setStyles('html', 3500);
setStyles('css', 2000);
setStyles('sql', 4000);

