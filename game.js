
const Mage = require("./characters/mage");
const Warrior = require("./characters/warrior");
const Ranger = require("./characters/ranger");
const Pet = require("./characters/pet");

const mage = new Mage("Horseman");

const warrior = new Warrior("Diply the Dingbat");

const ranger = new Ranger("Yahoo Longdick");

mage.levelUp();

warrior.levelUp();

ranger.levelUp();

mage.summonPet("Buddy the Dog");

mage.equipWeapon("Staff");
warrior.equipWeapon("Longsword");
ranger.equipWeapon("Crossbow");

console.log(mage);
console.log(warrior);
console.log(ranger);

console.log(mage.getDamage());
console.log(mage.castSpell("Fireball"));
console.log("mana: ", mage.mana);