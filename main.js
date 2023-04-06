const nav = document.querySelector("#navbar");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    const visibility = nav.getAttribute("data-visible");
    
    if (visibility === "false") {
        nav.setAttribute("data-visible", "true");
        navToggle.setAttribute("aria-expanded", "true");
        navToggle.innerHTML = '<i class="fa-solid fa-xmark fa-2xl" style="color: #ffffff;"></i>';
    } else if (visibility === "true") {
        nav.setAttribute("data-visible", "false");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.innerHTML ='<i class="fa-solid fa-bars fa-2xl" style="color: #f2f2f2;"></i>'
    }
})

const shop = document.querySelector("#shop");
const shopToggle = document.querySelector(".shop-toggle");

shopToggle.addEventListener("click", () => {
    const visibility = shop.getAttribute("data-visible");

    if(visibility === "false") {
        shop.setAttribute("data-visible", "true");
        shopToggle.setAttribute("aria-expanded", "false");
    } else if (visibility === "true") {
        shop.setAttribute("data-visible", "false");
        shopToggle.setAttribute("aria-expanded", "false");
    }
})

money = 0;
var moneyadd = 1;
var multiadd = 1;
let automuch = 0;
function addMoney() {
    var moneyCount = document.getElementById("moneyCount");
    var money = Number(moneyCount.getAttribute("money"));
    localStorage.removeItem(money);
    
    money = money + moneyadd * multiadd;
    moneyCount.setAttribute("money", money);
    localStorage.setItem("money", money);
    document.getElementById("moneyCount").innerHTML = money;
}

function upgradeClicker() {
        var autoclick = document.getElementById('autoclickbtn');
        var money = Number(moneyCount.getAttribute("moneyCount"));
        if(automuch >= 1){
        money = money + 1
        console.log(money);
        moneyCount.setAttribute("moneyCount", money);
        localStorage.setItem("moneyCount", money);
        document.getElementById("moneyCount").innerHTML = money;
        setInterval(function() {
            autoclick.click()
        }, 1000)
    }else{
        window.alert("lol mana autonya")
    }
}

function upgradepet(){
    var petup = document.getElementById("petbuy");
    petup = 500;
    if (money >= petup){
        moneyadd += 1;
        money -= 500;
    }else{
        window.alert("mana duitnya")
    }
    document.getElementById("moneyCount").innerHTML = money;
}
function upgradeauto(){
    var autoup = document.getElementById("autobuy");
    autoup = 500;
    if (money >= autoup){
        automuch += 1;
        money -= 500;
    }else{
        window.alert("mana duitnya");
    }
    document.getElementById("moneyCount").innerHTML = money;
    document.getElementById("awokawok").innerHTML = automuch;
}

function upgrademulti(){
    var multiup = document.getElementById("multibuy");
    multiup = 500;
    if (money >= multiup){
        multiadd++;
        money -= 500;
    }else{
        window.alert("mana duitnya")
    }
    document.getElementById("multi").innerHTML = multiadd;
    document.getElementById("moneyCount").innerHTML = money;
}
