const Character = require("../characters/character");
const longsword = require("../weapons/longsword");

class Warrior extends Character {
  constructor(name) {
    super(name, "Warrior", 3, 15, 5, 20, 12, 150, 0);
    this.weapons.push(longsword);
  }
}

module.exports = Warrior;