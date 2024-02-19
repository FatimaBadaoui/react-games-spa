import styles from "../routes/Contact/ContactCard.module.css";

export function ContactCard() {
  return (
    <div className={styles["center-container"]}>
      <div className={styles["card-container"]}>

        <div className={styles["person-wrapper-left"]}>
          <div className={styles["image-wrapper"]}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqhqf2sGGNDhLEocNibL7Z-tBVYUgRiAnTBA&usqp=CAU"
              alt=""
            ></img>
          </div>
          <div className={styles["information"]}>
            <h3 className={styles["title"]}>Fatima the math genius</h3>
            <span>
              Email: <a href="mailto:someone@example.com">blabla@blabla.com</a>
            </span>
            <span>slack: blablabla</span>
          </div>
        </div>

        <div className={styles["person-wrapper-right"]}>
          <div className={styles["information"]}>
            <h3 className={styles["title"]}>Pelle the lazy one</h3>
            <span>
              Email: <a href="mailto:someone@example.com">blabla@blabla.com</a>
            </span>
            <span>slack: blablabla</span>
          </div>
          <div className={styles["image-wrapper"]}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqhqf2sGGNDhLEocNibL7Z-tBVYUgRiAnTBA&usqp=CAU"
              alt=""
            ></img>
          </div>
        </div>

        <div className={styles["person-wrapper-left"]}>
          <div className={styles["image-wrapper"]}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqhqf2sGGNDhLEocNibL7Z-tBVYUgRiAnTBA&usqp=CAU"
              alt=""
            ></img>
          </div>
          <div className={styles["information"]}>
            <h3 className={styles["title"]}>Elita the glorious one!</h3>
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

