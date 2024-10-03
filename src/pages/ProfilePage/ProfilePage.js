import avatar from "../../img/photo.jpg";
import "./ProfilePage.css";

export const ProfilePage = () => (
  <div className="section">
    <div className="section-card">
      <div className="section-card-info">
        <div className="section-card-info__photo">
          <img className="avatar" src={avatar} alt="avatar"></img>
        </div>
        <div className="section-card-info__name">
          <u>Vadim Voronkov</u>
        </div>
        <div className="section-card-info__skills">Programmer</div>
      </div>
      <div className="section-card-bio">
        <div className="section-card-bio__text">
          My name is Vadim Voronkov, I am 21 years old and I am a web developer.
          I specialize in creating modern and interactive web applications. I am
          passionate about designing user interfaces and finding optimal
          solutions to improve the usability and efficiency of web applications.
          I am constantly learning new technologies and implementing them in my
          projects to create products that benefit users.
        </div>
      </div>
    </div>
  </div>
);
