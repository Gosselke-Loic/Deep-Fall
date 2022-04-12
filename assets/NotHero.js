import { Weapons } from "./Weapons.js"

// take hero name from start.hmtl
let heroN2 = localStorage.getItem("passH");
console.log(heroN2);

class NotHero {

    _name = heroN2;
    _hp = 10;
    _exp = 0;
    _dam = 1;
    _def = 1;
    _spd = 1;
    _crts = 20;
    _inv = [new Weapons(null, "Spoon", 1, 1, 12)];

    constructor() {
        
    }

    setResetDamDef() {
        this._dam = 1;
        this._def = 1;
    }

    getName() {
        return this._name;
    }

    getExp() {
        return this._exp;
    }

    setExpAdd() {
        this._exp++;
    }

    setExpSub() {
        if (this._exp > 0) {
            this._exp--;
        }
    }

    getHp() {
        return this._hp;
    }

    setHp() {
        if (this._hp > 0) {
            this._hp--;
        }
    }

    getDamage() {
        return this._dam;
    }

    setEquip(damage, defense) {
        this._dam += damage;
        this._def += defense;
    }

    setEquipSub(damage, defense) {
        this._dam -= damage;
        this._def -= defense;
    }

    setDamageAdd() {
        this._dam++;
    }

    getDefense() {
        return this._def;
    }

    setDefenseAdd() {
        this._def++;
    }

    getSpeed() {
        return this._spd;
    }

    setSpeed() {
        this._spd++;
    }

    getCredits() {
        return this._crts;
    }

    setCreditsAdd(newValue) {
        this._crts += newValue;
    }

    setCreditsSub(newValue) {
        this._crts -= newValue;
    }

    getInventory() {
        return this._inv;
    }
    
    setInventoryAdd(newValue) {
        this._inv.push(newValue);
    }

    setInventorySub(index) {
        this._inv.splice(index, 1);
    }
}

export { NotHero };