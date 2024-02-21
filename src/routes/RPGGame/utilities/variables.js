import Character from "./Character.js";
import Dungeon from "./Dungeon.js";
import RPGGame from "./RPGGame.js";

// players avatar
import knightImg from "./images/knight.png";
import firemageImg from "./images/firemage.png";
import hunterImg from "./images/hunter.png";
import archerImg from "./images/archer.png";
import necromancerImg from "./images/necromancer.png";
// dungeon 1
import slimeImg from "./images/slime.png";
import goblinImg from "./images/goblin.png";
import ogreImg from "./images/ogre.png";
import lichImg from "./images/lich.png";
import dragonImg from "./images/dragon.png";
// dungeon 2
import elementalImg from "./images/elemental.png";
import golemImg from "./images/golem.png";
import griffinImg from "./images/griffin.png";
import gorgonImg from "./images/gorgon.png";
import phoenixImg from "./images/phoenix.png";
// dungeon 3
import wraithImg from "./images/wraith.png";
import chimeraImg from "./images/chimera.png";
import specterImg from "./images/specter.png";
import succubusImg from "./images/succubus.png";
import bansheeImg from "./images/banshee.png";

// create instances of default characters
export const char1 = new Character(
  "Eowyn",
  "Knight",
  [
    { skillName: "Pierce", damage: 15 },
    { skillName: "Slash", damage: 10 },
    { skillName: "Raging Blade", damage: 18 },
    { skillName: "Heal", recover: 10 },
  ],
  knightImg
);
export const char2 = new Character(
  "Elora",
  "Fire Mage",
  [
    { skillName: "Fireball", damage: 12 },
    { skillName: "Fire Arrow", damage: 10 },
    { skillName: "Inferno", damage: 20 },
    { skillName: "Heal", recover: 10 },
  ],
  firemageImg
);
export const char3 = new Character(
  "Galadriel",
  "Hunter",
  [
    { skillName: "Attack Boost", damage: 12 },
    { skillName: "Bombardier", damage: 15 },
    { skillName: "Critical Boost", damage: 18 },
    { skillName: "Heal", recover: 10 },
  ],
  hunterImg
);
export const char4 = new Character(
  "Thalia",
  "Archer",
  [
    { skillName: "Wind Arrow", damage: 10 },
    { skillName: "Earth Blast", damage: 20 },
    { skillName: "Vicious Arrow", damage: 15 },
    { skillName: "Heal", recover: 10 },
  ],
  archerImg
);
export const char5 = new Character(
  "Darvin",
  "Necromancer",
  [
    { skillName: "Skeleton Attack", damage: 10 },
    { skillName: "Soul Curse", damage: 20 },
    { skillName: "Corpse Explosion", damage: 17 },
    { skillName: "Heal", recover: 10 },
  ],
  necromancerImg
);

// Create an instance of the RPG Game
export const rPGGame = new RPGGame("Swords and Magic", [
  char1,
  char2,
  char3,
  char4,
  char5,
]);

// Create Monsters characters and add the to the dungeon
// 1st Dungeon
const slime = new Character(
  "Slime",
  "Monster",
  [{ skillName: "Bounce", damage: 5 }],
  slimeImg,
  20,
  1
);
const goblin = new Character(
  "Goblin",
  "Monster",
  [{ skillName: "Toxic Slam", damage: 10 }],
  goblinImg,
  40,
  1
);
const ogre = new Character(
  "Ogre",
  "Monster",
  [
    { skillName: "Intimidation", damage: 12 },
    { skillName: "Brute Punch", damage: 15 },
  ],
  ogreImg,
  60,
  2
);
const lich = new Character(
  "Lich",
  "Undead",
  [
    { skillName: "Paralise", damage: 15 },
    { skillName: "Curse", damage: 20 },
  ],
  lichImg,
  90,
  3
);
const dragon = new Character(
  "Celestial Dragon",
  "Dragon",
  [
    { skillName: "Breath", damage: 20 },
    { skillName: "Fire Storm", damage: 25 },
    { skillName: "Rage", damage: 18 },
    { skillName: "Heal", recover: 15 },
  ],
  dragonImg,
  200,
  5
);

export const dungeon1 = new Dungeon(
  "Dragon's Lair",
  5,
  [slime, goblin, ogre, lich],
  dragon
);

// 2nd Dungeon
const elemental = new Character(
  "Thunder Elemental",
  "Elemental",
  [{ skillName: "Lightning Bolt", damage: 8 }],
  elementalImg,
  30,
  1
);
const golem = new Character(
  "Golem of Stone",
  "Golem",
  [{ skillName: "Earthen Slam", damage: 12 }],
  golemImg,
  50,
  1
);
const griffin = new Character(
  "Sable Griffin",
  "Monster",
  [
    { skillName: "Razor Talons", damage: 15 },
    { skillName: "Glorious Charge", damage: 17 },
  ],
  griffinImg,
  70,
  2
);
const gorgon = new Character(
  "Gorgon",
  "Monster",
  [
    { skillName: "Molten Gaze", damage: 17 },
    { skillName: "Marsh Overlord", damage: 21 },
  ],
  gorgonImg,
  90,
  3
);
const phoenix = new Character(
  "Crystal Phoneix",
  "Phoenix",
  [
    { skillName: "Shattering Blaze", damage: 25 },
    { skillName: "Flame Breath", damage: 19 },
    { skillName: "Heal", recover: 18 },
  ],
  phoenixImg,
  250,
  7
);

export const dungeon2 = new Dungeon(
  "Mystic Labyrinth",
  5,
  [elemental, golem, griffin, gorgon],
  phoenix
);

// 3rd dungeon
const wraith = new Character(
  "Shadow Wraith",
  "Undead",
  [{ skillName: "Spectral Grasp", damage: 10 }],
  wraithImg,
  60,
  2
);
const chimera = new Character(
  "Chimera",
  "Monster",
  [{ skillName: "Multi-headed Fury", damage: 14 }],
  chimeraImg,
  80,
  2
);
const specter = new Character(
  "Frost Specter",
  "Undead",
  [
    { skillName: "Frozen Touch", damage: 17 },
    { skillName: "Corrupting Aura", damage: 21 },
  ],
  specterImg,
  95,
  2
);
const succubus = new Character(
  "Demon Succubus",
  "Demon",
  [
    { skillName: "Seductive Hex", damage: 19 },
    { skillName: "Fear Imprint", damage: 23 },
  ],
  succubusImg,
  110,
  3
);

const banshee = new Character(
  "Spectral Banshee",
  "Undead",
  [
    { skillName: "Wail of the Damned", damage: 20 },
    { skillName: "Horrifying Visage", damage: 25 },
    { skillName: "Corrupting Touch", damage: 30 },
    { skillName: "Sonic Boom", damage: 35 },
    { skillName: "Heal", recover: 20 },
  ],
  bansheeImg,
  300,
  8
);
export const dungeon3 = new Dungeon(
  "Cavern of Despair",
  5,
  [wraith, chimera, specter, succubus],
  banshee
);
