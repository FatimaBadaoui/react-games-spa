import Character from "./Character.js";

// define class to represent a Dungeon
export default class Dungeon {
  constructor(name, numberOfFloors, monsters, boss) {
    this.name = name;
    this.numberOfFloors = numberOfFloors;
    this.monsters = monsters;
    this.boss = boss;
    this.currentFloor = 1;
  }
  displayInfo() {
    return `
      _______________ ${this.name} _______________
  
        - Number of Floors: ${this.numberOfFloors}
        - Monsters: ${this.monsters
          .map((monster) => monster.name)
          .join("\n                    ")}
        - Monster Boss: ${this.boss.name}
      ____________________________________________
      `;
  }
  createFloor(monster) {
    const floor = [];
    for (let i = 0; i < 5; i++) {
      floor.push(
        new Character(
          monster.name,
          monster.job,
          monster.skills,
          monster.hp,
          monster.xp
        )
      );
    }
    return floor;
  }
  fightMonsters(rPGGame, player) {
    const initialHPPlayer = player.hp;
    // fight monsters until the player  lose or they reach the boss floor
    while (player.hp > 0 && this.currentFloor < this.numberOfFloors) {
      const monster = this.monsters[this.currentFloor - 1];
      // before any floor reset hp
      // player.hp = 100;
      // fight monsters on each floor
      const floor = this.createFloor(monster);
      for (let i = 0; i < floor.length; i++) {
        rPGGame.playerVsPlayer(player, floor[i], initialHPPlayer);
        if (player.hp <= 0) return;
      }
      // proceed to the next floor
      this.currentFloor++;
    }
  }
  fightBoss(rPGGame, player) {
    // reset boss hp
    this.boss.hp = 200;
    console.clear();
    console.log(
      `__ ${player.name} has entered the Boss floor. The boss is ${this.boss.name} __`
        .yellow
    );
    rPGGame.playerVsPlayer(player, this.boss, player.hp);
  }
}
