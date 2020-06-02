function play() {
    var boom = document.getElementById("boom");
    boom.play();
    boom.currentTime = 0;
}

function play2() {
    var highTom = document.getElementById("highTom");
    highTom.play();
    highTom.currentTime = 0;
}

function play3() {
    var snareDrum = document.getElementById("snareDrum");
    snareDrum.play();
    snareDrum.currentTime = 0;
}

function play4() {
    var floorTom = document.getElementById("floorTom");
    floorTom.play();
    floorTom.currentTime = 0;
}

function play5() {
    var middleTom = document.getElementById("middleTom");
    middleTom.play();
    middleTom.currentTime = 0;
}

function play6() {
    var crashCymbal = document.getElementById("crashCymbal");
    crashCymbal.play();
    crashCymbal.currentTime = 0;
}

function play7() {
    var rideCymbal = document.getElementById("rideCymbal");
    rideCymbal.play();
    rideCymbal.currentTime = 0;
}

function play8() {
    var hiHatCymbal = document.getElementById("hiHatCymbal");
    hiHatCymbal.play();
    hiHatCymbal.currentTime = 0;
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