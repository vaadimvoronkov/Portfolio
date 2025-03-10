import './css/reset.css';
import './css/main.css';

import { Routes, Route } from 'react-router-dom';
import { ProfilePage } from './pages/ProfilePage';
import { MixcloudPage } from './pages/MixcloudPage';
import Navigation from './components/Navigation';
import { StepSequencer } from 'src/pages/stepSequencer';

function App() {
  return (
    <div className="wrapper">
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<ProfilePage />} />
          <Route path="/mixcloud" element={<MixcloudPage />} />
          <Route path="/steps-sequencer" element={<StepSequencer />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
