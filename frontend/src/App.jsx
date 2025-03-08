import './index.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/Signup';
export default function App() {
  return (
    <Router>
      <Routes>
        {window.localStorage.getItem("authenticated")?<Route path="/" element={<Home />} />:<Route path="/" element={<Login />} />}
        <Route path="/home" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<SignUp />} />
      </Routes>
    </Router>
    
  );
}