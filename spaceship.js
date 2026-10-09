// console.log("test");

// 1. Erstelle ein leeres Projekt in VSCode (check)
// a. Lege die Dateien index.html und script.js an (check)
// b. Verlinke die script.js Datei im HTML (check)
// 2. Erstelle ein Repository auf GitHub und verknüpfe es mit deinem Projekt! (check)
// 3. Überlege dir sinnvolle Variablennamen für die folgenden Werte und
// füge sie deinem Script hinzu!
// a. Name des Raumschiffs(check)
// b. Panzerung/Leben des Raumschiffs (hier nur eine Variable!)(check)
// c. Währung(check)
// d. Reparatursets für das Raumschiff(check)
// 4. Setze die folgenden Funktionen um!
// a. Status des Raumschiffs anzeigen(check)
// b. Reparaturset benutzen(check)
// c. Reparaturset kaufen(check)
// d. Schaden nehmen (check)
// Hinweis:
// Leben, Preise, Schadenshöhe usw. sind frei wählbar

//#region VARIABLES
const spaceShipName = "Hail Mary";

let spaceShipCondition = 100;

let money = 100;

const repairKitHPSmall = 30;
let costOfrepairKitSmall = 40;

const repairKitHPLarge = 100;
let costOfrepairKitLarge = 60;

let amountOfRepairKitsSmall = 0;
let amountOfRepairKitsLarge = 0;

let damadgeValue = 80;
let damadgeType = "";
const laserHit = 10;
const rocketHit = 50;
const meteoritCollision = 80;
const spaceShipCollision = 30;

//#endregion

//#region FUNCTIONS

function showAmountOfRepairKits() {
    // let amountOfRepairKits = console.log("Small Repair Kit: " + amountOfRepairKitsSmall); console.log("Large Repair Kit: " + amountOfRepairKitsLarge);
    return console.log(`Small Repair Kit: ${amountOfRepairKitsSmall}\nLarge Repair Kit: ${amountOfRepairKitsLarge}`);

}
function showSpaceShipStatus() {
    console.log(spaceShipName);
    // console.log(spaceShipCondition + " " + "%");
    console.log(`${spaceShipCondition} %`);
    // console.log(money + " " + "$");
    console.log(`${money} $`);
    showAmountOfRepairKits();
}



function checkSpaceShipCondition() {
    if (spaceShipCondition > 20) {
        console.log(`It´s all right Condition is ${spaceShipCondition} %`);
    } else if (spaceShipCondition <= 20) {
        console.log(`${spaceShipName} Condition is ${spaceShipCondition} %\n! REPAIR your SHIP !`);
    }

    else {
        console.log("GAME OVER");
    }
}



function gotDamadge(value) {
    spaceShipCondition -= value;
    showdamadgeType(value);
    console.log(`You got hit by a ${damadgeType}`);
    if (spaceShipCondition <= 0) {
        checkSpaceShipCondition();
        return
    }
    console.log(`You lost ${damadgeValue} % HP`);
    checkSpaceShipCondition()
}

function changeKindOfDamadge(damadgePoints) {
    damadgeValue = damadgePoints;
}

function showdamadgeType(hitType) {
    if (hitType === 10) {
        hitType = "Laser";
    }
    else if (hitType === 50) {
        hitType = "Rocket";
    }
    else if (hitType === 80) {
        hitType = "Meterorit";
    }
    else {
        hitType = "another Ship";
    }
    // console.log(hitType);
    damadgeType = hitType;
}

function showMoney() {
    console.log(`you have ${money} $`);
}

function buyRepairKitSmall() {
    if (money >= 40 && amountOfRepairKitsSmall === 0) {
        money -= 40;
        amountOfRepairKitsSmall += 1;
        console.log(`Transaction succeed, you have bought ${amountOfRepairKitsSmall} Small Repair Kit`);
        showMoney()
    } else if (amountOfRepairKitsSmall >= 1) {
        console.log(`You already have ${amountOfRepairKitsSmall} Small Kit`);
    } else {
        console.log(`You don´t have enough Money for a Small Kit, you got ${money} $`);
    }
}
function buyRepairKitLarge() {
    if (money >= 60 && amountOfRepairKitsLarge === 0) {
        money -= 60;
        amountOfRepairKitsLarge += 1;
        console.log(`Transaction succeed, you have bought ${amountOfRepairKitsLarge} Large Repair Kit`);
        showMoney()
    }
    else if (amountOfRepairKitsSmall >= 1) {
        console.log(`You already have ${amountOfRepairKitsLarge} Large Kit`);
    } else if (money < 60 && money >= 40) {
        console.log(`You don´t have enough Money for a Large Kit, bzt you can buy a Small one, you got ${money} $`);
    }
}

