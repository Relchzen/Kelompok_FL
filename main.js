var money = document.getElementById("moneyCount");
var multi = 1;
money=0;

function addMoney(money) {
    money += 1*multi;

    money.innerHTML = money;
}