class Weapons {

    _id = 0;
    _name = [
        "Moron Labe",
        "Prejudice",
        "Psalm 11:6",
        "Sidewinder",
        "Militech M251s",
        "Militech Mk.31",
        "Defender",
        "Widow Maker",
        "Chaos",
        "Slaught-O-Matic",
        "Death and Taxes",
        "Dying Night",
        "Genjiroh",
        "Lizzie",
        "Malorian Arms 3516",
        "Plan B",
        "Skippy",
        "Pride",
        "Bloody Maria",
        "Militech Crusher",
        "Fenrir",
        "Problem Solver",
        "Prototype XIII",
        "Black Unicorn",
        "Satori",
        "Stinger",
        "Kanabo"
    ];
    _dam = 0;
    _def = 0;
    _crts = 0;
    

    constructor(player = null, name = null, dam = null, def = null, crts = null) {
        
        this._id = Weapons.UniqueID();
        this._name = name ? name : this._name[Math.floor(Math.random() * this._name.length)];
        this._dam = dam ? dam : this.RandomW(player);
        this._def = def ? def : this.RandomW(player);
        this._crts = crts ? crts : this.RandomW(player);
    }

    getID() {
        return this._id;
    }

    toJSON() {
        return {
            ids: this._id,
            name: this._name,
            damage: this._dam,
            defense: this._def,
            credits: this._crts
        } 
    }

    getDamage() {
        return this._dam;
    }

    getDefense() {
        return this._def;
    }

    getCredits() {
        return this._crts;
    }

    static UniqueID() {
        if (!this.lastId) this.lastId = 1
        else this.lastId++
        return this.lastId
    }

    RandomW(player) {
        switch(player) {
            case 0 :
            case 1 :
            case 2 :
            case 3 :
            case 4 :
            case 5 :
                this._def = player + 1 * [Math.floor(Math.random() * 2) + 1];
                this._dam = player + 1 * [Math.floor(Math.random() * 2) + 1];
                this._crts = Math.floor(Math.random() * 29) + 1;
                break;
            case 6 :
            case 7 :
            case 8 :
            case 9 :
            case 10 :
                this._def = player + 1 * [Math.floor(Math.random() * 3) + 1];
                this._dam = player + 1 * [Math.floor(Math.random() * 3) + 1];
                this._crts = Math.floor(Math.random() * (49 - 29 +1)) + 30;
                break;
            case 11 :
            case 12 :
            case 13 :
            case 14 :
            case 15 :
            case 16 :
            case 17 :
            case 18 :
            case 19 :
            case 20 :
                this._def = player + 1 * [Math.floor(Math.random() * 4) + 1];
                this._dam = player + 1 * [Math.floor(Math.random() * 4) + 1];
                this._crts = Math.floor(Math.random() * (99 - 49 +1)) + 50;
                break;
            case 21 :
            case 22 :
            case 23 :
            case 24 :
            case 25 :
            case 26 :
            case 27 :
            case 28 :
            case 29 :
            case 30 :
                this._def = player + 1 * [Math.floor(Math.random() * 5) + 1];
                this._dam = player + 1 * [Math.floor(Math.random() * 5) + 1];
                this._crts = Math.floor(Math.random() * (149 - 99 +1)) + 100;
                break;
            case 31 :
            case 32 :
            case 33 :
            case 34 :
            case 35 :
            case 36 :
            case 37 :
            case 38 :
            case 39 :
            case 40 :
                this._def = player + 1 * [Math.floor(Math.random() * 6) + 1];
                this._dam = player + 1 * [Math.floor(Math.random() * 6) + 1];
                this._crts = Math.floor(Math.random() * (199 - 149 +1)) + 150;
                break;
            case 41 :
            case 42 :
            case 43 :
            case 44 :
            case 45 :
            case 46 :
            case 47 :
            case 48 :
            case 49 :
            case 50 :
                this._def = player + 1 * [Math.floor(Math.random() * 7) + 1];
                this._dam = player + 1 * [Math.floor(Math.random() * 7) + 1];
                this._crts = Math.floor(Math.random() * (249 - 199 +1)) + 200;
                break;
        }
        return this._def, this._dam, this._crts;
    }
}

export { Weapons };