document.addEventListener("contextmenu", function (e){
    e.preventDefault();
})

document.onkeydown = function (e) {
    if (event.keyCode == 123) {
        return false;
    }

    if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
        return false;
    }
}