const Mage = require("./characters/mage");
const Warrior = require("./characters/warrior");
const Ranger = require("./characters/ranger");
const Pet = require("./characters/pet");
const castSpell = require("./characters/character");
const allSpells = require("./spells/allSpells");
const spell = require("./spells/spells");
const prompt = require("prompt-promise");

const config = require("./config/classNames");
const mobs = require("./mobs/mobs");

// gameLoop will start and run the game for us.
// we want to prompt the user to choose their class, so we need to use a prompting library

async function gameLoop() {
    console.log("Welcome to " + config.gameName);
    
    const classChoice = await prompt("Select your class: Mage, Warrior, or Ranger\n");
    console.log("My class choice is", classChoice);
    let character;
    if(classChoice === config.classNames.MageClassName) {
        character = new Mage("Horsey");
    } else if(classChoice === config.classNames.WarriorClassName) {
        character = new Warrior("Kelly HorseCock");
    } else if(classChoice === config.classNames.RangerClassName) {
        character = new Ranger("Yahoo LongDick");
    } else {
        throw Error("You entered a class that doesnt exist!")
    }
    
    let mob = mobs[0];
    console.log("A wild ", mob.name, "appears");
    console.log(mob.name, "has", mob.health, "health");
    console.log(character.name, "has", character.health, "health")

    while(character.health > 0 && mob.health > 0) {
        console.log("Your character's spells");
        console.log(character.spells);
          
        let a = 0;
    while(a === 0){

        const move = await prompt("[1]Attack, [2]Equip Weapon, [3]Summon Pet, [4]Cast a spell\n")
                
        if(move === "4"){
            console.log(character.spells);
            pickSpell = await prompt("choose spell to cast: \n");
            if(pickSpell === "back"){
              a = 0;
            } else {
              // Call the getDamage method on the character object and pass it the pickSpell string
                console.log("pickSpell:", pickSpell);
                damage = character.getDamage(pickSpell);
                console.log("damage:", damage);
                if (isNaN(damage)) {
                    console.error("Error: getDamage was not returned");
                  }
              a = 1;
            } 
          } else if(move === "1") {
            damage = character.getDamage();
            a = 1;
          }
                
        else if(move === "2") {
            console.log(character.weapons);
            pickWeapon = await prompt("Choose your weapon or \n type back to return to previous choices\n");
            if(pickWeapon === "back"){
              a = 0;
            } else {
              character.equipWeapon(pickWeapon);
              console.log("You equipped", character.activeWeapon.name, "and lost a turn");
              a = 1;
            }
          }

        else if(move === "3"){
        console.log(character.pets);
        pickPet = await prompt("choose a pet: \n");
        if(pickPet === "back"){
            a = 0;
        }
        else{
        character.summonPet(pickPet);
        console.log("You now have Summoned ", character.activePet, "and lost a turn");
        a = 1; 
        }
    }

        else{
            console.log("You can only choose 1, 2, 3, or 4");
            console.log("you lost your turn");
        }
        
        if (isNaN(damage)) {
            console.error("Error: getDamage was not returned")
        } else {
          mob.health = mob.health - damage;
          const mobDamage = mob.damage;
          character.health = character.health - mob.damage;
          console.log(character.name, " did", damage);
          console.log(mob.name, "did", mob.damage);
          console.log(character.name, "has", character.health, "health left");
          console.log(mob.name, "has", mob.health, "health left");
        }

    }
        
    if (mob.health <= 0) {
        console.log(mob.name, "has been defeated!");
        console.log("You have won the battle!");
      } else if (character.health <= 0) {
        console.log(character.name, "has been defeated!");
        console.log("You have lost the battle.");
      }
      }

const playAgain = await prompt("Do you want to play again? (y/n)");
if (playAgain === "y") {
  gameLoop();
} else {
  console.log("Thanks for playing!");
}
}

gameLoop();