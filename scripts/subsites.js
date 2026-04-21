window.addEventListener("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - 90);
});

function closeNav() {
    if(document.getElementById("myLeftNav").style.width == "230px"){
        document.getElementById("myLeftNav").style.width = "0";
        document.getElementById("leftBurger").innerHTML = "&#9776;";
    }
}

function leftNav() {
    if(document.getElementById("myLeftNav").style.width == "230px"){
        document.getElementById("myLeftNav").style.width = "0";
        document.getElementById("leftBurger").innerHTML = "&#9776;";
    }
    else{
        document.getElementById("myLeftNav").style.width = "230px";
        document.getElementById("leftBurger").innerHTML = "&#x2716;";
    }
}

function toggleText(n) {
    var var1 = document.getElementById("answer" + n);
    var var2 = document.getElementById("arrow" + n);
    var var3 = document.getElementById("button" + n);
    if (var1.style.display == "none") {
        var1.style.display = "block";
        var2.style.rotate = "90deg";
        var3.style.borderRadius = "28px 28px 0 0";
        var3.style.borderBottomWidth = "0";
    } else {
        var1.style.display = "none";
        var2.style.rotate = "0deg";
        var3.style.borderRadius = "28px";
        var3.style.borderBottomWidth = "2px";
    }
}