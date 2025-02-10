import "./css/reset.css";
import "./css/main.css";
import Navigation from "./components/Navigation/index.js";
import { Routes, Route } from "react-router-dom";
import { ProfilePage } from "./pages/ProfilePage/index.js";
import { MixcloudPage } from "./pages/MixcloudPage/index.js";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Navigation />
        <Routes>
          <Route path="/" element={<ProfilePage />} />
          <Route path="/mixcloud" element={<MixcloudPage />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
