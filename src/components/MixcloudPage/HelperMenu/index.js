import styles from "./styles.module.css";

const HelperMenu = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.leftBlock}>
        <form method="get">
          <input
            name="search"
            placeholder="Найти плейлист"
            type="search"
          ></input>
        </form>
      </div>
      <div className={styles.rightBlock}></div>
    </div>
  );
};

export default HelperMenu;
