import Character from "./Character.js";

export default class RPGGame {
  constructor(name, characters = []) {
    this.name = name;
    this.characters = characters;
    // this.players = this.readPlayersFromJson();
  }
  /* readPlayersFromJson() {
    // check if the file exists
    const filename = "./players.json";
    if (fs.existsSync(filename)) {
      let rawData = fs.readFileSync(filename);
      let playerObjects = JSON.parse(rawData);
      return playerObjects.map(
        (player) =>
          new Character(
            player.name,
            player.job,
            player.skills,
            player.hp,
            player.xp
          )
      );
    } else {
      return [];
    }
  }
  savePlayersToJson() {
    fs.writeFileSync("./players.json", JSON.stringify(this.players));
  } */
  createNewcharacter() {
    const name = rs.question("Enter the name: ");
    //check if name contains a space
    if (name.includes(" ")) {
      rs.question(
        "\nInvalid input! Space is not accepted. Press Enter to go back..."
          .bgRed
      );
      return undefined;
    }
    // check if the name is already used by another player
    const alreadyInUse = this.players.find(
      (player) => player.name.toLowerCase() === name.toLowerCase()
    );

    if (alreadyInUse !== undefined) {
      rs.question(
        `\nThe name ${name} has been already used. Press Enter to go back...`
          .red
      );
      return undefined;
    }
    // choice for the character Class
    const classes = fantasyClasses.map(
      (fantasyClass) => fantasyClass.className
    );
    const classIndex = rs.keyInSelect(classes, "Which class do you wanna be?");
    // if CANCEl return
    if (classIndex === -1) {
      return;
    }
    const job = classes[classIndex];

    // array of the skills of the chosen class
    const classSkills = fantasyClasses.find(
      (classObj) => classObj.className === job
    ).attackingSkills;

    // add 3 skills
    const skillsArray = [];
    for (let i = 1; i <= 3; i++) {
      const indexSkill = rs.keyInSelect(
        classSkills,
        `Enter the index of the ${i} skill you want: `
      );
      // if CANCEL return
      if (indexSkill === -1) {
        return;
      }
      const skill = classSkills[indexSkill];
      const damage = Math.round(Math.random() * 10) + 10; // damage from 10 to 20
      // add the skill and its damage to the array
      skillsArray.push([skill, damage]);
      // remove the chosen skill from the choices
      classSkills.splice(indexSkill, 1);
    }

    // create a new instance of character using the inputs given
    const player = new Character(
      name[0].toUpperCase() + name.slice(1).toLowerCase(),
      job,
      [
        { skillName: skillsArray[0][0], damage: skillsArray[0][1] },
        { skillName: skillsArray[1][0], damage: skillsArray[1][1] },
        { skillName: skillsArray[2][0], damage: skillsArray[2][1] },
        { skillName: "Heal", recover: 10 },
      ]
    );

    // add the new character to the array players and update the json file
    this.players.push(player);
    return player;
  }
  logBackIn() {
    const name = rs.question("\nEnter the name of your character: ");
    const myCharacter = this.players.find(
      (player) => player.name.toLowerCase() === name.toLowerCase()
    );
    if (myCharacter === undefined) {
      rs.question(
        `\nThe character ${name} doesn't exist! press Enter to go back...`.red
      );
    }
    return myCharacter;
  }
  playAsGuest() {
    this.listCharacters();
    // choose one from the list
    const indexCharacter = Number(
      rs.question("Enter the index of the chosen character: ")
    );

    // Error message if input is invalid
    if (this.characters[indexCharacter - 1] === undefined) {
      console.clear();
      console.log(`Invalid Input!`.bgRed);
      rs.question("\nPress Enter to try again...");
      return;
    }

    return this.characters[indexCharacter - 1];
  }
  playerVsPlayer(player, target ) {
    if (player.hp > 0 && target.hp < 1) {
      return `\n🎉 Congratulations, ${player.name}. You are the Winner!\nYou receive 5 experience points.\n`;
    } else if(player.hp < 0) {
      return "\n💀 You have lost. Better next time!\n";
    }
  }
  exploreDungeon(player, dungeon) {
    const initialHP = player.hp;
    // console.log("\nDungeon's Info:\n", dungeon.displayInfo());
    // rs.question("\nPress Enter to explore the dungeon...");
    dungeon.fightMonsters(rPGGame, player);
    // if player reaches the boss floor alive then fight the boss
    if (player.hp > 0 && dungeon.currentFloor === dungeon.numberOfFloors) {
      // fight the boss or exit the dungeon
      // console.clear();
      // const explore = rs.question("\nDo you want to fight the Boss? (y | n): ");
      // if (!["y", "yes"].includes(explore.toLowerCase())) {
      //   return;
      // }
      // reset player hp before boss floor
      player.hp = initialHP;
      dungeon.fightBoss(rPGGame, player);
      // if boss is defeated then reset dungeon
      if (dungeon.boss.hp <= 0) {
        dungeon.currentFloor = 1;
      }
    }
  }
}
