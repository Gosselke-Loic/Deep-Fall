import { Game } from "./assets/Game.js"

const game = new Game();

//Start Game
document.getElementById("run").addEventListener("click", () => {
    document.getElementById("run").classList.add("d-none");
    game.DisplayBoard();
    game.Start();
    game.DisplayAttribute();
});

//Upgrades
document.getElementById("damplus").addEventListener("click", () => {
    game.DamagePlus();
    game.DisplayAttribute();
})
document.getElementById("defplus").addEventListener("click", () => {
    game.DefensePlus();
    game.DisplayAttribute();
})
document.getElementById("spdplus").addEventListener("click", () => {
    game.SpeedPlus();
    game.DisplayAttribute();
})

document.getElementById("inVentor").addEventListener("click", () => {
    game.Inventory();
    game.ClearInv();
})

//Encounter button
document.getElementById("encounter").addEventListener("click", () => {
    game.Encounter()
});

//leave coffee shop
document.getElementById("leave").addEventListener("click", () => {
    game.LeaveCoffee();
})

//If fight event
document.getElementById("shoot").addEventListener("click", () => {
    game.FightProceed(); 
    game.DisplayAttribute();
    game.ClearCombat();
});

//button for escape the fight
document.getElementById("escape").addEventListener("click", () => {
    game.ButtonEscape();
    game.DisplayAttribute();
});

//Change weapon Inventory
document.getElementById("changeWeapon").addEventListener("change", (e) => {
    let jsWeapon = JSON.parse(e.target.value);
    game.EquippedW(jsWeapon.damage, jsWeapon.defense);
});

//sell weapons inventory
document.getElementById("clickListener").addEventListener("click", (e) => {
    console.log(e.target.value);
    game.SellWeapon(e.target.value);
})

//buy weapon to the merchant
document.getElementById("mercInv").addEventListener("change", function (e) {
    let jsWeapon2 = JSON.parse(e.target.value);
    game.buyWeapon(jsWeapon2.credits, jsWeapon2.ids);
});

//leave the store
document.getElementById("exitMerch").addEventListener("click", () => {
    game.leaveMerchant();
})

document.getElementById("closeInv").addEventListener("click", () => {
    game.ClearInv();
})
