const Character = require("../characters/character");
const longsword = require("../weapons/longsword");
const config = require("../config/classNames");

class Warrior extends Character {
  constructor(name) {
    super(name, config.classNames.WarriorClassName, 15, 150, 0, 0);
    this.weapons.push(longsword);
  }
}

module.exports = Warrior;