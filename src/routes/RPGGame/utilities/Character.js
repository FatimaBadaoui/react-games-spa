// Define the class to represent the game character
export default class Character {
  constructor(name, job = "", skills = [], avatar, hp = 100, xp = 0) {
    this.name = name;
    this.job = job;
    this.hp = hp;
    this.xp = xp;
    this.skills = skills;
    this.xp = xp;
    this.avatar = avatar;
  }

  action(target, indexSkill, initialHPPlayer) {
    const skill = this.skills[indexSkill];
    // check if the skill has a damage property if not it means the player used a recovery skill
    if (skill.damage) {
      target.hp -= skill.damage;
      return `\n💥 ${this.name} attacked ${target.name} with a ${skill.skillName} giving a damage of ${skill.damage}.`;
    } else {
      if (this.hp + skill.recover > initialHPPlayer) this.hp = initialHPPlayer;
      else this.hp += skill.recover;
      return `\n⛑️  ${this.name} used ${skill.skillName} to recover ${skill.recover} hp.`;
    }
  }

  addEXPPoints(indexSkill, points) {
    if (points > this.xp) {
      console.log(
        "\n❌",
        `You only have ${this.xp} points. You can't add more!`
      );
    } else {
      // check if the skill is an attack skill or a recovery skill
      const key = this.skills[indexSkill].damage ? "damage" : "recover";
      this.skills[indexSkill][key] += points;
      this.xp -= points;
      console.log(`\n${points} points were added successfully!`);
    }
  }
}
