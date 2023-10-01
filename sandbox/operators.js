// operators.js
let shipHealth = 3;
let shipAmmo = 3;
let targetHealth = 3;

//Functions I wrote
function isHit() {
    return Math.random() > 0.5; //Because the player has 50% to hit or no
}

function shipCanFire(){
    return shipHealth > 0 && shipAmmo > 0;
}

function isDestroyed(health){
    return health <= 0;
}

function reloadShip(){
    shipHealth--;
    shipAmmo += 3;
}

//Functions given by the activity
function fireShip() {
    if (shipCanFire()) {
        shipAmmo--;
        if (isHit()) {
        targetHealth--;
        console.log("hit - targetHealth:", targetHealth);
        } else {
        console.log("miss");
        }
    } else {
        reloadShip();
        console.log("reloading, shipHealth:", shipHealth);
    }
}

function encounter() {
    console.log("You see a target");
    if (!isDestroyed(targetHealth) && !isDestroyed(shipHealth)) {
        fireShip();
        if (isDestroyed(targetHealth)) {
        console.log("Target eliminated");
        }
        if (isDestroyed(shipHealth)) {
        console.log("ship destroyed");
        }
    }
}



