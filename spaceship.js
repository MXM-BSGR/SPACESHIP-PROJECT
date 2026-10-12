1// console.log("test");


// ===================================================================
// -------------------------------------------------------------------
// ===================================================================

//#region VARIABLES
const spaceShipName = "Hail Mary";

let spaceShipCondition = 1000;

let money = 500;

const repairKitHPSmall = 30;
let costOfrepairKitSmall = 40;

const repairKitHPLarge = 100;
let costOfrepairKitLarge = 60;

let amountOfRepairKitsSmall = 0;
let amountOfRepairKitsLarge = 0;


let damadgeValue = 0;
let damadgeType = "";
const laserHit = 10;
const rocketHit = 50;
const meteoritCollision = 80;
const spaceShipCollision = 30;


let shieldPrice = 200;
let amountOfShields = 0;

let inventoryShip = [];


//#endregion

// ===================================================================

//#region GLOBAL FUNCTION VARIABLES
const hitVisualizer = document.getElementById("id_game_visualizer_hit");

const gameOverMsg = document.getElementById("id_game_over_msg");

let inputAttackValue = document.getElementById("input_add_damadge");

let inputKitQtyRef = document.getElementById("input_kit_qty");
let kit_qty = Number(inputKitQtyRef.value);

const amountOfRepairKitsSmallRef = document.getElementById("smallRepaiKitAmount");
const amountOfRepairKitsLargeRef = document.getElementById("largeRepairKitAmount");
// console.log(kit_qty);
const cockpitMsgDisplay = document.getElementById("id_status_msg_diplay");


// #endregion

// ===================================================================
// -------------------------------------------------------------------
// ===================================================================

//#region CREATE

function buyShield() {
    if (money >= 200) {
        money -= 200;
        amountOfShields += 1;
        showSuccessMsg(`!You just bought ${amountOfShields} Shield/s!`);
        inventoryShip.push("shield");
        console.log(inventoryShip);
    }
}

function buyRepairKitSmall(qty) {
    // logKitsToBuy();
    logKitsToBuy()
    qty = kit_qty;
    if (qty === 0) {
        showErrorMsg("type in how much you want");
    }
    // console.log(qty);
    for (let i = 1; i <= qty; i++) {
        if (money >= 40 /* && amountOfRepairKitsSmall === 0 */) {
            money -= 40;
            amountOfRepairKitsSmall += 1;
            inventoryShip.push("SMALL Repair Kit")
            showSuccessMsg(`Transaction succeed, you have bought ${i/* amountOfRepairKitsSmall */} Small Repair Kit/s`);
            console.log(`Transaction succeed, you have bought ${i/* amountOfRepairKitsSmall */} Small Repair Kit/s`);
            showMoney()
            console.log(inventoryShip);
        }
        //  else if (amountOfRepairKitsSmall >= 1) {
        //     console.log(`You already have ${ amountOfRepairKitsSmall } Small Kit`);
        // } 
        else {
            showErrorMsg(`You don´t have enough Money for a Small Kit, you got ${money} $`);
            // console.log(`You don´t have enough Money for a Small Kit, you got ${money} $`);
        }
    }
}

function buyRepairKitLarge(qty) {
    logKitsToBuy()
    qty = kit_qty;
    if (qty === 0) {
        showErrorMsg("type in how much you want");
    }
    for (let i = 1; i <= qty; i++) {
        if (money >= 60 /* && amountOfRepairKitsLarge === 0 */) {
            money -= 60;
            amountOfRepairKitsLarge += 1;
            inventoryShip.push("LARGE Repair Kit");
            showSuccessMsg(`Transaction succeed, you have bought ${i/* amountOfRepairKitsLarge */} Large Repair Kit/s`);
            console.log(`Transaction succeed, you have bought ${i/* amountOfRepairKitsLarge */} Large Repair Kit/s`);

            showMoney()
            console.log(inventoryShip);
        }
        // else if (amountOfRepairKitsSmall >= 1) {
        //     console.log(`You already have ${ amountOfRepairKitsLarge } Large Kit`);
        // } 
        else if (money < 60 && money >= 40) {
            showErrorMsg(`You don´t have enough Money for a Large Kit, you only got ${money} $`);
            console.log(`You don´t have enough Money for a Large Kit, you only got ${money} $`);
        }
        else {
            showErrorMsg(`You don´t have enough Money to buy a Repair Kit you got ${money} $`);
            console.log(`You don´t have enough Money to buy a Repair Kit you got ${money} $`);
        }
    }
}



