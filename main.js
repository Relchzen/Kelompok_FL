function addMoney() {
    var moneyCount = document.getElementById("moneyCount");
    var money = Number(moneyCount.getAttribute("money"));
}

function auto() {
    i = 0;
    while(i != 1){
        addMoney();
        sleep(1);
    }
}