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
};

$(function () {
    var knobs = [".dial-web ", ".dial-html ", ".dial-graphic ", ".dial-ui "];
    var colors = ["#30bae7", "#d74680", "#15c7a8", "#eb7d4b"];
    
    for (var i = 0; i < knobs.length; i++) {
        $(knobs[i]).knob({
            'readOnly': true,
            'thickness': 0.2,
            'font': 'Titillium Web',
            'fgColor': colors[i],
            'inputColor': '#3c4761',
            'fontWeight': 100,
            'format': function (value) {
                return value + '%';
            }
        })
    }
});