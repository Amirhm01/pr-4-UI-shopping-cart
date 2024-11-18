const arr = [
    {
        item: 1, img: "img/item1.png"
    },
    {
        item: 2, img: "img/item2.png"
    },
    {
        item: 3, img: "img/item3.png"
    },
    {
        item: 4, img: "img/item4.png"
    },
    {
        item: 5, img: "img/item5.png"
    },
    {
        item: 6, img: "img/item6.png"
    },
    {
        item: 7, img: "img/item7.png"
    }
]

for (let i = 1; i <= arr.length; i++) {
    arr.forEach(arr => {
        if (arr.item == i) {
            let divname = 'item' + i;
            let divs = document.getElementsByClassName(divname)[0];
            imgaddres = "url('" + arr.img + "')"
            divs.style.backgroundImage = imgaddres;

        }
    })
}


let SwitchDiv = document.getElementsByClassName('switch-Div')[0];
let Dashboard = document.getElementById('dashboard');
Dashboard.addEventListener('click', SwitchDashboard);

let cart = document.getElementById('cart');
cart.addEventListener('click', showcart);



let SaerchInp = document.getElementById('saerch-inp');
let SaerchButton = document.getElementById('SaerchButton');

SaerchButton.addEventListener('click', saerchbutt);
SaerchInp.addEventListener('click', saerchbutt);

SaerchButton.addEventListener('focusout', onfocusfun);
SaerchInp.addEventListener('focusout', onfocusfun);

let allbutton = document.getElementById('all-button');
let malebutton = document.getElementById('male-button');
let femalebutton = document.getElementById('female-button');
allbutton.addEventListener('click', headerbutton)
malebutton.addEventListener('click', headerbutton)
femalebutton.addEventListener('click', headerbutton)





function showcart() {
    SwitchDiv.style.left = "49%";
    SwitchDiv.style.boxShadow = "-1px 0px 10px -5px";
    Dashboard.style.fontSize = "15px";
    cart.style.fontSize = "20px";
    let mainbody = document.getElementById('mainbody');
    mainbody.style.visibility = "hidden";
    let CartDiv = document.getElementById('cart-div');
    CartDiv.style.visibility = "visible";




}
function SwitchDashboard() {
    SwitchDiv.style.left = "1%";
    SwitchDiv.style.boxShadow = "1px 0px 10px -5px";
    cart.style.fontSize = "15px";
    Dashboard.style.fontSize = "20px";
    let CartDiv = document.getElementById('cart-div');
    CartDiv.style.visibility = "hidden";
    let mainbody = document.getElementById('mainbody');
    mainbody.style.visibility = "visible";




}

function saerchbutt() {
    SaerchInp.style.width = "17em";
    SaerchInp.style.outline = "none";

}

function onfocusfun() {
    SaerchInp.style.width = "0.6em";

}
var check = 0;
function barsfunction() {
    let LeftDiv = document.getElementById('LeftDiv-id');
    let barsMenu = document.getElementById('bars-menu');
    let closeMenu = document.getElementById('close-menu');
    closeMenu.style.display = "block";
    LeftDiv.style.left = "0%";
}
function closemunufunction() {
    let LeftDiv = document.getElementById('LeftDiv-id');
    let barsMenu = document.getElementById('bars-menu');
    let closeMenu = document.getElementById('close-menu');
    barsMenu.style.display = "block";
    closeMenu.style.display = "none";
    LeftDiv.style.left = "-100%";






}