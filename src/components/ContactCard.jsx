import styles from "../routes/Contact/ContactCard.module.css";

// images
import fatima from "../utilities/images/fatima_avatar.png";
import pelle from "../utilities/images/pelle_avatar.png";
import elu from "../utilities/images/elu--avatar.png";

export function ContactCard() {
  return (
    <div className={styles["center-container"]}>
      <div className={styles["card-container"]}>
        <div className={styles["person-wrapper-left"]}>
          <div className={styles["image-wrapper"]}>
            <img src={fatima} alt=""></img>
          </div>
          <div className={styles["information"]}>
            <h3 className={styles["title"]}>
              <span>Fatima</span> The math genius
            </h3>
            <span>
              Email: <a href="mailto:someone@example.com">blabla@blabla.com</a>
            </span>
            <span>slack: blablabla</span>
          </div>
        </div>

        <div className={styles["person-wrapper-right"]}>
          <div className={styles["information"]}>
            <h3 className={styles["title"]}>
              <span>Pelle</span> The lazy one
            </h3>
            <span>
              Email: <a href="mailto:someone@example.com">blabla@blabla.com</a>
            </span>
            <span>slack: blablabla</span>
          </div>
          <div className={styles["image-wrapper"]}>
            <img src={pelle} alt=""></img>
          </div>
        </div>

        <div className={styles["person-wrapper-left"]}>
          <div className={styles["image-wrapper"]}>
            <img src={elu} alt=""></img>
          </div>
          <div className={styles["information"]}>
            <h3 className={styles["title"]}>
              <span>Elilta</span> The glorious one
            </h3>
            <span>
              Email: <a href="mailto:someone@example.com">blabla@blabla.com</a>
            </span>
            <span>slack: blablabla</span>
          </div>
        </div>
      </div>
    </div>
  );
}