//#endregion

//#region FUNCTIONS

// ===================================================================

//#region  SORT
function earnMoney(howMuch) {
    money += howMuch;
}
//#endregion

// ===================================================================

// #region STATUS EVENTS

function showAmountOfRepairKits() {
    // let amountOfRepairKits = console.log("Small Repair Kit: " + amountOfRepairKitsSmall); console.log("Large Repair Kit: " + amountOfRepairKitsLarge);
    return console.log(`Small Repair Kit: ${amountOfRepairKitsSmall}\nLarge Repair Kit: ${amountOfRepairKitsLarge}`);
}

// ------------------------------------------------------------------
function renderStatus() {
    console.log(spaceShipName);
    // console.log(spaceShipCondition + " " + "%");
    console.log(`${spaceShipCondition} %`);
    // console.log(money + " " + "$");
    console.log(`${money} $`);
    showAmountOfRepairKits();

    document.getElementById("shipName").innerText = `| ${spaceShipName} |`;

    document.getElementById("shipHP").innerText = `${spaceShipCondition} HP`;

    document.getElementById("playerMoney").innerText = `${money} $`;

    amountOfRepairKitsSmallRef.innerText = `${amountOfRepairKitsSmall}`;
    if (amountOfRepairKitsSmall === 0) {
        amountOfRepairKitsSmallRef.style.color = "red";
    } else {
        amountOfRepairKitsSmallRef.style.color = "rgb(0 255 149)";
        amountOfRepairKitsSmallRef.style.backgroundColor = "none";
    }

    amountOfRepairKitsLargeRef.innerText = `${amountOfRepairKitsLarge}`;
    if (amountOfRepairKitsLarge === 0) {
        amountOfRepairKitsLargeRef.style.color = "red";
    } else {
        amountOfRepairKitsLargeRef.style.color = "rgb(0 255 149)";
    }
}
// ------------------------------------------------------------------
function renderHP() {
    document.getElementById("shipHP").innerText = `${spaceShipCondition} % `;
}
// ------------------------------------------------------------------
function checkSpaceShipCondition() {
    if (spaceShipCondition > 20) {
        // evtl. Prioritäten einfügen und abfragen oder nach einander zeigen lassen 
        // showSuccessMsg(`It´s all right Condition is ${spaceShipCondition} %`);
        console.log(`It´s all right Condition is ${spaceShipCondition} %`);
    } else if (spaceShipCondition <= 20 && spaceShipCondition > 0) {
        showErrorMsg(`${spaceShipName} Condition is ${spaceShipCondition} %\n! REPAIR your SHIP !`);
        console.log(`${spaceShipName} Condition is ${spaceShipCondition} %\n! REPAIR your SHIP !`);
    } else {
        showErrorMsg("GAME OVER");
        showGameOver()
        console.log("GAME OVER");
    }

}
// ------------------------------------------------------------------
function showMoney() {
    console.log(`you have ${money} $`);
}
// ------------------------------------------------------------------
function logKitsToBuy() {
    kit_qty = Number(inputKitQtyRef.value);
    // console.log(kit_qty);
    return kit_qty
}
// ------------------------------------------------------------------
// function logKitsToBuy() {
//     console.dir(inputKitQtyRef);
//     console.log(kit_qty);
// }

//#endregion

// ===================================================================

// #region ATTACK
function gotDamadge(value) {
    spaceShipCondition -= value;
    // showdamadgeType(value);
    // console.log(`You got hit by a ${damadgeType}`);
    if (spaceShipCondition <= 0) {
        spaceShipCondition = 0;
        checkSpaceShipCondition();
        return
    }
    if (inputAttackValue.value > 0) {
        showErrorMsg(`You lost ${damadgeValue} % HP`);
        console.log(`You lost ${damadgeValue} % HP`);
        checkSpaceShipCondition()
    }

}
// ------------------------------------------------------------------
function attackTriggeredByBtn(input) {
    input = document.getElementById("input_add_damadge").value;
    damadgeValue = input;
    damadgeByActivShield();

    gotDamadge(damadgeValue);
    setTimeout(resetInputDamage, 100);
    // document.getElementById("input_add_damadge").value = "";
    // console.log(spaceShipCondition);

}
// ------------------------------------------------------------------
function resetInputDamage() {
    document.getElementById("input_add_damadge").value = "";
}

