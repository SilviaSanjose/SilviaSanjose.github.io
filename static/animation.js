function setStyles(id, time) {
    setTimeout(function(){ 
        document.getElementById(id).style.cssText = "opacity: 1;transform: scale(1);";
    }, time);
}

setStyles('python', 1500);
setStyles('django', 3000);
setStyles('flask', 2500);
setStyles('html', 3500);
setStyles('css', 2000);
setStyles('sql', 4000);

