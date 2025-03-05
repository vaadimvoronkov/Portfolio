import avatar from "../../img/photo.jpg";
import styles from "./styles.module.css";
import telegram from "../../img/icons/telegram.svg";
import vk from "../../img/icons/vk.svg";
import github from "../../img/icons/github.svg";
import htmllogo from "../../img/htmllogo.png";
import csslogo from "../../img/csslogo.png";
import jslogo from "../../img/jslogo.png";
import tslogo from "../../img/tslogo.png";
import Technology from "../../components/ProfilePage/Technology/index.js";

export const ProfilePage = () => (
  <>
    <div className={styles.profileContainer}>
      <div className={styles.profile}>
        <div className={styles.bio}>
          <div>
            <h1>Веб-разработчик</h1>
            <h2>
              <mark>Воронков Вадим</mark>
            </h2>
            <p>
              Привет! Я занимаюсь версткой адаптивных и интерактивных сайтов
            </p>
            <p className={styles.messengers}>
              <a href="https://t.me/vaadimvoronkov">
                <img className={styles.messengerIcon} src={telegram} alt="tg" />
              </a>
              <a href="https://vk.com/vaadimvoronkov">
                <img className={styles.messengerIcon} src={vk} alt="vk" />
              </a>
              <a href="https://github.com/vaadimvoronkov">
                <img className={styles.messengerIcon} src={github} alt="github" />
              </a>
            </p>
          </div>
        </div>
        <div>
          <img className={styles.photo} src={avatar} alt="avatar" />
        </div>
      </div>
    </div>
    <div className={styles.stackContainer}>
      <div className={styles.stack}>
        <Technology
          image={htmllogo}
          name={"HTML"}
          desc={"Используется для разметки"}
        ></Technology>
        <Technology
          image={jslogo}
          name={"JAVASCRIPT"}
          desc={"Используется для добавления логики"}
        ></Technology>
        <Technology
          image={csslogo}
          name={"CSS"}
          desc={"Используется для стилизации"}
        ></Technology>
         <Technology
          image={tslogo}
          name={"TYPESCRIPT"}
          desc={"Используется для работы с типами"}
        ></Technology>
      </div>
    </div>
  </>
);
