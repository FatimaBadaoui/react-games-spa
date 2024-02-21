import rs from "readline-sync";
import cl from "colors";

// import rPGGame class instance from main
import { rPGGame } from "../main.js";
// import variables
import { dungeon1, dungeon2, dungeon3 } from "./variables.js";

// functions
export function chooseOrCreateCharacter() {
  console.log("\nTo start playing create or choose your character\n");
  console.log("1. Create a new character".blue);
  console.log("2. Log back into the game".blue);
  console.log("3. Choose a default character and Play as a guest".blue);

  const choice = rs.question("\nEnter your choice: ");

  let player;

  switch (choice) {
    case "1":
      // create new character
      console.clear();
      console.log("__ Let's create a new character __\n".cyan);
      player = rPGGame.createNewcharacter();
      console.log("\nCharacter successfully created!".bgGreen);
      break;

    case "2":
      // Log in with your character
      console.clear();
      console.log("__ Log Back In __".cyan);
      player = rPGGame.logBackIn();
      break;
    case "3":
      //list all default character
      console.clear();
      console.log(
        "__ Choose from the List of the default characters: __\n".cyan
      );
      player = rPGGame.playAsGuest();
      break;
    default:
      console.clear();
      console.log("\n❌", "Invalid Input!".bgRed);
      rs.question("\nPress Enter to continue...");
  }
  return player;
}

export function chooseDungeon() {
  const dungeons = [dungeon1, dungeon2, dungeon3];
  // choose the dungeon to explore
  console.clear();
  console.log("\n__ Choose the Dungeon to explore __\n".yellow.bold);
  dungeons.forEach((dungeon, index) =>
    console.log(`${index + 1}.${dungeon.displayInfo()}`)
  );
  const indexDungeon = Number(rs.question("Enter the index of the dungeon: "));
  if(!dungeons[indexDungeon - 1]) return undefined;
  return dungeons[indexDungeon - 1];
}
