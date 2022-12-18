const Character = require("../characters/character");
const crossbow = require("../weapons/crossbow");
const config = require("../config/classNames");

class Ranger extends Character {
  constructor(name) {
    super(name, config.classNames.RangerClassName, 15, 125, 40, mana);
    this.weapons.push(crossbow);
  }
}

module.exports = Ranger;