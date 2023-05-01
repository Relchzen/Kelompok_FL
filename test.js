// Variabel untuk menyimpan uang dan auto-clicker
var money = 0;
var moneyValue = 1;
var autoClickers = 0;
var cabang = 0;

// Variabel untuk menyimpan status upgrade dan auto-click
var upgrade1 = false;
var upgrade2 = false;
var upgrade3 = false;

// Variabel untuk menyimpan cost upgrade dan auto-click
var upgrade1Cost = 5000;
var upgrade2Cost = 500000;
var upgrade3Cost = 500000000;
var autoClickCost = 1;
var cabangCost = 100;

// Variabel untuk menyimpan interval auto-click
var autoClickInterval;

// Fungsi untuk menambah uang
function addMoney(amount) {
    money += (amount);
    document.getElementById("money").innerHTML = Math.floor(money);
}

// Fungsi untuk menambah auto-clicker
function addAutoClicker() {
    autoClickers++;
    document.getElementById("auto-clickers").innerHTML = autoClickers;
}

function addCabang() {
    cabang++;
    document.getElementById("income-multipliers").innerHTML = cabang;
}
// Fungsi untuk membeli upgrade
function buyUpgrade(cost, upgrade) {
    if (money >= cost) {
        money -= cost;
        document.getElementById("money").innerHTML = money;
        switch (upgrade) {
            case 1:
                upgrade1 = true;
                document.getElementById("upgrade1").disabled = true;
                moneyValue=moneyValue*5
                break;
            case 2:
                upgrade2 = true;
                document.getElementById("upgrade2").disabled = true;
                moneyValue=moneyValue*50
                break;
            case 3:
                upgrade3 = true;
                document.getElementById("upgrade3").disabled = true;
                moneyValue=moneyValue*500
                break;
        }
    } else {
        document.getElementById("warning").style.display = "block";
    }
}

// Fungsi untuk membeli auto-click
function buyAutoClick(cost) {
    if (money >= cost) {
        money -= cost;
        document.getElementById("money").innerHTML = money;
        addAutoClicker();
        activateAutoClick();
        autoClickCost *= 2; // double the auto-click cost after adding an auto-clicker
        document.getElementById("auto-click-cost").innerHTML = autoClickCost; // update the cost display
    } else {
        document.getElementById("warning").style.display = "block";
    }
}

// Fungsi untuk membeli cabang
function buyCabang(cost) {
    if (money >= cost) {
        money -= cost;
        document.getElementById("money").innerHTML = money;
        addCabang();
        cabangCost *= 10; // quad the cabang cost after adding an cabang
        document.getElementById("income-multiplier-cost").innerHTML = cabangCost; // update the cost display
        moneyValue= 2*moneyValue;
    } else {
        document.getElementById("warning").style.display = "block";
    }
}

// Fungsi untuk mengklik objek
function clickObject() {
    addMoney(moneyValue);
}

// Fungsi untuk mengaktifkan auto-click
function activateAutoClick() {
    autoClickInterval = setInterval(function() {
        addMoney(moneyValue);
    }, 1000);
}

// Fungsi untuk menonaktifkan auto-click
function deactivateAutoClick() {
    clearInterval(autoClickInterval);
}

// Event listener untuk mengklik objek
document.getElementById("object").addEventListener("click", clickObject);

// Event listener untuk membeli upgrade 1
document.getElementById("upgrade1").addEventListener("click", function() {
    buyUpgrade(upgrade1Cost, 1);
});

// Event listener untuk membeli upgrade 2
document.getElementById("upgrade2").addEventListener("click", function() {
    buyUpgrade(upgrade2Cost, 2);
});

// Event listener untuk membeli upgrade 3
document.getElementById("upgrade3").addEventListener("click", function() {
    buyUpgrade(upgrade3Cost, 3);
});

// Event listener untuk membeli auto-click
document.getElementById("auto-click").addEventListener("click", function() {
    buyAutoClick(autoClickCost);
});

// Event listener untuk membeli income multiplier
document.getElementById("income-mulitpier").addEventListener("click", function() {
    buyCabang(cabangCost);
});

// Event listener untuk menampilkan halaman About Us
document.getElementById("about-us").addEventListener("click", function() {
    document.getElementById("about-us-modal").style.display = "block";
});

// Event listener untuk menutup peringatan
document.getElementById("close-warning").addEventListener("click", function() {
    document.getElementById("warning").style.display = "none";
});

// Event listener untuk menutup halaman About Us
document.getElementById("close-about-us").addEventListener("click", function() {
    document.getElementById("about-us-modal").style.display = "none";
});

// Event listener untuk mengaktifkan auto-click
document.getElementById("main-game").addEventListener("click", function() {
    activateAutoClick(); // activate auto-click when the user clicks on the main game area
});


// Update cost upgrade dan auto-click
document.getElementById("upgrade1-cost").innerHTML = upgrade1Cost;
document.getElementById("upgrade2-cost").innerHTML = upgrade2Cost;
document.getElementById("upgrade3-cost").innerHTML = upgrade3Cost;
document.getElementById("auto-click-cost").innerHTML = autoClickCost;
document.getElementById("income-multiplier-cost").innerHTML = cabangCost;
document.getElementById("money").innerHTML = Math.floor(money);
