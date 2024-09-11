import "./css/reset.css";
import "./css/main.css";
import avatar from "./img/photo.jpg"

function App() {
  
  fetch('https://geschoss-sons-of-horus-59e6.twc1.net/mixcloud/releases')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

  return (
    <div className="App">
      <header className="header">
        <div className="header-logo">
          <div className="header-logo__text"><b>Portfolio</b></div>
        </div>
        <div className="header-nav">
        </div>
      </header>
      <main className="section">
        <div className="section-card">
          <div className="section-card-info">
            <div className="section-card-info__photo">
              <img className = "avatar" src= {avatar} alt="avatar"></img>
            </div>
            <div className="section-card-info__name"><u>Vadim Voronkov</u></div>
            <div className="section-card-info__skills">Programmer</div>
          </div>
          <div className="section-card-bio">
            <div className="section-card-bio__text">Меня зовут Вадим Воронков, мне 21 год, и я веб-разработчик. Я специализируюсь на создании современных и интерактивных веб-приложений. Меня увлекает разработка пользовательских интерфейсов и поиск оптимальных решений для повышения удобства и эффективности использования веб-приложений. Я постоянно изучаю новые технологии и внедряю их в своих проектах, чтобы создавать продукты, которые приносят пользу пользователям.</div>
          </div>
        </div>
      </main>
      <footer className="footer">
      </footer>
    </div>
  );
}

export default App;
