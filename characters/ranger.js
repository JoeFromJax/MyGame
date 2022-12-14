const Character = require("../characters/character");
const crossbow = require("../weapons/crossbow");

class Ranger extends Character {
  constructor(name) {
      super(name, "Ranger", 3, 15, 10, 15, 125, 50);
      this.weapons.push(crossbow);
  }
}

module.exports = Ranger;