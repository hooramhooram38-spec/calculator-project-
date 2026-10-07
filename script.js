function appendValue(value) {

    let display = document.getElementById("display");

    if (display.innerText === "0") {
        display.innerText = value;
    } else {
        display.innerText += value;
    }

    adjustFontSize();
}


function clearDisplay() {

    document.getElementById("display").innerText = "0";

    adjustFontSize();
}


function calculate() {

    let display = document.getElementById("display");

    let result = eval(display.innerText);

    display.innerText = result;

    adjustFontSize();
}


function adjustFontSize() {

    let display = document.getElementById("display");

    let fontSize = 30;

    display.style.fontSize = fontSize + "px";

    while (display.scrollWidth > display.clientWidth && fontSize > 15) {

        fontSize--;

        display.style.fontSize = fontSize + "px";
    }
}