import "./css/reset.css";
import "./css/main.css";
import { Routes, Route } from 'react-router-dom';
import { ProfilePage } from "./pages/ProfilePage/ProfilePage.js";
import { MixcloudPage } from "./pages/MixcloudPage/MixcloudPage.js";
import { Link } from 'react-router-dom';

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
      <ul className="navigation-block">
          <li className="navigation-block-item"><Link to="/">Profile</Link></li>
					<li className="navigation-block-item"><Link to="/mixcloud">MixCloud</Link></li>
        </ul>
      <Routes>
        <Route path="/" element={<ProfilePage />} />
        <Route path="/mixcloud" element={<MixcloudPage />} />
      </Routes>
    </div>
  );
}
export default App;