// buyShield();
damadgeByActivShield();
function damadgeByActivShield() {
    if (inventoryShip.includes("shield")) {
        damadgeValue /= 2;
    }
}
// ------------------------------------------------------------------
// function changeKindOfDamadge(damadgePoints) {
//     damadgeValue = damadgePoints;
// }
// ------------------------------------------------------------------
// function showdamadgeType(hitType) {
//     if (hitType === 10) {
//         hitType = "Laser";
//     }
//     else if (hitType === 50) {
//         hitType = "Rocket";
//     }
//     else if (hitType === 80) {
//         hitType = "Meterorit";
//     }
//     else {
//         hitType = "another Ship";
//     }
//     // console.log(hitType);
//     damadgeType = hitType;
// }
// ------------------------------------------------------------------
//#endregion

// ===================================================================

// #region UI EVENTS
function showHit() {
    // console.dir(inputAttackValue);
    // console.log(inputAttackValue.value);
    if (inputAttackValue.value > 0) {

        hitVisualizer.classList.add("hit_animation");
        setTimeout(removeAnimation, 300, "hit_animation")
    } else {
        showErrorMsg("NO Attack Value setted");
        // return console.log("NO Attack Value setted");
    }

}
// ------------------------------------------------------------------

function removeAnimation(animationName) {
    // console.log(animationName);
    hitVisualizer.classList.remove(animationName);
}
// ------------------------------------------------------------------

function showGameOver() {
    gameOverMsg.classList.add("game_over_animation");
    gameOverMsg.style.pointerEvents = "all";
}
// ------------------------------------------------------------------

function restart() {
    location.reload();

}
// ------------------------------------------------------------------

// #endregion

// ===================================================================

// #region STORE
// function buyRepairKitSmall(qty) {
//     // logKitsToBuy();
//     logKitsToBuy()
//     qty = kit_qty;
//     if (qty === 0) {
//         showErrorMsg("type in how much you want");
//     }
//     // console.log(qty);
//     for (let i = 1; i <= qty; i++) {
//         if (money >= 40 /* && amountOfRepairKitsSmall === 0 */) {
//             money -= 40;
//             amountOfRepairKitsSmall += 1;
//             showSuccessMsg(`Transaction succeed, you have bought ${i/* amountOfRepairKitsSmall */} Small Repair Kit/s`);
//             console.log(`Transaction succeed, you have bought ${i/* amountOfRepairKitsSmall */} Small Repair Kit/s`);
//             showMoney()
//         }
//         //  else if (amountOfRepairKitsSmall >= 1) {
//         //     console.log(`You already have ${ amountOfRepairKitsSmall } Small Kit`);
//         // } 
//         else {
//             showErrorMsg(`You don´t have enough Money for a Small Kit, you got ${money} $`);
//             // console.log(`You don´t have enough Money for a Small Kit, you got ${money} $`);
//         }
//     }
// }

// function buyRepairKitLarge(qty) {
//     logKitsToBuy()
//     qty = kit_qty;
//     if (qty === 0) {
//         showErrorMsg("type in how much you want");
//     }
//     for (let i = 1; i <= qty; i++) {
//         if (money >= 60 /* && amountOfRepairKitsLarge === 0 */) {
//             money -= 60;
//             amountOfRepairKitsLarge += 1;
//             showSuccessMsg(`Transaction succeed, you have bought ${i/* amountOfRepairKitsLarge */} Large Repair Kit/s`);
//             console.log(`Transaction succeed, you have bought ${i/* amountOfRepairKitsLarge */} Large Repair Kit/s`);

//             showMoney()
//         }
//         // else if (amountOfRepairKitsSmall >= 1) {
//         //     console.log(`You already have ${ amountOfRepairKitsLarge } Large Kit`);
//         // } 
//         else if (money < 60 && money >= 40) {
//             showErrorMsg(`You don´t have enough Money for a Large Kit, you only got ${money} $`);
//             console.log(`You don´t have enough Money for a Large Kit, you only got ${money} $`);
//         }
//         else {
//             showErrorMsg(`You don´t have enough Money to buy a Repair Kit you got ${money} $`);
//             console.log(`You don´t have enough Money to buy a Repair Kit you got ${money} $`);
//         }
//     }
// }

