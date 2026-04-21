window.addEventListener("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - 90);
});

function closeNav() {
    if(document.getElementById("myLeftNav").style.width == "230px"){
        document.getElementById("myLeftNav").style.width = "0";
        document.getElementById("leftBurger").innerHTML = "&#9776;";
    }
    if(document.getElementById("myRightNav").style.width == "230px"){
        document.getElementById("myRightNav").style.width = "0";
        document.getElementById("rightBurger").innerHTML = "&#9733;";
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
        if(document.getElementById("myRightNav").style.width == "230px"){
            document.getElementById("myRightNav").style.width = "0";
            document.getElementById("rightBurger").innerHTML = "&#9733;";
        }
    }
}

function rightNav() {
    if(document.getElementById("myRightNav").style.width == "230px"){
        document.getElementById("myRightNav").style.width = "0";
        document.getElementById("rightBurger").innerHTML = "&#9733;";
    }
    else{
        document.getElementById("myRightNav").style.width = "230px";
        document.getElementById("rightBurger").innerHTML = "&#x2716;";
        if(document.getElementById("myLeftNav").style.width == "230px"){
            document.getElementById("myLeftNav").style.width = "0";
            document.getElementById("leftBurger").innerHTML = "&#9776;";
        }
    }
}

function toggleNav() {
    var var1 = document.getElementById("menu");
    var var2 = document.getElementById("arrow");
    var var3 = document.getElementById("button");
    if (var1.style.display == "none") {
        var1.style.display = "block";
        var2.style.rotate = "90deg";
        var3.style.borderRadius = "16px 16px 0 0";
    } else {
        var1.style.display = "none";
        var2.style.rotate = "0deg";
        var3.style.borderRadius = "16px";
    }
}

function toggleTab(evt, var1) {
    var i, tabcontent, tabcontent1, tablinks;
    tabcontent = document.getElementsByClassName("store_desc");
    tabcontent1 = document.getElementsByClassName("tab");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    for (i = 0; i < tabcontent1.length; i++) {
      tabcontent1[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("button");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(var1).style.display = "block";
    evt.currentTarget.className += " active";
}