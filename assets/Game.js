import { Weapons } from "./Weapons.js";
import { Enemies } from "./Enemies.js";
import { NotHero } from "./NotHero.js";
import { Merchant } from "./Merchant.js";

class Game {

    //counter
    #countDam = 0;
    #countDef = 0;

    //Players
    #player;
    #enemie;
    #merchant;

    //board
    #headerBoard = document.getElementById("divider1");
    #centerBoard = document.getElementById("center");
    #footerBoard = document.getElementById("footer");

    //Attribute
    #hpPoint = document.getElementById("HP");
    #damPoint = document.getElementById("damage");
    #defPoint = document.getElementById("defense");
    #speedPoint = document.getElementById("speed");
    #expPoint = document.getElementById("Exp");
    #creditsPoint = document.getElementById("credits");

    //d-none/d-block
    #upgrade = document.getElementById("upgrade");
    #UpToGrade = document.getElementById("upToGrade");
    #merChant = document.getElementById("merChant");
    #fight = document.getElementById("fight");
    #inVentor = document.getElementById("inVentor");
    #encounter = document.getElementById("encounter");
    #coffeeT = document.getElementById("coffeeT");
    #wakeUp = document.getElementById("wakeUp");

    //innerHtml
    #writer = document.getElementById("writer");
    #damageE = document.getElementById("damageE");
    #defenseE = document.getElementById("defenseE");
    #enemieN = document.getElementById("enemieN");
    #resultC = document.getElementById("resultC");
    #info = document.getElementById("information");
    #infplus = document.getElementById("infplus");
    #merchName = document.getElementById("merchName");
    #infoMerch = document.getElementById("infoMerch");
    #infoSellW = document.getElementById("infoSellW");
    #finalText = document.getElementById("finalText");

    //inventory
    #option0 = document.getElementById("option0");
    #option1 = document.getElementById("option1");
    #option2 = document.getElementById("option2");
    #option3 = document.getElementById("option3");
    #option4 = document.getElementById("option4");

    //MerchantInv
    #option00 = document.getElementById("option00");
    #option01 = document.getElementById("option01");
    #option02 = document.getElementById("option02");

