function blink() {
    var elem = document.getElementById("blink");
    elem.style.visibility = (elem.style.visibility == "hidden" ? "visible" : "hidden");
}

setInterval(blink, 500); // Adjust the interval (in milliseconds) to control the blink speed