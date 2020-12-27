let ButtonsContainer = document.getElementById("mapButtonsContainer");
let ButtonException = document.getElementById("mapButtonException");
let pricesContainer = document.getElementById("prices");
items = [
    { ID : "1" , dataPrice:25000 , month:1 },
    { ID : "2" , dataPrice:50000 , month:3 },
    { ID : "3" , dataPrice:75000 , month:6 },
    { ID : "4" , dataPrice:100000 , month:9 },
    { ID : "5" , dataPrice:125000 , month:12 },
    { ID : "6" , dataPrice:116250 , month:12}
];
function discount(Discount=70,ID) {
    let button = document.getElementById("btn" + ID);
    let ico = document.getElementById("spn" + ID);
    console.log(button);
    let tagret = items[ID-1];
    price = tagret.dataPrice;
    firstPrice = (price * Discount) / 100;
    secondPrice = price - firstPrice;
    prices = {
        Percent70: firstPrice,
        Percent30: secondPrice
    };
     pricesContainer.innerHTML = `<p class="">قیمت کل:<span>${tag=tagret.dataPrice}</span> تومان <span
     class="is-block-mobile text-size-8-n">(حق
     اشتراک:<span>${prices.Percent70}</span> + شارژ دریافتی:
     <span>${prices.Percent30}</span>)</span> </p>` ;
};
function MAP(item) {
    let buttonId = "btn" + item.ID;
    let spanId = "spn" + item.ID;
    let button = document.getElementById(buttonId);
    let ico = document.getElementById(spanId);
    if(item.ID == 6){
        ButtonException.innerHTML = `<button id="${buttonId}" data-price="${item.dataPrice}"
        onclick="discount(70,${item.ID})" class="Buttons button"><span
        id="${spanId}" class=""> </span> &nbsp; ${item.month} ماه </button>`;
    }else{
        mapButtonsContainer.innerHTML += `<button id="${buttonId}" data-price="${item.dataPrice}"
        onclick="discount(70,${item.ID})" class=" Buttons button"><span
        id="${spanId}" class=""> </span> &nbsp; ${item.month} ماه </button>` ;
    }
    price = item.dataPrice;
    if(item.hasDiscount){
       let percent7 = price - ((price*7)/100);
        item.dataPrice = percent7;
    }
    let firstPrice = (price * 70) / 100;
    let secondPrice = price - firstPrice;
    let prices = {
        Percent70: firstPrice,
        Percent30: secondPrice
    };
};
function styleChanger(ID) {
    let targetSpan = document.getElementById("spn" + ID);
    for (let i = 1; i < 7; i++) {
        let span = document.getElementById("spn" + i);
        do {
            span.classList.remove("mi-Mark-2");
            targetSpan.classList.add("mi-Mark-2");
        } while (targetSpan == span);
    }
};
function myFunction(){
    items.map(MAP);
};
