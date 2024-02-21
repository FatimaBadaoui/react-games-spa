import classes from "../styles/Player.module.css"
import heart from "../utilities/images/heart.png";

const Player = ({ char, setAttacker }) => {
  // console.log(char.name, char.hp);
  return (
    <div className={classes["player"]}>
      <div className={classes["hp"]}>
        <div
          className={classes["hpBar"]}
          style={{
            background: `linear-gradient(90deg, #02fa02 ${char.hp}%, #fc3333 ${char.hp}%)`,
          }}
        ></div>
        <div className={classes["heart"]}>
          <img src={heart} alt="heart" />
          <p>{char.hp} / 100</p>
        </div>
      </div>
      <div className={classes["playerAvatar"]}>
        <img src={char.avatar} alt={char.name} />
      </div>
      <div className={classes["skills"]}>
        {char.skills.map((skill, index) => (
          <button
          className={classes["skillButton"]}
            key={index}
            onClick={() => setAttacker({ name: char.name, indexSkill: index })}
          >
            {skill.skillName} ({skill.damage ? skill.damage : skill.recover})
          </button>
        ))}
      </div>
    </div>
  );
};

export default Player;
