import { Weapons } from "./Weapons.js";

class Merchant {

    _name = [
        "Alfred",
        "Razor",
        "Dante",
        "Light",
        "Mellow",
        "Patriot",
        "Grim",
        "Marigold",
        "Hook",
        "Kathleen",
        "Crystal",
        "Crypto",
        "Axis"
    ];
    _exp = 0;
    _inv = [];


    constructor(player) {
        this._inv = [new Weapons(player, null, null, null, null), new Weapons(player, null, null, null, null), new Weapons(player, null, null, null, null)];
        this._name = this._name[Math.floor(Math.random() * this._name.length)];
    }

    getInventory() {
        return this._inv;
    }

    getName() {
        return this._name;
    }
}

export { Merchant }