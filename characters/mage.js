const Pet = require("../characters/pet")
const fireball = require("../spells/fireball")
const staff = require("../weapons/staff")
const Character = require("../characters/character")
const config = require("../config/classNames")

class Mage extends Character {
  constructor(name, mana = 100) {
    super(name, config.classNames.MageClassName, 10, 120, 100, mana);
    this.spells.push(fireball);
    const pet1 = new Pet("Buddy", 7);
    this.pets.push(pet1);
    this.weapons.push(staff);
  }
}

module.exports = Mage;