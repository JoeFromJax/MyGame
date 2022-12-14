class Character {
    constructor(name, className, attack, magic, defense, speed, health, mana) {
        this.name = name;
        this.className = className;
        this.level = 1;
        this.attack = attack;
        this.magic = magic;
        this.defense = defense;
        this.speed = speed;
        this.health = health;
        this.mana = mana;
        this.spells = [];
        this.weapons = [];
        this.pets = [];
        this.activePet = [];
    }
 
    levelUp() {
        this.level = this.level + 1;
        if(this.className === "Mage") {
            console.log("levelling up", this.className);
            this.attack = this.attack + 5;
            this.health = this.health + 10;
            this.mana = this.mana + 15;
        } else if(this.className === "Warrior") {
            console.log("levelling up", this.className);
            this.health = this.health + 20;
            this.defense = this.defense + 2;
            this.attack = this.attack + 5;
        } else if (this.className === "Ranger") {
            console.log("levelling up", this.className);
            this.health = this.health + 15;
            this.mana = this.mana + 10;
            this.speed = this.speed + 3;
            this.attack = this.attack + 5;
        }
    }
    
    getDamage(spell){
        if(this.activePet){
            const petDamage = this.activePet.damage;
            const magicDamage = this.magic;
            console.log("Pet Damage:");
            return petDamage + magicDamage;
        }
        else if(spell){
            const spellDamage = spell.damage;
            return spellDamage;
            
        }
        else if(this.activeWeapon){
            const attackDamage = this.attack;
            console.log("Weapon + Attack Damage:");
            return this.attack + this.activeWeapon.damage;
        }
        else{
            const attackDamage = this.attack;
            console.log("Attack Damage:");
            return attackDamage;
        }
    }

    summonPet(petName) {
        // if we have a pet in our this.pets array, that matches the name passed in as an argument to this function,
        // lets summon it.
        // we can loop over the pets we have to find it.
        for(let i =0; i < this.pets.length;i++) {
            const pet = this.pets[i]; // this pet is equal to an individual pet element in our pets array.
            if(pet.name === petName) {
                this.activePet = pet;
            }
        }
    }

    castSpell(spellName){
        for(let i = 0; i < this.spells.length; i++){
            const spell = this.spells[i];
            if(spell.name === spellName){
                console.log("Casting",spell.name);
                const manaCost = spell.manaCost;
                if(this.mana >= manaCost){
                this.mana = this.mana - manaCost;
                console.log("Spell Damage:");
                return this.getDamage(spell);
                }
                else{
                    console.log("Not Enough Mana NOOB");
                    console.log("Spell Damage:");
                    return 0;
                }
                
            }
        }
    }
        // add weapon adds a weapon to the user's array of weapons.
        addWeapon(weapon) {
            this.weapons.push(weapon);
        }
    
        // equip weapon equips a specific weapon from the users array of weapons.
        equipWeapon(weaponName) {
            for(let i=0; i <this.weapons.length;i++) {
                const weapon = this.weapons[i];
                if(weapon.name === weaponName) {
                    this.equippedWeapon = weapon;
                }
            }
    }
}    

module.exports = Character;