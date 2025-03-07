import styles from './styles.module.css';

function Technology(props) {
  return (
    <section className={styles.technology}>
      <img src={props.image} alt=""></img>
      <p className={styles.name}>{props.name}</p>
    </section>
  );
}

export default Technology;
