import avatar from "../../img/photo.jpg";
import "./ProfilePage.css";
import "./ProfilePageAdaptive.css"

export const ProfilePage = () => (
  <div className="section">
    <div className="section-card">
      <div className="section-card-bio">
        <div className="section-card-bio__text">
          <h1>Веб-разработчик</h1>
          <h2><mark>Воронков Вадим</mark></h2>
          <p>Привет! Я занимаюсь версткой адаптивных и интерактивных сайтов</p>
        </div>
      </div>
      <div className="section-card-info__photo">
        <img className="avatar" src={avatar} alt="avatar"></img>
      </div>
    </div>
  </div>
);
