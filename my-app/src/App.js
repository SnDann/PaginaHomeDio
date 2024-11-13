import {
  Browserrouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import { Home } from './pages/Home';
import { Login } from './pages/login';
import { Feed } from './pages/feed';
import { SignUp} from './pages/SignUp';

function App () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Routes path="/feed" element={<Feed />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
