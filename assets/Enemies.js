import { Weapons } from "./Weapons.js";

class Enemies {

    _name = [
        "Merc",
        "Robot",
        "sniper",
        "Street Samurai",
        "Netrunner",
        "Guard",
        "Agent",
        "Tactician",
        "Specialist",
        "Ranger",
        "Assassin",
        "Cyborg",
        "Executioner",
        "Juggernaut",
        "Police Officer",
        "Spec Ops",
        "Ogre",
        "Maniac",
        "Vulture",
        "Hunter",
        "Kunoichi",
        "Ozeki",
        "Outlaw"
    ];
    _exp = 1;
    _dam = 0;
    _def = 0;
    _spd = 0;
    _crts = 0;
    #lootW;

    constructor(player) {
        if (Math.floor(Math.random() * 19)+ 1 > 10) {
            this.#lootW = new Weapons(player);
        }
        this._name = this._name[Math.floor(Math.random() * this._name.length)];
        this._exp = 1;
        this.Leveling(player);
    }

    getName() {
        return this._name;
    }

    getDamage() {
        return this._dam;
    }

    getDefense() {
        return this._def;
    }

    getSpeed() {
        return this._spd;
    }

    getCredits() {
        return this._crts;
    }

    getInventory() {
        return this.#lootW;
    }

    Leveling(player) {

        switch(player) {
            case 0 :
            case 1 :
            case 2 :
                this._def = player + 1 * [Math.floor(Math.random() * 3) + 1];
                this._dam = player + 1 * [Math.floor(Math.random() * 3) + 1];
                this._spd = 1;
                this._crts = Math.floor(Math.random() * 29) + 1;
                break;
            case 3 :
            case 4 :
            case 5 :
                this._def = player + 1 * [Math.floor(Math.random() * 5) + 1];
                this._dam = player + 1 * [Math.floor(Math.random() * 5) + 1];
                this._spd = 2;
                this._crts = Math.floor(Math.random() * 39) + 1;
                break;
            case 6 :
            case 7 :
            case 8 :
            case 9 :
            case 10 :
                this._def = player + 1 * [Math.floor(Math.random() * 6) + 1];
                this._dam = player + 1 * [Math.floor(Math.random() * 6) + 1];
                this._spd = player + 1 * [Math.floor(Math.random() * 5) + 1];
                this._crts = Math.floor(Math.random() * 49) + 1;
                break;
            case 11 :
            case 12 :
            case 13 :
            case 14 :
            case 15 :
                this._def = player + 1 * [Math.floor(Math.random() * 9) + 1];
                this._dam = player + 1 * [Math.floor(Math.random() * 9) + 1];
                this._spd = player + 1 * [Math.floor(Math.random() * 8) + 1];
                this._crts = Math.floor(Math.random() * 49) + 1;
                break;
            case 16 :
            case 17 :
            case 18 :
            case 19 :
            case 20 :
                this._def = player + 1 * [Math.floor(Math.random() * 10) + 1];
                this._dam = player + 1 * [Math.floor(Math.random() * 10) + 1];
                this._spd = player + 1 * [Math.floor(Math.random() * 9) + 1];
                this._crts = Math.floor(Math.random() * 79) + 1;
                break;
            case 21 :
            case 22 :
            case 23 :
            case 24 :
            case 25 :
                this._def = player + 1 * [Math.floor(Math.random() * 13) + 1];
                this._dam = player + 1 * [Math.floor(Math.random() * 13) + 1];
                this._spd = player + 1 * [Math.floor(Math.random() * 12) + 1];
                this._crts = Math.floor(Math.random() * 99) + 1; 
                break;
            case 26 :
            case 27 :
            case 28 :
            case 29 :
            case 30 :
                this._def = player + 1 * [Math.floor(Math.random() * 15) + 1];
                this._dam = player + 1 * [Math.floor(Math.random() * 15) + 1];
                this._spd = player + 1 * [Math.floor(Math.random() * 14) + 1];
                this._crts = Math.floor(Math.random() * 99) + 1;
                break;
            case 31 :
            case 32 :
            case 33 :
            case 34 :
            case 35 :
                this._def = player + 1 * [Math.floor(Math.random() * 17) + 1];
                this._dam = player + 1 * [Math.floor(Math.random() * 17) + 1];
                this._spd = player + 1 * [Math.floor(Math.random() * 18) + 1];
                this._crts = Math.floor(Math.random() * 119) + 1;
                break;
            case 36 :
            case 37 :
            case 38 :
            case 39 :
            case 40 :
                this._def = player + 1 * [Math.floor(Math.random() * 20) + 1];
                this._dam = player + 1 * [Math.floor(Math.random() * 20) + 1];
                this._spd = player + 1 * [Math.floor(Math.random() * 19) + 1];
                this._crts = Math.floor(Math.random() * 119) + 1;
                break;
            case 41 :
            case 42 :
            case 43 :
            case 44 :
            case 45 :
                this._def = player + 1 * [Math.floor(Math.random() * 21) + 1];
                this._dam = player + 1 * [Math.floor(Math.random() * 21) + 1];
                this._spd = player + 1 * [Math.floor(Math.random() * 20) + 1];
                this._crts = Math.floor(Math.random() * 119) + 1;
                break;
            case 46 :
            case 47 :
            case 48 :
            case 49 :
            case 50 :
                this._def = player + 1 * [Math.floor(Math.random() * 24) + 1];
                this._dam = player + 1 * [Math.floor(Math.random() * 24) + 1];
                this._spd = player + 1 * [Math.floor(Math.random() * 23) + 1];
                this._crts = Math.floor(Math.random() * 169) + 1;
                break;
        }
    }
}

export { Enemies };