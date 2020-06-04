function play(item) {
    let element = document.getElementById(item);
    element.play();
    element.currentTime = 0;
}

var kick = document.querySelector(".kick");
var popKick = document.querySelector(".popKick");
kick.addEventListener("click", () => {
    kick.classList.add("popKick");
    setTimeout(() => {
        kick.classList.remove("popKick");
    }, 0.1 * 1000);
});

var hiTom = document.querySelector(".hiTom");
var popHT = document.querySelector(".popHT");
hiTom.addEventListener("click", () => {
    hiTom.classList.add("popHT");
    setTimeout(() => {
        hiTom.classList.remove("popHT");
    }, 0.1 * 1000);
});

var snrDrum = document.querySelector(".snrDrum");
var popSNR = document.querySelector(".popSNR");
snrDrum.addEventListener("click", () => {
    snrDrum.classList.add("popSNR");
    setTimeout(() => {
        snrDrum.classList.remove("popSNR");
    }, 0.1 * 1000);
});

var flrTom = document.querySelector(".flrTom");
var popFLR = document.querySelector(".popFLR");
flrTom.addEventListener("click", () => {
    flrTom.classList.add("popFLR");
    setTimeout(() => {
        flrTom.classList.remove("popFLR");
    }, 0.1 * 1000);
});

var midTom = document.querySelector(".midTom");
var popMT = document.querySelector(".popMT");
midTom.addEventListener("click", () => {
    midTom.classList.add("popMT");
    setTimeout(() => {
        midTom.classList.remove("popMT");
    }, 0.1 * 1000);
});

var crsCymbal = document.querySelector(".crsCymbal");
var popCRS = document.querySelector(".popCRS");
crsCymbal.addEventListener("click", () => {
    crsCymbal.classList.add("popCRS");
    setTimeout(() => {
        crsCymbal.classList.remove("popCRS");
    }, 0.1 * 1000);
});

var rdeCymbal = document.querySelector(".rdeCymbal");
var popRDE = document.querySelector(".popRDE");
rdeCymbal.addEventListener("click", () => {
    rdeCymbal.classList.add("popRDE");
    setTimeout(() => {
        rdeCymbal.classList.remove("popRDE");
    }, 0.1 * 1000);
});

var highHatCymbal = document.querySelector(".highHatCymbal");
var popHH = document.querySelector(".popHH");
highHatCymbal.addEventListener("click", () => {
    highHatCymbal.classList.add("popHH");
    setTimeout(() => {
        highHatCymbal.classList.remove("popHH");
    }, 0.1 * 1000);
});