// ------------------------------------------------------------------
// buyShield()

function buyShield() {
    if (money >= 200) {
        money -= 200;
        amountOfShields += 1;
        showSuccessMsg(`!You just bought ${amountOfShields} Shield/s!`);
        inventoryShip.push("shield");
        console.log(inventoryShip);
    }
}

// ------------------------------------------------------------------

//#endregion

// ===================================================================

// #region USE ITEMS

function getIndexOfKit(size) {
    for (let i = 0; i < inventoryShip.length; i++) {
        if (inventoryShip[i] === `${size} Repair Kit`) {
            console.log(i);
            return i;
        }
        // else {
        //     showErrorMsg(`No ${size} Kit FOUND`);  // NO KITS AVAILABLE gelogt
        // }
    }
}

function useRepairKitSmall() {
    if (checkAvailabilityOfRepairKit("SMALL") === true) {
        if (amountOfRepairKitsSmall >= 1 && spaceShipCondition !== 1000) {
            if (spaceShipCondition > 1000) {
                spaceShipCondition = 1000;
            }
            spaceShipCondition += repairKitHPSmall;
            amountOfRepairKitsSmall -= 1;
            console.log(inventoryShip);
            // let i = getIndexOfKit("SMALL");
            // console.log(i);
            // inventoryShip.splice(i, 1);
            inventoryShip.splice(getIndexOfKit("SMALL"), 1);
            // console.log(inventoryShip);
            showSuccessMsg(`you successfully use a Small Repair Kit\n${spaceShipName} HP: ${spaceShipCondition} % `);
            console.log(`you successfully use a Small Repair Kit\n${spaceShipName} HP: ${spaceShipCondition} % `);
            showAmountOfRepairKits();
        } else if (amountOfRepairKitsSmall === 0 && amountOfRepairKitsLarge === 0 && spaceShipCondition !== 1000) {
            showErrorMsg(`You got ${amountOfRepairKitsSmall} Small and ${amountOfRepairKitsLarge} Large Repair Kits!`);
            console.log(`You got ${amountOfRepairKitsSmall} Small and ${amountOfRepairKitsLarge} Large Repair Kits!`);
        } else if (amountOfRepairKitsSmall === 0 && amountOfRepairKitsLarge >= 1) {
            showErrorMsg(`You got ${amountOfRepairKitsSmall} Small but ${amountOfRepairKitsLarge} Large Repair Kits!`);
            console.log(`You got ${amountOfRepairKitsSmall} Small but ${amountOfRepairKitsLarge} Large Repair Kits!\nDo you want to use this instead ? `);
        } else if (spaceShipCondition === 1000) {
            showErrorMsg(`${spaceShipName} is already at ${spaceShipCondition} % HP!`);
            console.log(`${spaceShipName} is already at ${spaceShipCondition} % HP!`);
        }

    }
}
// checkAvailabilityOfRepairKit("SMALL");

function checkAvailabilityOfRepairKit(size) {
    if (inventoryShip.includes(`${size} Repair Kit`)) {
        return true;
    } else {
        showErrorMsg(`No ${size} Kits available`);
        return false
    }
}
// ------------------------------------------------------------------

