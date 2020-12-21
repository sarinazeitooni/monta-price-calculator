let price;
let month;
let fullprice = document.getElementById("fullprice");
let percent70 = document.getElementById("percent70");
let percent30 = document.getElementById("percent30");

function discount(ID) {
    let btn = document.getElementById("btn" + ID);
    let ico = document.getElementById("spn" + ID);
    price = btn.getAttribute('data-price');
    x = price * 30 / 100;
    y = price * 70 / 100;
    month = {
        per70: y,
        per30: x
    };
    fullprice.innerHTML = price;
    percent70.innerHTML = month.per70;
    percent30.innerHTML = month.per30;
    changer(btn, ico);
};

function changer(btn, ico) {
    for (let i = 1; i < 6; i++) {
        let x = "btn" + i;
        let y = "spn" + i;
        let yicon = document.getElementById(y);
        let xbtn = document.getElementById(x);
        do {
            yicon.classList.remove("mi-mark-1");
            ico.classList.add("mi-mark-1");
            xbtn.style.border = "1px #ebebeb solid";
            btn.style.border = "1px #3fd200bb solid";
        } while (x == btn && y == ico);
    }
};
