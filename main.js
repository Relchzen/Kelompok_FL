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

const moneyCount = document.getElementById("moneyCount");
const clicker = document.getElementById("clicker");
const multiplier = document.getElementById("multiplier");

const clickerCount = clicker.getAttribute("clicker");
const multiplierCount = multiplier.getAttribute("multiplier");

function addMoney() {
    var money = Number(moneyCount.getAttribute("money"));
    
    money = money + 1;
    console.log(money);
    moneyCount.setAttribute("money", money);
    localStorage.setItem("money", money);
    document.getElementById("moneyCount").innerHTML = money;

}

function upgradeClicker() {
    
}

function upgradeMultiplier() {
    
}