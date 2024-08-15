import "./css/reset.css";
import "./css/main.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header-logo">
          <div className="header-logo__icon"></div>
          <div className="header-logo__text">Portfolio</div>
        </div>
        <div className="header-nav">
          <ul className="header-nav-list">
            <li className="header-nav-list__item"><a href="#">Item1</a></li>
            <li className="header-nav-list__item"><a href="#">Item2</a></li>
            <li className="header-nav-list__item"><a href="#">Item3</a></li>
          </ul>
        </div>
        
      </header>
      <main className="section">

      </main>
      <footer className="footer">

      </footer>
    </div>
  );
}

export default App;
