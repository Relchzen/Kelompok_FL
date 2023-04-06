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

function addMoney() {
    var moneyCount = document.getElementById("moneyCount");
    var money = Number(moneyCount.getAttribute("money"));
    
    money += 1;
    moneyCount.setAttribute("money", money);
    localStorage.setItem("money", money);
    document.getElementById("moneyCount").innerHTML = money;

}

function auto() {
    i = 0;
    while(i != 1){
        addMoney();
        // sleep(1);
    }
}