function useRepairKitLarge() {
    if (checkAvailabilityOfRepairKit("LARGE") === true) {
        if (amountOfRepairKitsLarge >= 1 && spaceShipCondition !== 1000) {
            spaceShipCondition += repairKitHPLarge;
            if (spaceShipCondition > 1000) {
                spaceShipCondition = 1000;
            }
            amountOfRepairKitsLarge -= 1;
            console.log(inventoryShip);
            // let i = getIndexOfKit("SMALL");
            // console.log(i);
            // inventoryShip.splice(i, 1);
            inventoryShip.splice(getIndexOfKit("LARGE"), 1);
            console.log(inventoryShip);
            showSuccessMsg(`you successfully use a Large Repair Kit\n${spaceShipName} HP: ${spaceShipCondition} % `);
            console.log(`you successfully use a Large Repair Kit\n${spaceShipName} HP: ${spaceShipCondition} % `);
            showAmountOfRepairKits();
        } else if (amountOfRepairKitsSmall === 0 && amountOfRepairKitsLarge === 0 && spaceShipCondition !== 1000) {
            showErrorMsg(`You got ${amountOfRepairKitsSmall} Small and ${amountOfRepairKitsLarge} Large Repair Kits!`);
            console.log(`You got ${amountOfRepairKitsSmall} Small and ${amountOfRepairKitsLarge} Large Repair Kits!\nYou need to buy one!`);
        } else if (amountOfRepairKitsSmall >= 1 && amountOfRepairKitsLarge === 0) {
            showErrorMsg(`You got ${amountOfRepairKitsSmall} Small but ${amountOfRepairKitsLarge} Large Repair Kits!`);
            console.log(`You got ${amountOfRepairKitsSmall} Small but ${amountOfRepairKitsLarge} Large Repair Kits!\nDo you want to use this instead ? `);
        } else if (spaceShipCondition === 1000) {
            showErrorMsg(`${spaceShipName} is already at ${spaceShipCondition} % HP!`);
            console.log(`${spaceShipName} is already at ${spaceShipCondition} % HP!`);
        }

    }
}
// ------------------------------------------------------------------

// #endregion

// ===================================================================

// #region MESSAGES
// console.dir(cockpitMsgDisplay);
function showErrorMsg(erMsg) {
    // console.dir(cockpitMsgDisplay);
    cockpitMsgDisplay.textContent = erMsg;

    cockpitMsgDisplay.style.backgroundColor = "rgb(255 0 43 / 71.9%)";
    cockpitMsgDisplay.style.color = "rgb(255 179 0)";

}

function showSuccessMsg(positiveMsg) {
    // console.dir(cockpitMsgDisplay);
    cockpitMsgDisplay.textContent = positiveMsg;
    cockpitMsgDisplay.style.color = "rgb(0 255 149)";


}

//#endregion

// ===================================================================



// ===================================================================
// -------------------------------------------------------------------
// ===================================================================

// renderStatus()

// // checkSpaceShipCondition()
// // showMoney();
// useRepairKitSmall()
// useRepairKitLarge()
// // showAmountOfRepairKits();

// // buyRepairKitSmall();
// gotDamadge(damadgeValue);
// // checkSpaceShipCondition()
// useRepairKitSmall();
// // showMoney();
// // showAmountOfRepairKits();
// // buyRepairKitLarge()
// // showMoney();
// // showAmountOfRepairKits();

// // useRepairKitSmall();


// // // amountOfRepairKitsSmall = 0;

// renderStatus()
// buyRepairKitSmall();
// useRepairKitSmall()
// useRepairKitLarge()
// buyRepairKitLarge()
// useRepairKitLarge()
// showAmountOfRepairKits();
// useRepairKitLarge()

// gotDamadge(damadgeValue);
// useRepairKitLarge()
// buyRepairKitSmall();
// buyRepairKitLarge()
// earnMoney(200)
// buyRepairKitSmall();
// buyRepairKitLarge()
// showAmountOfRepairKits();
// showMoney();
// buyRepairKitLarge()
// checkSpaceShipCondition()
// useRepairKitLarge()
// showMoney();
// checkSpaceShipCondition()
// gotDamadge(damadgeValue);
// showAmountOfRepairKits();
// useRepairKitSmall()
// showMoney();
// useRepairKitSmall()
// useRepairKitLarge()
// buyRepairKitSmall()
// buyRepairKitSmall()
// useRepairKitLarge()
// useRepairKitSmall()
// buyRepairKitLarge()
// useRepairKitSmall()
// useRepairKitLarge()

// changeKindOfDamadge(laserHit)
// gotDamadge(damadgeValue);
// gotDamadge(damadgeValue);
// gotDamadge(damadgeValue);
// gotDamadge(damadgeValue);
// gotDamadge(damadgeValue);
// gotDamadge(damadgeValue);
// gotDamadge(damadgeValue);
// gotDamadge(damadgeValue);
// gotDamadge(damadgeValue);
// gotDamadge(damadgeValue);
// gotDamadge(damadgeValue);


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

//#region RENDER TABLE



//#endregion