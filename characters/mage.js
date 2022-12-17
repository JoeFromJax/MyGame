const Pet = require("../characters/pet")
const fireball = require("../spells/fireball")
const staff = require("../weapons/staff")
const Character = require("../characters/character")
const config = require("../config/classNames")

class Mage extends Character {
  constructor(name) {
    super(name, config.classNames.MageClassName, 10, 120, 100, 10);
    this.spells.push(fireball);
    const pet1 = new Pet("Buddy the Dog", 5);
    this.pets.push(pet1);
    this.weapons.push(staff);
  }
}

module.exports = Mage;