function useRepairKitSmall() {
    if (amountOfRepairKitsSmall >= 1 && spaceShipCondition !== 100) {
        spaceShipCondition += repairKitHPSmall;
        amountOfRepairKitsSmall -= 1;
        console.log(`you successfully use a Small Repair Kit\n${spaceShipName} HP: ${spaceShipCondition} %`);
        showAmountOfRepairKits();
    } else if (amountOfRepairKitsSmall === 0 && amountOfRepairKitsLarge === 0 && spaceShipCondition !== 100) {
        console.log(`You got ${amountOfRepairKitsSmall} Small and ${amountOfRepairKitsLarge} Large Repair Kits!\nYou need to buy one!`);
    } else if (amountOfRepairKitsSmall === 0 && amountOfRepairKitsLarge >= 1) {
        console.log(`You got ${amountOfRepairKitsSmall} Small but ${amountOfRepairKitsLarge} Large Repair Kits!\nDo you want to use this instead?`);
    } else if (spaceShipCondition === 100) {
        console.log(`${spaceShipName} is already at ${spaceShipCondition} % HP !`);
    }

}
function useRepairKitLarge() {
    if (amountOfRepairKitsLarge >= 1 && spaceShipCondition !== 100) {
        spaceShipCondition += repairKitHPLarge;
        if (spaceShipCondition > 100) {
            spaceShipCondition = 100;
        }
        amountOfRepairKitsLarge -= 1;
        console.log(`you successfully use a Large Repair Kit\n${spaceShipName} HP: ${spaceShipCondition} %`);
        showAmountOfRepairKits();
    } else if (amountOfRepairKitsSmall === 0 && amountOfRepairKitsLarge === 0 && spaceShipCondition !== 100) {
        console.log(`You got ${amountOfRepairKitsSmall} Small and ${amountOfRepairKitsLarge} Large Repair Kits!\nYou need to buy one!`);
    } else if (amountOfRepairKitsSmall >= 1 && amountOfRepairKitsLarge === 0) {
        console.log(`You got ${amountOfRepairKitsSmall} Small but ${amountOfRepairKitsLarge} Large Repair Kits!\nDo you want to use this instead?`);
    } else if (spaceShipCondition === 100) {
        console.log(`${spaceShipName} is already at ${spaceShipCondition} % HP !`);
    }

}

function earnMoney(howMuch) {
    money += howMuch;
}



showSpaceShipStatus();
// checkSpaceShipCondition()
// showMoney();
useRepairKitSmall()
useRepairKitLarge()
// showAmountOfRepairKits();

// buyRepairKitSmall();
gotDamadge(damadgeValue);
// checkSpaceShipCondition()
useRepairKitSmall();
// showMoney();
// showAmountOfRepairKits();
// buyRepairKitLarge()
// showMoney();
// showAmountOfRepairKits();

// useRepairKitSmall();


// // amountOfRepairKitsSmall = 0;
buyRepairKitSmall();
useRepairKitSmall()
useRepairKitLarge()
buyRepairKitLarge()
useRepairKitLarge()
showAmountOfRepairKits();
useRepairKitLarge()

gotDamadge(damadgeValue);
useRepairKitLarge()
buyRepairKitSmall();
buyRepairKitLarge()
earnMoney(200)
buyRepairKitSmall();
buyRepairKitLarge()
showAmountOfRepairKits();
showMoney();
buyRepairKitLarge()
checkSpaceShipCondition()
useRepairKitLarge()
showMoney();
checkSpaceShipCondition()
gotDamadge(damadgeValue);
showAmountOfRepairKits();
useRepairKitSmall()
showMoney();
useRepairKitSmall()
useRepairKitLarge()
buyRepairKitSmall()
buyRepairKitSmall()
useRepairKitLarge()
useRepairKitSmall()
buyRepairKitLarge()
useRepairKitSmall()
useRepairKitLarge()

changeKindOfDamadge(laserHit)
gotDamadge(damadgeValue);
gotDamadge(damadgeValue);
gotDamadge(damadgeValue);
gotDamadge(damadgeValue);
gotDamadge(damadgeValue);
gotDamadge(damadgeValue);
gotDamadge(damadgeValue);
gotDamadge(damadgeValue);
gotDamadge(damadgeValue);
gotDamadge(damadgeValue);
gotDamadge(damadgeValue);


// changeKindOfDamadge(laserHit);


// gotDamadge(damadgeValue);

// changeKindOfDamadge(rocketHit);

// gotDamadge(damadgeValue);

// changeKindOfDamadge(spaceShipCollision);

// gotDamadge(damadgeValue);

// changeKindOfDamadge(meteoritCollision);

// gotDamadge(damadgeValue);



// checkSpaceShipCondition()



//#endregion