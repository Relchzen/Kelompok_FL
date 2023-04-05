moneyCount.value = 0

function addMoney() {
    var moneyCount = document.getElementById("moneyCount");

    moneyCount.value += 1;
    moneyCount.innerHTML = moneyCount.value;
}

function auto() {
    i = 0;
    while(i != 1){
        addMoney();
        sleep(1);
    }
}