import Player from "./player.js";
import Team from "./team.js";

const team = new Team("Tigers");

const player1 = new Player("Alex", 10, "Forward");
const player2 = new Player("Sam", 7, "Midfielder");
const player3 = new Player("Robin", 1, "Goalkeeper");
const player4 = new Player("Jamie", 5, "Defender");

team.addPlayer(player1);
team.addPlayer(player2);
team.addPlayer(player3);
team.addPlayer(player4);

team.showPlayers();

console.log(`Antal spelare: ${team.getPlayerCount()}`);

const player5 = new Player("Chris", 9, "Forward");
team.addPlayer(player5);

console.log("\nEfter att ha lagt till en ny spelare:");

team.showPlayers();

console.log(`Antal spelare: ${team.getPlayerCount()}`);

const foundPlayer = team.findPlayer(7);

if (foundPlayer) {
    console.log(
        `Spelare hittad: ${foundPlayer.name} - ${foundPlayer.number} - ${foundPlayer.position}`
    );
} else {
    console.log("Spelare hittades inte.");
}

const notFoundPlayer = team.findPlayer(99);

if (notFoundPlayer) {
    console.log(`Spelare hittad: ${notFoundPlayer.name}`);
} else {
    console.log("Spelar nummret hittades inte.");
}
