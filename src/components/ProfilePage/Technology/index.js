import styles from"./styles.module.css";

function Technology(props) {
  return (
    <div className={styles.technology}>
      <img src={props.image} alt=""></img>
      <p className = {styles.name}>{props.name}</p>
      <p className = {styles.desc}>{props.desc}</p>
    </div>
  );
}

export default Technology;
