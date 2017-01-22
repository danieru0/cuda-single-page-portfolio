document.getElementById("hamburger").addEventListener("click", function () {
    var nav = document.getElementById("navbar");
    
    if (nav.className === "navbar") {
        nav.className += " responsive";
    } else {
        nav.className = "navbar";
    }
});

window.onscroll = function () {
    
    var nav = document.getElementsByClassName("nav")[0];
    
    if (document.body.scrollTop > 59) {
        nav.className += " sticky";
    } else if (document.body.scrollTop < 59) {
        nav.className = "nav";
    }
}