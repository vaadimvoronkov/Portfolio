import "./css/reset.css";
import "./css/main.css";
import avatar from "./img/photo.jpg"

function App() {
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
            <div className="section-card-bio__text"><u>Bio:</u><br></br>Father of 3 humans, 5 unicorns & 2 dogs,I design since I can remember it. I often get asked where I get my inspiration from: in everyday’s lil’ details. And sometimes in leftover food I find in my beard.</div>
          </div>
        </div>
      </main>
      <footer className="footer">

      </footer>
    </div>
  );
}

export default App;
