import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import "./App.css"
import Conversation from './pages/Conversation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/conversation" element={<Conversation />} />
      </Routes>
    </Router>
  );
}

export default App;
