import styles from "./styles.module.css";

const PlayIcon = (props) => {
  const { isPlaying, index } = props;

  return isPlaying === index ? (
    <div className={`${styles.icon} ${styles.pause}`}>
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.pauseSvg}
      >
        <rect x="6" y="4" width="4" height="16" />
        <rect x="14" y="4" width="4" height="16" />
      </svg>
    </div>
  ) : (
    <div className={`${styles.icon} ${styles.play}`}>
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.playSvg}
      >
        <polygon points="5,3 19,12 5,21" />
      </svg>
    </div>
  );
};

export default PlayIcon;
