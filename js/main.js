let price;
let item;
let fullPrice = document.getElementById("fullprice");
let percent70 = document.getElementById("percent70");
let percent30 = document.getElementById("percent30");

function initialData(){
    
    percent70.innerHTML="17500";
    fullPrice.innerHTML="25000";
    percent30.innerHTML="7500";
}

function discount(firstDiscount,secondDiscount,ID) {
    let button = document.getElementById("btn" + ID);
    let ico = document.getElementById("spn" + ID);
    price = button.getAttribute('data-price');
    if(ID==6){
       let percent7 = price - ((price*7)/100);
        price = percent7;
    }
    firstPrice = (price * firstDiscount) / 100;
    secondPrice = (price * secondDiscount) / 100;
    
    item = {
        Percent70: secondPrice,
        Percent30: firstPrice
    };
    
    fullPrice.innerHTML = price;
    percent70.innerHTML = item.Percent70;
    percent30.innerHTML = item.Percent30;
    styleChanger(button, ico);
};

function styleChanger(button, ico) {
    for (let i = 1; i < 7; i++) {
        let x = "btn" + i;
        let y = "spn" + i;
        let yicon = document.getElementById(y);
        let xbtn = document.getElementById(x);
        do {
            yicon.classList.remove("mi-Mark-2");
            ico.classList.add("mi-Mark-2");
            xbtn.style.border = "1px #ebebeb solid";
            button.style.border = "1px #3fd200bb solid";
        } while (x == button && y == ico);
    }
};
