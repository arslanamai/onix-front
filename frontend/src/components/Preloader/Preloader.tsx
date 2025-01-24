import styles from "./Preloader.module.scss";

export function Preloader() {
  return (
    <div className={styles.preloader}>
      <div className={styles.frame}>
        <div className={styles.center}>
          <div className={styles.ball}></div>
          <div className={styles.blubb1}></div>
          <div className={styles.blubb2}></div>
          <div className={styles.blubb3}></div>
          <div className={styles.blubb4}></div>
          <div className={styles.sparkle1}></div>
          <div className={styles.sparkle2}></div>
          <div className={styles.sparkle3}></div>
          <div className={styles.sparkle4}></div>
          <div className={styles.sparkle5}></div>
        </div>
      </div>
    </div>
  );
};
