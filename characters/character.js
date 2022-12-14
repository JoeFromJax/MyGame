const spell = require("../spells/fireball")

class Character {
    constructor(name, className, attack, magic, health, mana) {
      this.name = name;
      this.className = className;
      this.level = 1;
      this.attack = attack;
      this.health = health;
      this.mana = mana;
      this.spells = [];
      this.weapons = [];
      this.pets = [];
      this.activePet = [null];
    }
  
    castSpell(pickSpell) {
      const spell = this.spells.find(s => s.name === pickSpell);
      if (!spell) return 0;
      if (this.mana < spell.mana) {
        console.log("not enough mana");
        return 0;
      }
  
      this.mana -= spell.mana;
      return spell.power + this.magic;
    }
  
    levelUp() {
      this.level = this.level + 1;
      if (this.className === "Mage") {
        console.log("levelling up", this.className);
        this.attack = this.attack + 5;
        this.health = this.health + 10;
        this.mana = this.mana + 15;
      } else if (this.className === "Warrior") {
        console.log("levelling up", this.className);
        this.health = this.health + 20;
        this.attack = this.attack + 5;
      } else if (this.className === "Ranger") {
        console.log("levelling up", this.className);
        this.health = this.health + 15;
        this.mana = this.mana + 10;
        this.attack = this.attack + 5;
      }
    }
  
    getDamage(type, spellName) {
      let damage = 0;
      if (type === "normal") {
        // calculate normal attack damage
        damage = this.attack;
      } else if (type === "spell" && spellName) {
        // calculate spell damage
        damage = this.castSpell(spellName);
      } else if (type === "pet") {
        // calculate pet damage
        damage = this.activePet.damage;
      }
      return damage;
    }
  
    summonPet(petName) {
      // if we have a pet in our this.pets array, that matches the name passed in as an argument to this function,
      // lets summon it.
      // we can loop over the pets we have to find it.
      for (let i = 0; i < this.pets.length; i++) {
        const pet = this.pets[i]; // this pet is equal to an individual pet element in our pets array.
        if (pet.name === petName) {
          this.activePet = pet;
        }
      }
    }
  
    // add weapon adds a weapon to the user's array of weapons.
    addWeapon(weapon) {
      this.weapons.push(weapon);
    }
  
    // equip weapon equips a specific weapon from the users array of weapons.
    equipWeapon(weaponName) {
      for (let i=0; i <this.weapons.length;i++) {
            const weapon = this.weapons[i];
            if(weapon.name === weaponName) {
                this.equippedWeapon = weapon;
            }
        }
    }
}
    
module.exports = Character;