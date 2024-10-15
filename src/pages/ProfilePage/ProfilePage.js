import avatar from "../../img/photo.jpg";
import "./ProfilePage.css";
import "./ProfilePageAdaptive.css";
import telegram from '../../img/icons/telegram.svg';
import vk from '../../img/icons/vk.svg';
import github from '../../img/icons/github.svg';

export const ProfilePage = () => (
  <div className="section">
    <div className="section-card">
      <div className="section-card-bio">
        <div className="section-card-bio__text">
          <h1>Веб-разработчик</h1>
          <h2><mark>Воронков Вадим</mark></h2>
          <p>Привет! Я занимаюсь версткой адаптивных и интерактивных сайтов</p>
          <p className = "messenger-links">
            <a href = "https://t.me/vaadimvoronkov"><img className = "link-block" src = {telegram} alt = "tg"></img></a>
            <a href = "https://vk.com/vaadimvoronkov"><img className = "link-block" src = {vk} alt = "vk"></img></a>
            <a href = "https://github.com/vaadimvoronkov"><img className = "link-block" src = {github} alt = "github"></img></a>
          </p>
        </div>
      </div>
      <div className="section-card-info__photo">
        <img className="avatar" src={avatar} alt="avatar"></img>
      </div>
    </div>
  </div>
);
