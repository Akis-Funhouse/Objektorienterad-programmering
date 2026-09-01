import GameCharacter from "./game-character.js";

const character1 = new GameCharacter("Arin", 100);

character1.takeDamage(50);
character1.heal(10);
character1.takeDamage(70);
character1.heal(100);

// character1.health = 9999;
// character1._health = -500;

character1.takeDamage(-100);

character1.showInfo();

if (character1.isAlive()) {
    console.log("Karaktären är i liv")
} else {
console.log("Karaktären är död")
}


const character2 = new GameCharacter("Diavolo", 50);

character2.takeDamage(100);

character1.heal(-100);

character2.showInfo();

if (character2.isAlive()) {
    console.log("Karaktären är i liv")
} else {
console.log("Karaktären är död")
}