    //Set Start Game
    Start() {
        this.DisplayBoard()
        this.#player = new NotHero();
        this.EquipWeapon();
        this.DisplayAttribute();
        console.log(this.#player);
    }

    //Equip weapon to player
    EquipWeapon() {
        this.#player.setEquip(this.#player.getInventory()[0].getDamage(), this.#player.getInventory()[0].getDefense());
    }

    //Create new enemie and push the weapon or not
    CreateE() {
        this.#enemie = new Enemies(this.#player.getExp());
        console.log(this.#enemie);
        return this.#enemie;
    }
    
    //Random encounter event
    Encounter() {
        this.#infplus.innerHTML = "";
        this.#info.innerHTML = "";
        let lucky = Math.floor(Math.random() * 19)+ 1;
        const notLucky = 16;

        if (this.#player.getHp() == 0 || this.#player.getExp() == 50) {
            this.FinalEncounter();

        } else if (lucky >= notLucky) {
            this.#encounter.classList.add("d-none");
            this.#merChant.classList.replace("d-none", "d-block")
            this.EncounterMerchant();

        } else if (lucky == 5) {
            this.#encounter.classList.add("d-none");
            this.#coffeeT.classList.replace("d-none", "d-block");

            const quotes = [
                "Time is an illusion. Lunchtime doubly so.",
                "I can wait for the galaxy outside to get a little kinder.",
                "I have never listened to anyone who criticized my taste in space travel, sideshows or gorillas. When this occurs, I pack up my dinosaurs and leave the room.",
                "How inappropriate to call this planet 'Earth', when it is clearly Ocean.",
                "Loneliness becomes an acid that eats away at you.",
                "The oldest and strongest emotion of mankind is fear, and the oldest and strongest kind of fear is fear of the unknown."
            ];

            this.typeWriter(quotes);
            this.CoffeeTime();

        } else {
            this.#upgrade.classList.add("d-none");
            this.#encounter.classList.add("d-none");
            this.#fight.classList.replace("d-none", "d-block");
            this.#UpToGrade.classList.add("d-none");
            this.#inVentor.classList.add("d-none");
            this.CreateE();
            this.EnemieDisplays();
        }
    };

    //display all values of an enemie in the HTML inputs
    EnemieDisplays() {

        this.#damageE.value = 0;
        this.#defenseE.value = 0;
        this.#enemieN.innerHTML = this.#enemie.getName();
        this.#damageE.value =- this.#damageE.value + this.#enemie.getDamage();
        this.#defenseE.value =- this.#defenseE.value + this.#enemie.getDefense();
    };

    /**
     *  Combat "while"/"if" Proceed
     */
    FightProceed() {
        
        if (this.#player.getSpeed() >= this.#enemie.getSpeed() && this.#player.getDamage() >= this.#enemie.getDefense()) {
            this.#resultC.innerHTML = "Victory"
            this.GetLoot();
            this.equipDefault();
        } else if (this.#enemie.getDamage() >= this.#player.getDefense()) {
            this.#resultC.innerHTML = "You lose this fight";
            this.#player.setHp();
        } else {
            if (this.#enemie.getDamage() >= this.#player.getDefense()) {
                this.#resultC.innerHTML = "You lose this fight";
                this.#player.setHp();
            } else if (this.#player.getDamage() >= this.#enemie.getDefense()) {
                this.#resultC.innerHTML = "Victory";
                this.GetLoot();
                this.equipDefault();
            } else {
                this.#resultC.innerHTML = "Dead Heat";
            }
        }
        console.log(this.#player);
    };

    //Get loot if the player win
    GetLoot() {
        let pocket = this.#player.getInventory().length;
        if (this.#enemie.getInventory() != undefined && pocket < 5) {
            const WeaponE = this.#enemie.getInventory();
            this.#player.setInventoryAdd(WeaponE);
        }
        this.#player.setCreditsAdd(this.#enemie.getCredits());
        this.#player.setExpAdd();
        this.DisplayAttribute();
    };

    //Button to close after combat
    ClearCombat() {

        setTimeout (() => {
            this.#fight.classList.replace("d-block", "d-none");
            this.#encounter.classList.remove("d-none");
            this.#UpToGrade.classList.remove("d-none");
            this.#inVentor.classList.remove("d-none");
            this.#upgrade.classList.remove("d-none");
            this.#resultC.innerHTML = "";
        }, 2000);

        clearTimeout(setTimeout);
    }

    //Button to escape the fight
    ButtonEscape() {
        this.#player.setExpSub();
        this.#info.innerHTML = "Poltroon...";
        this.#fight.classList.replace("d-block", "d-none");
        this.#encounter.classList.remove("d-none");
        this.#UpToGrade.classList.remove("d-none");
        this.#inVentor.classList.remove("d-none");
        this.#upgrade.classList.remove("d-none");
    };

    //Random bonus or maybe not, enjoy the coffee:)
    CoffeeTime() {
       let dice = Math.floor(Math.random() * 19)+ 1;
       
        if (dice >= 10) {
            this.#info.innerHTML = "Upgrade!";
            this.#player.setDamageAdd();
            this.#countDam++
        } else if (dice === 1) {
            this.#info.innerHTML = "this Coffee is awful!";
            this.#player.setHp();
        } else {
            this.#info.innerHTML = "Upgrade!";
            this.#player.setSpeed();
        }
        this.DisplayAttribute();
    }

    //Leave the coffee shop
    LeaveCoffee() {
        this.#encounter.classList.remove("d-none");
        this.#coffeeT.classList.replace("d-block", "d-none");
        this.#info.innerHTML = "";
    }

    FinalEncounter() {
        this.DisplayBoardWin();
        if (this.#player.getHp() == 0) {
            this.#finalText.innerHTML = "GameOver, time to wake up.";
        } else {
            this.#finalText.innerHTML = "Thanks for playing :), time to wake up.";
        }
    };

    //Typewriter for CoffeeTime
    async typeWriter(toWrite) {

        let i = 0;

        let text = toWrite[Math.floor(Math.random() * toWrite.length)];
        
        const wait = () => new Promise(r => setTimeout(r, 50));
        const write = () => this.#writer.textContent = (text.substring(0, i + 1));
        
        while (i < text.length) {
            requestAnimationFrame(write); 
            await wait();
            i++;                           
        }
    }

    //Buy upgrades
    DamagePlus () {
        if (this.#player.getCredits() >= 100) {
            this.#player.setCreditsSub(100)
            this.#player.setDamageAdd();
            this.#countDam++;
            this.#infplus.innerHTML = "Thanks for you buy!";
        } else {
            this.#infplus.innerHTML = "Get out here, fucking indigent!";
        }
    }

    DefensePlus () {
        if (this.#player.getCredits() >= 100) {
            this.#player.setCreditsSub(100)
            this.#player.setDefenseAdd();
            this.#countDef++;
            this.#infplus.innerHTML = "Thanks for you buy!";
        } else {
            this.#infplus.innerHTML = "Get out here, fucking indigent!";
        }
    }

    SpeedPlus () {
        if (this.#player.getCredits() >= 100) {
            this.#player.setCreditsSub(100)
            this.#player.setSpeed();
            this.#infplus.innerHTML = "Thanks for you buy!";
        } else {
            this.#infplus.innerHTML = "Get out here, fucking indigent!";
        }
    }

    //display attribute on the board
    DisplayAttribute() {
        this.#hpPoint.value = 0;
        this.#damPoint.value = 0;
        this.#defPoint.value = 0;
        this.#speedPoint.value = 0;
        this.#expPoint.value = 0;
        this.#creditsPoint.value = 0;

        this.#hpPoint.value =- this.#hpPoint.value + this.#player.getHp();
        this.#damPoint.value =- this.#damPoint.value + this.#player.getDamage();
        this.#defPoint.value =- this.#defPoint.value + this.#player.getDefense();
        this.#speedPoint.value =- this.#speedPoint.value + this.#player.getSpeed();
        this.#expPoint.value =- this.#expPoint.value + this.#player.getExp();
        this.#creditsPoint.value =- this.#creditsPoint.value + this.#player.getCredits();
    }

    //display board game
    DisplayBoard() {
        this.#headerBoard.classList.remove("d-none");
        this.#centerBoard.classList.remove("d-none");
        this.#footerBoard.classList.remove("d-none");
    };

    //hide board game
    DisplayBoardWin() {
        this.#headerBoard.classList.add("d-none");
        this.#wakeUp.classList.replace("d-none", "d-block");
        this.#encounter.classList.add("d-none");
        this.#footerBoard.classList.add("d-none");
    };

    //Merchant event
    EncounterMerchant() {
        this.#merchant = new Merchant(this.#player.getExp());
        this.#merchName.innerHTML = "My Name is " + this.#merchant.getName();
        const merchText = [
            "I don't buy your trash",
            "You haven't seen my bfg-9000 by any chance?",
            "This store is for shopping only, I don't want your ones and zeros."
        ]
        this.#infoMerch.innerHTML = merchText[Math.floor(Math.random() * merchText.length)];

        console.log(this.#merchant.getInventory().find(item => item.getID() === 6))

        //merchant
        this.#option00.innerHTML = (JSON.stringify(this.#merchant.getInventory()[0]));
        this.#option01.innerHTML = (JSON.stringify(this.#merchant.getInventory()[1]));
        this.#option02.innerHTML = (JSON.stringify(this.#merchant.getInventory()[2]));
    }

    //Buy weapons at the merchant
    buyWeapon(jsonCredit, jsonids) {
        this.#infoMerch.innerHTML = "";
        let pocket = this.#player.getInventory().length;
        console.log(pocket);
        console.log(jsonCredit);
        if (this.#player.getCredits() >= jsonCredit && pocket < 5) {
            this.#player.setCreditsSub(jsonCredit);
            this.#player.setInventoryAdd(this.#merchant.getInventory().find(item => item.getID() === jsonids))
            console.log(this.#player);
            this.DisplayAttribute();
        } else {
            this.#infoMerch.innerHTML = "not enough money or deep pockets, don't waste my time.";
        }
    }

    //leave the store 
    leaveMerchant() {
        this.#merChant.classList.replace("d-block", "d-none")
        this.#encounter.classList.remove("d-none");
    }

    //display the inventory into a select
    Inventory() {
       
        this.#option0.innerHTML = (JSON.stringify(this.#player.getInventory()[0]));
        console.log(JSON.stringify(this.#player.getInventory()[0]));
        if (this.#player.getInventory()[1] == null) {
            this.#option1.classList.add("d-none");
        } else {
            this.#option1.classList.remove("d-none");
            this.#option1.innerHTML = (JSON.stringify(this.#player.getInventory()[1]));
        };
        if (this.#player.getInventory()[2] == null) {
            this.#option2.classList.add("d-none");
        } else {
            this.#option2.classList.remove("d-none");
            this.#option2.innerHTML = (JSON.stringify(this.#player.getInventory()[2]));
        };
        if (this.#player.getInventory()[3] == null) {
            this.#option3.classList.add("d-none");
        } else {
            this.#option3.classList.remove("d-none");
            this.#option3.innerHTML = (JSON.stringify(this.#player.getInventory()[3]));
        };
        if (this.#player.getInventory()[4] == null) {
            this.#option4.classList.add("d-none");
        } else {
            this.#option4.classList.remove("d-none");
            this.#option4.innerHTML = (JSON.stringify(this.#player.getInventory()[4]));
        };
    }

    //Sell weapons in the inventory
    SellWeapon(event) {
        if (event == 0 && this.#player.getInventory()[0] !== undefined) {
            this.#player.setCreditsAdd(this.#player.getInventory()[0].getCredits())
            this.#player.setInventorySub(0);
            this.#player.setResetDamDef();
            this.#player.setEquip(this.#countDam, this.#countDef);
            this.#infoSellW.innerHTML= "Weapon 0 sold !";
            console.log(this.#player);
        } else if (event == 1 && this.#player.getInventory()[1] !== undefined) {
            this.#player.setCreditsAdd(this.#player.getInventory()[1].getCredits())
            this.#player.setInventorySub(1);
            this.#infoSellW.innerHTML= "Weapon 1 sold !";
        } else if (event == 2 && this.#player.getInventory()[2] !== undefined) {
            this.#player.setCreditsAdd(this.#player.getInventory()[2].getCredits())
            this.#player.setInventorySub(2);
            this.#infoSellW.innerHTML= "Weapon 2 sold !";
        } else if (event == 3 && this.#player.getInventory()[3] !== undefined) {
            this.#player.setCreditsAdd(this.#player.getInventory()[3].getCredits())
            this.#player.setInventorySub(3);
            this.#infoSellW.innerHTML= "Weapon 3 sold !";
        } else if (event == 4 && this.#player.getInventory()[4] !== undefined) {
            this.#player.setCreditsAdd(this.#player.getInventory()[4].getCredits())
            this.#player.setInventorySub(4);
            this.#infoSellW.innerHTML= "Weapon 4 sold !";
        }
        this.DisplayAttribute();
        this.Inventory();
        this.equipDefault();
    }

    ClearInv() {
        this.#infoSellW.innerHTML= "";
    }

    //Equip new weapon
    EquippedW(jsonDam, jsonDef) {
        this.#player.setResetDamDef();
        this.#player.setEquip(this.#countDam + jsonDam, this.#countDef + jsonDef);
        this.DisplayAttribute();
    }

    // if you do not have a weapon equipped, and you get a new weapon it is equipped.
    equipDefault() {
        if (this.#player.getDamage() == this.#countDam + 1 && this.#player.getInventory()[0] !== undefined) {
            this.#player.setEquip(this.#player.getInventory()[0].getDamage(), this.#player.getInventory()[0].getDefense());
        }
    }
}

export { Game };