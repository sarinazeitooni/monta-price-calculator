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
        borderchanger(btn);
        iconchanger(ico);
    }; 
    function borderchanger(btn){
        for(let i = 1 ; i<6 ; i++){
            let x = "btn" + i;
            let xbtn = document.getElementById(x);  
        do { 
                    xbtn.style.border = "1px #ebebeb solid";
                    btn.style.border= "1px #3fd200bb solid";
            } while (x == btn);
        }
    };
    function iconchanger(icon){
        for(let i =1 ; i<6 ; i++){
            let x = "spn" + i;
            xicon = document.getElementById(x);
            do{
                xicon.classList.remove("mi-mark-1");
                icon.classList.add("mi-mark-1");
            }while(x==icon);
        }
    };